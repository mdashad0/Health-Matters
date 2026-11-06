export const topicsData = [
  {
    id: 'blood-pressure',
    title: 'Blood Pressure',
    imageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85',
    subtitle: 'Understanding the force of circulating blood and keeping your heart safe.',
    category: 'Cardiovascular Health',
    readTime: '6 min read',
    iconName: 'Activity',
    color: 'from-blue-600 to-cyan-600',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    summary: 'Blood pressure is the measurement of the pressure of blood pushing against the walls of your arteries as your heart pumps. Keeping it balanced prevents severe cardiac and cerebrovascular complications.',
    heroDescription: 'Blood pressure acts like the water pressure in a garden hose. If the pressure is too high, it strains the hose and engine (heart); if it is too low, vital organs cannot receive enough oxygen and nutrients.',
    
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
          'Adopt the DASH diet (Dietary Approaches to Stop Hypertension) rich in vegetables, fruits, and whole grains',
          'Limit sodium intake to under 2,000 mg (less than one teaspoon of salt per day)',
          'Engage in at least 150 minutes of moderate-intensity aerobic exercise every week',
          'Maintain a healthy body weight and waist circumference',
          'Avoid smoking and limit alcohol consumption',
          'Practice daily relaxation techniques (deep breathing, meditation, restorative sleep)'
        ],
        management: [
          'Routine home blood pressure monitoring at the same time each day',
          'Consistent medication adherence (ACE inhibitors, ARBs, Beta-blockers, Diuretics) as prescribed by a physician',
          'Regular checkups with a healthcare provider (at least annually or every 3-6 months if diagnosed)',
          'Reading food nutrition labels carefully for hidden sodium',
          'Avoiding sudden discontinuation of prescribed blood pressure medications without medical guidance'
        ]
      },
      {
        id: 'hypotension',
        name: 'Hypotension (Low Blood Pressure)',
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
          'Stay well-hydrated throughout the day by drinking sufficient fluids',
          'Change positions slowly: sit on the edge of the bed for 30 seconds before standing',
          'Eat smaller, lower-carbohydrate meals to prevent postprandial blood pressure drops',
          'Wear compression stockings if recommended by a physician to improve venous return',
          'Avoid prolonged standing in hot environments'
        ],
        management: [
          'First aid: Have the person sit or lie down immediately and elevate their legs above heart level',
          'Provide a glass of water or electrolyte beverage if dehydration is suspected',
          'Review medications with a doctor to adjust dosages if readings are consistently low',
          'Increase modest salt intake ONLY if specifically advised by a medical practitioner',
          'Seek immediate emergency care if accompanied by chest pain, blue lips, or loss of consciousness'
        ]
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
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=85',
    subtitle: 'Demystifying blood sugar regulation, insulin dynamics, and everyday wellness.',
    category: 'Metabolic Health',
    readTime: '7 min read',
    iconName: 'Droplet',
    color: 'from-teal-600 to-emerald-600',
    badgeColor: 'bg-teal-50 text-teal-700 border-teal-200',
    summary: 'Diabetes is a chronic metabolic condition where the body cannot properly produce or use insulin, leading to elevated glucose levels in the bloodstream. With early detection and disciplined lifestyle habits, it can be successfully managed.',
    heroDescription: 'Think of glucose as fuel for your cells and insulin as the key that unlocks cell doors so fuel can enter. Without insulin, glucose builds up in the blood like traffic outside a locked gate, starving the cells inside.',

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
        id: 'type-1',
        name: 'Type 1 Diabetes',
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
          'Currently, there is no proven scientific method to prevent Type 1 diabetes.',
          'Early antibody screening in high-risk family members helps detect early onset before life-threatening DKA occurs.'
        ],
        management: [
          'Multiple daily insulin injections (MDI) or continuous subcutaneous insulin infusion (insulin pump)',
          'Continuous Glucose Monitoring (CGM) or frequent fingerstick checks',
          'Carbohydrate counting to match meal intake with insulin dosages precisely',
          'Always carrying fast-acting glucose tablets or juice for hypoglycemia episodes',
          'Regular HbA1c testing (target typically below 7% for most non-pregnant adults)'
        ]
      },
      {
        id: 'type-2',
        name: 'Type 2 Diabetes',
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
          'Achieve and maintain a modest 5% to 7% reduction in body weight if overweight',
          'Choose whole, unprocessed foods: legumes, leafy greens, berries, whole grains, lean proteins',
          'Eliminate sugar-sweetened sodas, energy drinks, and packaged fruit juices',
          'Engage in 150 minutes of moderate aerobic activity plus 2 resistance training sessions weekly',
          'Prioritize 7-8 hours of sound sleep; chronic sleep deprivation increases insulin resistance'
        ],
        management: [
          'Personalized meal planning with consistent fiber intake and carbohydrate mindfulness',
          'Oral antidiabetic medications (e.g., Metformin, SGLT2 inhibitors, GLP-1 receptor agonists)',
          'Insulin injections if oral medications and lifestyle changes are insufficient',
          'Daily self-inspection of feet for sores, blisters, or temperature changes',
          'Annual comprehensive dilated eye exam to screen for diabetic retinopathy'
        ]
      },
      {
        id: 'gestational',
        name: 'Gestational Diabetes',
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
          'Adopt healthy dietary patterns and achieve a balanced weight before conceiving',
          'Remain physically active before and throughout pregnancy with doctor approval (walking, swimming)',
          'Focus on nutrient-dense meals with adequate protein, complex carbohydrates, and vegetables'
        ],
        management: [
          'Regular blood glucose monitoring 4 times a day (fasting and 1-2 hours after meals)',
          'Nutritional therapy tailored by a registered dietitian or certified diabetes educator',
          'Safe physical activity like 20-30 minute walks after meals to blunt glucose spikes',
          'Insulin therapy or safe medications if blood sugars exceed pregnancy targets',
          'Postpartum screening 4 to 12 weeks after delivery to ensure blood sugar returns to normal'
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
    imageUrl: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=1200&q=85',
    subtitle: 'Recognizing fluid loss, protecting cellular function, and optimizing hydration.',
    category: 'General Wellness & Physiology',
    readTime: '5 min read',
    iconName: 'Sparkles',
    color: 'from-cyan-600 to-blue-600',
    badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-200',
    summary: 'Dehydration occurs when your body loses more water and essential electrolytes than you take in. Because the human body is roughly 60% water, even mild dehydration impairs physical stamina, cognitive sharpness, and kidney health.',
    heroDescription: 'Water is the lifeblood of human physiology. It lubricates joints, regulates internal temperature through sweat, transports oxygen and nutrients in blood, and flushes metabolic waste through the kidneys.',

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
        id: 'causes-and-mechanisms',
        name: 'Causes & Mechanisms of Fluid Loss',
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
        prevention: [],
        management: []
      },
      {
        id: 'stages-and-symptoms',
        name: 'Symptoms & Warning Signs by Severity',
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
        prevention: [],
        management: []
      },
      {
        id: 'treatment-prevention',
        name: 'Prevention, Treatment & Hydration Rules',
        type: 'prevention-management',
        tagline: 'Evidence-based strategies to stay properly hydrated every day.',
        definition: 'Preventing dehydration is far easier than treating severe fluid loss. Proper hydration involves drinking before you feel thirsty, monitoring urine color, balancing electrolytes, and adjusting fluid intake for heat and activity.',
        causes: [],
        symptoms: [],
        riskFactors: [],
        prevention: [
          'Drink a glass of water first thing in the morning to offset overnight respiratory fluid loss',
          'Carry a reusable water bottle and sip steadily throughout work and school hours',
          'Eat water-rich foods: watermelon, cucumbers, strawberries, oranges, lettuce, and tomatoes',
          'Hydrate before, during, and after exercise (drink 200-300 ml every 15-20 minutes of intense sweating)',
          'Drink extra fluids in hot, sunny, or dry environments even if sitting indoors in air conditioning',
          'Monitor your urine color: pale straw or light lemonade yellow indicates ideal hydration'
        ],
        management: [
          'For mild dehydration: Sip water, coconut water, or broth slowly over 30 to 60 minutes',
          'For illness with diarrhea/vomiting: Use Oral Rehydration Salts (ORS) solution containing balanced water, glucose, and sodium/potassium',
          'Emergency homemade ORS ratio: Mix 6 level teaspoons of sugar and 1/2 level teaspoon of salt in 1 liter of clean drinking water',
          'Avoid very cold or overly sugary beverages during acute dehydration as they can worsen stomach cramping',
          'For severe dehydration: Seek hospital emergency care immediately for intravenous (IV) isotonic fluids'
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
