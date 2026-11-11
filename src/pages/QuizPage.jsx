import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Award,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  ArrowRight,
  Sparkles,
  Bookmark,
  Share2,
  Check,
  X,
  History,
  TrendingUp,
  Activity,
  Droplet,
  Layers,
  GraduationCap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { mcqQuestions, mythFactQuestions, performanceLevels } from '../data/quizData';
import { useLanguage } from '../context/LanguageContext';
import MedicalDisclaimer from '../components/MedicalDisclaimer';

export default function QuizPage() {
  const { isHindi } = useLanguage();
  // Quiz Modes: 'mcq' | 'myth-fact' | 'combined'
  const [quizMode, setQuizMode] = useState('mcq');
  const [topicFilter, setTopicFilter] = useState('All');

  // Filtered Question list
  const getQuestions = () => {
    if (quizMode === 'myth-fact') {
      return topicFilter === 'All'
        ? mythFactQuestions
        : mythFactQuestions.filter(q => q.topic.toLowerCase().includes(topicFilter.toLowerCase()));
    }

    if (quizMode === 'mcq') {
      return topicFilter === 'All'
        ? mcqQuestions
        : mcqQuestions.filter(q => q.topic.toLowerCase().includes(topicFilter.toLowerCase()));
    }

    // Combined
    const combined = [...mcqQuestions, ...mythFactQuestions];
    return topicFilter === 'All'
      ? combined
      : combined.filter(q => q.topic.toLowerCase().includes(topicFilter.toLowerCase()));
  };

  const [questions, setQuestions] = useState(mcqQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);

  // User answers map: { [questionId]: { selectedOption, isCorrect } }
  const [userAnswers, setUserAnswers] = useState({});
  const [quizCompleted, setQuizCompleted] = useState(false);

  // LocalStorage history state
  const [history, setHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('health_matters_quiz_history');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [lastScore, setLastScore] = useState(() => {
    try {
      const saved = localStorage.getItem('health_matters_latest_score');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  // Re-initialize questions when mode or topic filter changes
  useEffect(() => {
    const list = getQuestions();
    setQuestions(list);
    setCurrentIndex(0);
    setUserAnswers({});
    setQuizCompleted(false);
  }, [quizMode, topicFilter]);

  const currentQuestion = questions[currentIndex] || questions[0];
  const isAnswered = currentQuestion && userAnswers[currentQuestion.id] !== undefined;
  const currentAnswer = currentQuestion ? userAnswers[currentQuestion.id] : null;

  // Handle MCQ selection
  const handleSelectMcq = (optionIndex) => {
    if (isAnswered) return; // Prevent re-answering

    const isCorrect = optionIndex === currentQuestion.correctAnswer;
    const updated = {
      ...userAnswers,
      [currentQuestion.id]: {
        selected: optionIndex,
        isCorrect,
        type: 'mcq'
      }
    };
    setUserAnswers(updated);
  };

  // Handle Myth/Fact selection
  const handleSelectMythFact = (userSaidFact) => {
    if (isAnswered) return;

    const isCorrect = userSaidFact === currentQuestion.isFact;
    const updated = {
      ...userAnswers,
      [currentQuestion.id]: {
        selected: userSaidFact ? 'Fact' : 'Myth',
        isCorrect,
        type: 'myth-fact'
      }
    };
    setUserAnswers(updated);
  };

  // Navigation handlers
  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      finishQuiz();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  const finishQuiz = () => {
    setQuizCompleted(true);

    // Calculate score
    let correctCount = 0;
    questions.forEach(q => {
      if (userAnswers[q.id]?.isCorrect) {
        correctCount += 1;
      }
    });

    const total = questions.length;
    const percentage = Math.round((correctCount / total) * 100);

    const resultRecord = {
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
      mode: quizMode === 'mcq' ? 'MCQ Test' : quizMode === 'myth-fact' ? 'Myth vs Fact' : 'Combined Master Quiz',
      topic: topicFilter,
      score: correctCount,
      total,
      percentage
    };

    // Save to LocalStorage
    try {
      localStorage.setItem('health_matters_latest_score', JSON.stringify(resultRecord));
      const updatedHistory = [resultRecord, ...history.slice(0, 9)];
      localStorage.setItem('health_matters_quiz_history', JSON.stringify(updatedHistory));
      setLastScore(resultRecord);
      setHistory(updatedHistory);
    } catch (err) {
      console.warn('LocalStorage save failed:', err);
    }

    // Confetti celebration if 75%+
    if (percentage >= 75) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const restartQuiz = () => {
    setUserAnswers({});
    setCurrentIndex(0);
    setQuizCompleted(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Score statistics
  const answeredCount = Object.keys(userAnswers).length;
  const correctCount = Object.values(userAnswers).filter(a => a.isCorrect).length;
  const incorrectCount = answeredCount - correctCount;
  const currentPercentage = questions.length > 0 ? Math.round((correctCount / questions.length) * 100) : 0;

  const performance = performanceLevels.find(p => currentPercentage >= p.minPercent) || performanceLevels[3];

  return (
    <div className="space-y-12 pb-24">
      {/* 1. QUIZ HERO & MODE SELECTOR */}
      <section className="bg-gradient-to-b from-teal-50/70 via-white to-surface-50 pt-10 pb-12 border-b border-slate-200/70">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold uppercase tracking-wider">
              <GraduationCap className="w-3.5 h-3.5 text-teal-700" />
              <span>{isHindi ? 'श्री श्री कॉलेज ऑफ नर्सिंग • ज्ञान मूल्यांकन' : 'Sri Sri College of Nursing • Knowledge Assessment'}</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              {isHindi ? 'स्वास्थ्य जागरूकता प्रश्नोत्तरी' : 'Health Awareness Quiz'}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {isHindi
                ? 'रक्तचाप, मधुमेह और निर्जलीकरण पर अपने ज्ञान का परीक्षण करें। बहुविकल्पीय प्रश्नों और मिथक बनाम तथ्य चुनौतियों में से चुनें!'
                : 'Test your knowledge on Blood Pressure, Diabetes, and Dehydration. Select between Multiple Choice Questions and Myth vs. Fact challenges!'}
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <div className="bg-slate-100 p-1 rounded-2xl flex items-center border border-slate-200">
              <button
                onClick={() => setQuizMode('mcq')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  quizMode === 'mcq'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Category 1: MCQs ({mcqQuestions.length})
              </button>
              <button
                onClick={() => setQuizMode('myth-fact')}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  quizMode === 'myth-fact'
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Category 2: Myth or Fact ({mythFactQuestions.length})
              </button>
            </div>

            {/* Topic Filter dropdown */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-500">Topic:</span>
              <select
                value={topicFilter}
                onChange={(e) => setTopicFilter(e.target.value)}
                className="bg-white border border-slate-300 rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="All">All Topics</option>
                <option value="Blood Pressure">Blood Pressure</option>
                <option value="Diabetes">Diabetes</option>
                <option value="Dehydration">Dehydration</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN QUIZ CONTAINER */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {!quizCompleted ? (
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-card p-6 sm:p-10 space-y-8">
            {/* Quiz Progress Header */}
            <div>
              <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
                <span>
                  Question {currentIndex + 1} of {questions.length}
                </span>
                <span className="px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                  {currentQuestion?.topic}
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-teal-500 to-brand-500 h-full rounded-full transition-all duration-300"
                  style={{ width: `${((currentIndex + 1) / questions.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Question Box */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                {currentQuestion?.question || currentQuestion?.statement}
              </h2>
            </div>

            {/* CATEGORY 1: MCQ OPTIONS */}
            {quizMode === 'mcq' && (
              <div className="space-y-3">
                {currentQuestion?.options.map((option, idx) => {
                  const isSelected = currentAnswer?.selected === idx;
                  const isCorrect = idx === currentQuestion.correctAnswer;

                  let optionStyles = 'bg-slate-50 hover:bg-brand-50/70 border-slate-200 text-slate-800';
                  let icon = null;

                  if (isAnswered) {
                    if (isCorrect) {
                      optionStyles = 'bg-emerald-50 border-emerald-500 text-emerald-950 font-bold';
                      icon = <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />;
                    } else if (isSelected && !isCorrect) {
                      optionStyles = 'bg-rose-50 border-rose-500 text-rose-950 font-bold';
                      icon = <XCircle className="w-5 h-5 text-rose-600 shrink-0" />;
                    } else {
                      optionStyles = 'bg-slate-50 border-slate-200 text-slate-400 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleSelectMcq(idx)}
                      disabled={isAnswered}
                      className={`w-full p-4 rounded-2xl border text-left transition-all duration-200 flex items-center justify-between gap-3 cursor-pointer ${optionStyles}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                          isAnswered && isCorrect ? 'bg-emerald-200 text-emerald-900' : 'bg-white border border-slate-200 text-slate-700'
                        }`}>
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="text-sm sm:text-base leading-snug">{option}</span>
                      </div>
                      {icon}
                    </button>
                  );
                })}
              </div>
            )}

            {/* CATEGORY 2: MYTH OR FACT BUTTONS */}
            {quizMode === 'myth-fact' && (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {/* MYTH BUTTON */}
                  <button
                    onClick={() => handleSelectMythFact(false)}
                    disabled={isAnswered}
                    className={`p-6 rounded-2xl border-2 font-black text-lg transition-all flex flex-col items-center justify-center gap-2 cursor-pointer ${
                      isAnswered
                        ? !currentQuestion.isFact
                          ? 'bg-rose-50 border-rose-500 text-rose-800 shadow-sm'
                          : currentAnswer?.selected === 'Myth'
                          ? 'bg-rose-100 border-rose-600 text-rose-900'
                          : 'bg-slate-50 border-slate-200 text-slate-400 opacity-60'
                        : 'bg-white hover:bg-rose-50 border-slate-300 hover:border-rose-400 text-rose-700'
                    }`}
                  >
                    <X className="w-8 h-8 text-rose-600" />
                    <span>MYTH</span>
                  </button>

                  {/* FACT BUTTON */}
                  <button
                    onClick={() => handleSelectMythFact(true)}
                    disabled={isAnswered}
                    className={`p-6 rounded-2xl border-2 font-black text-lg transition-all flex flex-col items-center justify-center gap-2 cursor-pointer ${
                      isAnswered
                        ? currentQuestion.isFact
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-800 shadow-sm'
                          : currentAnswer?.selected === 'Fact'
                          ? 'bg-emerald-100 border-emerald-600 text-emerald-900'
                          : 'bg-slate-50 border-slate-200 text-slate-400 opacity-60'
                        : 'bg-white hover:bg-emerald-50 border-slate-300 hover:border-emerald-400 text-emerald-700'
                    }`}
                  >
                    <Check className="w-8 h-8 text-emerald-600" />
                    <span>FACT</span>
                  </button>
                </div>
              </div>
            )}

            {/* EXPLANATION BOX (Revealed after answering) */}
            {isAnswered && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`p-5 rounded-2xl border ${
                  currentAnswer.isCorrect
                    ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950'
                    : 'bg-amber-50/80 border-amber-300 text-amber-950'
                }`}
              >
                <div className="flex items-center gap-2 font-bold text-sm mb-1">
                  {currentAnswer.isCorrect ? (
                    <>
                      <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                      <span>Correct Answer!</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-5 h-5 text-amber-600" />
                      <span>
                        Incorrect. {quizMode === 'myth-fact' ? `The statement is actually a ${currentQuestion.verdict}!` : 'Review the medical explanation below:'}
                      </span>
                    </>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mt-2 bg-white/70 p-3.5 rounded-xl border border-slate-200/60">
                  <strong className="text-slate-900 block mb-0.5">Medical Explanation:</strong>
                  {currentQuestion.explanation}
                </p>
              </motion.div>
            )}

            {/* PREVIOUS / NEXT NAVIGATION CONTROLS */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 transition ${
                  currentIndex === 0
                    ? 'text-slate-300 cursor-not-allowed'
                    : 'text-slate-700 hover:bg-slate-100 border border-slate-200 cursor-pointer'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous</span>
              </button>

              <div className="text-xs text-slate-500 font-semibold">
                Answered: {answeredCount} / {questions.length}
              </div>

              <button
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-md shadow-teal-500/20 transition cursor-pointer"
              >
                <span>{currentIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* 3. CATEGORY 3: FINAL QUIZ SCORING & SUMMARY SCREEN */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl border border-slate-200/90 shadow-2xl p-6 sm:p-12 space-y-10"
          >
            {/* Top Score Banner */}
            <div className="text-center space-y-4 max-w-lg mx-auto">
              <div className="w-20 h-20 rounded-full bg-teal-50 border-2 border-teal-200 text-teal-600 flex items-center justify-center mx-auto text-3xl shadow-inner">
                <Award className="w-10 h-10 animate-bounce" />
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-200">
                  {performance.badge}
                </span>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-2">
                  {performance.title}
                </h2>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                  {performance.feedback}
                </p>
              </div>

              {/* Score Metric Circle/Card */}
              <div className="bg-gradient-to-br from-slate-50 to-teal-50/40 rounded-3xl p-6 border border-slate-200/80 grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-black text-teal-700">{currentPercentage}%</div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase mt-0.5">Score</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-emerald-600">{correctCount}</div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase mt-0.5">Correct</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-rose-500">{incorrectCount}</div>
                  <div className="text-[11px] font-bold text-slate-500 uppercase mt-0.5">Incorrect</div>
                </div>
              </div>
            </div>

            {/* Answer Breakdown Review List */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-3 flex items-center justify-between">
                <span>Detailed Question Review</span>
                <span className="text-xs text-slate-400 font-normal">Stored in LocalStorage</span>
              </h3>

              <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
                {questions.map((q, idx) => {
                  const ans = userAnswers[q.id];
                  const wasAnswered = ans !== undefined;
                  const wasCorrect = ans?.isCorrect;

                  return (
                    <div
                      key={q.id}
                      className={`p-4 rounded-2xl border text-sm space-y-2 ${
                        wasCorrect ? 'bg-emerald-50/50 border-emerald-200' : 'bg-rose-50/50 border-rose-200'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span className="font-bold text-slate-800">
                          {idx + 1}. {q.question || q.statement}
                        </span>
                        {wasCorrect ? (
                          <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 shrink-0">
                            Correct
                          </span>
                        ) : (
                          <span className="text-xs px-2.5 py-0.5 rounded-full font-bold bg-rose-100 text-rose-800 border border-rose-300 shrink-0">
                            Incorrect
                          </span>
                        )}
                      </div>

                      <div className="text-xs text-slate-600">
                        <strong>Correct Answer:</strong>{' '}
                        <span className="text-slate-800 font-semibold">
                          {q.options ? q.options[q.correctAnswer] : q.verdict}
                        </span>
                      </div>

                      <p className="text-xs text-slate-500 bg-white/70 p-2.5 rounded-xl border border-slate-200/50">
                        {q.explanation}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Action Buttons: Restart & Explore */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4 border-t border-slate-100">
              <button
                onClick={restartQuiz}
                className="px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-sm shadow-md transition flex items-center gap-2 cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Restart Quiz</span>
              </button>

              <button
                onClick={() => {
                  setQuizMode(quizMode === 'mcq' ? 'myth-fact' : 'mcq');
                  restartQuiz();
                }}
                className="px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition flex items-center gap-2 cursor-pointer"
              >
                <Layers className="w-4 h-4" />
                <span>Try {quizMode === 'mcq' ? 'Myth vs Fact' : 'MCQs'} Mode</span>
              </button>
            </div>
          </motion.div>
        )}
      </section>

      {/* 4. LOCALSTORAGE QUIZ HISTORY SECTION */}
      {history.length > 0 && (
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <History className="w-5 h-5 text-teal-600" />
                <h3 className="text-base font-bold text-slate-900">Your Recent Quiz Attempts</h3>
              </div>
              <span className="text-xs text-slate-400">Saved in browser LocalStorage</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 uppercase tracking-wider bg-slate-50">
                    <th className="p-3">Date</th>
                    <th className="p-3">Category</th>
                    <th className="p-3">Topic Filter</th>
                    <th className="p-3">Score</th>
                    <th className="p-3">Percentage</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {history.map((item, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/60">
                      <td className="p-3 text-slate-600">{item.date}</td>
                      <td className="p-3 font-semibold text-slate-800">{item.mode}</td>
                      <td className="p-3 text-slate-600">{item.topic}</td>
                      <td className="p-3 font-bold text-teal-700">
                        {item.score} / {item.total}
                      </td>
                      <td className="p-3">
                        <span className={`px-2 py-0.5 rounded-full font-bold ${
                          item.percentage >= 75 ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                        }`}>
                          {item.percentage}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* 5. MEDICAL DISCLAIMER BANNER */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <MedicalDisclaimer variant="banner" />
      </div>
    </div>
  );
}
