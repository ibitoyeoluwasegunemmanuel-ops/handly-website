# HANDLY Authentication Integration Setup

This document describes the unified authentication and metrics system for the HANDLY website that bridges the website and mobile app.

## Overview

The system enables:

1. **Unified User Profiles**: Single user record across website and app
2. **Automatic Recognition**: Users from waitlist are recognized when they sign up in the app
3. **Live Metrics**: Real-time platform statistics from Supabase
4. **Cross-Platform Integration**: Phone/email-based user identification

## Architecture

### Three-Tier System

```
Website (Next.js)
    ↓
Supabase PostgreSQL
    ↑
Mobile App (Flutter)
```

### User Journey

1. User joins waitlist on website → Creates entry in `waitlist` table
2. User record created in `users` table with `website_registered = true`
3. User signs up in mobile app with same email/phone
4. App calls sync API with email/phone + app user ID
5. User record updated with `app_registered = true` and `app_user_id`
6. `waitlist_to_users` mapping created to track the relationship

## Database Schema

### Tables to Create

Run the SQL migrations in `supabase/migrations/` directory:

```bash
# In Supabase dashboard, run these migrations in order:
1. 001_create_users_table.sql      - Core user profiles
2. 002_create_metrics_table.sql    - Platform statistics
3. 003_create_waitlist_users_mapping.sql - Waitlist to user links
```

#### Users Table

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  email VARCHAR(255) UNIQUE,
  phone VARCHAR(20) UNIQUE,
  name VARCHAR(255),
  role VARCHAR(50), -- customer, worker, business, admin, both
  worker_type VARCHAR(100),
  is_verified BOOLEAN,
  is_active BOOLEAN,
  state VARCHAR(100),
  lga VARCHAR(100),
  bio TEXT,
  services TEXT[],
  avg_rating DECIMAL(3,2),
  total_jobs INTEGER,
  rank_tier VARCHAR(50),
  total_earnings DECIMAL(15,2),
  app_user_id VARCHAR(255) UNIQUE, -- Firebase UID
  website_registered BOOLEAN,
  app_registered BOOLEAN,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ,
  last_active TIMESTAMPTZ
);
```

#### Metrics Table

```sql
CREATE TABLE metrics (
  id UUID PRIMARY KEY,
  metric_date DATE UNIQUE,
  total_users INTEGER,
  total_customers INTEGER,
  total_workers INTEGER,
  total_businesses INTEGER,
  jobs_posted INTEGER,
  jobs_completed INTEGER,
  total_jobs INTEGER,
  active_jobs INTEGER,
  countries_covered INTEGER,
  states_covered INTEGER,
  cities_covered INTEGER,
  total_downloads INTEGER,
  app_downloads INTEGER,
  website_visits INTEGER,
  total_revenue DECIMAL(15,2),
  platform_revenue DECIMAL(15,2),
  worker_earnings DECIMAL(15,2),
  community_members INTEGER,
  avg_rating DECIMAL(3,2),
  active_workers INTEGER,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
);
```

#### Waitlist to Users Mapping Table

```sql
CREATE TABLE waitlist_to_users (
  id UUID PRIMARY KEY,
  waitlist_id UUID REFERENCES waitlist(id),
  user_id UUID REFERENCES users(id),
  status VARCHAR(50), -- pending, matched, confirmed
  matched_at TIMESTAMPTZ,
  confirmed_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ,
  updated_at TIMESTAMPTZ
);
```

## API Functions

### Authentication Functions (`lib/auth-integration.ts`)

#### `getOrCreateUser(data)`

Creates or fetches a user by email, phone, or app user ID.

```typescript
const user = await getOrCreateUser({
  email: 'user@example.com',
  phone: '+2348012345678',
  name: 'John Doe',
  role: 'customer',
  state: 'Lagos',
  lga: 'Ikeja',
  appUserId: 'firebase_uid_123',
  isFromApp: false,
});
```

#### `getUserByEmail(email)`

Fetch user by email address.

```typescript
const user = await getUserByEmail('user@example.com');
```

#### `getUserByPhone(phone)`

Fetch user by phone number.

```typescript
const user = await getUserByPhone('+2348012345678');
```

#### `getUserByAppId(appUserId)`

Fetch user by Firebase/app user ID.

```typescript
const user = await getUserByAppId('firebase_uid_123');
```

#### `findAndMatchWaitlistUser(userId, identifier)`

Match a waitlist entry to a registered user.

```typescript
const match = await findAndMatchWaitlistUser(
  'user_uuid_123',
  { email: 'user@example.com' }
);
```

### Metrics Functions (`lib/metrics-integration.ts`)

#### `getLatestMetrics()`

Get most recent platform metrics.

```typescript
const metrics = await getLatestMetrics();
console.log(metrics.total_users); // 50000
```

#### `getDashboardMetrics()`

Get metrics for dashboard display (with fallback to calculation).

```typescript
const metrics = await getDashboardMetrics();
```

#### `updateTodayMetrics()`

Calculate and update metrics from current data.

```typescript
const metrics = await updateTodayMetrics();
```

## Integration Points

### Website Waitlist Form

When a user joins the waitlist:

```typescript
import { addToWaitlist, getOrCreateUser } from '@/lib/supabase';

// 1. Add to waitlist
await addToWaitlist({
  email: formData.email,
  phone: formData.phone,
  type: 'customer',
  state: 'Lagos',
  city: 'Ikeja',
});

// 2. Create/update user record
await getOrCreateUser({
  email: formData.email,
  phone: formData.phone,
  role: 'customer',
  state: 'Lagos',
  isFromApp: false,
});
```

### Live Statistics Component

The `LiveStatistics` component now fetches real metrics:

```typescript
import { getDashboardMetrics } from '@/lib/supabase';

// Automatically fetches and displays metrics
<LiveStatistics />
```

### Mobile App Integration (Flutter)

#### Sync User on App Signup

```dart
// When user signs up in the app:
final userDoc = await firestore.collection('users').add({
  'name': name,
  'phone': phone,
  'email': email,
  'role': 'worker',
  // ... other fields
});

// Make API call to website backend to sync user
await http.post(
  Uri.parse('https://handly.vercel.app/api/sync-user'),
  headers: {'Content-Type': 'application/json'},
  body: jsonEncode({
    'email': email,
    'phone': phone,
    'name': name,
    'role': 'worker',
    'appUserId': userDoc.id,
  }),
);
```

#### API Endpoint to Create

Create `app/api/sync-user/route.ts`:

```typescript
import { getOrCreateUser, findAndMatchWaitlistUser } from '@/lib/supabase';

export async function POST(request: Request) {
  const data = await request.json();

  // Create or update user
  const user = await getOrCreateUser({
    email: data.email,
    phone: data.phone,
    name: data.name,
    role: data.role,
    appUserId: data.appUserId,
    isFromApp: true,
  });

  if (user) {
    // Try to match with waitlist entry
    await findAndMatchWaitlistUser(user.id, {
      email: data.email,
      phone: data.phone,
    });
  }

  return Response.json({ success: true, user });
}
```

## Metrics Collection

### Automatic Calculation

Metrics are calculated from user data in the `users` table:

- `total_users` = Count of users table
- `total_customers` = Count where role = 'customer' or 'both'
- `total_workers` = Count where role = 'worker' or 'both'
- `total_jobs` = Sum of user.total_jobs
- `avg_rating` = Average of user.avg_rating

### Manual Updates

To update metrics:

```typescript
const metrics = await updateTodayMetrics();
```

This calculates from live data and upserts into the metrics table.

## Environment Setup

### Required Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

### Testing the Integration

```bash
# Test authentication functions
npm run test -- auth-integration

# Test metrics functions
npm run test -- metrics-integration

# Build and verify
npm run build
```

## Data Migration (Existing Waitlist)

If you have existing waitlist data, migrate it to users:

```sql
-- Create users from existing waitlist entries
INSERT INTO users (email, phone, role, state, website_registered, created_at, updated_at)
SELECT email, phone, type, state, true, created_at, created_at
FROM waitlist
ON CONFLICT(email) DO NOTHING;

-- Create waitlist-to-users mappings
INSERT INTO waitlist_to_users (waitlist_id, user_id, status, matched_at, created_at, updated_at)
SELECT w.id, u.id, 'pending', NULL, w.created_at, w.created_at
FROM waitlist w
LEFT JOIN users u ON w.email = u.email OR w.phone = u.phone
WHERE w.id IS NOT NULL AND u.id IS NOT NULL
ON CONFLICT(waitlist_id, user_id) DO NOTHING;
```

## Security Notes

- Use Row Level Security (RLS) on Supabase to restrict data access
- Never expose `NEXT_PUBLIC_SUPABASE_ANON_KEY` in client-side code
- Validate all user input before database operations
- Implement rate limiting for API endpoints
- Use Supabase JWT for authenticated requests

## Future Enhancements

1. **Sync to Firebase**: When user is created in Supabase, automatically create in Firebase
2. **Real-time Updates**: Use Supabase real-time subscriptions for live metrics
3. **Analytics Integration**: Add event tracking for conversion funnel
4. **Referral System**: Track which waitlist user referred others
5. **Segmentation**: Add user segments for targeted marketing

## Troubleshooting

### Users not matching between app and website

- Ensure email/phone formats are consistent (normalize on insert)
- Check that `app_user_id` is being set correctly from mobile app
- Run the sync API endpoint manually to verify

### Metrics not updating

- Ensure `updateTodayMetrics()` is called after user changes
- Check Supabase logs for query errors
- Verify metrics table has proper permissions

### Duplicate user records

- Add unique constraints on email and phone in users table
- Use `getOrCreateUser` instead of direct inserts
- Implement idempotency keys for API calls

## Support

For issues or questions, check:

- Supabase Documentation: https://supabase.com/docs
- Next.js Documentation: https://nextjs.org/docs
- Flutter Supabase Integration: https://supabase.com/docs/guides/getting-started/quickstarts/flutter
