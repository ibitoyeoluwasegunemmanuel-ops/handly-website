'use client';

import { useState } from 'react';
import { addToWaitlist } from '@/lib/supabase';
import { ArrowRight, Loader } from 'lucide-react';

const NIGERIAN_STATES = [
  'Abia', 'Adamawa', 'Akwa Ibom', 'Anambra', 'Bauchi', 'Bayelsa', 'Benue',
  'Borno', 'Cross River', 'Delta', 'Ebonyi', 'Edo', 'Ekiti', 'Enugu',
  'Gombe', 'Imo', 'Jigawa', 'Kaduna', 'Kano', 'Katsina', 'Kebbi',
  'Kogi', 'Kwara', 'Lagos', 'Nasarawa', 'Niger', 'Ogun', 'Ondo',
  'Osun', 'Oyo', 'Plateau', 'Rivers', 'Sokoto', 'Taraba', 'Yobe', 'Zamfara', 'FCT'
];

interface WaitlistFormProps {
  defaultType?: 'customer' | 'worker' | 'business';
  onSuccess?: () => void;
}

export default function WaitlistForm({ defaultType, onSuccess }: WaitlistFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    type: defaultType || 'customer',
    state: '',
    city: '',
    referralCode: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.email || !formData.phone || !formData.state || !formData.city) {
      setError('Please fill in all required fields');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }

    // Basic phone validation - just check if it contains digits
    if (formData.phone.replace(/\D/g, '').length < 10) {
      setError('Please enter a valid phone number');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');

    if (!validateForm()) return;

    setLoading(true);
    try {
      await addToWaitlist({
        email: formData.email,
        phone: formData.phone,
        type: formData.type as 'customer' | 'worker' | 'business',
        state: formData.state,
        city: formData.city,
        referredBy: formData.referralCode || undefined,
      });

      setSuccess(true);
      setFormData({
        email: '',
        phone: '',
        type: defaultType || 'customer',
        state: '',
        city: '',
        referralCode: '',
      });

      if (onSuccess) {
        onSuccess();
      }

      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to join waitlist';
      if (message.includes('duplicate')) {
        setError('This email is already on the waitlist');
      } else {
        setError(message);
      }
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="p-6 bg-handly-50 border border-handly-200 rounded-lg">
        <h3 className="text-lg font-semibold text-handly-900 mb-2">Success! 🎉</h3>
        <p className="text-handly-700 mb-4">
          You've been added to the HANDLY waitlist. We'll notify you when we launch!
        </p>
        <p className="text-sm text-handly-600">
          Check your email for more details and how to track your referral.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Type Selection */}
      {!defaultType && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            I am a:
          </label>
          <div className="grid grid-cols-3 gap-3">
            {(['customer', 'worker', 'business'] as const).map((type) => (
              <label key={type} className="relative">
                <input
                  type="radio"
                  name="type"
                  value={type}
                  checked={formData.type === type}
                  onChange={handleChange}
                  className="sr-only"
                />
                <div
                  className={`p-3 text-center rounded-lg border-2 transition-all cursor-pointer capitalize ${
                    formData.type === type
                      ? 'border-handly-600 bg-handly-50'
                      : 'border-gray-200 bg-white hover:border-handly-300'
                  }`}
                >
                  {type === 'customer' && '👤 Customer'}
                  {type === 'worker' && '💼 Worker'}
                  {type === 'business' && '🏢 Business'}
                </div>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-handly-500 focus:border-transparent"
          required
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+234 8XX XXX XXXX"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-handly-500 focus:border-transparent"
          required
        />
      </div>

      {/* State */}
      <div>
        <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
          State *
        </label>
        <select
          id="state"
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-handly-500 focus:border-transparent"
          required
        >
          <option value="">Select your state</option>
          {NIGERIAN_STATES.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      {/* City */}
      <div>
        <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
          City/LGA *
        </label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Your city or local government area"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-handly-500 focus:border-transparent"
          required
        />
      </div>

      {/* Referral Code */}
      <div>
        <label htmlFor="referralCode" className="block text-sm font-medium text-gray-700 mb-1">
          Referral Code (Optional)
        </label>
        <input
          type="text"
          id="referralCode"
          name="referralCode"
          value={formData.referralCode}
          onChange={handleChange}
          placeholder="Referred by a friend? Enter their code"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-handly-500 focus:border-transparent"
        />
      </div>

      {/* Error Message */}
      {error && (
        <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
          {error}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-handly-600 text-white py-3 rounded-lg hover:bg-handly-700 transition-colors font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader size={20} className="animate-spin" />
            Joining...
          </>
        ) : (
          <>
            Join Waitlist
            <ArrowRight size={20} />
          </>
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        We'll never spam you. Unsubscribe anytime.
      </p>
    </form>
  );
}
