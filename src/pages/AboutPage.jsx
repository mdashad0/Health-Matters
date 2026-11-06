import React from 'react';
import { motion } from 'framer-motion';
import {
  HeartPulse,
  Target,
  Eye,
  ShieldCheck,
  BookOpen,
  Award,
  Users,
  Lightbulb,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  Heart
} from 'lucide-react';
import MedicalDisclaimer from '../components/MedicalDisclaimer';

export default function AboutPage() {
  const pillars = [
    {
      title: 'Evidence-Based Accuracy',
      desc: 'All health condition descriptions, causes, and prevention strategies are aligned with internationally recognized guidelines (AHA, ADA, WHO).',
      icon: ShieldCheck,
      color: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      title: 'Accessible Medical Language',
      desc: 'We replace confusing medical jargon with clear analogies, illustrated concepts, and everyday English that anyone can grasp.',
      icon: Lightbulb,
      color: 'bg-teal-50 text-teal-700 border-teal-200'
    },
    {
      title: 'Active Interactive Learning',
      desc: 'Rather than passive reading, our portal incorporates interactive checkers, color charts, and randomized quizzes to ensure real knowledge retention.',
      icon: Sparkles,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      title: 'Prevention-First Mindset',
      desc: 'Over 70% of chronic conditions like Type 2 diabetes and hypertension are preventable or manageable through early lifestyle interventions.',
      icon: Heart,
      color: 'bg-rose-50 text-rose-700 border-rose-200'
    }
  ];

  const learningSteps = [
    {
      step: '01',
      title: 'Read & Understand',
      desc: 'Explore condition fundamentals, physiological mechanisms, and primary risk factors explained through accessible analogies.'
    },
    {
      step: '02',
      title: 'Interact With Real Metrics',
      desc: 'Utilize interactive calculators for blood pressure classifications, daily water requirements, and glycemic targets.'
    },
    {
      step: '03',
      title: 'Debunk Health Myths',
      desc: 'Challenge widespread misconceptions regarding sugar, salt, hydration, and silent symptoms with verified medical facts.'
    },
    {
      step: '04',
      title: 'Test & Retain',
      desc: 'Assess your health literacy through structured quizzes, save your progress locally, and review comprehensive explanations.'
    }
  ];

  return (
    <div className="space-y-16 pb-24">
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-brand-50/70 via-white to-surface-50 pt-12 pb-16 border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider">
            <HeartPulse className="w-3.5 h-3.5" />
            <span>Empowering Public Health Literacy</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            About HEALTH MATTERS
          </h1>
          <p className="text-lg sm:text-xl text-teal-800 font-bold">
            "Your Gateway to Better Health Awareness."
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            HEALTH MATTERS is an interactive digital healthcare awareness portal created to bridge the gap between complex clinical medicine and everyday public understanding.
          </p>
        </div>
      </section>

      {/* 2. MISSION & VISION DUAL CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-card p-8 sm:p-10 space-y-4 relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-brand-50 border border-brand-100 text-brand-600 flex items-center justify-center">
              <Target className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">Our Mission</h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              To make reliable, preventative medical knowledge universally understandable and engaging. We aim to equip individuals, students, and families with the awareness needed to identify early symptoms, adopt healthy lifestyles, and make proactive medical decisions.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-brand-700">
              <CheckCircle2 className="w-4 h-4 text-brand-600" />
              <span>Jargon-free • Actionable • Open-access</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-card p-8 sm:p-10 space-y-4 relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-100 text-teal-600 flex items-center justify-center">
              <Eye className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">Our Vision</h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              A world where preventable chronic diseases are drastically reduced through health literacy. We envision a society where every individual understands their blood pressure numbers, recognizes early signs of dehydration, and knows how nutrition impacts metabolic health.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-teal-700">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>Prevention-first • Community-wide • Lifelong impact</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY HEALTH AWARENESS MATTERS */}
      <section className="bg-gradient-to-b from-surface-50 to-white py-16 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
              The Reality
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Health Awareness Matters
            </h2>
            <p className="text-base text-slate-600">
              Modern medicine is powerful, but knowledge before illness strikes is the most potent cure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="text-4xl font-black text-rose-600">1.28 Billion</div>
              <h4 className="font-bold text-slate-900 text-base">Hypertension Without Warning</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Around 46% of adults with hypertension are unaware they have the condition because early stages are asymptomatic. Early screening saves lives.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="text-4xl font-black text-teal-600">50%+</div>
              <h4 className="font-bold text-slate-900 text-base">Type 2 Diabetes Can Be Prevented</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Large clinical trials prove that adopting modest lifestyle improvements, regular walking, and balanced nutrition can delay or stop Type 2 diabetes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="text-4xl font-black text-blue-600">75%</div>
              <h4 className="font-bold text-slate-900 text-base">Suboptimal Daily Hydration</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Chronic mild dehydration impairs cognitive sharpness, raises kidney stone risk, and exacerbates vascular fatigue. Simple water mindfulness makes an immediate difference.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR FOUR CORE PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Core Educational Pillars
          </h2>
          <p className="text-sm text-slate-600">
            Every feature on Health Matters is engineered with pedagogical care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-card space-y-3">
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${pillar.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">{pillar.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. HOW THIS PLATFORM HELPS USERS LEARN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border border-slate-200 shadow-card p-8 sm:p-12">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
              Interactive Learning Architecture
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              How This Platform Helps You Learn
            </h2>
            <p className="text-sm text-slate-600">
              A 4-step progressive learning cycle designed to transform passive readers into active health advocates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {learningSteps.map((step, idx) => (
              <div key={idx} className="bg-slate-50/70 rounded-2xl p-5 border border-slate-200/80 space-y-2">
                <div className="text-2xl font-black text-brand-600">{step.step}</div>
                <h3 className="font-bold text-slate-800 text-base">{step.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. ACADEMIC PROJECT CONTEXT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <div className="flex items-center gap-2 text-teal-400 text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-5 h-5" />
              <span>Academic Project Presentation</span>
            </div>
            <h3 className="text-2xl font-bold tracking-tight">
              HEALTH MATTERS – Digital Health Portal
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Designed and developed as an academic digital health portal showcasing modern full-stack web standards, reactive state management, responsive accessibility, and evidence-based public health communication.
            </p>
          </div>

          <div className="bg-slate-800/80 border border-slate-700 p-4 rounded-2xl text-xs space-y-1.5 shrink-0 text-slate-300">
            <div><strong className="text-white">Stack:</strong> React.js, Tailwind CSS, Framer Motion</div>
            <div><strong className="text-white">Features:</strong> LocalStorage scoring, Interactive BP & Hydration Tools</div>
            <div><strong className="text-white">UI/UX:</strong> Healthcare-first responsive design</div>
          </div>
        </div>
      </section>

      {/* 7. MEDICAL DISCLAIMER BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicalDisclaimer variant="banner" />
      </div>
    </div>
  );
}
