import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HeartPulse, Search, Menu, X, HelpCircle, BookOpen, Info, Home, ShieldCheck } from 'lucide-react';
import SearchModal from './SearchModal';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Explore Topics', path: '/explore', icon: BookOpen },
    { name: 'Health Quiz', path: '/quiz', icon: HelpCircle },
    { name: 'About', path: '/about', icon: Info },
  ];

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200/80 shadow-sm">
        {/* Top Emergency/Quick Awareness Bar */}
        <div className="bg-brand-900 text-slate-200 text-xs py-1.5 px-4 hidden sm:block">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="font-medium text-slate-200">Public Health Literacy Initiative: Verified Educational Content</span>
            </div>
            <div className="flex items-center gap-4 text-slate-300">
              <span className="hover:text-white transition">Emergency? Dial 112 / 911 immediately</span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo & Tagline */}
            <Link to="/" className="flex items-center gap-3 group focus:outline-none">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-brand-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-brand-500/20 group-hover:scale-105 transition-transform duration-300">
                <HeartPulse className="w-6 h-6 animate-pulse-slow" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-xl tracking-tight text-slate-900 group-hover:text-brand-600 transition">
                    HEALTH<span className="text-teal-600">MATTERS</span>
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-50 text-brand-700 px-1.5 py-0.5 rounded border border-brand-200">
                    PORTAL
                  </span>
                </div>
                <p className="text-[11px] text-slate-500 font-medium tracking-tight hidden md:block">
                  Your Gateway to Better Health Awareness
                </p>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                const Icon = link.icon;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
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

            {/* Action Buttons: Search & Quiz CTA */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl text-slate-500 hover:text-brand-700 bg-slate-100/80 hover:bg-brand-50 text-xs font-medium transition-all duration-200 cursor-pointer border border-slate-200/60 hover:border-brand-200 hover:-translate-y-0.5"
                title="Search topics (Ctrl+K)"
              >
                <Search className="w-4 h-4 text-slate-400" />
                <span>Search topics...</span>
                <kbd className="bg-white px-1.5 py-0.5 rounded text-[10px] text-slate-400 border border-slate-200 shadow-2xs font-mono">
                  ⌘K
                </kbd>
              </button>

              <Link
                to="/quiz"
                className="shine-hover px-4 py-2.5 rounded-xl bg-gradient-to-r from-brand-600 via-brand-600 to-teal-600 hover:from-brand-700 hover:to-teal-700 text-white text-sm font-bold shadow-md shadow-brand-500/20 hover:shadow-lg hover:-translate-y-0.5 transition duration-200 flex items-center gap-2 cursor-pointer"
              >
                <HelpCircle className="w-4 h-4" />
                Take Quiz
              </Link>
            </div>

            {/* Mobile Hamburger & Search */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2.5 rounded-xl text-slate-600 hover:bg-slate-100"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl text-slate-700 hover:bg-slate-100 focus:outline-none"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200 shadow-xl">
            <div className="pb-2 border-b border-slate-100">
              <p className="text-xs text-slate-400 font-medium px-2">Navigation Menu</p>
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
                Take Health Quiz
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
