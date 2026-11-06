import React, { useState } from 'react';
import { AlertCircle, Shield, X, ExternalLink } from 'lucide-react';

export default function MedicalDisclaimer({ variant = 'banner' }) {
  const [isOpen, setIsOpen] = useState(false);

  if (variant === 'modal-trigger') {
    return (
      <>
        <button
          onClick={() => setIsOpen(true)}
          className="text-xs text-brand-600 hover:text-brand-800 underline flex items-center gap-1 font-medium cursor-pointer"
        >
          <Shield className="w-3.5 h-3.5" />
          Medical Disclaimer
        </button>

        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4 text-amber-600">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center">
                  <AlertCircle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Medical Education Disclaimer</h3>
              </div>

              <div className="space-y-3 text-sm text-slate-600 leading-relaxed">
                <p className="font-semibold text-slate-800 bg-amber-50/70 p-3 rounded-xl border border-amber-200/60">
                  "This platform is designed for general health education and awareness only. It is not a substitute for professional medical advice, diagnosis, or treatment."
                </p>
                <p>
                  Always seek the guidance of your physician, cardiologist, endocrinologist, or other qualified healthcare provider with any questions you may have regarding a medical condition.
                </p>
                <p>
                  Never disregard professional medical advice or delay seeking it because of something you have read on this digital portal.
                </p>
                <p className="text-xs text-slate-400 pt-2 border-t border-slate-100">
                  In case of a medical emergency (such as severe chest pain, inability to breathe, slurred speech, or loss of consciousness), immediately contact your local emergency services (e.g. 911 / 112 / 102).
                </p>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-2.5 bg-brand-600 text-white text-sm font-semibold rounded-xl hover:bg-brand-700 transition"
                >
                  I Understand
                </button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border-y md:border border-amber-200/80 md:rounded-2xl p-4 md:p-5 text-amber-900 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-start gap-3.5">
        <div className="p-2 rounded-xl bg-amber-100/80 border border-amber-200 shrink-0 text-amber-700 mt-0.5">
          <AlertCircle className="w-5 h-5" />
        </div>
        <div className="text-xs md:text-sm leading-relaxed flex-1">
          <span className="font-bold text-amber-950 uppercase tracking-wide mr-1.5">Medical Notice:</span>
          This platform is designed for general health education and awareness only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider for personalized medical evaluation.
        </div>
      </div>
    </div>
  );
}
