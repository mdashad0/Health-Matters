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
import { useLanguage } from '../context/LanguageContext';

export default function AboutPage() {
  const { isHindi } = useLanguage();

  const pillars = [
    {
      title: isHindi ? 'साक्ष्य-आधारित सटीकता' : 'Evidence-Based Accuracy',
      desc: isHindi 
        ? 'सभी स्वास्थ्य विवरण, कारण और रोकथाम रणनीतियां अंतरराष्ट्रीय स्तर पर मान्यता प्राप्त दिशानिर्देशों (AHA, ADA, WHO) के अनुरूप हैं।'
        : 'All health condition descriptions, causes, and prevention strategies are aligned with internationally recognized guidelines (AHA, ADA, WHO).',
      icon: ShieldCheck,
      color: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      title: isHindi ? 'सुलभ और सरल भाषा' : 'Accessible Medical Language',
      desc: isHindi
        ? 'हम जटिल मेडिकल शब्दों को स्पष्ट उपमाओं, सचित्र अवधारणाओं और रोजमर्रा की भाषा से बदलते हैं ताकि कोई भी आसानी से समझ सके।'
        : 'We replace confusing medical jargon with clear analogies, illustrated concepts, and everyday language that anyone can grasp.',
      icon: Lightbulb,
      color: 'bg-teal-50 text-teal-700 border-teal-200'
    },
    {
      title: isHindi ? 'सक्रिय इंटरैक्टिव सीखना' : 'Active Interactive Learning',
      desc: isHindi
        ? 'केवल पढ़ने के बजाय, हमारा पोर्टल इंटरैक्टिव बीपी कैलकुलेटर, रंग चार्ट और 50-25-25 आहार चार्ट प्रदान करता है।'
        : 'Rather than passive reading, our portal incorporates interactive checkers, color charts, 50-25-25 plate models, and quizzes to ensure retention.',
      icon: Sparkles,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      title: isHindi ? 'रोकथाम-प्रथम दृष्टिकोण' : 'Prevention-First Mindset',
      desc: isHindi
        ? 'टाइप 2 मधुमेह और उच्च रक्तचाप जैसी 70% से अधिक पुरानी स्थितियां प्रारंभिक जीवनशैली हस्तक्षेप के माध्यम से रोकी जा सकती हैं।'
        : 'Over 70% of chronic conditions like Type 2 diabetes and hypertension are preventable or manageable through early lifestyle interventions.',
      icon: Heart,
      color: 'bg-rose-50 text-rose-700 border-rose-200'
    }
  ];

  const learningSteps = [
    {
      step: '01',
      title: isHindi ? 'पढ़ें और समझें' : 'Read & Understand',
      desc: isHindi
        ? 'सुलभ उपमाओं के माध्यम से स्वास्थ्य के मूलभूत सिद्धांतों, शारीरिक तंत्र और जोखिम कारकों को जानें।'
        : 'Explore condition fundamentals, physiological mechanisms, and primary risk factors explained through accessible analogies.'
    },
    {
      step: '02',
      title: isHindi ? 'वास्तविक मेट्रिक्स के साथ इंटरैक्ट करें' : 'Interact With Real Metrics',
      desc: isHindi
        ? 'रक्तचाप वर्गीकरण, दैनिक जलयोजन आवश्यकताओं और ग्लाइसेमिक लक्ष्यों के लिए इंटरैक्टिव कैलकुलेटर का उपयोग करें।'
        : 'Utilize interactive calculators for blood pressure classifications, daily water requirements, and glycemic targets.'
    },
    {
      step: '03',
      title: isHindi ? 'स्वास्थ्य मिथकों को दूर करें' : 'Debunk Health Myths',
      desc: isHindi
        ? 'सत्यापित चिकित्सीय तथ्यों के साथ चीनी, नमक, जलयोजन और मूक लक्षणों के बारे में व्यापक गलतफहमियों को चुनौती दें।'
        : 'Challenge widespread misconceptions regarding sugar, salt, hydration, and silent symptoms with verified medical facts.'
    },
    {
      step: '04',
      title: isHindi ? 'परखें और याद रखें' : 'Test & Retain',
      desc: isHindi
        ? 'संरचित क्विज़ के माध्यम से अपनी स्वास्थ्य साक्षरता का आकलन करें और व्यापक स्पष्टीकरण की समीक्षा करें।'
        : 'Assess your health literacy through structured quizzes, save your progress locally, and review comprehensive explanations.'
    }
  ];

  return (
    <div className="space-y-16 pb-24">
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-brand-50/70 via-white to-surface-50 pt-12 pb-16 border-b border-slate-200/60">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-bold uppercase tracking-wider">
            <GraduationCap className="w-4 h-4 text-brand-700" />
            <span>{isHindi ? 'श्री श्री कॉलेज ऑफ नर्सिंग • शैक्षणिक पहल' : 'Sri Sri College of Nursing • Academic Initiative'}</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
            {isHindi ? 'हेल्थ मैटर्स के बारे में' : 'About HEALTH MATTERS'}
          </h1>
          <p className="text-lg sm:text-xl text-teal-800 font-bold">
            {isHindi ? '"बेहतर स्वास्थ्य जागरूकता का आपका प्रवेश द्वार"' : '"Your Gateway to Better Health Awareness."'}
          </p>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {isHindi
              ? 'हेल्थ मैटर्स, श्री श्री कॉलेज ऑफ नर्सिंग द्वारा शुरू किया गया एक इंटरैक्टिव डिजिटल स्वास्थ्य शिक्षा पोर्टल है, जो जटिल नैदानिक चिकित्सा और जनसामान्य की समझ के बीच की दूरी को पाटने के लिए समर्पित है।'
              : 'HEALTH MATTERS is an interactive digital healthcare awareness portal created under Sri Sri College of Nursing to bridge the gap between complex clinical medicine and everyday public understanding.'}
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
            <h2 className="text-2xl font-extrabold text-slate-900">
              {isHindi ? 'हमारा उद्देश्य (Mission)' : 'Our Mission'}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {isHindi
                ? 'विश्वसनीय, निवारक चिकित्सा ज्ञान को सार्वभौमिक रूप से समझने योग्य और व्यावहारिक बनाना। हम व्यक्तियों, नर्सिंग छात्रों और परिवारों को प्रारंभिक लक्षणों की पहचान करने, स्वस्थ जीवन शैली अपनाने और सक्रिय स्वास्थ्य निर्णय लेने के लिए जागरूक करते हैं।'
                : 'To make reliable, preventative medical knowledge universally understandable and engaging. We aim to equip individuals, nursing students, and families with the awareness needed to identify early symptoms, adopt healthy lifestyles, and make proactive medical decisions.'}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-brand-700">
              <CheckCircle2 className="w-4 h-4 text-brand-600" />
              <span>{isHindi ? 'सरल भाषा • व्यावहारिक • खुला उपयोग' : 'Jargon-free • Actionable • Open-access'}</span>
            </div>
          </div>

          {/* Vision Card */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-card p-8 sm:p-10 space-y-4 relative overflow-hidden">
            <div className="w-14 h-14 rounded-2xl bg-teal-50 border border-teal-100 text-teal-600 flex items-center justify-center">
              <Eye className="w-7 h-7" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900">
              {isHindi ? 'हमारी दृष्टि (Vision)' : 'Our Vision'}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {isHindi
                ? 'एक ऐसी दुनिया जहां स्वास्थ्य साक्षरता के माध्यम से रोकी जा सकने वाली बीमारियों में भारी कमी आए। एक ऐसा समाज जहां हर नागरिक अपने बीपी नंबरों को समझे, डिहाइड्रेशन के संकेतों को पहचाने और 50-25-25 आहार विधि से मधुमेह को नियंत्रित रखे।'
                : 'A world where preventable chronic diseases are drastically reduced through health literacy. We envision a society where every individual understands their blood pressure numbers, recognizes early signs of dehydration, and knows how nutrition impacts metabolic health.'}
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-teal-700">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              <span>{isHindi ? 'रोकथाम-प्रथम • सामुदायिक जागरूकता' : 'Prevention-first • Community-wide • Lifelong impact'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY HEALTH AWARENESS MATTERS */}
      <section className="bg-gradient-to-b from-surface-50 to-white py-16 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-600 bg-brand-50 px-3 py-1 rounded-full border border-brand-200">
              {isHindi ? 'वास्तविकता' : 'The Reality'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {isHindi ? 'स्वास्थ्य जागरूकता क्यों महत्वपूर्ण है' : 'Why Health Awareness Matters'}
            </h2>
            <p className="text-base text-slate-600">
              {isHindi ? 'आधुनिक चिकित्सा शक्तिशाली है, लेकिन बीमारी होने से पहले ज्ञान सबसे बड़ा बचाव है।' : 'Modern medicine is powerful, but knowledge before illness strikes is the most potent cure.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="text-4xl font-black text-rose-600">1.28 Billion</div>
              <h4 className="font-bold text-slate-900 text-base">{isHindi ? 'बिना लक्षण के उच्च रक्तचाप' : 'Hypertension Without Warning'}</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isHindi 
                  ? 'उच्च रक्तचाप से पीड़ित लगभग 46% वयस्क इस बात से अनजान हैं कि उन्हें यह बीमारी है क्योंकि प्रारंभिक अवस्था में कोई लक्षण नहीं दिखते।'
                  : 'Around 46% of adults with hypertension are unaware they have the condition because early stages are asymptomatic. Early screening saves lives.'}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="text-4xl font-black text-teal-600">50%+</div>
              <h4 className="font-bold text-slate-900 text-base">{isHindi ? 'टाइप 2 मधुमेह की रोकथाम संभव' : 'Type 2 Diabetes Can Be Prevented'}</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isHindi
                  ? 'नैदानिक परीक्षण साबित करते हैं कि 50-25-25 आहार विधि और दैनिक चलने से टाइप 2 मधुमेह के जोखिम को 58% तक कम किया जा सकता है।'
                  : 'Clinical trials prove that adopting the 50-25-25 plate method, regular walking, and balanced nutrition can delay or stop Type 2 diabetes.'}
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs space-y-3">
              <div className="text-4xl font-black text-blue-600">75%</div>
              <h4 className="font-bold text-slate-900 text-base">{isHindi ? 'दैनिक अपर्याप्त जलयोजन' : 'Suboptimal Daily Hydration'}</h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {isHindi
                  ? 'लगातार हल्का निर्जलीकरण एकाग्रता को प्रभावित करता है और गुर्दे की पथरी का खतरा बढ़ाता है। प्रतिदिन 2-3 लीटर पानी पीना अत्यंत आवश्यक है।'
                  : 'Chronic mild dehydration impairs cognitive sharpness, raises kidney stone risk, and exacerbates vascular fatigue. Simple water mindfulness makes an immediate difference.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR FOUR CORE PILLARS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            {isHindi ? 'हमारे चार प्रमुख शैक्षणिक स्तंभ' : 'Our Core Educational Pillars'}
          </h2>
          <p className="text-sm text-slate-600">
            {isHindi ? 'हेल्थ मैटर्स की प्रत्येक सुविधा नैदानिक सटीकता के साथ तैयार की गई है।' : 'Every feature on Health Matters is engineered with pedagogical care.'}
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

      {/* 5. ACADEMIC PROJECT CONTEXT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-950 via-brand-950 to-slate-900 rounded-3xl p-8 sm:p-12 text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 border border-brand-800/40">
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-5 h-5" />
              <span>{isHindi ? 'श्री श्री कॉलेज ऑफ नर्सिंग • आधिकारिक शैक्षणिक प्रस्तुति' : 'Sri Sri College of Nursing • Academic Presentation'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {isHindi ? 'श्री श्री कॉलेज ऑफ नर्सिंग - डिजिटल हेल्थ पोर्टल' : 'Sri Sri College of Nursing – Digital Health Portal'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {isHindi
                ? 'यह पोर्टल श्री श्री कॉलेज ऑफ नर्सिंग के अंतर्गत आधुनिक डिजिटल मानकों, द्विभाषी पहुंच (अंग्रेजी व हिन्दी), 50-25-25 मधुमेह प्लेट विधि, और साक्ष्य-आधारित जन स्वास्थ्य साक्षरता को प्रदर्शित करने के लिए विकसित किया गया है।'
                : 'Designed and developed under Sri Sri College of Nursing, showcasing modern web accessibility standards, English & Hindi bilingual support, the 50-25-25 diabetes diet plate method, and evidence-based public health communication.'}
            </p>
          </div>

          <div className="bg-slate-800/90 border border-slate-700/80 p-5 rounded-2xl text-xs space-y-2 shrink-0 text-slate-300">
            <div><strong className="text-amber-300">Institution:</strong> Sri Sri College of Nursing</div>
            <div><strong className="text-white">Features:</strong> 50–25–25 Diabetes Diet Chart, Disease Prevention & Care</div>
            <div><strong className="text-white">Languages:</strong> English & हिन्दी (Bilingual Support)</div>
            <div><strong className="text-white">Standards:</strong> AHA, ADA, WHO Clinical Guidelines</div>
          </div>
        </div>
      </section>

      {/* 6. MEDICAL DISCLAIMER BANNER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicalDisclaimer variant="banner" />
      </div>
    </div>
  );
}
