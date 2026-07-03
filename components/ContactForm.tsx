'use client';

import { useState, useRef } from 'react';
import { trackContactForm, trackFormStart, EventCategory, EventName, trackEvent } from '@/lib/analytics';
import { ArrowRight, Loader } from 'lucide-react';

interface ContactFormProps {
  onSuccess?: () => void;
}

export default function ContactForm({ onSuccess }: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const formStartedRef = useRef(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    // Track form start on first interaction
    if (!formStartedRef.current) {
      formStartedRef.current = true;
      trackFormStart('contact_form');
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setError('Please fill in all fields');
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
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
      // Send email via API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSuccess(true);

      // Track successful contact form submission
      trackContactForm(formData.email, formData.subject);

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

      if (onSuccess) {
        onSuccess();
      }

      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to send message';
      setError(message);

      // Track form error
      trackEvent(EventCategory.ERROR, EventName.FORM_ERROR, {
        form: 'contact_form',
        error: message,
      });
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="p-6 bg-handly-50 border border-handly-200 rounded-lg">
        <h3 className="text-lg font-semibold text-handly-900 mb-2">Message Sent! 📬</h3>
        <p className="text-handly-700 mb-4">
          Thank you for reaching out. We'll get back to you as soon as possible.
        </p>
        <p className="text-sm text-handly-600">
          Check your email for confirmation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-handly-500 focus:border-transparent"
          required
        />
      </div>

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

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
          Subject *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="How can we help?"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-handly-500 focus:border-transparent"
          required
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your message..."
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-handly-500 focus:border-transparent resize-none"
          required
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
            Sending...
          </>
        ) : (
          <>
            Send Message
            <ArrowRight size={20} />
          </>
        )}
      </button>

      <p className="text-xs text-gray-500 text-center">
        We'll respond within 24 hours.
      </p>
    </form>
  );
}
