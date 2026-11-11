import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeartPulse, Search, Menu, X, HelpCircle, BookOpen, Info, Home, ShieldCheck, GraduationCap } from 'lucide-react';
import SearchModal from './SearchModal';
import LanguageSelector from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();
  const { t, isHindi } = useLanguage();

  const navLinks = [
    { name: isHindi ? 'मुख्य पृष्ठ' : 'Home', path: '/', icon: Home },
    { name: isHindi ? 'विषय देखें' : 'Explore Topics', path: '/explore', icon: BookOpen },
    { name: isHindi ? 'स्वास्थ्य प्रश्नोत्तरी' : 'Health Quiz', path: '/quiz', icon: HelpCircle },
    { name: isHindi ? 'हमारे बारे में' : 'About', path: '/about', icon: Info },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-xs">
        {/* Top Emergency/Quick Awareness Bar */}
        <div className="bg-brand-950 text-slate-200 text-xs py-1.5 px-4 hidden sm:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-semibold text-slate-200">
                {isHindi 
                  ? 'श्री श्री कॉलेज ऑफ नर्सिंग • जन स्वास्थ्य साक्षरता पहल: सत्यापित शैक्षिक सामग्री'
                  : 'Sri Sri College of Nursing • Public Health Literacy Initiative: Verified Educational Content'}
              </span>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <span className="hover:text-white transition">
                {isHindi ? 'आपातकालीन? तुरंत 112 / 911 डायल करें' : 'Emergency? Dial 112 / 911 immediately'}
              </span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left Side: Sri Sri College of Nursing + Portal Branding */}
            <Link to="/" className="flex items-center gap-3.5 group focus:outline-none shrink-0">
              {/* Emblem / Logo Icon */}
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-[#672c1c] flex items-center justify-center text-white shadow-md shadow-[#672c1c]/30 group-hover:scale-105 transition-transform duration-300">
                  <HeartPulse className="w-6 h-6 animate-pulse-slow" />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-amber-500 text-white p-1 rounded-full shadow-xs border-2 border-white" title="Sri Sri College of Nursing">
                  <GraduationCap className="w-3 h-3" />
                </div>
              </div>

              {/* Text: Sri Sri College of Nursing & Portal Name */}
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs sm:text-sm font-extrabold text-brand-900 tracking-tight flex items-center gap-1 group-hover:text-brand-700 transition">
                    {isHindi ? 'श्री श्री कॉलेज ऑफ नर्सिंग' : 'Sri Sri College of Nursing'}
                  </span>
                  <span className="text-[9px] font-bold uppercase tracking-wider bg-amber-100 text-amber-800 px-1.5 py-0.2 rounded border border-amber-200 hidden sm:inline-block">
                    {isHindi ? 'शैक्षणिक पहल' : 'Initiative'}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 -mt-0.5">
                  <span className="font-black text-lg sm:text-xl tracking-tight text-slate-900 group-hover:text-brand-600 transition">
                    HEALTH<span className="text-teal-600">MATTERS</span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-50 text-brand-700 px-1.5 py-0.5 rounded border border-brand-200">
                    {isHindi ? 'पोर्टल' : 'PORTAL'}
                  </span>
                </div>

                <p className="text-[10px] text-slate-500 font-medium tracking-tight hidden xl:block -mt-0.5">
                  {isHindi ? 'बेहतर स्वास्थ्य जागरूकता का आपका प्रवेश द्वार' : 'Your Gateway to Better Health Awareness'}
                </p>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                      active
                        ? 'bg-gradient-to-r from-brand-50 to-teal-50 text-brand-700 border border-brand-200/60 shadow-xs'
                        : 'text-slate-600 hover:text-brand-700 hover:bg-brand-50/70 hover:-translate-y-0.5'
                    }`}
                  >
                    <Icon className={`w-4 h-4 ${active ? 'text-brand-600' : 'text-slate-400'}`} />
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Action Buttons: Language Selector, Search & Quiz CTA */}
            <div className="hidden md:flex items-center gap-3">
              {/* Language Selector: English / Hindi */}
              <LanguageSelector variant="desktop" />

              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-500 hover:text-brand-700 bg-slate-100/80 hover:bg-brand-50 text-xs font-medium transition-all duration-200 cursor-pointer border border-slate-200/60 hover:border-brand-200 hover:-translate-y-0.5"
                title={isHindi ? 'खोजें (Ctrl+K)' : 'Search topics (Ctrl+K)'}
              >
                <Search className="w-4 h-4 text-slate-400" />
                <span className="hidden xl:inline">{isHindi ? 'विषय खोजें...' : 'Search topics...'}</span>
                <kbd className="bg-white px-1.5 py-0.5 rounded text-[10px] text-slate-400 border border-slate-200 shadow-2xs font-mono">
                  ⌘K
                </kbd>
              </button>

              <Link
                to="/quiz"
                className="shine-hover px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 via-brand-600 to-teal-600 hover:from-brand-700 hover:to-teal-700 text-white text-xs sm:text-sm font-bold shadow-md shadow-brand-500/20 hover:shadow-lg hover:-translate-y-0.5 transition duration-200 flex items-center gap-2 cursor-pointer"
              >
                <HelpCircle className="w-4 h-4" />
                <span>{isHindi ? 'क्विज़ लें' : 'Take Quiz'}</span>
              </Link>
            </div>

            {/* Mobile Actions: Language Selector, Hamburger & Search */}
            <div className="flex items-center gap-1.5 lg:hidden">
              <div className="md:hidden">
                <LanguageSelector variant="desktop" />
              </div>
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 rounded-xl text-slate-600 hover:bg-slate-100"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top duration-200 shadow-xl">
            {/* Sri Sri College of Nursing Banner in Mobile Drawer */}
            <div className="p-3 bg-brand-50 rounded-xl border border-brand-200 flex items-center gap-2.5">
              <GraduationCap className="w-5 h-5 text-brand-700 shrink-0" />
              <div>
                <p className="text-xs font-bold text-brand-900">
                  {isHindi ? 'श्री श्री कॉलेज ऑफ नर्सिंग' : 'Sri Sri College of Nursing'}
                </p>
                <p className="text-[10px] text-brand-700">
                  {isHindi ? 'स्वास्थ्य साक्षरता एवं जागरूकता पहल' : 'Health Literacy & Awareness Initiative'}
                </p>
              </div>
            </div>

            {/* Language Selector in Mobile Drawer */}
            <LanguageSelector variant="mobile" />

            <div className="pb-1 border-b border-slate-100">
              <p className="text-xs text-slate-400 font-medium px-2">
                {isHindi ? 'नेविगेशन मेन्यू' : 'Navigation Menu'}
              </p>
            </div>

            {navLinks.map((link) => {
              const active = isActive(link.path);
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition ${
                    active
                      ? 'bg-brand-50 text-brand-700 border border-brand-200'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${active ? 'text-brand-600' : 'text-slate-400'}`} />
                  {link.name}
                </Link>
              );
            })}

            <div className="pt-2">
              <Link
                to="/quiz"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-brand-600 to-teal-600 text-white font-bold text-center shadow-md shadow-brand-500/20"
              >
                <HelpCircle className="w-5 h-5" />
                <span>{isHindi ? 'स्वास्थ्य प्रश्नोत्तरी लें' : 'Take Health Quiz'}</span>
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
