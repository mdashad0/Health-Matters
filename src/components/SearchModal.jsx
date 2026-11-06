import React, { useState, useEffect } from 'react';
import { Search, X, ArrowRight, BookOpen, ChevronRight, Activity, Droplet, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { topicsData } from '../data/topicsData';

export default function SearchModal({ isOpen, onClose }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // Toggle or open
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  // Filter topics and subtopics
  const query = searchTerm.toLowerCase().trim();

  const results = [];
  if (query.length > 1) {
    topicsData.forEach(topic => {
      // Check main topic title, summary, symptoms, causes
      let matchedInSubtopic = false;
      topic.subtopics.forEach(sub => {
        const matchesSubName = sub.name.toLowerCase().includes(query);
        const matchesDef = sub.definition?.toLowerCase().includes(query);
        const matchesCauses = sub.causes?.some(c => c.toLowerCase().includes(query));
        const matchesSymptoms = sub.symptoms?.some(s => s.toLowerCase().includes(query));

        if (matchesSubName || matchesDef || matchesCauses || matchesSymptoms) {
          results.push({
            type: 'Subtopic',
            title: sub.name,
            topicTitle: topic.title,
            topicId: topic.id,
            matchedReason: matchesSymptoms ? 'Matched in symptoms' : matchesCauses ? 'Matched in causes' : 'Matched in description',
            link: `/topics/${topic.id}#${sub.id}`
          });
          matchedInSubtopic = true;
        }
      });

      if (!matchedInSubtopic && (topic.title.toLowerCase().includes(query) || topic.summary.toLowerCase().includes(query))) {
        results.push({
          type: 'Topic',
          title: topic.title,
          topicTitle: topic.category,
          topicId: topic.id,
          matchedReason: 'Main Health Condition',
          link: `/topics/${topic.id}`
        });
      }
    });
  }

  const handleSelect = (link) => {
    onClose();
    navigate(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div 
        className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Box */}
        <div className="flex items-center px-4 border-b border-slate-100 bg-slate-50/50">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search health conditions, symptoms, causes (e.g. hypertension, thirst, insulin, salt)..."
            className="w-full py-4 px-3 text-slate-800 bg-transparent focus:outline-none placeholder-slate-400 text-sm md:text-base font-medium"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-600 mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 rounded-lg border border-slate-200 text-xs font-semibold text-slate-500 hover:bg-slate-100"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-2">
          {searchTerm.length <= 1 ? (
            <div className="py-8 text-center">
              <p className="text-sm font-semibold text-slate-600 mb-2">Popular Health Searches</p>
              <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
                {['High Blood Pressure', 'Hypotension', 'Type 2 Diabetes', 'Dehydration Symptoms', 'Normal Blood Pressure', 'Insulin Resistance', 'ORS Formula'].map(item => (
                  <button
                    key={item}
                    onClick={() => setSearchTerm(item)}
                    className="text-xs bg-slate-100 hover:bg-brand-50 hover:text-brand-600 text-slate-700 px-3 py-1.5 rounded-full transition"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            results.map((res, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(res.link)}
                className="w-full text-left p-3 rounded-xl hover:bg-brand-50/70 border border-transparent hover:border-brand-200 transition flex items-center justify-between group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-brand-100/60 text-brand-700 flex items-center justify-center shrink-0">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-800 group-hover:text-brand-700 transition">
                        {res.title}
                      </span>
                      <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                        {res.type}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {res.topicTitle} • <span className="text-brand-600">{res.matchedReason}</span>
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-brand-600 group-hover:translate-x-0.5 transition" />
              </button>
            ))
          ) : (
            <div className="py-8 text-center text-slate-500">
              <p className="text-sm">No health topic matched "<strong>{searchTerm}</strong>".</p>
              <p className="text-xs text-slate-400 mt-1">Try searching for keywords like "pressure", "glucose", "water", or "prevention".</p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-3 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Search verified medical guides</span>
          <span>Press ESC to close</span>
        </div>
      </div>
    </div>
  );
}
