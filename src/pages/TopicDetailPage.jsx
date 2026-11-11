import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Activity,
  Droplet,
  Sparkles,
  CheckCircle,
  AlertTriangle,
  Heart,
  Shield,
  HelpCircle,
  Clock,
  Share2,
  Bookmark,
  ChevronRight,
  Info,
  Layers,
  ArrowRight,
  ShieldCheck,
  Utensils
} from 'lucide-react';
import { topicsData } from '../data/topicsData';
import { useLanguage } from '../context/LanguageContext';
import BpCalculator from '../components/BpCalculator';
import HydrationCalculator from '../components/HydrationCalculator';
import MedicalDisclaimer from '../components/MedicalDisclaimer';
import DiseasePreventionCare from '../components/DiseasePreventionCare';
import DiabetesPlateChart from '../components/DiabetesPlateChart';

export default function TopicDetailPage() {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { isHindi, t } = useLanguage();

  // Find topic
  const topic = topicsData.find(t => t.id === topicId) || topicsData[0];
  const [activeSubtopicTab, setActiveSubtopicTab] = useState(
    topic.subtopics && topic.subtopics.length > 0 ? topic.subtopics[0].id : ''
  );
  const [copied, setCopied] = useState(false);

  // Update active subtopic if URL has hash
  useEffect(() => {
    if (location.hash) {
      const hashId = location.hash.replace('#', '');
      const exists = topic.subtopics.some(s => s.id === hashId);
      if (exists) {
        setActiveSubtopicTab(hashId);
        const el = document.getElementById(hashId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (topic.subtopics && topic.subtopics.length > 0) {
      setActiveSubtopicTab(topic.subtopics[0].id);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [topicId, location.hash]);

  const getTopicIcon = (iconName) => {
    switch (iconName) {
      case 'Activity': return <Activity className="w-8 h-8" />;
      case 'Droplet': return <Droplet className="w-8 h-8" />;
      default: return <Sparkles className="w-8 h-8" />;
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const currentSubtopic = topic.subtopics.find(s => s.id === activeSubtopicTab) || topic.subtopics[0];

  return (
    <div className="space-y-12 pb-24">
      {/* 1. TOP BREADCRUMB & BACK BUTTON */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-brand-600 transition group cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>{isHindi ? 'विषय सूची पर वापस जाएं' : 'Back to Explore Topics'}</span>
          </Link>

          <div className="flex items-center gap-3">
            <button
              onClick={handleShare}
              className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 flex items-center gap-1.5 transition cursor-pointer"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span>{copied ? (isHindi ? 'लिंक कॉपी हो गया!' : 'Link Copied!') : (isHindi ? 'गाइड साझा करें' : 'Share Guide')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. TOPIC HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`rounded-3xl p-8 sm:p-12 bg-gradient-to-r ${topic.color} text-white shadow-xl relative overflow-hidden`}>
          <div className="relative z-10 max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                {isHindi && topic.categoryHi ? topic.categoryHi : topic.category}
              </span>
              <span className="text-xs text-white/80 font-medium flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {isHindi && topic.readTimeHi ? topic.readTimeHi : topic.readTime}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                {getTopicIcon(topic.iconName)}
              </div>
              <div>
                <h1 className="text-3xl sm:text-5xl font-black tracking-tight">
                  {isHindi && topic.titleHi ? topic.titleHi : topic.title}
                </h1>
                <p className="text-base sm:text-lg text-white/90 font-medium mt-1">
                  {isHindi && topic.subtitleHi ? topic.subtitleHi : topic.subtitle}
                </p>
              </div>
            </div>

            <p className="text-sm sm:text-base text-white/95 leading-relaxed pt-2">
              {isHindi && topic.heroDescriptionHi ? topic.heroDescriptionHi : topic.heroDescription}
            </p>
          </div>

          {/* Decorative graphic background */}
          <div className="hidden lg:block absolute -right-12 -bottom-12 w-80 h-80 rounded-full bg-white/10 pointer-events-none" />
        </div>
      </section>

      {/* 3. DEDICATED PREVENTION AND HOME-CARE SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="prevention-care">
        <DiseasePreventionCare 
          topicId={topic.id} 
          activeSubtopicId={activeSubtopicTab} 
        />
      </section>

      {/* 4. DIABETES DIET CHART & 50-25-25 PLATE METHOD (If topic is Diabetes) */}
      {topic.id === 'diabetes' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="diet-chart">
          <DiabetesPlateChart />
        </section>
      )}

      {/* 5. IMPORTANT CLINICAL FACTS STATS BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-card p-6 sm:p-8">
          <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6 flex items-center gap-2">
            <Info className="w-4 h-4 text-brand-600" />
            {isHindi ? 'प्रमुख नैदानिक तथ्य और सांख्यिकी' : 'Key Clinical Facts & Statistics'}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topic.importantFacts.map((fact, idx) => (
              <div key={idx} className="bg-slate-50/80 rounded-2xl p-4 border border-slate-200/60 flex flex-col justify-between">
                <div>
                  <div className="text-3xl font-extrabold text-brand-700 tracking-tight">
                    {fact.stat} <span className="text-sm font-semibold text-slate-500">{fact.unit}</span>
                  </div>
                  <div className="text-sm font-bold text-slate-800 mt-1">{fact.label}</div>
                </div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{fact.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SIMPLE EXPLANATION ANALOGY */}
      {topic.simpleExplanation && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-50/70 via-teal-50/50 to-blue-50/70 rounded-3xl border border-teal-200/70 p-6 sm:p-8">
            <h3 className="text-lg font-bold text-slate-900 mb-2">
              💡 {topic.simpleExplanation.title}
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed mb-4">
              {isHindi 
                ? 'हम चिकित्सा अवधारणाओं को सरल भाषा में समझाते हैं ताकि आप अपने शरीर में होने वाली प्रक्रियाओं को आसानी से समझ सकें।'
                : 'We translate medical concepts into plain English so you can understand what happens inside your body.'}
            </p>

            {/* If Blood Pressure systolic / diastolic */}
            {topic.simpleExplanation.systolic && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
                  <div className="text-xs font-bold uppercase tracking-wider text-brand-600 mb-1">
                    {topic.simpleExplanation.systolic.number}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {topic.simpleExplanation.systolic.meaning}
                  </p>
                  <div className="mt-3 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg inline-block border border-emerald-200">
                    Normal Target: {topic.simpleExplanation.systolic.normalRange}
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs">
                  <div className="text-xs font-bold uppercase tracking-wider text-teal-600 mb-1">
                    {topic.simpleExplanation.diastolic.number}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {topic.simpleExplanation.diastolic.meaning}
                  </p>
                  <div className="mt-3 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg inline-block border border-emerald-200">
                    Normal Target: {topic.simpleExplanation.diastolic.normalRange}
                  </div>
                </div>
              </div>
            )}

            {/* If Diabetes glucose role */}
            {topic.simpleExplanation.glucoseRole && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
                  <div className="text-xs font-bold text-brand-700 mb-1">1. The Fuel (Glucose)</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{topic.simpleExplanation.glucoseRole}</p>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
                  <div className="text-xs font-bold text-teal-700 mb-1">2. The Key (Insulin)</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{topic.simpleExplanation.pancreasRole}</p>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
                  <div className="text-xs font-bold text-amber-700 mb-1">3. The Imbalance</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{topic.simpleExplanation.imbalance}</p>
                </div>
              </div>
            )}

            {/* If Dehydration electrolyte role */}
            {topic.simpleExplanation.waterRole && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
                  <div className="text-xs font-bold text-cyan-700 mb-1">Water Volume</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{topic.simpleExplanation.waterRole}</p>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
                  <div className="text-xs font-bold text-teal-700 mb-1">Electrolyte Minerals</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{topic.simpleExplanation.electrolyteRole}</p>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-xs">
                  <div className="text-xs font-bold text-rose-700 mb-1">Balance Danger</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{topic.simpleExplanation.danger}</p>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 7. SUBTOPIC DETAIL TABS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-card overflow-hidden">
          {/* Subtopic Tab Navigation Bar */}
          <div className="border-b border-slate-200 bg-slate-50/70 p-4 sm:p-6">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-brand-600" />
              {isHindi ? 'विस्तृत उप-विषय विवरण' : 'Detailed Subtopic Breakdown'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {topic.subtopics.map(sub => (
                <button
                  key={sub.id}
                  onClick={() => setActiveSubtopicTab(sub.id)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 flex items-center gap-2 cursor-pointer ${
                    activeSubtopicTab === sub.id
                      ? 'bg-brand-600 text-white shadow-md shadow-brand-500/20'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <span>{isHindi && sub.nameHi ? sub.nameHi : sub.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Subtopic Content */}
          <div className="p-6 sm:p-10 space-y-8" id={currentSubtopic.id}>
            {/* Header / Definition */}
            <div className="border-b border-slate-100 pb-6">
              <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-brand-50 text-brand-700 border border-brand-200 mb-2">
                {isHindi ? 'उप-विषय गाइड' : 'Subtopic Guide'}
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {isHindi && currentSubtopic.nameHi ? currentSubtopic.nameHi : currentSubtopic.name}
              </h2>
              <p className="text-sm font-semibold text-brand-700 mt-1 mb-4">
                {currentSubtopic.tagline}
              </p>
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 text-sm sm:text-base text-slate-700 leading-relaxed">
                <strong className="text-slate-900 block mb-1">
                  {isHindi ? 'परिभाषा:' : 'Definition:'}
                </strong>
                {currentSubtopic.definition}
              </div>
            </div>

            {/* Stages if any (e.g. for Dehydration) */}
            {currentSubtopic.stages && currentSubtopic.stages.length > 0 && (
              <div className="space-y-4">
                <h4 className="text-lg font-bold text-slate-900">
                  {isHindi ? 'गंभीरता के अनुसार लक्षण व चेतावनी संकेत' : 'Severity Progression & Warning Signs'}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentSubtopic.stages.map((stg, sIdx) => (
                    <div key={sIdx} className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-slate-800 text-base">{stg.stage}</span>
                        <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold ${
                          sIdx === 0 ? 'bg-amber-100 text-amber-800' : 'bg-red-100 text-red-800'
                        }`}>
                          {stg.severity}
                        </span>
                      </div>
                      <ul className="space-y-2 mt-3">
                        {stg.symptoms.map((sym, symIdx) => (
                          <li key={symIdx} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2">
                            <span className="text-teal-600 font-bold mt-0.5">•</span>
                            <span>{sym}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Causes & Symptoms 2-Column Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Causes */}
              {currentSubtopic.causes && currentSubtopic.causes.length > 0 && (
                <div className="bg-slate-50/60 rounded-2xl p-6 border border-slate-200 space-y-4">
                  <div className="flex items-center gap-2 text-rose-700 font-bold text-base">
                    <AlertTriangle className="w-5 h-5" />
                    <h4>{isHindi ? 'कारण और योगदानकर्ता कारक' : 'Causes & Contributing Factors'}</h4>
                  </div>
                  <ul className="space-y-2.5">
                    {currentSubtopic.causes.map((cause, cIdx) => (
                      <li key={cIdx} className="text-sm text-slate-700 flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                        <span>{cause}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Symptoms */}
              {currentSubtopic.symptoms && currentSubtopic.symptoms.length > 0 && (
                <div className="bg-slate-50/60 rounded-2xl p-6 border border-slate-200 space-y-4">
                  <div className="flex items-center gap-2 text-amber-700 font-bold text-base">
                    <Activity className="w-5 h-5" />
                    <h4>{isHindi ? 'सामान्य लक्षण व चेतावनी संकेत' : 'Common Symptoms & Warning Signs'}</h4>
                  </div>
                  <ul className="space-y-2.5">
                    {currentSubtopic.symptoms.map((symptom, sIdx) => (
                      <li key={sIdx} className="text-sm text-slate-700 flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Risk Factors */}
            {currentSubtopic.riskFactors && currentSubtopic.riskFactors.length > 0 && (
              <div className="bg-white rounded-2xl p-6 border border-slate-200 space-y-3">
                <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-brand-600" />
                  {isHindi ? 'प्रमुख जोखिम कारक' : 'Key Risk Factors & Susceptibility'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {currentSubtopic.riskFactors.map((risk, rIdx) => (
                    <div key={rIdx} className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-brand-500 shrink-0" />
                      <span>{risk}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Prevention & Management Summary Bullets */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Prevention */}
              {currentSubtopic.prevention && currentSubtopic.prevention.length > 0 && (
                <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-200/80 space-y-4">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-base">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <h4>{isHindi ? 'रोकथाम और जोखिम में कमी' : 'Prevention and Risk Reduction'}</h4>
                  </div>
                  <ul className="space-y-2.5">
                    {currentSubtopic.prevention.map((prev, pIdx) => (
                      <li key={pIdx} className="text-sm text-slate-700 flex items-start gap-2.5">
                        <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{prev}</span>
                      </li>
                    ))}
                  </ul>
                  {currentSubtopic.preventionNote && (
                    <p className="text-xs text-emerald-900 bg-white/80 p-2.5 rounded-xl border border-emerald-200 italic mt-2">
                      {currentSubtopic.preventionNote}
                    </p>
                  )}
                </div>
              )}

              {/* Management */}
              {currentSubtopic.management && currentSubtopic.management.length > 0 && (
                <div className="bg-teal-50/50 rounded-2xl p-6 border border-teal-200/80 space-y-4">
                  <div className="flex items-center gap-2 text-teal-800 font-bold text-base">
                    <Heart className="w-5 h-5 text-teal-600" />
                    <h4>{isHindi ? 'घरेलू देखभाल और प्रबंधन' : 'Home Care and Management'}</h4>
                  </div>
                  <ul className="space-y-2.5">
                    {currentSubtopic.management.map((mgmt, mIdx) => (
                      <li key={mIdx} className="text-sm text-slate-700 flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 shrink-0" />
                        <span>{mgmt}</span>
                      </li>
                    ))}
                  </ul>
                  {currentSubtopic.warning && (
                    <p className="text-xs text-rose-900 bg-rose-50 p-2.5 rounded-xl border border-rose-200 font-semibold mt-2">
                      ⚠️ {currentSubtopic.warning}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 8. INTERACTIVE CLINICAL TOOLS & CHARTS FOR THIS TOPIC */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {topic.id === 'blood-pressure' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900">
              {isHindi ? 'इंटरैक्टिव रक्तचाप उपकरण' : 'Interactive Blood Pressure Tools'}
            </h3>
            <BpCalculator />

            {/* AHA Blood Pressure Classification Chart */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 overflow-x-auto shadow-card">
              <h4 className="text-base font-bold text-slate-800 mb-4">
                {isHindi ? 'आधिकारिक रक्तचाप श्रेणियां (AHA)' : 'Official Clinical Blood Pressure Ranges (AHA)'}
              </h4>
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 text-xs uppercase tracking-wider bg-slate-50">
                    <th className="p-3">Category</th>
                    <th className="p-3">Systolic (Top)</th>
                    <th className="p-3">Diastolic (Bottom)</th>
                    <th className="p-3">Clinical Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {topic.bpCategories.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition">
                      <td className="p-3 font-bold text-slate-800">{row.category}</td>
                      <td className="p-3 text-slate-600">{row.systolic} mmHg</td>
                      <td className="p-3 text-slate-600">{row.diastolic} mmHg</td>
                      <td className="p-3">
                        <span className={`text-xs px-2.5 py-1 rounded-full font-semibold border ${row.color}`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {topic.id === 'diabetes' && (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 overflow-x-auto shadow-card">
              <h4 className="text-base font-bold text-slate-800 mb-2">
                {isHindi ? 'रक्त शर्करा स्तर लक्ष्य (ADA दिशानिर्देश)' : 'Blood Sugar Level Targets (ADA Guidelines)'}
              </h4>
              <p className="text-xs text-slate-500 mb-4">Standard diagnostic ranges for fasting plasma glucose, 2-hour post-meal glucose, and HbA1c.</p>
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 text-xs uppercase tracking-wider bg-slate-50">
                    <th className="p-3">Classification</th>
                    <th className="p-3">Fasting Blood Glucose</th>
                    <th className="p-3">2-Hr Post-Meal Glucose</th>
                    <th className="p-3">HbA1c Target</th>
                    <th className="p-3">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {topic.bloodSugarChart.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition">
                      <td className="p-3 font-bold text-slate-800">{row.category}</td>
                      <td className="p-3 text-slate-700">{row.fasting}</td>
                      <td className="p-3 text-slate-700">{row.postMeal}</td>
                      <td className="p-3 font-medium text-slate-700">{row.hba1c}</td>
                      <td className="p-3">
                        <span className={`text-xs px-2.5 py-1 rounded-full font-semibold border ${row.badge}`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {topic.id === 'dehydration' && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900">
              {isHindi ? 'जलयोजन मूल्यांकन उपकरण' : 'Hydration Assessment Tools'}
            </h3>
            <HydrationCalculator />

            {/* Urine Hydration Color Chart */}
            <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-card">
              <h4 className="text-base font-bold text-slate-800 mb-1">
                {isHindi ? 'दृश्य जलयोजन रंग चार्ट' : 'Visual Hydration Color Chart'}
              </h4>
              <p className="text-xs text-slate-500 mb-4">Compare your urine color to gauge cellular hydration and kidney filtration efficiency.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {topic.urineColorChart.map((chart, idx) => (
                  <div key={idx} className="rounded-2xl p-4 border border-slate-200 space-y-2">
                    <div className={`h-8 rounded-xl border flex items-center justify-center text-xs font-bold ${chart.color}`}>
                      Level {chart.level}
                    </div>
                    <div className="text-xs font-bold text-slate-800">{chart.text}</div>
                    <div className="text-xs font-semibold text-teal-700">{chart.status}</div>
                    <p className="text-[11px] text-slate-500 leading-relaxed">{chart.advice}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* 9. MEDICAL DISCLAIMER NOTICE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicalDisclaimer variant="banner" />
      </div>

      {/* 10. BOTTOM CALL-TO-ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-brand-700 via-teal-700 to-brand-800 text-white p-8 sm:p-12 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-200 bg-white/10 px-3 py-1 rounded-full">
              {isHindi ? 'अगला कदम उठाने के लिए तैयार?' : 'Ready for the Next Step?'}
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              {isHindi ? 'पढ़ें। समझें। सीखें। अपना ज्ञान परखें।' : 'Read. Interact. Learn. Test Your Knowledge.'}
            </h3>
            <p className="text-sm text-teal-50 leading-relaxed">
              {isHindi 
                ? `आपने ${topic.titleHi || topic.title} के बारे में पढ़ा। अब इंटरैक्टिव क्विज़ के साथ अपने ज्ञान का परीक्षण करें।`
                : `You've read about ${topic.title}. Now test your knowledge with interactive quiz questions and Myth vs. Fact challenges to solidify your understanding.`}
            </p>
          </div>

          <div className="shrink-0 flex flex-wrap gap-3">
            <Link
              to="/quiz"
              className="px-6 py-3.5 rounded-xl bg-white text-slate-900 hover:bg-slate-100 font-extrabold text-sm shadow-md transition flex items-center gap-2 cursor-pointer"
            >
              <HelpCircle className="w-4 h-4 text-teal-700" />
              <span>{isHindi ? 'क्विज़ प्रारंभ करें' : `Test Knowledge on ${topic.title}`}</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
