import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeartPulse, Shield, ExternalLink, CheckCircle, Mail, BookOpen, HelpCircle, Heart, ArrowUpRight } from 'lucide-react';
import MedicalDisclaimer from './MedicalDisclaimer';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-500 to-teal-400 flex items-center justify-center text-white shadow-md shadow-brand-500/20">
                <HeartPulse className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-2xl text-white tracking-tight group-hover:text-teal-200 transition-colors">
                HEALTH<span className="text-teal-400">MATTERS</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Your Gateway to Better Health Awareness. Dedicated to demystifying common health conditions through evidence-based explanations, visual insights, and interactive knowledge quizzes.
            </p>
            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-300">
                <Shield className="w-3.5 h-3.5 text-teal-400" />
                <span>Non-profit Digital Health Education Portal</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="link-underline hover:text-teal-400 transition flex items-center gap-1.5 w-fit">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/explore" className="link-underline hover:text-teal-400 transition flex items-center gap-1.5 w-fit">
                  Explore Topics
                </Link>
              </li>
              <li>
                <Link to="/quiz" className="link-underline hover:text-teal-400 transition flex items-center gap-1.5 w-fit">
                  Health Quiz
                </Link>
              </li>
              <li>
                <Link to="/about" className="link-underline hover:text-teal-400 transition flex items-center gap-1.5 w-fit">
                  About Health Matters
                </Link>
              </li>
            </ul>
          </div>

          {/* Health Topics */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Core Conditions</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/topics/blood-pressure" className="link-underline hover:text-brand-400 transition flex items-center gap-1.5 w-fit">
                  Blood Pressure
                </Link>
              </li>
              <li>
                <Link to="/topics/blood-pressure#hypertension" className="hover:text-brand-400 transition text-slate-400 text-xs pl-3">
                  ↳ Hypertension
                </Link>
              </li>
              <li>
                <Link to="/topics/blood-pressure#hypotension" className="hover:text-brand-400 transition text-slate-400 text-xs pl-3">
                  ↳ Hypotension
                </Link>
              </li>
              <li>
                <Link to="/topics/diabetes" className="link-underline hover:text-teal-400 transition flex items-center gap-1.5 w-fit">
                  Diabetes Mellitus
                </Link>
              </li>
              <li>
                <Link to="/topics/dehydration" className="link-underline hover:text-cyan-400 transition flex items-center gap-1.5 w-fit">
                  Dehydration & Electrolytes
                </Link>
              </li>
            </ul>
          </div>

          {/* Health Newsletter / Updates */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4">Stay Informed</h4>
            <p className="text-xs text-slate-400 mb-3 leading-relaxed">
              Receive monthly evidence-based health awareness digests and newly added condition guides.
            </p>
            {subscribed ? (
              <div className="p-3 rounded-xl bg-teal-900/60 border border-teal-500/50 text-teal-300 text-xs flex items-center gap-2">
                <CheckCircle className="w-4 h-4 shrink-0 text-teal-400" />
                <span>Thank you! You are subscribed to health awareness updates.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-800 border border-slate-700 text-white placeholder-slate-500 text-xs focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
                  />
                </div>
                <button
                  type="submit"
                  className="shine-hover w-full py-2 px-3 bg-gradient-to-r from-teal-600 to-brand-600 hover:from-teal-500 hover:to-brand-500 text-white font-semibold text-xs rounded-xl transition cursor-pointer flex items-center justify-center gap-1.5 shadow-md shadow-teal-900/20 hover:-translate-y-0.5"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Subscribe to Digest
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Medical Disclaimer Banner inside Footer */}
        <div className="my-8">
          <div className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-4 md:p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-300 leading-relaxed">
                <strong className="text-white">Medical Disclaimer:</strong> This platform is designed for general health education and awareness only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified physician or healthcare provider with any medical questions.
              </p>
            </div>
            <MedicalDisclaimer variant="modal-trigger" />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-2">
            <span>© {new Date().getFullYear()} <strong>HEALTH MATTERS</strong>. All rights reserved.</span>
            <span>•</span>
            <span>Digital Health Portal Academic Project</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span></span>
            <span>•</span>
            <span className="text-teal-400">Evidence-Based Education</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
