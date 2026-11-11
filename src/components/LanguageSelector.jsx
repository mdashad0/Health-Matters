import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSelector({ variant = 'desktop' }) {
  const { language, setLanguage, isHindi } = useLanguage();

  if (variant === 'mobile') {
    return (
      <div className="flex items-center justify-between p-3 rounded-xl bg-slate-100 border border-slate-200">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
          <Languages className="w-4 h-4 text-brand-600" />
          <span>Language / भाषा:</span>
        </div>
        <div className="flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200 shadow-2xs">
          <button
            type="button"
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
              language === 'en'
                ? 'bg-brand-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-brand-600'
            }`}
          >
            English
          </button>
          <button
            type="button"
            onClick={() => setLanguage('hi')}
            className={`px-3 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
              language === 'hi'
                ? 'bg-brand-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-brand-600'
            }`}
          >
            हिन्दी
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="relative inline-flex items-center">
      <div className="flex items-center p-0.5 rounded-xl bg-slate-100/90 border border-slate-200/80 shadow-2xs">
        <button
          type="button"
          onClick={() => setLanguage('en')}
          className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            language === 'en'
              ? 'bg-white text-brand-700 shadow-xs border border-brand-200/50'
              : 'text-slate-600 hover:text-brand-700 hover:bg-slate-200/50'
          }`}
          title="Switch to English"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
          <span>EN</span>
        </button>
        <button
          type="button"
          onClick={() => setLanguage('hi')}
          className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
            language === 'hi'
              ? 'bg-white text-teal-700 shadow-xs border border-teal-200/50'
              : 'text-slate-600 hover:text-teal-700 hover:bg-slate-200/50'
          }`}
          title="हिन्दी में देखें"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-teal-500 shrink-0" />
          <span>हिन्दी</span>
        </button>
      </div>
    </div>
  );
}
