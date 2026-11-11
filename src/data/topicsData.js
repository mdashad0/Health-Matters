export const topicsData = [
  {
    id: 'blood-pressure',
    title: 'Blood Pressure',
    titleHi: 'रक्तचाप (ब्लड प्रेशर)',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85',
    subtitle: 'Understanding the force of circulating blood and keeping your heart safe.',
    subtitleHi: 'रक्त प्रवाह के दबाव को समझें और अपने हृदय को सुरक्षित रखें।',
    category: 'Cardiovascular Health',
    categoryHi: 'हृदय व संवहनी स्वास्थ्य',
    readTime: '6 min read',
    readTimeHi: '6 मिनट पठन',
    iconName: 'Activity',
    color: 'from-blue-600 to-cyan-600',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    summary: 'Blood pressure is the measurement of the pressure of blood pushing against the walls of your arteries as your heart pumps. Keeping it balanced prevents severe cardiac and cerebrovascular complications.',
    summaryHi: 'रक्तचाप वह दबाव है जो बहता हुआ रक्त धमनियों की दीवारों पर डालता है। इसे सामान्य सीमा में रखकर दिल के दौरे और स्ट्रोक से बचा जा सकता है।',
    heroDescription: 'Blood pressure acts like the water pressure in a garden hose. If the pressure is too high, it strains the hose and engine (heart); if it is too low, vital organs cannot receive enough oxygen and nutrients.',
    heroDescriptionHi: 'रक्तचाप पानी के पाइप में दबाव की तरह है। यदि दबाव बहुत अधिक हो तो धमनियों और हृदय पर अत्यधिक खिंचाव पड़ता है; यदि बहुत कम हो तो अंगों तक पर्याप्त ऑक्सीजन नहीं पहुंच पाती।',
    
    importantFacts: [
      {
        stat: '120/80',
        unit: 'mmHg',
        label: 'Ideal Normal Blood Pressure',
        desc: 'Top number (systolic) over bottom number (diastolic).'
      },
      {
        stat: '1 in 3',
        unit: 'Adults',
        label: 'Global Prevalence',
        desc: 'Over 1.28 billion adults worldwide live with hypertension.'
      },
      {
        stat: 'Silent',
        unit: 'Killer',
        label: 'Often Asymptomatic',
        desc: 'Many people with elevated blood pressure experience no symptoms for years.'
      },
      {
        stat: '70%',
        unit: 'Preventable',
        label: 'Lifestyle Impact',
        desc: 'Dietary habits, physical activity, and stress management can prevent or reverse prehypertension.'
      }
    ],

    simpleExplanation: {
      title: 'What Do The Two Numbers Mean?',
      systolic: {
        number: 'Systolic (Top Number)',
        meaning: 'The pressure inside arteries when the heart contracts and pumps blood out to the rest of the body.',
        normalRange: 'Under 120 mmHg'
      },
      diastolic: {
        number: 'Diastolic (Bottom Number)',
        meaning: 'The pressure in arteries when the heart rests and refills with blood between beats.',
        normalRange: 'Under 80 mmHg'
      }
    },

    subtopics: [
      {
        id: 'hypertension',
        name: 'Hypertension (High Blood Pressure)',
        nameHi: 'उच्च रक्तचाप (हाई ब्लड प्रेशर)',
        type: 'high',
        tagline: 'When the pressure inside arteries stays consistently too high (≥ 130/80 mmHg).',
        definition: 'Hypertension occurs when the force of blood flowing through your blood vessels is consistently elevated. Over time, this extra tension tears the delicate inner lining of the artery walls, leading to plaque buildup, heart attacks, stroke, and kidney failure.',
        causes: [
          'High dietary sodium (salt) intake and low potassium intake',
          'Sedentary lifestyle and lack of routine aerobic exercise',
          'Chronic psychological stress leading to hormone spikes',
          'Excess body weight, obesity, and visceral fat',
          'Tobacco smoking and heavy alcohol consumption',
          'Underlying conditions like sleep apnea, chronic kidney disease, or adrenal disorders',
          'Genetic predisposition and family history'
        ],
        symptoms: [
          'Often NONE ("The Silent Killer")',
          'Severe headaches (especially in the morning during hypertensive crisis)',
          'Shortness of breath or dizziness',
          'Chest pain, palpitations, or irregular heartbeat',
          'Blurred vision or vision changes',
          'Nosebleeds (in very high spikes)'
        ],
        riskFactors: [
          'Age over 45 for men, over 55 for women',
          'Family history of hypertension or early heart disease',
          'Diets heavy in ultra-processed, salty, and fried foods',
          'Unmanaged long-term stress and sleep deprivation',
          'Metabolic syndrome, high cholesterol, or diabetes'
        ],
        prevention: [
          'Reduce excess salt in daily meals.',
          'Eat a balanced diet with fruits and vegetables.',
          'Engage in regular physical activity.',
          'Avoid tobacco and limit alcohol.',
          'Maintain a healthy sleep routine.',
          'Check blood pressure regularly.'
        ],
        management: [
          'Monitor blood pressure as advised.',
          'Take prescribed medicines regularly.',
          'Follow the recommended diet.',
          'Maintain a daily activity routine.',
          'Attend regular medical follow-ups.',
          'Never stop medication without medical advice.'
        ]
      },
      {
        id: 'hypotension',
        name: 'Hypotension (Low Blood Pressure)',
        nameHi: 'निम्न रक्तचाप (लो ब्लड प्रेशर)',
        type: 'low',
        tagline: 'When blood pressure drops below 90/60 mmHg, reducing oxygen delivery to vital organs.',
        definition: 'Hypotension is a condition where arterial blood pressure drops significantly below normal levels. While often harmless or indicative of athletic fitness in young individuals, severe hypotension can starve the brain and vital organs of oxygen, causing dizziness, fainting, and falls.',
        causes: [
          'Severe dehydration from inadequate fluids, fever, or vomiting',
          'Sudden postural change (Orthostatic hypotension: standing up too fast)',
          'Prolonged bed rest or immobility',
          'Medication side effects (over-correction of high blood pressure, diuretics, antidepressants)',
          'Endocrine issues (adrenal insufficiency, thyroid disorders, hypoglycemia)',
          'Severe blood loss, internal bleeding, or major trauma',
          'Severe allergic reaction (Anaphylaxis) or severe bloodstream infection (Sepsis)'
        ],
        symptoms: [
          'Lightheadedness, dizziness, or unsteadiness upon standing',
          'Syncope (fainting or momentary blackout)',
          'Blurred or fading vision',
          'General fatigue, weakness, and cold, clammy skin',
          'Rapid, shallow breathing',
          'Confusion or difficulty concentrating'
        ],
        riskFactors: [
          'Older adults (due to slower arterial reflexes when standing)',
          'Pregnancy (circulatory system expands rapidly)',
          'Athletes with very low resting heart rates (usually healthy/physiological)',
          'Patients on multiple antihypertensive medications'
        ],
        prevention: [
          'Maintain adequate fluid intake.',
          'Avoid standing up suddenly.',
          'Avoid standing for prolonged periods.',
          'Eat regular, balanced meals.',
          'Discuss medicines that may lower BP with a healthcare professional.'
        ],
        management: [
          'Sit or lie down if feeling dizzy.',
          'Get up slowly from sitting or lying positions.',
          'Drink water if conscious and able to swallow.',
          'Avoid activities that could cause a fall while dizzy.',
          'Consult a healthcare professional if dizziness or fainting occurs repeatedly.'
        ],
        warning: 'Do not independently increase salt intake or change medicines.'
      }
    ],

    bpCategories: [
      { category: 'Normal', systolic: '< 120', diastolic: 'and < 80', status: 'Healthy', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
      { category: 'Elevated', systolic: '120 – 129', diastolic: 'and < 80', status: 'Attention Needed', color: 'text-amber-700 bg-amber-50 border-amber-200' },
      { category: 'Hypertension Stage 1', systolic: '130 – 139', diastolic: 'or 80 – 89', status: 'Lifestyle & Meds', color: 'text-orange-700 bg-orange-50 border-orange-200' },
      { category: 'Hypertension Stage 2', systolic: '≥ 140', diastolic: 'or ≥ 90', status: 'Medical Intervention', color: 'text-rose-700 bg-rose-50 border-rose-200' },
      { category: 'Hypertensive Crisis', systolic: '> 180', diastolic: 'and/or > 120', status: 'Emergency Care', color: 'text-red-800 bg-red-100 border-red-300' }
    ]
  },

  {
    id: 'diabetes',
    title: 'Diabetes Mellitus',
    titleHi: 'मधुमेह (डायबिटीज मेलिटस)',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85',
    subtitle: 'Demystifying blood sugar regulation, insulin dynamics, and everyday wellness.',
    subtitleHi: 'रक्त शर्करा नियमन, इंसुलिन कार्यप्रणाली और दैनिक स्वास्थ्य को समझें।',
    category: 'Metabolic Health',
    categoryHi: 'मेटाबॉलिक स्वास्थ्य',
    readTime: '7 min read',
    readTimeHi: '7 मिनट पठन',
    iconName: 'Droplet',
    color: 'from-teal-600 to-emerald-600',
    badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
    summary: 'Diabetes is a chronic metabolic condition where the body cannot properly produce or use insulin, leading to elevated glucose levels in the bloodstream. With early detection and disciplined lifestyle habits, it can be successfully managed.',
    summaryHi: 'मधुमेह एक पुरानी चयापचय स्थिति है जहां शरीर इंसुलिन का ठीक से उत्पादन या उपयोग नहीं कर पाता है, जिससे रक्त में ग्लूकोज का स्तर बढ़ जाता है।',
    heroDescription: 'Think of glucose as fuel for your cells and insulin as the key that unlocks cell doors so fuel can enter. Without insulin, glucose builds up in the blood like traffic outside a locked gate, starving the cells inside.',
    heroDescriptionHi: 'ग्लूकोज को कोशिकाओं के ईंधन और इंसुलिन को चाबी की तरह समझें। बिना इंसुलिन के ग्लूकोज रक्त में जमा हो जाता है और कोशिकाएं भूखी रह जाती हैं।',

    importantFacts: [
      {
        stat: '537M',
        unit: 'People',
        label: 'Global Count',
        desc: 'Around 10.5% of the adult world population lives with diabetes.'
      },
      {
        stat: '90-95%',
        unit: 'Cases',
        label: 'Type 2 Proportion',
        desc: 'The vast majority of cases are Type 2, which are strongly linked to lifestyle.'
      },
      {
        stat: '50%',
        unit: 'Undiagnosed',
        label: 'Hidden Condition',
        desc: 'Nearly 1 in 2 adults with diabetes do not know they have it.'
      },
      {
        stat: '100',
        unit: 'mg/dL',
        label: 'Normal Fasting Sugar',
        desc: 'Fasting blood glucose under 100 mg/dL is considered within normal range.'
      }
    ],

    simpleExplanation: {
      title: 'How Glucose & Insulin Work',
      glucoseRole: 'Glucose comes from carbohydrates in food and serves as the primary energy currency for brain and muscles.',
      pancreasRole: 'The pancreas produces insulin, a vital hormone that signals cells to absorb glucose from circulating blood.',
      imbalance: 'When insulin is absent or cells resist its signal, glucose accumulates in the blood, causing vessel damage.'
    },

    subtopics: [
      {
        id: 'type-2',
        name: 'Type 2 Diabetes (Most Common)',
        nameHi: 'टाइप 2 मधुमेह',
        type: 'lifestyle-metabolic',
        tagline: 'A metabolic disorder where cells become resistant to insulin and insulin supply falls short.',
        definition: 'Type 2 diabetes is the most common form of diabetes. In this condition, the cells in muscle, fat, and liver develop insulin resistance—they fail to respond normally to insulin. The pancreas initially works overtime to produce more insulin, but over time, it cannot keep up, resulting in elevated blood sugar.',
        causes: [
          'Insulin resistance aggravated by excess visceral adipose tissue (belly fat)',
          'Chronic high intake of refined sugars, sweet beverages, and saturated fats',
          'Sedentary lifestyle and lack of muscle mass (skeletal muscle absorbs 80% of glucose)',
          'Genetic predisposition and polygenic traits',
          'Aging pancreas and declining beta cell capacity'
        ],
        symptoms: [
          'Gradual onset often unnoticed for months or years',
          'Frequent urination and increased thirst',
          'Increased hunger even after meals (polyphagia)',
          'Slow-healing cuts, sores, or persistent skin/fungal infections',
          'Tingling, numbness, or burning sensation in the feet or hands (neuropathy)',
          'Darkened skin patches in folds such as neck or armpits (Acanthosis nigricans)'
        ],
        riskFactors: [
          'Body Mass Index (BMI) ≥ 25 (or ≥ 23 for Asian populations)',
          'Age 45 or older (though incidence is rising in youth)',
          'Physical inactivity (exercising less than 3 times per week)',
          'History of gestational diabetes or delivering a baby over 9 lbs (4.1 kg)',
          'Polycystic Ovary Syndrome (PCOS) or high blood pressure'
        ],
        prevention: [
          'Choose balanced meals.',
          'Include vegetables, whole grains and suitable protein sources.',
          'Limit sugary drinks and excessive added sugar.',
          'Engage in regular physical activity.',
          'Attend recommended health screenings.',
          'Maintain regular sleep and follow-up routines.'
        ],
        preventionNote: 'Type 2 diabetes risk can be reduced, but Type 1 diabetes is an autoimmune condition and cannot currently be prevented through lifestyle changes.',
        management: [
          'Monitor blood glucose as advised.',
          'Follow an individualised meal plan.',
          'Take prescribed medicines or insulin correctly.',
          'Follow the diabetes-friendly plate method.',
          'Exercise regularly according to medical advice.',
          'Maintain foot hygiene and inspect feet regularly.',
          'Attend regular medical check-ups.'
        ]
      },
      {
        id: 'type-1',
        name: 'Type 1 Diabetes (Autoimmune)',
        nameHi: 'टाइप 1 मधुमेह (ऑटोइम्यून)',
        type: 'autoimmune',
        tagline: 'An autoimmune condition where the pancreas ceases insulin production.',
        definition: 'Type 1 diabetes is an autoimmune condition where the body immune system mistakenly attacks and destroys the insulin-producing beta cells in the pancreas. It is not caused by diet or lifestyle habits and requires lifelong external insulin therapy.',
        causes: [
          'Autoimmune genetic susceptibility (specific HLA gene variants)',
          'Environmental triggers (such as certain viral infections) that trigger immune dysfunction',
          'Absolute deficiency of insulin due to islet cell destruction'
        ],
        symptoms: [
          'Rapid, unexplained weight loss despite strong appetite',
          'Extreme, unquenchable thirst (polydipsia)',
          'Frequent urination, especially waking multiple times at night (polyuria)',
          'Overwhelming exhaustion and muscle weakness',
          'Fruity-smelling breath (sign of diabetic ketoacidosis / DKA - medical emergency)',
          'Bedwetting in children who previously remained dry at night'
        ],
        riskFactors: [
          'Family history (having a parent or sibling with Type 1 diabetes)',
          'Geographic latitude (higher incidence farther from the equator)',
          'Age (frequently diagnosed in childhood, adolescence, or young adulthood)'
        ],
        prevention: [
          'Currently, Type 1 diabetes is an autoimmune condition and cannot be prevented through lifestyle changes.',
          'Early antibody screening in high-risk family members helps detect early onset before life-threatening DKA occurs.'
        ],
        management: [
          'Monitor blood glucose as advised.',
          'Follow an individualised meal plan.',
          'Take prescribed medicines or insulin correctly.',
          'Follow the diabetes-friendly plate method.',
          'Exercise regularly according to medical advice.',
          'Maintain foot hygiene and inspect feet regularly.',
          'Attend regular medical check-ups.'
        ]
      },
      {
        id: 'gestational',
        name: 'Gestational Diabetes',
        nameHi: 'गर्भकालीन मधुमेह (जेस्टेशनल)',
        type: 'pregnancy',
        tagline: 'High blood sugar that develops during pregnancy, typically between weeks 24 and 28.',
        definition: 'Gestational diabetes occurs when placental hormones interfere with insulin function during pregnancy, leading to insulin resistance and maternal hyperglycemia. While it typically resolves after delivery, it increases long-term risk of developing Type 2 diabetes for both mother and child.',
        causes: [
          'Placental hormones (human placental lactogen, estrogen, cortisol) blocking insulin action',
          'Pre-existing mild insulin resistance before pregnancy',
          'Inability of the maternal pancreas to produce 2-3x more insulin to meet pregnancy demands'
        ],
        symptoms: [
          'Often causes no noticeable symptoms; usually diagnosed through oral glucose tolerance screening',
          'Mild excessive thirst or more frequent urination than usual pregnancy baseline',
          'Unusual fatigue beyond typical pregnancy tiredness'
        ],
        riskFactors: [
          'Maternal age over 25',
          'Pre-pregnancy overweight or obesity',
          'Personal history of gestational diabetes or prediabetes',
          'Polycystic Ovary Syndrome (PCOS)',
          'Previous birth of a baby weighing more than 9 pounds'
        ],
        prevention: [
          'Choose balanced meals with whole grains and adequate protein.',
          'Limit sugary drinks and desserts.',
          'Remain physically active with doctor approval (gentle walking).',
          'Attend recommended prenatal screenings.'
        ],
        management: [
          'Monitor blood glucose as advised (fasting & post-meal).',
          'Follow an individualised meal plan.',
          'Follow the diabetes-friendly plate method.',
          'Take prescribed medicines or insulin correctly if indicated.',
          'Attend regular medical check-ups.'
        ]
      }
    ],

    bloodSugarChart: [
      { category: 'Normal', fasting: '70 – 99 mg/dL', postMeal: '< 140 mg/dL', hba1c: '< 5.7%', status: 'Optimal', badge: 'bg-emerald-50 text-emerald-700' },
      { category: 'Prediabetes', fasting: '100 – 125 mg/dL', postMeal: '140 – 199 mg/dL', hba1c: '5.7% – 6.4%', status: 'Reversible Window', badge: 'bg-amber-50 text-amber-700' },
      { category: 'Diabetes', fasting: '≥ 126 mg/dL', postMeal: '≥ 200 mg/dL', hba1c: '≥ 6.5%', status: 'Requires Treatment', badge: 'bg-rose-50 text-rose-700' }
    ]
  },

  {
    id: 'dehydration',
    title: 'Dehydration',
    titleHi: 'निर्जलीकरण (पानी की कमी)',
    imageUrl: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1200&q=85',
    subtitle: 'Recognizing fluid loss, protecting cellular function, and optimizing hydration.',
    subtitleHi: 'तरल की कमी को पहचानें, कोशिकीय स्वास्थ्य की रक्षा करें और जलयोजन बेहतर बनाएं।',
    category: 'General Wellness & Physiology',
    categoryHi: 'सामान्य स्वास्थ्य व शरीर क्रिया विज्ञान',
    readTime: '5 min read',
    readTimeHi: '5 मिनट पठन',
    iconName: 'Sparkles',
    color: 'from-cyan-600 to-blue-600',
    badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    summary: 'Dehydration occurs when your body loses more water and essential electrolytes than you take in. Because the human body is roughly 60% water, even mild dehydration impairs physical stamina, cognitive sharpness, and kidney health.',
    summaryHi: 'निर्जलीकरण तब होता है जब शरीर में आने वाले पानी की तुलना में निकलने वाले पानी और इलेक्ट्रोलाइट्स की मात्रा अधिक हो जाती है।',
    heroDescription: 'Water is the lifeblood of human physiology. It lubricates joints, regulates internal temperature through sweat, transports oxygen and nutrients in blood, and flushes metabolic waste through the kidneys.',
    heroDescriptionHi: 'पानी मानव शरीर के लिए जीवन रेखा है। यह जोड़ों को चिकनाई देता है, पसीने से शरीर का तापमान नियंत्रित करता है और गुर्दों के माध्यम से अपशिष्ट को बाहर निकालता है।',

    importantFacts: [
      {
        stat: '60%',
        unit: 'Water',
        label: 'Human Body Mass',
        desc: 'Over half of the adult human body weight consists of water.'
      },
      {
        stat: '1-2%',
        unit: 'Loss',
        label: 'Cognitive Impact',
        desc: 'Losing just 1-2% of body fluid impairs concentration, mood, and short-term memory.'
      },
      {
        stat: '75%',
        unit: 'Chronic Lack',
        label: 'Suboptimal Hydration',
        desc: 'Surveys show up to 75% of individuals fail to meet daily fluid recommendations.'
      },
      {
        stat: '2-3 L',
        unit: 'Daily',
        label: 'Baseline Intake',
        desc: 'Typical daily baseline requirement for healthy adults under normal conditions.'
      }
    ],

    simpleExplanation: {
      title: 'Why Electrolytes Matter Alongside Water',
      waterRole: 'Water provides the fluid volume necessary for blood circulation and cellular transport.',
      electrolyteRole: 'Electrolytes (Sodium, Potassium, Magnesium, Chloride) are electrical conductors that control nerve signals, muscle contractions, and cellular fluid balance.',
      danger: 'Drinking plain water during extreme dehydration without electrolytes can cause dangerous hyponatremia (water intoxication).'
    },

    subtopics: [
      {
        id: 'treatment-prevention',
        name: 'Prevention & Home Care Guidelines',
        nameHi: 'रोकथाम और घरेलू देखभाल दिशा-निर्देश',
        type: 'prevention-management',
        tagline: 'Evidence-based strategies to stay properly hydrated every day.',
        definition: 'Preventing dehydration is far easier than treating severe fluid loss. Proper hydration involves drinking before you feel thirsty, monitoring urine color, balancing electrolytes, and adjusting fluid intake for heat and activity.',
        causes: [
          'High environmental temperature and humidity leading to excessive perspiration',
          'Vigorous athletic training or heavy manual labor without scheduled water breaks',
          'Gastrointestinal illness with persistent diarrhea or acute vomiting',
          'High fever (the body consumes more fluid as metabolic rate increases)'
        ],
        symptoms: [
          'Dry mouth and tongue',
          'Dark yellow or amber-colored urine',
          'Fatigue, muscle cramps and lightheadedness',
          'Sunken eyes and reduced urine output'
        ],
        riskFactors: [
          'Infants and young children',
          'Older adults with blunted thirst sensation',
          'Outdoor workers and manual laborers',
          'People suffering from acute gastroenteritis'
        ],
        prevention: [
          'Drink sufficient fluids throughout the day.',
          'Increase fluid intake during hot weather and physical activity.',
          'Eat water-rich foods such as watermelon and cucumber.',
          'Maintain hygiene and safe food practices.',
          'Take appropriate care during fever, vomiting and diarrhoea.'
        ],
        management: [
          'Drink water regularly in small, frequent sips.',
          'Use ORS during diarrhoea or vomiting when appropriate.',
          'Prepare ORS using exactly the water quantity written on the packet.',
          'Continue suitable food as tolerated.',
          'Rest in a cool environment.',
          'Seek medical assistance if symptoms persist or worsen.'
        ],
        warning: 'Warning: Confusion, unconsciousness, inability to drink or severe weakness requires urgent medical attention.'
      },
      {
        id: 'stages-and-symptoms',
        name: 'Symptoms & Warning Signs by Severity',
        nameHi: 'गंभीरता के अनुसार लक्षण व चेतावनी संकेत',
        type: 'symptoms',
        tagline: 'From mild dry mouth to life-threatening hypovolemic shock.',
        definition: 'Dehydration progresses through distinct stages. Recognizing early signs allows quick, simple oral correction, while missing late warning signs can lead to kidney shutdown, heat stroke, or cardiovascular collapse.',
        stages: [
          {
            stage: 'Mild to Moderate Dehydration',
            severity: 'Manageable with Oral Fluids',
            symptoms: [
              'Dry, sticky mouth and chapped lips',
              'Increased thirst sensation',
              'Dark yellow or amber-colored urine',
              'Infrequent urination (fewer than 4 times per day)',
              'Mild headache, fatigue, and sluggishness',
              'Dry, cool skin and mild dizziness when standing'
            ]
          },
          {
            stage: 'Severe Dehydration',
            severity: 'Medical Emergency',
            symptoms: [
              'Extreme, overwhelming thirst or absence of thirst in shock',
              'Sunken eyes and loss of skin elasticity (skin turgor test: skin stays tented)',
              'Little to no urine output; very dark, concentrated brownish urine',
              'Rapid, weak pulse and low blood pressure',
              'Rapid, shallow breathing',
              'Confusion, delirium, hallucinations, or unconsciousness',
              'Lack of tears when crying (especially in infants)'
            ]
          }
        ],
        causes: [],
        symptoms: [
          'Dry mouth and tongue',
          'Dark-colored urine',
          'Fatigue and muscle cramps',
          'Lightheadedness or fainting',
          'Irritability and confusion'
        ],
        riskFactors: [],
        prevention: [
          'Drink sufficient fluids throughout the day.',
          'Increase fluid intake during hot weather and physical activity.',
          'Eat water-rich foods such as watermelon and cucumber.'
        ],
        management: [
          'Drink water regularly in small, frequent sips.',
          'Rest in a cool environment.',
          'Seek medical assistance if symptoms persist or worsen.'
        ]
      },
      {
        id: 'causes-and-mechanisms',
        name: 'Causes & Mechanisms of Fluid Loss',
        nameHi: 'तरल की कमी के कारण और तंत्र',
        type: 'causes',
        tagline: 'Understanding how your body loses water faster than you replace it.',
        definition: 'Your body continually loses moisture through exhaled air, perspiration, urine, and stool. When fluid losses are accelerated by environmental heat, physical exertion, or acute illness, a dangerous deficit develops unless water and minerals are proactively replenished.',
        causes: [
          'High environmental temperature and humidity leading to excessive perspiration',
          'Vigorous athletic training or heavy manual labor without scheduled water breaks',
          'Gastrointestinal illness with persistent diarrhea or acute vomiting',
          'High fever (the body consumes more fluid as metabolic rate increases)',
          'Frequent urination due to uncontrolled diabetes or diuretic medications',
          'Excessive caffeine or alcohol consumption which exert mild diuretic effects',
          'Simply forgetting to drink or having limited access to clean drinking water'
        ],
        symptoms: [],
        riskFactors: [
          'Infants and young children (higher body surface area to mass ratio, cannot express thirst)',
          'Older adults (thirst sensation blunts with age, kidneys concentrate urine less efficiently)',
          'Outdoor workers and endurance athletes',
          'People living at high altitudes (lower humidity causes rapid moisture loss from lungs)'
        ],
        prevention: [
          'Drink sufficient fluids throughout the day.',
          'Maintain hygiene and safe food practices.'
        ],
        management: [
          'Drink water regularly in small, frequent sips.',
          'Use ORS during diarrhoea or vomiting when appropriate.'
        ]
      }
    ],

    urineColorChart: [
      { level: '1 – 2', color: 'bg-emerald-100 border-emerald-300', text: 'Clear / Pale Lemonade', status: 'Well Hydrated', advice: 'Great job! Maintain your current water intake.' },
      { level: '3 – 4', color: 'bg-yellow-200 border-yellow-300', text: 'Transparent Yellow', status: 'Normal Hydration', advice: 'Healthy hydration level. Drink a glass of water when thirsty.' },
      { level: '5 – 6', color: 'bg-amber-300 border-amber-400', text: 'Dark Yellow / Honey', status: 'Mildly Dehydrated', advice: 'Your body needs water now. Drink 1-2 tall glasses.' },
      { level: '7 – 8', color: 'bg-amber-600 border-amber-700 text-white', text: 'Amber / Brownish Orange', status: 'Severely Dehydrated', advice: 'Urgent: rehydrate immediately with fluids and electrolytes. If persistent, consult a doctor.' }
    ]
  }
];

export const healthCategories = [
  'All Categories',
  'Cardiovascular Health',
  'Metabolic Health',
  'General Wellness & Physiology'
];
