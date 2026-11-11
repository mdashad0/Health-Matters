import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Heart, 
  AlertTriangle, 
  CheckCircle2, 
  AlertCircle, 
  Info, 
  Activity, 
  Droplet, 
  Sparkles,
  Check,
  Stethoscope,
  Pill,
  Clock,
  Compass
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const diseaseCareData = {
  hypertension: {
    id: 'hypertension',
    title: {
      en: 'Hypertension (High Blood Pressure)',
      hi: 'उच्च रक्तचाप (हाई ब्लड प्रेशर)'
    },
    subtitle: {
      en: 'Prevention, risk reduction, and everyday home management guidelines.',
      hi: 'रोकथाम, जोखिम में कमी और दैनिक घरेलू प्रबंधन दिशा-निर्देश।'
    },
    topicCategory: 'blood-pressure',
    color: 'from-blue-600 to-cyan-600',
    prevention: {
      en: [
        'Reduce excess salt in daily meals.',
        'Eat a balanced diet with fruits and vegetables.',
        'Engage in regular physical activity.',
        'Avoid tobacco and limit alcohol.',
        'Maintain a healthy sleep routine.',
        'Check blood pressure regularly.'
      ],
      hi: [
        'दैनिक भोजन में अतिरिक्त नमक कम करें।',
        'फलों और सब्जियों से युक्त संतुलित आहार लें।',
        'नियमित शारीरिक गतिविधि और व्यायाम करें।',
        'तंबाकू के सेवन से बचें और शराब को सीमित करें।',
        'स्वस्थ और नियमित नींद की दिनचर्या बनाए रखें।',
        'नियमित रूप से रक्तचाप की जांच करें।'
      ]
    },
    homeCare: {
      en: [
        'Monitor blood pressure as advised.',
        'Take prescribed medicines regularly.',
        'Follow the recommended diet.',
        'Maintain a daily activity routine.',
        'Attend regular medical follow-ups.',
        'Never stop medication without medical advice.'
      ],
      hi: [
        'डॉक्टर की सलाह के अनुसार रक्तचाप की निगरानी करें।',
        'निर्धारित दवाएं समय पर और नियमित रूप से लें।',
        'अनुशंसित आहार (कम नमक, उच्च फाइबर) का पालन करें।',
        'दैनिक गतिविधि और चलने-फिरने की दिनचर्या बनाए रखें।',
        'नियमित चिकित्सकीय फॉलो-अप में अवश्य भाग लें।',
        'चिकित्सीय सलाह के बिना कभी भी दवा बंद न करें।'
      ]
    },
    warning: null,
    clinicalNote: {
      en: 'Blood pressure readings consistently ≥ 130/80 mmHg warrant consultation with your physician for personalized lifestyle modifications or medical therapy.',
      hi: 'लगातार ≥ 130/80 mmHg रक्तचाप आना जीवनशैली में बदलाव या चिकित्सकीय परामर्श की आवश्यकता को दर्शाता है।'
    }
  },

  hypotension: {
    id: 'hypotension',
    title: {
      en: 'Hypotension (Low Blood Pressure)',
      hi: 'निम्न रक्तचाप (लो ब्लड प्रेशर)'
    },
    subtitle: {
      en: 'Preventing sudden pressure drops and managing dizzy spells safely.',
      hi: 'रक्तचाप में अचानक गिरावट को रोकना और चक्कर आने पर सुरक्षित प्रबंधन।'
    },
    topicCategory: 'blood-pressure',
    color: 'from-cyan-600 to-blue-700',
    prevention: {
      en: [
        'Maintain adequate fluid intake.',
        'Avoid standing up suddenly.',
        'Avoid standing for prolonged periods.',
        'Eat regular, balanced meals.',
        'Discuss medicines that may lower BP with a healthcare professional.'
      ],
      hi: [
        'पर्याप्त मात्रा में पानी और तरल पदार्थों का सेवन बनाए रखें।',
        'अचानक तेजी से खड़े होने से बचें (बैठकर धीरे-धीरे उठें)।',
        'लंबे समय तक एक जगह बिना हिले-डुले खड़े रहने से बचें।',
        'नियमित अंतराल पर संतुलित भोजन करें।',
        'बीपी कम करने वाली दवाओं के बारे में स्वास्थ्य विशेषज्ञ से चर्चा करें।'
      ]
    },
    homeCare: {
      en: [
        'Sit or lie down if feeling dizzy.',
        'Get up slowly from sitting or lying positions.',
        'Drink water if conscious and able to swallow.',
        'Avoid activities that could cause a fall while dizzy.',
        'Consult a healthcare professional if dizziness or fainting occurs repeatedly.'
      ],
      hi: [
        'चक्कर या कमजोरी महसूस होने पर तुरंत बैठ जाएं या लेट जाएं।',
        'बैठने या लेटने की स्थिति से बहुत धीरे-धीरे खड़े हों।',
        'यदि होश में हों और सुरक्षित निगलने में सक्षम हों तो पानी पिएं।',
        'चक्कर आने पर ऐसी किसी भी गतिविधि से बचें जिससे गिरने या चोट लगने का खतरा हो।',
        'यदि बार-बार चक्कर आएं या बेहोशी हो, तो तुरंत चिकित्सक से संपर्क करें।'
      ]
    },
    warning: {
      en: 'Important Medical Precaution: Do not independently increase salt intake or change medicines without explicit healthcare advice.',
      hi: 'महत्वपूर्ण चिकित्सीय सावधानी: डॉक्टर की स्पष्ट सलाह के बिना खुद से नमक की मात्रा न बढ़ाएं और न ही दवाएं बदलें।'
    },
    clinicalNote: null
  },

  dehydration: {
    id: 'dehydration',
    title: {
      en: 'Dehydration',
      hi: 'निर्जलीकरण (पानी की कमी)'
    },
    subtitle: {
      en: 'Hydration protection, ORS guidelines, and critical emergency red flags.',
      hi: 'जलयोजन सुरक्षा, ओआरएस दिशा-निर्देश और आपातकालीन चेतावनी संकेत।'
    },
    topicCategory: 'dehydration',
    color: 'from-cyan-600 to-teal-600',
    prevention: {
      en: [
        'Drink sufficient fluids throughout the day.',
        'Increase fluid intake during hot weather and physical activity.',
        'Eat water-rich foods such as watermelon and cucumber.',
        'Maintain hygiene and safe food practices.',
        'Take appropriate care during fever, vomiting and diarrhoea.'
      ],
      hi: [
        'दिन भर नियमित अंतराल पर पर्याप्त मात्रा में तरल पदार्थ पिएं।',
        'गर्म मौसम, धूप और शारीरिक व्यायाम के दौरान पानी की मात्रा बढ़ाएं।',
        'तरबूज, खीरा, संतरा जैसे पानी से भरपूर फल व सब्जियां खाएं।',
        'भोजन की स्वच्छता और सुरक्षित खान-पान की आदतें बनाए रखें।',
        'बुखार, उल्टी और दस्त होने पर तुरंत विशेष देखभाल और तरल आपूर्ति करें।'
      ]
    },
    homeCare: {
      en: [
        'Drink water regularly in small, frequent sips.',
        'Use ORS during diarrhoea or vomiting when appropriate.',
        'Prepare ORS using exactly the water quantity written on the packet.',
        'Continue suitable food as tolerated.',
        'Rest in a cool environment.',
        'Seek medical assistance if symptoms persist or worsen.'
      ],
      hi: [
        'नियमित रूप से थोड़े-थोड़े घूंट में पानी पिएं (एक साथ बहुत ज्यादा न पिएं)।',
        'दस्त या उल्टी के दौरान उपयुक्त होने पर ओआरएस (ORS) का उपयोग करें।',
        'पैकेट पर लिखी पानी की बिल्कुल सही मात्रा का उपयोग करके ही ओआरएस तैयार करें।',
        'सहनशीलता के अनुसार हल्का व सुपाच्य भोजन जारी रखें।',
        'ठंडे, छायादार और शांत वातावरण में पर्याप्त आराम करें।',
        'यदि लक्षण बने रहें या स्थिति बिगड़े तो तुरंत चिकित्सा सहायता लें।'
      ]
    },
    warning: {
      en: 'Emergency Warning: Confusion, unconsciousness, inability to drink or severe weakness requires urgent emergency medical attention.',
      hi: 'आपातकालीन चेतावनी: भ्रम, बेहोशी, पानी पीने में असमर्थता या अत्यधिक कमजोरी के लिए तत्काल आपातकालीन चिकित्सा सहायता की आवश्यकता है।'
    },
    clinicalNote: {
      en: 'Always use clean, potable drinking water when reconstituting oral rehydration packets. Never add extra sugar or salt into pre-formulated ORS packets.',
      hi: 'ओआरएस घोल तैयार करने के लिए हमेशा स्वच्छ और सुरक्षित पानी का उपयोग करें। पहले से तैयार ओआरएस पैकेट में कभी भी अतिरिक्त चीनी या नमक न मिलाएं।'
    }
  },

  diabetes: {
    id: 'diabetes',
    title: {
      en: 'Diabetes Mellitus',
      hi: 'मधुमेह (डायबिटीज मेलिटस)'
    },
    subtitle: {
      en: 'Glycemic control, the plate method, foot hygiene, and daily care.',
      hi: 'रक्त शर्करा नियंत्रण, 50-25-25 प्लेट विधि, पैरों की देखभाल और दैनिक प्रबंधन।'
    },
    topicCategory: 'diabetes',
    color: 'from-teal-600 to-emerald-600',
    prevention: {
      en: [
        'Choose balanced meals.',
        'Include vegetables, whole grains and suitable protein sources.',
        'Limit sugary drinks and excessive added sugar.',
        'Engage in regular physical activity.',
        'Attend recommended health screenings.',
        'Maintain regular sleep and follow-up routines.'
      ],
      hi: [
        'संतुलित और पौष्टिक भोजन का चयन करें।',
        'सब्जियां, साबुत अनाज और उपयुक्त प्रोटीन स्रोत प्रचुरता से शामिल करें।',
        'मीठे पेय (कोल्ड ड्रिंक्स, पैकेज्ड जूस) और अतिरिक्त चीनी को सख्त सीमित करें।',
        'सप्ताह में कम से कम 150 मिनट नियमित शारीरिक गतिविधि या तेज चलना जारी रखें।',
        'अनुशंसित नियमित स्वास्थ्य जांच और रक्त शर्करा स्क्रीनिंग कराएं।',
        'नियमित नींद का चक्र और समय पर डॉक्टर का फॉलो-अप बनाए रखें।'
      ]
    },
    homeCare: {
      en: [
        'Monitor blood glucose as advised.',
        'Follow an individualised meal plan.',
        'Take prescribed medicines or insulin correctly.',
        'Follow the diabetes-friendly plate method.',
        'Exercise regularly according to medical advice.',
        'Maintain foot hygiene and inspect feet regularly.',
        'Attend regular medical check-ups.'
      ],
      hi: [
        'चिकित्सकीय परामर्श के अनुसार ग्लूकोमीटर से रक्त शर्करा की निगरानी करें।',
        'विशेषज्ञ द्वारा निर्धारित व्यक्तिगत भोजन योजना (मील प्लान) का पालन करें।',
        'निर्धारित दवाएं या इंसुलिन सही समय और सही खुराक में लें।',
        'मधुमेह-अनुकूल 50-25-25 प्लेट विधि का दैनिक भोजन में पालन करें।',
        'चिकित्सीय सलाह के अनुसार नियमित रूप से व्यायाम या सैर करें।',
        'पैरों की विशेष स्वच्छता बनाए रखें और छालों/कटने के लिए रोजाना पैरों का निरीक्षण करें।',
        'समय पर नियमित मेडिकल चेक-अप और एचबीए1सी (HbA1c) जांच कराएं।'
      ]
    },
    warning: null,
    clinicalNote: {
      en: 'Type 2 diabetes risk can be significantly reduced through lifestyle improvements, but Type 1 diabetes is an autoimmune condition and cannot currently be prevented through lifestyle changes.',
      hi: 'टाइप 2 मधुमेह के जोखिम को स्वस्थ जीवनशैली से काफी हद तक कम किया जा सकता है, लेकिन टाइप 1 मधुमेह एक ऑटोइम्यून स्थिति है और वर्तमान में जीवनशैली में बदलाव से इसे रोका नहीं जा सकता है।'
    }
  }
};

export default function DiseasePreventionCare({ topicId, activeSubtopicId }) {
  const { isHindi } = useLanguage();
  const langKey = isHindi ? 'hi' : 'en';

  // Determine which condition(s) to show based on topicId
  const getConditionsForTopic = () => {
    if (topicId === 'blood-pressure') {
      return ['hypertension', 'hypotension'];
    }
    if (topicId === 'diabetes') {
      return ['diabetes'];
    }
    if (topicId === 'dehydration') {
      return ['dehydration'];
    }
    return ['hypertension', 'hypotension', 'dehydration', 'diabetes'];
  };

  const conditionKeys = getConditionsForTopic();
  const [selectedCondition, setSelectedCondition] = useState(() => {
    if (topicId === 'blood-pressure') {
      return activeSubtopicId === 'hypotension' ? 'hypotension' : 'hypertension';
    }
    return conditionKeys[0];
  });

  // Keep synced if activeSubtopicId changes
  React.useEffect(() => {
    if (topicId === 'blood-pressure') {
      if (activeSubtopicId === 'hypotension') setSelectedCondition('hypotension');
      else if (activeSubtopicId === 'hypertension') setSelectedCondition('hypertension');
    }
  }, [activeSubtopicId, topicId]);

  const currentData = diseaseCareData[selectedCondition] || diseaseCareData[conditionKeys[0]];

  return (
    <section className="bg-white rounded-3xl border border-slate-200/90 shadow-card overflow-hidden">
      {/* Section Header */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-6 sm:p-8 text-white">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-500/30">
              <ShieldCheck className="w-4 h-4 text-teal-400" />
              <span>{isHindi ? 'साक्ष्य-आधारित नैदानिक प्रोटोकॉल' : 'Clinical Protocol & Evidence-Based Care'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              {isHindi ? 'रोकथाम और घरेलू देखभाल गाइड' : 'Prevention and Home-Care Guide'}
            </h3>
            <p className="text-slate-300 text-sm max-w-2xl leading-relaxed">
              {isHindi 
                ? 'बीमारी की रोकथाम और दैनिक घरेलू प्रबंधन के लिए आवश्यक दिशा-निर्देश।'
                : 'Essential practical steps to lower risk and safely manage chronic and acute conditions at home.'}
            </p>
          </div>

          {/* Subtopic Toggle if Blood Pressure (Hypertension / Hypotension) */}
          {conditionKeys.length > 1 && (
            <div className="flex bg-slate-800 p-1.5 rounded-2xl border border-slate-700 shrink-0 self-start sm:self-center">
              {conditionKeys.map((key) => {
                const item = diseaseCareData[key];
                const active = selectedCondition === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setSelectedCondition(key)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      active
                        ? 'bg-brand-600 text-white shadow-md'
                        : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                    }`}
                  >
                    {item.title[langKey].split('(')[0].trim()}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="p-6 sm:p-10 space-y-8">
        {/* Title & Subtitle */}
        <div className="border-b border-slate-100 pb-5">
          <div className="flex items-center gap-3">
            <div className={`w-3 h-8 rounded-full bg-gradient-to-b ${currentData.color}`} />
            <div>
              <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {currentData.title[langKey]}
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                {currentData.subtitle[langKey]}
              </p>
            </div>
          </div>
        </div>

        {/* 2-Column Grid: Prevention & Home Care */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 1. Prevention and Risk Reduction Column */}
          <div className="bg-gradient-to-b from-emerald-50/70 via-emerald-50/30 to-white rounded-3xl p-6 sm:p-8 border border-emerald-200/80 shadow-xs flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center gap-3 text-emerald-800 pb-2 border-b border-emerald-200/60">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 shadow-2xs">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-extrabold text-lg text-emerald-950">
                    {isHindi ? 'रोकथाम और जोखिम में कमी' : 'Prevention and Risk Reduction'}
                  </h5>
                  <span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider">
                    {isHindi ? 'जीवनशैली व व्यवहारिक सुरक्षा' : 'Lifestyle & Behavioral Safeguards'}
                  </span>
                </div>
              </div>

              <ul className="space-y-3.5">
                {currentData.prevention[langKey].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-emerald-200/80 text-emerald-800 flex items-center justify-center text-xs font-bold shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-emerald-100 flex items-center gap-2 text-xs font-medium text-emerald-800">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{isHindi ? 'प्रारंभिक रोकथाम भविष्य की गंभीर जटिलताओं को टालती है।' : 'Proactive risk reduction prevents severe vascular and organ damage.'}</span>
            </div>
          </div>

          {/* 2. Home Care and Management Column */}
          <div className="bg-gradient-to-b from-blue-50/70 via-blue-50/30 to-white rounded-3xl p-6 sm:p-8 border border-blue-200/80 shadow-xs flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center gap-3 text-brand-800 pb-2 border-b border-blue-200/60">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-brand-700 flex items-center justify-center shrink-0 shadow-2xs">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <div>
                  <h5 className="font-extrabold text-lg text-blue-950">
                    {isHindi ? 'घरेलू देखभाल और प्रबंधन' : 'Home Care and Management'}
                  </h5>
                  <span className="text-[11px] font-semibold text-brand-700 uppercase tracking-wider">
                    {isHindi ? 'दैनिक निगरानी व क्रियान्वयन' : 'Daily Monitoring & Action Plan'}
                  </span>
                </div>
              </div>

              <ul className="space-y-3.5">
                {currentData.homeCare[langKey].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 text-sm sm:text-base leading-relaxed">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-blue-200/80 text-brand-800 flex items-center justify-center text-xs font-bold shrink-0">
                      {idx + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-100 flex items-center gap-2 text-xs font-medium text-brand-800">
              <Heart className="w-4 h-4 text-brand-600 shrink-0" />
              <span>{isHindi ? 'दैनिक अनुपालन से जटिलताओं का जोखिम न्यूनतम होता है।' : 'Daily adherence ensures optimal glycemic and pressure stability.'}</span>
            </div>
          </div>
        </div>

        {/* Clinical Note (e.g. Type 1 vs Type 2 note for Diabetes) */}
        {currentData.clinicalNote && (
          <div className="rounded-2xl p-4 sm:p-5 bg-teal-50/80 border border-teal-200 flex items-start gap-3.5">
            <Info className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-teal-950 leading-relaxed">
              <strong className="font-bold text-teal-900 block mb-0.5">
                {isHindi ? 'नैदानिक विवरण:' : 'Clinical Distinction:'}
              </strong>
              {currentData.clinicalNote[langKey]}
            </div>
          </div>
        )}

        {/* Warning Alert Banner (e.g. for Hypotension or Dehydration) */}
        {currentData.warning && (
          <div className="rounded-2xl p-5 bg-gradient-to-r from-rose-50 via-red-50 to-amber-50 border-2 border-red-300 shadow-sm flex items-start gap-4 animate-in fade-in duration-300">
            <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center shrink-0 border border-red-200">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="text-xs font-black uppercase tracking-wider text-red-900 flex items-center gap-1.5">
                <span>{isHindi ? 'अत्यंत महत्वपूर्ण चेतावनी' : 'URGENT CLINICAL WARNING'}</span>
              </div>
              <p className="text-xs sm:text-sm font-bold text-red-950 leading-relaxed">
                {currentData.warning[langKey]}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
