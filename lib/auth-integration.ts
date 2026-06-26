import { supabase } from './supabase';
import type { User, Waitlist, WaitlistToUsers } from './types/database';

/**
 * Get or create a user from the unified users table
 * This bridges website and app registration
 */
export async function getOrCreateUser(data: {
  email?: string;
  phone?: string;
  name?: string;
  role: 'customer' | 'worker' | 'business';
  state?: string;
  lga?: string;
  appUserId?: string;
  isFromApp?: boolean;
}): Promise<User | null> {
  if (!supabase) return null;

  try {
    // First, try to find an existing user by email or phone
    let query = supabase.from('users').select('*');

    if (data.email) {
      query = query.eq('email', data.email);
    } else if (data.phone) {
      query = query.eq('phone', data.phone);
    } else if (data.appUserId) {
      query = query.eq('app_user_id', data.appUserId);
    }

    const { data: existingUser, error: fetchError } = await query.maybeSingle();

    if (fetchError) {
      throw fetchError;
    }

    // If user exists, update their app_user_id if provided
    if (existingUser) {
      if (data.appUserId && !existingUser.app_user_id) {
        const { error: updateError } = await supabase
          .from('users')
          .update({
            app_user_id: data.appUserId,
            app_registered: true,
            updated_at: new Date().toISOString(),
          })
          .eq('id', existingUser.id);

        if (updateError) throw updateError;
      }

      return existingUser as User;
    }

    // Create new user if doesn't exist
    const newUser = {
      email: data.email || null,
      phone: data.phone || null,
      name: data.name || null,
      role: data.role,
      state: data.state || null,
      lga: data.lga || null,
      app_user_id: data.appUserId || null,
      website_registered: !data.isFromApp,
      app_registered: data.isFromApp || false,
    };

    const { data: createdUser, error: createError } = await supabase
      .from('users')
      .insert([newUser])
      .select('*')
      .single();

    if (createError) throw createError;
    return createdUser as User;
  } catch (error) {
    console.error('Error getting or creating user:', error);
    return null;
  }
}

/**
 * Match a user from the waitlist with a registered user
 * Called when someone from waitlist signs up in the app
 */
export async function matchWaitlistUser(
  waitlistId: string,
  userId: string
): Promise<WaitlistToUsers | null> {
  if (!supabase) return null;

  try {
    const { data, error } = await supabase
      .from('waitlist_to_users')
      .insert([
        {
          waitlist_id: waitlistId,
          user_id: userId,
          status: 'matched',
          matched_at: new Date().toISOString(),
        },
      ])
      .select('*')
      .single();

    if (error) throw error;
    return data as WaitlistToUsers;
  } catch (error) {
    console.error('Error matching waitlist user:', error);
    return null;
  }
}

/**
 * Find waitlist entry by email or phone and match it to user
 */
export async function findAndMatchWaitlistUser(
  userId: string,
  identifier: { email?: string; phone?: string }
): Promise<WaitlistToUsers | null> {
  if (!supabase) return null;

  try {
    // Find waitlist entry
    let waitlistQuery = supabase.from('waitlist').select('id');

    if (identifier.email) {
      waitlistQuery = waitlistQuery.eq('email', identifier.email);
    } else if (identifier.phone) {
      waitlistQuery = waitlistQuery.eq('phone', identifier.phone);
    } else {
      return null;
    }

    const { data: waitlistData, error: waitlistError } = await waitlistQuery.maybeSingle();

    if (waitlistError) {
      throw waitlistError;
    }

    if (!waitlistData) {
      return null; // No waitlist entry found
    }

    // Create the match
    return matchWaitlistUser(waitlistData.id, userId);
  } catch (error) {
    console.error('Error finding and matching waitlist user:', error);
    return null;
  }
}

/**
 * Get user by email
 */
export async function getUserByEmail(email: string): Promise<User | null> {
  if (!supabase) return null;

  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .maybeSingle();

    if (error) throw error;
    return data as User | null;
  } catch (error) {
    console.error('Error getting user by email:', error);
    return null;
  }
}

/**
 * Get user by phone
 */
export async function getUserByPhone(phone: string): Promise<User | null> {
  if (!supabase) return null;

  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('phone', phone)
      .maybeSingle();

    if (error) throw error;
    return data as User | null;
  } catch (error) {
    console.error('Error getting user by phone:', error);
    return null;
  }
}

/**
 * Get user by app user ID
 */
export async function getUserByAppId(appUserId: string): Promise<User | null> {
  if (!supabase) return null;

  try {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('app_user_id', appUserId)
      .maybeSingle();

    if (error) throw error;
    return data as User | null;
  } catch (error) {
    console.error('Error getting user by app ID:', error);
    return null;
  }
}
