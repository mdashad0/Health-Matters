import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    // Top Bar & Header
    collegeName: 'Sri Sri College of Nursing',
    initiativeBadge: 'Academic Initiative',
    portalName: 'HEALTH MATTERS',
    portalBadge: 'PORTAL',
    tagline: 'Your Gateway to Better Health Awareness',
    topBarNotice: 'Public Health Literacy Initiative: Verified Educational Content',
    emergencyText: 'Emergency? Dial 112 / 911 immediately',
    
    // Navigation
    navHome: 'Home',
    navExplore: 'Explore Topics',
    navQuiz: 'Health Quiz',
    navAbout: 'About',
    searchPlaceholder: 'Search topics (Ctrl+K)',
    takeQuizBtn: 'Take Quiz',
    
    // Common Actions
    backToExplore: 'Back to Explore Topics',
    shareGuide: 'Share Guide',
    linkCopied: 'Link Copied!',
    readFullGuide: 'Read Full Guide',
    openGuide: 'Open Complete Guide',
    testYourKnowledge: 'Test Your Knowledge',
    
    // Topic Details
    keyClinicalFacts: 'Key Clinical Facts & Statistics',
    detailedSubtopicBreakdown: 'Detailed Subtopic Breakdown',
    preventionAndHomeCare: 'Prevention & Home Care Guide',
    preventionTitle: 'Prevention and Risk Reduction',
    homeCareTitle: 'Home Care and Management',
    clinicalWarning: 'Clinical Warning / Precaution',
    importantNote: 'Important Clinical Note',
    
    // Plate Method
    diabetesPlateTitle: 'Diabetes Diet Chart: The 50–25–25 Plate Method',
    diabetesPlateSubtitle: 'American Diabetes Association (ADA) clinically recommended portion control method for stable blood sugar.',
    plate50: '50% Non-Starchy Vegetables',
    plate25Protein: '25% Lean Protein',
    plate25Carbs: '25% Carbohydrates & Whole Grains',
    plateWater: 'Hydration: Water & Zero-Sugar Drinks',
    
    // Footer
    footerDesc: 'Your Gateway to Better Health Awareness. Dedicated to demystifying common health conditions through evidence-based explanations, visual insights, and interactive knowledge quizzes.',
    nonProfitBadge: 'Non-profit Digital Health Education Portal',
    quickLinks: 'Quick Links',
    coreConditions: 'Core Conditions',
    stayInformed: 'Stay Informed',
    subscribeDigest: 'Subscribe to Digest',
    allRightsReserved: 'All rights reserved.',
    academicContext: 'Digital Health Portal Academic Project by Sri Sri College of Nursing'
  },
  hi: {
    // Top Bar & Header
    collegeName: 'श्री श्री कॉलेज ऑफ नर्सिंग',
    initiativeBadge: 'शैक्षणिक पहल',
    portalName: 'हेल्थ मैटर्स',
    portalBadge: 'पोर्टल',
    tagline: 'बेहतर स्वास्थ्य जागरूकता का आपका प्रवेश द्वार',
    topBarNotice: 'जन स्वास्थ्य साक्षरता पहल: सत्यापित शैक्षिक सामग्री',
    emergencyText: 'आपातकालीन? तुरंत 112 / 911 डायल करें',
    
    // Navigation
    navHome: 'मुख्य पृष्ठ',
    navExplore: 'विषय देखें',
    navQuiz: 'स्वास्थ्य प्रश्नोत्तरी',
    navAbout: 'हमारे बारे में',
    searchPlaceholder: 'विषय खोजें (Ctrl+K)',
    takeQuizBtn: 'क्विज़ लें',
    
    // Common Actions
    backToExplore: 'विषय सूची पर वापस जाएं',
    shareGuide: 'गाइड साझा करें',
    linkCopied: 'लिंक कॉपी हो गया!',
    readFullGuide: 'पूरी गाइड पढ़ें',
    openGuide: 'सम्पूर्ण गाइड खोलें',
    testYourKnowledge: 'अपना ज्ञान परखें',
    
    // Topic Details
    keyClinicalFacts: 'प्रमुख नैदानिक तथ्य और सांख्यिकी',
    detailedSubtopicBreakdown: 'विस्तृत उप-विषय विवरण',
    preventionAndHomeCare: 'रोकथाम और घरेलू देखभाल गाइड',
    preventionTitle: 'रोकथाम और जोखिम में कमी',
    homeCareTitle: 'घरेलू देखभाल और प्रबंधन',
    clinicalWarning: 'नैदानिक चेतावनी / सावधानी',
    importantNote: 'महत्वपूर्ण नैदानिक नोट',
    
    // Plate Method
    diabetesPlateTitle: 'मधुमेह आहार चार्ट: 50–25–25 प्लेट विधि',
    diabetesPlateSubtitle: 'रक्त शर्करा को नियंत्रित रखने के लिए अमेरिकन डायबिटीज एसोसिएशन (ADA) द्वारा अनुशंसित सरल प्लेट विभाजन विधि।',
    plate50: '50% गैर-स्टार्च वाली सब्जियां',
    plate25Protein: '25% लीन प्रोटीन',
    plate25Carbs: '25% साबुत अनाज व कार्बोहाइड्रेट',
    plateWater: 'जलयोजन: पानी और बिना चीनी के पेय',
    
    // Footer
    footerDesc: 'बेहतर स्वास्थ्य जागरूकता का आपका प्रवेश द्वार। साक्ष्य-आधारित व्याख्याओं, दृश्य अंतर्दृष्टि और इंटरैक्टिव क्विज़ के माध्यम से स्वास्थ्य स्थितियों को सरल बनाना।',
    nonProfitBadge: 'गैर-लाभकारी डिजिटल स्वास्थ्य शिक्षा पोर्टल',
    quickLinks: 'त्वरित लिंक',
    coreConditions: 'प्रमुख स्वास्थ्य स्थितियां',
    stayInformed: 'अपडेट रहें',
    subscribeDigest: 'डाइजेस्ट सदस्यता लें',
    allRightsReserved: 'सर्वाधिकार सुरक्षित।',
    academicContext: 'श्री श्री कॉलेज ऑफ नर्सिंग द्वारा संचालित डिजिटल स्वास्थ्य पोर्टल शैक्षणिक परियोजना'
  }
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('hm_language') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('hm_language', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'en' ? 'hi' : 'en'));
  };

  const t = (key) => {
    return translations[language]?.[key] || translations.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, isHindi: language === 'hi' }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
