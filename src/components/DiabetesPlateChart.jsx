import React, { useState } from 'react';
import { 
  Utensils, 
  Salad, 
  Fish, 
  Wheat, 
  Droplet, 
  Heart, 
  CheckCircle2, 
  Sparkles, 
  AlertCircle, 
  Info,
  Clock,
  Apple,
  Coffee,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function DiabetesPlateChart() {
  const { isHindi } = useLanguage();
  const [activeSection, setActiveSection] = useState('veg'); // 'veg', 'protein', 'carbs', 'water'

  const plateSections = {
    veg: {
      id: 'veg',
      portion: '50%',
      title: {
        en: '50% Non-Starchy Vegetables',
        hi: '50% गैर-स्टार्च वाली हरी सब्जियां'
      },
      tagline: {
        en: 'Fill Half Your Plate with Color & Dietary Fiber',
        hi: 'अपनी आधी प्लेट को रंगीन और फाइबर युक्त सब्जियों से भरें'
      },
      color: 'bg-emerald-500',
      textColor: 'text-emerald-700',
      bgColor: 'bg-emerald-50',
      borderColor: 'border-emerald-200',
      icon: Salad,
      whyItWorks: {
        en: 'Non-starchy vegetables are packed with vitamins, minerals, and soluble/insoluble fiber while containing very few carbohydrates and calories. The viscous fiber coats the digestive tract and slows the absorption of carbohydrates into the bloodstream, blunting post-meal blood sugar spikes.',
        hi: 'गैर-स्टार्च वाली सब्जियां विटामिन, खनिज और फाइबर से भरपूर होती हैं, जबकि इनमें कार्बोहाइड्रेट और कैलोरी बहुत कम होती है। इनका फाइबर पाचन को धीमा करके भोजन के बाद रक्त शर्करा (ग्लूकोज) में अचानक होने वाले उछाल को रोकता है।'
      },
      recommendedFoods: {
        en: [
          'Spinach, Fenugreek (Methi), Kale & Leafy greens',
          'Broccoli, Cauliflower & Cabbage',
          'Cucumbers, Tomatoes & Bell peppers',
          'Bottle gourd (Lauki), Ridge gourd (Torai) & Bitter gourd (Karela)',
          'Carrots, Green beans & Asparagus',
          'Fresh green salad (radish, onions, lettuce, coriander)'
        ],
        hi: [
          'पालक, मेथी, बथुआ और हरी पत्तेदार सब्जियां',
          'ब्रोकली, फूलगोभी और बंदगोभी',
          'खीरा, ककड़ी, टमाटर और शिमला मिर्च',
          'लौकी, तोरई, करेला और टिंडा',
          'गाजर, हरी फलियां (बीन्स) और परवल',
          'ताजा सलाद (मूली, प्याज, सलाद पत्ता, नींबू)'
        ]
      },
      cookingTip: {
        en: 'Cook with minimal oil (steamed, stir-fried, or raw salad). Avoid heavy cream, rich cheese sauces, or deep-frying.',
        hi: 'कम से कम तेल (भाप में, हल्का भूनकर या कच्चा सलाद) में पकाएं। मलाईदार ग्रेवी या तलने से बचें।'
      }
    },

    protein: {
      id: 'protein',
      portion: '25%',
      title: {
        en: '25% Lean Protein',
        hi: '25% लीन प्रोटीन'
      },
      tagline: {
        en: 'One-Quarter Plate for Muscle & Lasting Satiety',
        hi: 'एक-चौथाई प्लेट मांसपेशियों और लंबी तृप्ति के लिए'
      },
      color: 'bg-amber-600',
      textColor: 'text-amber-800',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200',
      icon: Fish,
      whyItWorks: {
        en: 'Protein foods have minimal immediate impact on blood glucose. They stimulate satiety hormones like peptide YY and GLP-1, keeping you full for hours and preventing between-meal cravings. Protein is also vital for preserving lean muscle mass, which acts as the body\'s main sponge for soaking up glucose.',
        hi: 'प्रोटीन का रक्त शर्करा पर सीधा प्रभाव बहुत कम होता है। यह तृप्ति हार्मोन को उत्तेजित करके लंबे समय तक भूख नहीं लगने देता। प्रोटीन मांसपेशियों की रक्षा करता है, जो रक्त में अतिरिक्त ग्लूकोज को अवशोषित करने का मुख्य केंद्र हैं।'
      },
      recommendedFoods: {
        en: [
          'Yellow Moong Dal, Masoor Dal, Chana Dal & Toor Dal',
          'Sprouted legumes (Green moong sprouts, Kala chana)',
          'Paneer (Low-fat cottage cheese) & Tofu',
          'Boiled or poached eggs (especially egg whites)',
          'Skinless poultry (Chicken breast) & Turkey',
          'Fatty fish (Salmon, Rohu, Katla, Sardines rich in Omega-3)',
          'Unsweetened Greek yogurt or fresh curd'
        ],
        hi: [
          'मूंग दाल, मसूर दाल, चना दाल और अरहर दाल',
          'अंकुरित अनाज (मूंग, काला चना स्प्राउट्स)',
          'कम वसा वाला पनीर (लो-फैट) और टोफू',
          'उबले हुए अंडे (विशेष रूप से सफेद भाग)',
          'त्वचा रहित चिकन और पोल्ट्री',
          'ओमेगा-3 से भरपूर मछलियां (रोहू, कतला, सैल्मन)',
          'ताजा बिना चीनी का दही या छाछ'
        ]
      },
      cookingTip: {
        en: 'Opt for grilling, boiling, poaching, or air-frying. Trim visible poultry skin and animal fats.',
        hi: 'उबालकर, ग्रिल करके या कम तेल में तड़का लगाकर पकाएं। अधिक मक्खन या घी से बचें।'
      }
    },

    carbs: {
      id: 'carbs',
      portion: '25%',
      title: {
        en: '25% Quality Carbohydrates & Whole Grains',
        hi: '25% गुणवत्तापूर्ण साबुत अनाज व कार्बोहाइड्रेट'
      },
      tagline: {
        en: 'One-Quarter Plate for Sustained, Controlled Energy',
        hi: 'एक-चौथाई प्लेट स्थिर और नियंत्रित ऊर्जा के लिए'
      },
      color: 'bg-blue-600',
      textColor: 'text-blue-800',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      icon: Wheat,
      whyItWorks: {
        en: 'Carbohydrates have the biggest impact on blood glucose because they convert directly into sugar. By strictly limiting carbohydrate-rich foods to one-quarter of the plate and choosing whole, unrefined grains with intact germ and bran, glucose release is kept steady and predictable.',
        hi: 'कार्बोहाइड्रेट सीधे ग्लूकोज में टूटते हैं, इसलिए रक्त शर्करा पर इनका सबसे अधिक प्रभाव पड़ता है। इन्हें थाली के केवल एक-चौथाई हिस्से तक सीमित रखने और रिफाइंड आटे की जगह साबुत अनाज चुनने से शुगर स्थिर रहती है।'
      },
      recommendedFoods: {
        en: [
          'Whole wheat phulka / chapati (multigrain with bran)',
          'Brown rice, Red rice, or Black rice (portion controlled: 1 small cup)',
          'Millets (Ragi, Jowar, Bajra, Foxtail millet)',
          'Steel-cut oats & Barley (Jau)',
          'Whole wheat Daliya (Bulgur wheat)',
          'Quinoa, Sweet potato (moderate) & Green peas'
        ],
        hi: [
          'चोकर युक्त साबुत गेहूं या मल्टीग्रेन की 1-2 छोटी रोटियां',
          'ब्राउन राइस या लाल चावल (सीमित मात्रा: 1 छोटी कटोरी)',
          'मोटे अनाज / मिलेट्स (रागी, ज्वार, बाजरा, कंगनी)',
          'दलिया (गेहूं का दलिया) और जौ (Barley)',
          'रोल्ड ओट्स या स्टील कट ओट्स',
          'शकरकंद (सीमित मात्रा) और हरी मटर'
        ]
      },
      cookingTip: {
        en: 'Avoid refined white rice, white bread, naan, and maida. Eat whole fruits rather than drinking fruit juices.',
        hi: 'सफेद चावल, मैदा, नान और बेकरी ब्रेड से बचें। फलों का जूस पीने के बजाय साबुत फल खाएं।'
      }
    },

    water: {
      id: 'water',
      portion: 'Drink',
      title: {
        en: 'Hydration: Zero-Sugar Liquids',
        hi: 'जलयोजन: बिना चीनी वाले स्वास्थ्यवर्धक पेय'
      },
      tagline: {
        en: 'Flush Excess Glucose & Protect Kidneys',
        hi: 'अतिरिक्त ग्लूकोज बाहर निकालें और गुर्दों की रक्षा करें'
      },
      color: 'bg-cyan-500',
      textColor: 'text-cyan-800',
      bgColor: 'bg-cyan-50',
      borderColor: 'border-cyan-200',
      icon: Droplet,
      whyItWorks: {
        en: 'Staying well-hydrated helps the kidneys excrete excess circulating glucose through urine. Sugary drinks, sweetened sodas, sweetened teas, and commercial juices cause catastrophic blood sugar surges and must be strictly avoided.',
        hi: 'पर्याप्त पानी पीने से गुर्दे (किडनी) मूत्र के माध्यम से अतिरिक्त रक्त शर्करा को बाहर निकालते हैं। मीठे पेय, सोडा और पैकेज्ड जूस शुगर को खतरनाक रूप से बढ़ाते हैं और उनसे पूरी तरह बचना चाहिए।'
      },
      recommendedFoods: {
        en: [
          'Plain drinking water (aim for 2-3 liters daily)',
          'Lemon water (Nimbu pani) without sugar or salt',
          'Unsweetened green tea or chamomile tea',
          'Methi (fenugreek) soaked water in the morning',
          'Cinnamon (Dalchini) infused water',
          'Light, unsweetened buttermilk (chaach) with roasted cumin'
        ],
        hi: [
          'सादा स्वच्छ पीने का पानी (प्रतिदिन 2-3 लीटर)',
          'बिना चीनी व नमक का नींबू पानी',
          'बिना चीनी की ग्रीन टी या हर्बल टी',
          'सुबह मेथी दाना भिगोया हुआ पानी',
          'दालचीनी का उबला पानी',
          'भुने जीरे वाली पतली नमकीन छाछ (बिना चीनी)'
        ]
      },
      cookingTip: {
        en: 'Never add sugar, honey, or jaggery. Avoid "diet" sodas with artificial sweeteners that can disrupt gut microbiome.',
        hi: 'शहद, गुड़ या चीनी कभी न मिलाएं। आर्टिफिशियल स्वीटनर वाले डाइट सोडे से भी बचें।'
      }
    }
  };

  // Full day meal plan sample
  const mealPlan = [
    {
      time: { en: 'Early Morning (6:30 – 7:00 AM)', hi: 'प्रातः काल (6:30 – 7:00 बजे)' },
      title: { en: 'Metabolic Awakening', hi: 'मेटाबॉलिज्म स्टार्टर' },
      items: {
        en: '1 glass warm water with 1 tsp soaked Methi (fenugreek seeds) or cinnamon + 4-5 soaked almonds & 1 walnut.',
        hi: '1 गिलास गुनगुना पानी (मेथी दाना या दालचीनी का पानी) + 4-5 भीगे हुए बादाम और 1 अखरोट।'
      },
      icon: Coffee
    },
    {
      time: { en: 'Breakfast (8:30 – 9:00 AM)', hi: 'नाश्ता (8:30 – 9:00 बजे)' },
      title: { en: 'High Fiber & Protein Start', hi: 'उच्च फाइबर व प्रोटीन नाश्ता' },
      items: {
        en: 'Option A: 2 Moong dal chillas with mint chutney and cucumber slices.\nOption B: 1 bowl vegetable oats/daliya with boiled egg / 50g low-fat paneer.\nOption C: 1 multigrain roti with sauteed spinach/methi.',
        hi: 'विकल्प A: पुदीना चटनी और खीरे के साथ 2 मूंग दाल चीले।\nविकल्प B: सब्जियों से भरपूर ओट्स या दलिया + 1 उबला अंडा या 50 ग्राम पनीर।\nविकल्प C: 1 मल्टीग्रेन रोटी के साथ पालक या मेथी की सब्जी।'
      },
      icon: Apple
    },
    {
      time: { en: 'Mid-Morning Snack (11:00 AM)', hi: 'मध्य-सुबह (11:00 बजे)' },
      title: { en: 'Antioxidant & Fiber Boost', hi: 'फल या स्प्राउट्स ब्रेक' },
      items: {
        en: '1 small apple / guava / orange OR a small bowl of sprouted green moong chaat with chopped tomatoes, cucumber, and lemon juice.',
        hi: '1 छोटा सेब, अमरूद या संतरा अथवा 1 छोटी कटोरी अंकुरित मूंग चाट (टमाटर, खीरा और नींबू डालकर)।'
      },
      icon: Salad
    },
    {
      time: { en: 'Lunch (1:00 – 1:30 PM)', hi: 'दोपहर का भोजन (1:00 – 1:30 बजे)' },
      title: { en: 'The 50–25–25 Plate in Action', hi: '50-25-25 प्लेट विधि का पूर्ण पालन' },
      items: {
        en: '• 50% Plate: Big bowl of fresh salad (cucumber, tomato, carrot) + bowl of green sabzi (lauki/tinday/beans).\n• 25% Plate: 1 cup yellow dal, rajma, or grilled chicken/tofu.\n• 25% Plate: 1-2 small multigrain rotis OR 1 small cup brown rice.',
        hi: '• 50% प्लेट: बड़ी कटोरी ताजा सलाद (खीरा, टमाटर) + हरी सब्जी (लौकी, बीन्स, तोरई)।\n• 25% प्लेट: 1 कटोरी मूंग दाल/राजमा या ग्रिल्ड पनीर/टोफू/चिकन।\n• 25% प्लेट: 1-2 छोटी मल्टीग्रेन रोटियां या 1 छोटी कटोरी ब्राउन राइस।'
      },
      icon: Utensils
    },
    {
      time: { en: 'Evening Refreshment (4:30 – 5:00 PM)', hi: 'शाम का नाश्ता (4:30 – 5:00 बजे)' },
      title: { en: 'Light Snack & Hydration', hi: 'हल्का स्नैक और हर्बल पेय' },
      items: {
        en: '1 cup unsweetened Green Tea or Lemon Tea + a small bowl of dry roasted makhana (foxnuts) or roasted chana.',
        hi: '1 कप बिना चीनी की ग्रीन टी या नींबू चाय + 1 छोटी कटोरी भुने हुए मखाने या भुने चने।'
      },
      icon: Coffee
    },
    {
      time: { en: 'Dinner (7:30 – 8:00 PM)', hi: 'रात का भोजन (7:30 – 8:00 बजे)' },
      title: { en: 'Light & Early Restorative Meal', hi: 'हल्का और जल्दी पचने वाला भोजन' },
      items: {
        en: '1 bowl clear vegetable soup + large serving of stir-fried green vegetables + 1 small phulka / roti + grilled paneer / steamed fish / light moong dal. Avoid heavy rice at dinner.',
        hi: '1 कटोरी वेज क्लीयर सूप + प्रचुर मात्रा में हरी सब्जियां + 1 छोटी फुल्का रोटी + हल्का पनीर या दाल। रात में भारी चावल से बचें।'
      },
      icon: Utensils
    }
  ];

  const currentSectionData = plateSections[activeSection];
  const Icon = currentSectionData.icon;

  return (
    <section className="bg-white rounded-3xl border border-slate-200/90 shadow-card overflow-hidden">
      {/* Top Header */}
      <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-emerald-950 p-6 sm:p-10 text-white">
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-400/20 text-teal-300 text-xs font-bold uppercase tracking-wider border border-teal-400/30">
            <Utensils className="w-4 h-4 text-teal-300" />
            <span>{isHindi ? 'अमेरिकन डायबिटीज एसोसिएशन (ADA) प्लेट विधि' : 'ADA Clinical Nutrition Guidelines'}</span>
          </div>
          <h3 className="text-2xl sm:text-4xl font-black tracking-tight text-white">
            {isHindi ? 'मधुमेह आहार चार्ट: 50–25–25 प्लेट विधि' : 'Diabetes Diet Chart: The 50–25–25 Plate Method'}
          </h3>
          <p className="text-teal-100 text-sm sm:text-base leading-relaxed">
            {isHindi 
              ? 'बिना किसी जटिल कैलोरी गणना के, अपनी 9-इंच की थाली को इन तीन सटीक भागों में विभाजित करें। यह वैज्ञानिक तरीका भोजन के बाद रक्त शर्करा को तेजी से बढ़ने से रोकता है।'
              : 'Without complicated counting or weighing, divide your standard 9-inch dinner plate into three simple sections to prevent post-meal sugar spikes and maintain stable energy.'}
          </p>
        </div>
      </div>

      <div className="p-6 sm:p-10 space-y-10">
        {/* Visual Plate Diagram & Interactive Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Interactive Plate Graphic (Left 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 bg-slate-50/80 rounded-3xl border border-slate-200">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 flex items-center gap-1.5">
              <span>{isHindi ? 'इंटरैक्टिव 9-इंच प्लेट मॉडल (क्लिक करें)' : 'Interactive 9-Inch Plate Model (Click to Explore)'}</span>
            </h4>

            {/* SVG Plate Model */}
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 select-none">
              <svg viewBox="0 0 300 300" className="w-full h-full drop-shadow-md">
                {/* Plate Outer Rim */}
                <circle cx="150" cy="150" r="145" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="6" />
                <circle cx="150" cy="150" r="130" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />

                {/* Left 50%: Non-Starchy Veggies (x from 20 to 150) */}
                <path
                  d="M 150 20 A 130 130 0 0 0 150 280 Z"
                  fill={activeSection === 'veg' ? '#10b981' : '#34d399'}
                  className="cursor-pointer transition-all duration-200 hover:opacity-90"
                  onClick={() => setActiveSection('veg')}
                />

                {/* Top-Right 25%: Lean Protein (angle from -90 to 0 deg) */}
                <path
                  d="M 150 150 L 150 20 A 130 130 0 0 1 280 150 Z"
                  fill={activeSection === 'protein' ? '#d97706' : '#f59e0b'}
                  className="cursor-pointer transition-all duration-200 hover:opacity-90"
                  onClick={() => setActiveSection('protein')}
                />

                {/* Bottom-Right 25%: Carbohydrates (angle from 0 to 90 deg) */}
                <path
                  d="M 150 150 L 280 150 A 130 130 0 0 1 150 280 Z"
                  fill={activeSection === 'carbs' ? '#2563eb' : '#60a5fa'}
                  className="cursor-pointer transition-all duration-200 hover:opacity-90"
                  onClick={() => setActiveSection('carbs')}
                />

                {/* Plate Divider Lines */}
                <line x1="150" y1="20" x2="150" y2="280" stroke="#ffffff" strokeWidth="4" />
                <line x1="150" y1="150" x2="280" y2="150" stroke="#ffffff" strokeWidth="4" />

                {/* Text Labels inside sectors */}
                <text x="80" y="145" fill="#ffffff" fontSize="16" fontWeight="bold" textAnchor="middle">
                  50%
                </text>
                <text x="80" y="165" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">
                  {isHindi ? 'सब्जियां' : 'Vegetables'}
                </text>

                <text x="215" y="90" fill="#ffffff" fontSize="15" fontWeight="bold" textAnchor="middle">
                  25%
                </text>
                <text x="215" y="108" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">
                  {isHindi ? 'प्रोटीन' : 'Protein'}
                </text>

                <text x="215" y="210" fill="#ffffff" fontSize="15" fontWeight="bold" textAnchor="middle">
                  25%
                </text>
                <text x="215" y="228" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">
                  {isHindi ? 'अनाज/कार्ब्स' : 'Carbs'}
                </text>
              </svg>

              {/* Water Glass Circle on the Side */}
              <button
                type="button"
                onClick={() => setActiveSection('water')}
                className={`absolute -top-1 -right-1 w-16 h-16 rounded-full border-2 flex flex-col items-center justify-center text-center shadow-md transition-all cursor-pointer ${
                  activeSection === 'water'
                    ? 'bg-cyan-500 text-white border-white scale-105'
                    : 'bg-white text-cyan-800 border-cyan-300 hover:bg-cyan-50'
                }`}
                title="Hydration / Water"
              >
                <Droplet className="w-4 h-4" />
                <span className="text-[10px] font-bold mt-0.5">{isHindi ? 'पानी' : 'Water'}</span>
              </button>
            </div>

            {/* Quick selector buttons below plate */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full mt-6">
              {Object.values(plateSections).map(sec => {
                const isSelected = activeSection === sec.id;
                return (
                  <button
                    key={sec.id}
                    type="button"
                    onClick={() => setActiveSection(sec.id)}
                    className={`p-2 rounded-xl text-xs font-bold transition-all text-center border cursor-pointer ${
                      isSelected
                        ? `${sec.bgColor} ${sec.textColor} ${sec.borderColor} shadow-xs font-extrabold ring-1 ring-current`
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <span>{sec.portion}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detailed Selected Section Card (Right 7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className={`p-6 sm:p-8 rounded-3xl border ${currentSectionData.borderColor} ${currentSectionData.bgColor} shadow-sm space-y-4`}>
              <div className="flex items-center justify-between pb-3 border-b border-slate-200/60">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 rounded-2xl ${currentSectionData.color} text-white flex items-center justify-center shadow-md`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                      {currentSectionData.portion} {isHindi ? 'प्लेट हिस्सा' : 'Plate Share'}
                    </span>
                    <h4 className={`text-xl sm:text-2xl font-black ${currentSectionData.textColor}`}>
                      {currentSectionData.title[isHindi ? 'hi' : 'en']}
                    </h4>
                  </div>
                </div>
              </div>

              <p className="text-sm font-semibold text-slate-800">
                {currentSectionData.tagline[isHindi ? 'hi' : 'en']}
              </p>

              {/* Why it works */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-slate-200/60 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <strong className="text-slate-900 block mb-1">
                  💡 {isHindi ? 'यह रक्त शर्करा को कैसे नियंत्रित करता है:' : 'Why this portion controls blood sugar:'}
                </strong>
                {currentSectionData.whyItWorks[isHindi ? 'hi' : 'en']}
              </div>

              {/* Recommended Foods List */}
              <div className="space-y-2">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  {isHindi ? 'सर्वश्रेष्ठ अनुशंसित खाद्य पदार्थ:' : 'Top Recommended Food Choices:'}
                </h5>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {currentSectionData.recommendedFoods[isHindi ? 'hi' : 'en'].map((food, fIdx) => (
                    <div key={fIdx} className="bg-white rounded-xl p-2.5 border border-slate-200/80 text-xs text-slate-700 flex items-start gap-2 shadow-2xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{food}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preparation Tip */}
              <div className="text-xs text-slate-600 italic bg-white/60 p-3 rounded-xl border border-slate-200/60">
                <strong>{isHindi ? 'रसोई सुझाव: ' : 'Cooking Tip: '}</strong>
                {currentSectionData.cookingTip[isHindi ? 'hi' : 'en']}
              </div>
            </div>
          </div>
        </div>

        {/* Full Day Sample Diabetes Diet Chart (Meal Schedule) */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 pb-4">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 uppercase tracking-wider mb-1">
                <Clock className="w-4 h-4" />
                <span>{isHindi ? 'दैनिक समय सारिणी' : 'Daily Meal Schedule'}</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-black text-slate-900">
                {isHindi ? 'पूर्ण दिवस नमूना मधुमेह आहार चार्ट' : 'Sample Full-Day Diabetes Meal Plan'}
              </h4>
            </div>
            <span className="text-xs text-slate-500 font-medium">
              {isHindi ? 'नियमित भोजन अंतराल से रक्त शर्करा स्थिर रहती है' : 'Evenly spaced meals stabilize insulin levels'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mealPlan.map((meal, mIdx) => {
              const MealIcon = meal.icon;
              return (
                <div key={mIdx} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-2xs flex flex-col justify-between space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-teal-50 text-teal-800 border border-teal-200">
                        {meal.time[isHindi ? 'hi' : 'en']}
                      </span>
                      <MealIcon className="w-4 h-4 text-teal-600" />
                    </div>
                    <h5 className="font-bold text-slate-900 text-sm">
                      {meal.title[isHindi ? 'hi' : 'en']}
                    </h5>
                    <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line">
                      {meal.items[isHindi ? 'hi' : 'en']}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Quick Food Guide: Foods to Choose vs Foods to Avoid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Foods to Choose */}
          <div className="bg-emerald-50/60 rounded-3xl p-6 border border-emerald-200 space-y-3">
            <div className="flex items-center gap-2 text-emerald-800 font-extrabold text-base">
              <CheckCircle2 className="w-5 h-5 text-emerald-600" />
              <h5>{isHindi ? 'प्राथमिकता दें (कम ग्लाइसेमिक इंडेक्स)' : 'Foods to Prioritize (Low Glycemic)'}</h5>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>{isHindi ? 'मेथी, पालक, बथुआ, करेला, लौकी और सभी हरी सब्जियां' : 'Bitter gourd (karela), fenugreek, spinach, bottle gourd & leafy greens'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>{isHindi ? 'साबुत दालें (मूंग, चना, मसूर) और अंकुरित अनाज' : 'Whole pulses, sprouted lentils, and chickpeas'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>{isHindi ? 'चोकर युक्त मल्टीग्रेन आटा, बाजरा, रागी और जौ' : 'Millets (ragi, bajra, jowar), barley and steel-cut oats'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>{isHindi ? 'अखरोट, बादाम, अलसी (flaxseeds) और चिया सीड्स' : 'Walnuts, almonds, flaxseeds, and chia seeds in moderation'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-bold">•</span>
                <span>{isHindi ? 'ताजा बिना मलाई का दही और छाछ' : 'Low-fat curd, buttermilk, and unsweetened Greek yogurt'}</span>
              </li>
            </ul>
          </div>

          {/* Foods to Avoid / Strictly Limit */}
          <div className="bg-rose-50/60 rounded-3xl p-6 border border-rose-200 space-y-3">
            <div className="flex items-center gap-2 text-rose-800 font-extrabold text-base">
              <AlertCircle className="w-5 h-5 text-rose-600" />
              <h5>{isHindi ? 'सख्ती से बचें या बहुत सीमित करें' : 'Foods to Strictly Limit or Avoid'}</h5>
            </div>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">•</span>
                <span>{isHindi ? 'सफेद चीनी, गुड़, शहद, मिठाइयां और पेस्ट्री' : 'Refined sugar, jaggery, honey, sweets, pastries & candies'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">•</span>
                <span>{isHindi ? 'कोल्ड ड्रिंक्स, पैकेज्ड फ्रूट जूस और मीठे शरबत' : 'Sweetened sodas, packaged juices, energy drinks & syrups'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">•</span>
                <span>{isHindi ? 'मैदा, सफेद ब्रेड, नान और तली हुई पूरियां/समोसे' : 'White flour (maida), white bread, fried samosas & pakoras'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">•</span>
                <span>{isHindi ? 'अत्यधिक आलू, अरबी और गहरे तले हुए चिप्स' : 'Deep-fried French fries, potato crisps & excessive starchy tubers'}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-rose-600 font-bold">•</span>
                <span>{isHindi ? 'डालडा, ट्रांस-फैट और अत्यधिक मक्खन/पाम तेल' : 'Vanaspati (Dalda), trans fats, and palm oil'}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
