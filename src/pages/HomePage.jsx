import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Activity,
  Droplet,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  BookOpen,
  Award,
  Zap,
  Users,
  Compass,
  ArrowUpRight,
  Lightbulb,
} from 'lucide-react';
import { topicsData } from '../data/topicsData';
import { healthTips, platformFeatures } from '../data/tipsData';
import BpCalculator from '../components/BpCalculator';
import HydrationCalculator from '../components/HydrationCalculator';
import MedicalDisclaimer from '../components/MedicalDisclaimer';

export default function HomePage() {
  const getTopicIcon = (iconName) => {
    switch (iconName) {
      case 'Activity': return <Activity className="w-6 h-6" />;
      case 'Droplet': return <Droplet className="w-6 h-6" />;
      default: return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <div className="space-y-20 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-slate-950 border-b border-slate-200/60">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[620px]">
          {/* Left Video Panel */}
          <div className="relative order-2 min-h-[280px] lg:order-2 lg:min-h-full overflow-hidden">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
            >
              <source src="/health-hero.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-slate-950/35" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-950/90" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-brand-950/20" />
          </div>

          {/* Right Content Panel */}
          <div className="relative order-1 flex items-center bg-gradient-to-br from-slate-950 via-brand-950 to-teal-950 px-6 py-14 sm:px-10 lg:order-1 lg:px-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(14,165,233,0.24),transparent_45%)]" />
            <div className="relative max-w-2xl">
              <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/25 text-cyan-100 text-xs font-semibold backdrop-blur-md">
                <span className="flex h-2 w-2 rounded-full bg-teal-300 animate-ping"></span>
                <span>Evidence-Based Digital Health Education</span>
              </div>

              {/* Title & Tagline */}
              <div className="space-y-3">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
                  HEALTH <span className="text-cyan-300">MATTERS</span>
                </h1>
                <p className="text-xl sm:text-2xl font-bold text-teal-200 tracking-tight">
                  "Your Gateway to Better Health Awareness."
                </p>
              </div>

              {/* Welcome message & description */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
                Welcome to Health Matters! Our mission is to educate and empower people about common health conditions—their causes, symptoms, prevention, and daily management—through simple language, visual guides, and interactive health quizzes.
              </p>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0" />
                  <span className="text-slate-100">Jargon-Free Guides</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0" />
                  <span className="text-slate-100">Interactive Quizzes</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-teal-300 shrink-0" />
                  <span className="text-slate-100">100% Free & Open</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  to="/explore"
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-brand-600 to-teal-600 hover:from-brand-700 hover:to-teal-700 text-white font-bold text-base shadow-lg shadow-brand-500/25 hover:shadow-xl transition-all duration-200 flex items-center gap-2.5 group cursor-pointer"
                >
                  <BookOpen className="w-5 h-5" />
                  <span>Explore Topics</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/quiz"
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/30 shadow-sm hover:shadow transition-all duration-200 flex items-center gap-2.5 cursor-pointer backdrop-blur-sm"
                >
                  <HelpCircle className="w-5 h-5 text-teal-200" />
                  <span>Test Your Knowledge</span>
                </Link>
              </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MEDICAL DISCLAIMER BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicalDisclaimer variant="banner" />
      </div>

      {/* 3. FEATURED HEALTH TOPICS SECTION */}
      <section className="relative overflow-hidden border-y border-brand-100 bg-gradient-to-br from-brand-50 via-white to-cyan-50 py-16">
        <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-brand-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-teal-200/25 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-teal-200 text-teal-800 text-xs font-bold tracking-wide uppercase shadow-sm">
              <span>Essential Health Knowledge</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Health Topics
            </h2>
            <p className="text-base text-slate-600">
              Dive deep into the most common preventable health challenges. Learn their mechanisms, warning signs, and evidence-based management.
            </p>
          </div>

        {/* 3 Topic Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topicsData.map((topic, index) => (
            <motion.div
              key={topic.id}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
              className="interactive-card bg-white rounded-3xl border border-slate-200/90 shadow-card overflow-hidden flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={topic.imageUrl}
                    alt={`${topic.title} educational illustration`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${topic.color} opacity-65`} />
                  <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-white">
                    <span className="text-xs font-bold uppercase tracking-wider">Health guide</span>
                    <span className="rounded-full bg-white/20 px-2.5 py-1 text-[11px] font-semibold backdrop-blur-sm">
                      Learn more
                    </span>
                  </div>
                </div>

                {/* Card Top Banner */}
                <div className={`p-6 bg-gradient-to-r ${topic.color} text-white relative`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white">
                      {topic.category}
                    </span>
                    <span className="text-xs text-white/80 font-medium">
                      {topic.readTime}
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3">
                    {getTopicIcon(topic.iconName)}
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-white mb-1">
                    {topic.title}
                  </h3>
                  <p className="text-xs text-white/90 line-clamp-2">
                    {topic.subtitle}
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {topic.summary}
                  </p>

                  {/* Subtopics badges */}
                  <div>
                    <h5 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                      Key Topics Covered
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {topic.subtopics.map(sub => (
                        <span
                          key={sub.id}
                          className="text-xs px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 font-medium"
                        >
                          {sub.name.split('(')[0]}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <Link
                  to={`/topics/${topic.id}`}
                  className="w-full py-3 px-4 rounded-xl bg-slate-100 group-hover:bg-brand-600 group-hover:text-white text-slate-800 font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2"
                >
                  <span>Explore Condition Guide</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/explore"
            className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-800 font-bold text-sm group"
          >
            <span>View All Detailed Health Guides & Search Options</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE HEALTH MATTERS */}
      <section className="relative overflow-hidden border-y border-brand-900/80 bg-gradient-to-br from-slate-950 via-brand-950 to-teal-950 py-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(14,165,233,0.2),transparent_35%),radial-gradient(circle_at_85%_80%,rgba(20,184,166,0.18),transparent_35%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-100 bg-white/10 px-3 py-1 rounded-full border border-cyan-300/30 backdrop-blur-sm">
              Why We Are Different
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Why Choose Health Matters?
            </h2>
            <p className="text-base text-slate-300">
              Medical knowledge should be transparent, accessible, and engaging for everyone—not hidden behind complex clinical jargon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {platformFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="interactive-card bg-white/10 rounded-2xl p-6 border border-white/15 shadow-xl shadow-slate-950/20 space-y-3 backdrop-blur-md"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-300/15 border border-teal-200/30 text-teal-200 flex items-center justify-center font-bold text-lg">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-white">{feat.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE HEALTH TOOLS SHOWCASE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
            Interactive Calculators
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Check Your Numbers In Real Time
          </h2>
          <p className="text-base text-slate-600">
            Use our built-in calculators to assess your blood pressure category or calculate your personalized daily hydration requirement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <BpCalculator />
          <HydrationCalculator />
        </div>
      </section>

      {/* 6. DAILY HEALTH AWARENESS TIPS */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-teal-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Lightbulb className="w-4 h-4" />
                <span>Daily Health Awareness Tips</span>
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Quick Habits For Lifelong Wellness
              </h2>
            </div>
            <p className="text-slate-400 text-sm max-w-md">
              Small daily lifestyle adjustments make an enormous difference in preventing chronic disease.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {healthTips.map((tip) => (
              <div
                key={tip.id}
                className="bg-slate-800/90 border border-slate-700/80 rounded-2xl p-6 hover:border-teal-500/50 transition-all duration-200 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-teal-900/60 text-teal-300 border border-teal-600/40">
                      {tip.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">{tip.category}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{tip.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{tip.tip}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. BOTTOM BANNER: TEST YOUR KNOWLEDGE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-brand-700 via-teal-700 to-brand-800 text-white p-8 md:p-14 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold uppercase tracking-wider">
              Interactive Health Quiz
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Read. Interact. Learn. Test Your Knowledge.
            </h2>
            <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
              Challenge yourself with our Multiple Choice Questions and Myth vs. Fact tests covering Blood Pressure, Diabetes, and Dehydration. Review your score, earn badges, and save your progress!
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link
                to="/quiz"
                className="px-8 py-4 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-extrabold text-base shadow-lg transition duration-200 flex items-center gap-2 cursor-pointer group"
              >
                <span>Start Health Quiz Now</span>
                <ArrowRight className="w-5 h-5 text-brand-700 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/explore"
                className="px-6 py-4 rounded-xl bg-brand-800/80 hover:bg-brand-900 text-white font-bold text-base border border-white/20 transition cursor-pointer"
              >
                Review Topics First
              </Link>
            </div>
          </div>

          {/* Decorative badge graphic */}
          <div className="hidden lg:block absolute -right-10 -bottom-10 w-96 h-96 bg-white/5 rounded-full pointer-events-none" />
          <div className="hidden lg:flex absolute right-16 top-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-white/10 backdrop-blur-md items-center justify-center flex-col text-center p-4 border border-white/20">
            <Award className="w-12 h-12 text-teal-300 mb-2 animate-bounce" />
            <div className="text-lg font-black">15+ Questions</div>
            <div className="text-xs text-white/80">Myth vs. Fact + MCQs</div>
          </div>
        </div>
      </section>
    </div>
  );
}
