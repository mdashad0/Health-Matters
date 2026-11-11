import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Search,
  Filter,
  Activity,
  Droplet,
  Sparkles,
  ArrowRight,
  Clock,
  BookOpen,
  CheckCircle,
  HelpCircle,
  ChevronRight,
  ShieldCheck,
  AlertCircle,
  GraduationCap
} from 'lucide-react';
import { topicsData, healthCategories } from '../data/topicsData';
import { useLanguage } from '../context/LanguageContext';
import MedicalDisclaimer from '../components/MedicalDisclaimer';

export default function ExploreTopicsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchQuery, setSearchQuery] = useState('');
  const { isHindi } = useLanguage();

  const getTopicIcon = (iconName) => {
    switch (iconName) {
      case 'Activity': return <Activity className="w-6 h-6" />;
      case 'Droplet': return <Droplet className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  // Filter topics
  const filteredTopics = topicsData.filter(topic => {
    const matchesCategory = selectedCategory === 'All Categories' || topic.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    if (!q) return matchesCategory;

    const matchesTitle = topic.title.toLowerCase().includes(q) || (topic.titleHi && topic.titleHi.toLowerCase().includes(q));
    const matchesSummary = topic.summary.toLowerCase().includes(q);
    const matchesSubtopic = topic.subtopics.some(sub => 
      sub.name.toLowerCase().includes(q) || 
      (sub.nameHi && sub.nameHi.toLowerCase().includes(q)) ||
      sub.definition?.toLowerCase().includes(q) ||
      sub.causes?.some(c => c.toLowerCase().includes(q)) ||
      sub.symptoms?.some(s => s.toLowerCase().includes(q))
    );

    return matchesCategory && (matchesTitle || matchesSummary || matchesSubtopic);
  });

  return (
    <div className="space-y-16 pb-20">
      {/* 1. HEADER SECTION */}
      <section className="bg-gradient-to-b from-brand-50/60 to-white pt-12 pb-14 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-4 h-4 text-brand-700" />
              <span>{isHindi ? 'श्री श्री कॉलेज ऑफ नर्सिंग • ज्ञान निर्देशिका' : 'Sri Sri College of Nursing • Knowledge Directory'}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              {isHindi ? 'स्वास्थ्य विषय देखें' : 'Explore Health Topics'}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {isHindi
                ? 'मानव स्वास्थ्य की प्रमुख स्थितियों पर व्यापक, साक्ष्य-आधारित मार्गदर्शिकाएं देखें। शारीरिक तंत्र, लक्षण, 50-25-25 आहार चार्ट, रोकथाम और दैनिक घरेलू देखभाल को समझें।'
                : 'Explore comprehensive, medically sound guides on vital human health conditions. Understand physiological mechanisms, identify early symptoms, discover the 50–25–25 plate method, prevention, and everyday home care.'}
            </p>
          </div>

          {/* Search & Filter Bar */}
          <div className="mt-8 space-y-4">
            {/* Search Input */}
            <div className="relative max-w-xl">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isHindi ? 'स्थिति, लक्षण, या कारण खोजें (जैसे इंसुलिन, नमक, बीपी, डिहाइड्रेशन)...' : 'Search topics by condition, symptom, or cause (e.g. insulin, salt, faint)...'}
                className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white border border-slate-300 shadow-sm text-sm font-medium text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-semibold text-slate-400 hover:text-slate-600"
                >
                  {isHindi ? 'हटाएं' : 'Clear'}
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-xs font-bold text-slate-500 flex items-center gap-1.5 mr-2">
                <Filter className="w-3.5 h-3.5" />
                {isHindi ? 'फ़िल्टर:' : 'Filter:'}
              </span>
              {healthCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-brand-600 text-white shadow-sm'
                      : 'bg-white hover:bg-slate-100 text-slate-600 border border-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. TOPICS LIST */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredTopics.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-lg mx-auto">
            <AlertCircle className="w-12 h-12 text-amber-500 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-slate-800">{isHindi ? 'कोई मिलान विषय नहीं मिला' : 'No matching topics found'}</h3>
            <p className="text-sm text-slate-500 mt-1">
              {isHindi ? `हम "${searchQuery}" के लिए कोई स्वास्थ्य विषय नहीं ढूंढ सके।` : `We couldn't find any health topic matching "${searchQuery}" under ${selectedCategory}.`}
            </p>
            <button
              onClick={() => { setSelectedCategory('All Categories'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 bg-brand-600 text-white text-xs font-bold rounded-xl"
            >
              {isHindi ? 'फ़िल्टर रीसेट करें' : 'Reset Filters'}
            </button>
          </div>
        ) : (
          <div className="space-y-10">
            {filteredTopics.map((topic, index) => (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="interactive-card bg-white rounded-3xl border border-slate-200/90 shadow-card overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  {/* Left Column: Visual & Header */}
                  <div className={`lg:col-span-4 p-8 bg-gradient-to-br ${topic.color} text-white flex flex-col justify-between relative`}>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                          {isHindi && topic.categoryHi ? topic.categoryHi : topic.category}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-white/80">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{isHindi && topic.readTimeHi ? topic.readTimeHi : topic.readTime}</span>
                        </div>
                      </div>

                      <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                        {getTopicIcon(topic.iconName)}
                      </div>

                      <div>
                        <h2 className="text-3xl font-extrabold tracking-tight text-white mb-2">
                          {isHindi && topic.titleHi ? topic.titleHi : topic.title}
                        </h2>
                        <p className="text-sm text-white/90 leading-relaxed">
                          {isHindi && topic.subtitleHi ? topic.subtitleHi : topic.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="pt-8">
                      <Link
                        to={`/topics/${topic.id}`}
                        className="inline-flex items-center justify-center w-full py-3 px-5 rounded-xl bg-white text-slate-900 font-bold text-sm shadow-md hover:bg-slate-50 transition group cursor-pointer"
                      >
                        <span>{isHindi ? 'सम्पूर्ण गाइड खोलें' : 'Open Complete Guide'}</span>
                        <ArrowRight className="w-4 h-4 ml-2 text-brand-600 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Subtopics Breakdown & Key Facts */}
                  <div className="lg:col-span-8 p-8 flex flex-col justify-between space-y-6">
                    <div>
                      {/* Short Description */}
                      <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-6 font-normal">
                        {isHindi && topic.summaryHi ? topic.summaryHi : topic.summary}
                      </p>

                      {/* Subtopics Grid */}
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        {isHindi ? 'शामिल उप-विषय:' : 'Subtopics Covered In This Guide:'}
                      </h4>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {topic.subtopics.map(sub => (
                          <Link
                            key={sub.id}
                            to={`/topics/${topic.id}#${sub.id}`}
                            className="p-3.5 rounded-2xl bg-slate-50 hover:bg-brand-50/70 border border-slate-200/80 hover:border-brand-200 transition group flex items-start justify-between"
                          >
                            <div className="pr-2">
                              <span className="font-bold text-sm text-slate-800 group-hover:text-brand-700 transition block">
                                {isHindi && sub.nameHi ? sub.nameHi : sub.name}
                              </span>
                              <span className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                                {sub.tagline || sub.definition}
                              </span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-brand-600 group-hover:translate-x-0.5 transition shrink-0 mt-0.5" />
                          </Link>
                        ))}
                      </div>

                      {/* Important Facts Preview */}
                      <div className="mt-6 pt-6 border-t border-slate-100">
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {topic.importantFacts.slice(0, 4).map((fact, fIdx) => (
                            <div key={fIdx} className="bg-slate-50/80 p-2.5 rounded-xl border border-slate-200/60">
                              <div className="text-lg font-black text-brand-700">
                                {fact.stat} <span className="text-xs font-semibold text-slate-500">{fact.unit}</span>
                              </div>
                              <div className="text-[11px] font-semibold text-slate-600 line-clamp-1">{fact.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                      <span>{isHindi ? 'रोकथाम और घरेलू देखभाल दिशा-निर्देश शामिल हैं' : 'Includes Prevention & Home Care Protocols'}</span>
                      <Link to={`/topics/${topic.id}`} className="font-bold text-brand-600 hover:text-brand-800">
                        {isHindi ? 'पूरी गाइड पढ़ें →' : 'Read full breakdown →'}
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* 3. MEDICAL DISCLAIMER BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicalDisclaimer variant="banner" />
      </div>

      {/* 4. BOTTOM BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-teal-700 to-brand-800 text-white p-8 md:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-200 bg-white/10 px-3 py-1 rounded-full">
              {isHindi ? 'इंटरैक्टिव लर्निंग' : 'Interactive Learning Loop'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {isHindi ? 'पढ़ें। समझें। सीखें। अपना ज्ञान परखें।' : 'Read. Interact. Learn. Test Your Knowledge.'}
            </h3>
            <p className="text-sm text-teal-50 leading-relaxed">
              {isHindi
                ? 'अब जब आपने मुख्य विषयों की समीक्षा कर ली है, तो हमारे सत्यापित बहुविकल्पीय प्रश्नों और मिथक बनाम तथ्य परीक्षणों के साथ अपनी समझ का परीक्षण करें।'
                : 'Now that you\'ve reviewed our core topics, put your understanding to the test with our verified Multiple Choice Questions and Myth vs. Fact challenges.'}
            </p>
          </div>

          <div className="shrink-0 flex flex-wrap gap-3">
            <Link
              to="/quiz"
              className="px-6 py-3.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-extrabold text-sm shadow-md transition flex items-center gap-2 cursor-pointer"
            >
              <HelpCircle className="w-4 h-4 text-teal-700" />
              <span>{isHindi ? 'क्विज़ प्रारंभ करें' : 'Take Health Quiz'}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
