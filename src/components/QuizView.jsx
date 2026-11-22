import React, { useState, useMemo } from 'react';
import { 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  XCircle, 
  BookMarked, 
  Bookmark, 
  RotateCcw, 
  Sparkles, 
  HelpCircle,
  Filter,
  Check,
  AlertCircle
} from 'lucide-react';
import { CATEGORIES } from '../data/categories';

export default function QuizView({ 
  questions, 
  userAnswers, 
  setUserAnswers, 
  bookmarkedIds, 
  toggleBookmark,
  onRecordMistake
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  // Filter questions by category
  const filteredQuestions = useMemo(() => {
    if (selectedCategory === 'all') return questions;
    return questions.filter(q => q.category === selectedCategory);
  }, [questions, selectedCategory]);

  const currentQ = filteredQuestions[currentIndex] || filteredQuestions[0];
  const totalInFilter = filteredQuestions.length;

  const currentAnswer = currentQ ? userAnswers[currentQ.id] : undefined;
  const isAnswered = currentAnswer !== undefined;
  const isBookmarked = currentQ ? bookmarkedIds.includes(currentQ.id) : false;

  const handleSelectOption = (index) => {
    if (isAnswered || !currentQ) return;
    
    const isCorrect = index === currentQ.correctAnswer;
    const newAnswers = {
      ...userAnswers,
      [currentQ.id]: {
        selected: index,
        isCorrect: isCorrect,
        answeredAt: new Date().toISOString()
      }
    };
    setUserAnswers(newAnswers);
    setShowExplanation(true);

    if (!isCorrect && onRecordMistake) {
      onRecordMistake(currentQ.id);
    }
  };

  const handleNext = () => {
    if (currentIndex < totalInFilter - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowExplanation(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowExplanation(false);
    }
  };

  const handleCategoryChange = (catId) => {
    setSelectedCategory(catId);
    setCurrentIndex(0);
    setShowExplanation(false);
  };

  const optionLetters = ['A', 'B', 'C', 'D'];

  if (!currentQ) {
    return (
      <div className="py-16 text-center">
        <p className="text-slate-500">Bu kategoride henüz soru bulunmamaktadır.</p>
        <button 
          onClick={() => setSelectedCategory('all')}
          className="mt-4 px-4 py-2 bg-brand-600 text-white rounded-lg text-sm"
        >
          Tüm Soruları Göster
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Category Pills Slider */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 pt-1 scrollbar-none">
        {CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => handleCategoryChange(cat.id)}
              className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                isSelected
                  ? 'bg-brand-800 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700/60 border border-slate-200/80 dark:border-slate-700'
              }`}
            >
              {cat.shortName}
            </button>
          );
        })}
      </div>

      {/* Question Card Container */}
      <div className="bg-white dark:bg-slate-800/95 border border-slate-200/90 dark:border-slate-700/80 rounded-2xl shadow-xs overflow-hidden transition-all">
        {/* Card Header */}
        <div className="px-6 py-4 bg-slate-50/70 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-brand-100/80 text-brand-800 dark:bg-brand-950 dark:text-brand-300">
              {currentQ.articleRef || 'Mevzuat'}
            </span>
            <span className="text-xs px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
              {currentQ.difficulty || 'Standart'}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            {/* Bookmark Button */}
            <button
              onClick={() => toggleBookmark(currentQ.id)}
              className={`p-1.5 rounded-lg transition-colors ${
                isBookmarked
                  ? 'text-amber-500 bg-amber-50 dark:bg-amber-950/60'
                  : 'text-slate-400 hover:text-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
              title={isBookmarked ? 'Favorilerden çıkar' : 'Favorilere ekle'}
            >
              {isBookmarked ? <BookMarked className="w-5 h-5 fill-amber-500" /> : <Bookmark className="w-5 h-5" />}
            </button>

            {/* Question Counter */}
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Soru <span className="font-semibold text-slate-800 dark:text-slate-200">{currentIndex + 1}</span> / {totalInFilter}
            </div>
          </div>
        </div>

        {/* Question Text */}
        <div className="p-6 sm:p-8">
          <h2 className="text-base sm:text-lg font-medium text-slate-800 dark:text-slate-100 leading-relaxed font-sans">
            {currentQ.question}
          </h2>

          {/* Options List */}
          <div className="mt-6 space-y-3">
            {currentQ.options.map((option, idx) => {
              const isSelected = currentAnswer?.selected === idx;
              const isCorrectOption = idx === currentQ.correctAnswer;
              
              let optionStyle = 'border-slate-200 dark:border-slate-700 hover:border-brand-400 dark:hover:border-brand-600 bg-white dark:bg-slate-800/80 text-slate-700 dark:text-slate-200';
              let badgeStyle = 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300';

              if (isAnswered) {
                if (isCorrectOption) {
                  optionStyle = 'border-emerald-500 bg-emerald-50/70 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100 ring-1 ring-emerald-500';
                  badgeStyle = 'bg-emerald-500 text-white font-bold';
                } else if (isSelected && !isCorrectOption) {
                  optionStyle = 'border-rose-400 bg-rose-50/70 dark:bg-rose-950/40 text-rose-900 dark:text-rose-100 ring-1 ring-rose-400';
                  badgeStyle = 'bg-rose-500 text-white font-bold';
                } else {
                  optionStyle = 'opacity-60 border-slate-200 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/30 text-slate-500';
                }
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleSelectOption(idx)}
                  disabled={isAnswered}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-start space-x-3.5 group cursor-pointer disabled:cursor-default ${optionStyle}`}
                >
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-semibold shrink-0 transition-colors ${badgeStyle}`}>
                    {optionLetters[idx]}
                  </span>
                  <span className="text-sm sm:text-base leading-snug pt-0.5 flex-1 font-normal">
                    {option}
                  </span>
                  {isAnswered && isCorrectOption && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  )}
                  {isAnswered && isSelected && !isCorrectOption && (
                    <XCircle className="w-5 h-5 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Explanation Box (Visible once answered) */}
          {isAnswered && (
            <div className="mt-6 p-5 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/90 dark:border-slate-700/80 animate-in fade-in duration-300">
              <div className="flex items-center space-x-2 text-brand-800 dark:text-brand-300 font-semibold text-sm mb-2">
                <Sparkles className="w-4 h-4 text-brand-600" />
                <span>Gerekçeli Mevzuat Çözümü ({currentQ.articleRef})</span>
              </div>
              <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {currentQ.explanation}
              </p>
              {!currentAnswer?.isCorrect && (
                <div className="mt-3 flex items-center space-x-1.5 text-xs text-rose-600 dark:text-rose-400">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Bu soru otomatik olarak <strong>"Yanlışlarım"</strong> havuzuna kaydedildi.</span>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Card Footer Navigation */}
        <div className="px-6 py-4 bg-slate-50/70 dark:bg-slate-800/50 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex items-center space-x-1 px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200/70 dark:hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Önceki Soru</span>
          </button>

          <div className="text-xs text-slate-400 dark:text-slate-500 hidden sm:block">
            {isAnswered ? (currentAnswer?.isCorrect ? '✅ Doğru Cevap' : '❌ Yanlış Cevap') : 'Cevabınızı seçin'}
          </div>

          <button
            onClick={handleNext}
            disabled={currentIndex === totalInFilter - 1}
            className="flex items-center space-x-1 px-4 py-2 rounded-lg text-sm font-medium bg-brand-700 hover:bg-brand-800 text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors shadow-xs"
          >
            <span>Sonraki Soru</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
