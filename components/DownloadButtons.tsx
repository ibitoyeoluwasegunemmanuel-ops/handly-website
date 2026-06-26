'use client';

import { trackDownloadClick } from '@/lib/analytics';
import { Apple, Play } from 'lucide-react';

export default function DownloadButtons() {
  const handleAppStoreClick = async () => {
    await trackDownloadClick('app_store');
    window.open('https://apps.apple.com/app/handly', '_blank');
  };

  const handlePlayStoreClick = async () => {
    await trackDownloadClick('google_play');
    window.open('https://play.google.com/store/apps/details?id=com.handly', '_blank');
  };

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button
        onClick={handleAppStoreClick}
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center justify-center gap-2"
      >
        <Apple size={20} />
        Download on App Store
      </button>
      <button
        onClick={handlePlayStoreClick}
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium flex items-center justify-center gap-2"
      >
        <Play size={20} />
        Get it on Google Play
      </button>
    </div>
  );
}
