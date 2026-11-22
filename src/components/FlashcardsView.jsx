import React, { useState } from 'react';
import { RotateCw, CheckCircle, Clock, Lightbulb, ChevronLeft, ChevronRight, Layers, Search } from 'lucide-react';
import { CATEGORIES } from '../data/categories';

export default function FlashcardsView({ flashcards }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [learnedIds, setLearnedIds] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCards = flashcards.filter(c => {
    const matchesCat = selectedCategory === 'all' ? true : c.category === selectedCategory;
    if (!matchesCat) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        c.title.toLowerCase().includes(q) ||
        c.front.toLowerCase().includes(q) ||
        c.back.toLowerCase().includes(q) ||
        (c.tip && c.tip.toLowerCase().includes(q))
      );
    }
    return true;
  });

  const currentCard = filteredCards[currentIndex] || filteredCards[0];
  const total = filteredCards.length;

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex < total - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const toggleLearned = (id) => {
    if (learnedIds.includes(id)) {
      setLearnedIds(learnedIds.filter(item => item !== id));
    } else {
      setLearnedIds([...learnedIds, id]);
    }
  };

  const isCurrentLearned = currentCard ? learnedIds.includes(currentCard.id) : false;

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {/* Search Input for Flashcards */}
      <div className="relative">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input 
          type="text"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentIndex(0);
            setIsFlipped(false);
          }}
          placeholder="Hap bilgi veya süre ara (örn: harcırah, mali tatil, tecil, 5 yıl, VİV)..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-xs sm:text-sm text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500 shadow-xs"
        />
        {searchQuery && (
          <button 
            onClick={() => { setSearchQuery(''); setCurrentIndex(0); setIsFlipped(false); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            Temizle
          </button>
        )}
      </div>

      {/* Category Pills */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              setSelectedCategory(cat.id);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
              selectedCategory === cat.id
                ? 'bg-brand-800 text-white shadow-sm'
                : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 border border-slate-200/80 dark:border-slate-700'
            }`}
          >
            {cat.shortName}
          </button>
        ))}
      </div>

      {/* Progress & Status */}
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
        <div className="flex items-center space-x-1.5">
          <Layers className="w-4 h-4 text-brand-600" />
          <span>Hap Bilgi Kartı <strong>{currentIndex + 1}</strong> / {total}</span>
        </div>
        <div className="flex items-center space-x-1 text-emerald-600 dark:text-emerald-400 font-medium">
          <CheckCircle className="w-3.5 h-3.5" />
          <span>{learnedIds.length} Kart Öğrenildi</span>
        </div>
      </div>

      {/* 3D-Like Flashcard Card */}
      {currentCard && (
        <div 
          onClick={() => setIsFlipped(!isFlipped)}
          className={`cursor-pointer min-h-[320px] sm:min-h-[340px] p-8 rounded-2xl border transition-all duration-300 select-none flex flex-col justify-between shadow-xs ${
            isFlipped
              ? 'bg-gradient-to-br from-brand-900 to-slate-900 text-white border-brand-800'
              : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-brand-300 text-slate-800 dark:text-slate-100'
          }`}
        >
          {/* Card Top Header */}
          <div className="flex items-center justify-between">
            <span className={`text-xs px-2.5 py-1 rounded-md font-semibold ${
              isFlipped 
                ? 'bg-white/10 text-brand-200' 
                : 'bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300'
            }`}>
              {currentCard.badge}
            </span>
            <div className="flex items-center space-x-1 text-xs opacity-75">
              <RotateCw className="w-3.5 h-3.5" />
              <span>{isFlipped ? 'Soruya Dön' : 'Cevabı Gör (Tıkla)'}</span>
            </div>
          </div>

          {/* Card Body */}
          <div className="my-auto py-6">
            {!isFlipped ? (
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-normal leading-relaxed text-slate-800 dark:text-white">
                  {currentCard.front}
                </h3>
                <p className="mt-3 text-xs text-slate-400">
                  Kartı çevirmek ve çözümü görmek için herhangi bir yere tıklayın.
                </p>
              </div>
            ) : (
              <div className="animate-in fade-in duration-200">
                <div className="text-lg sm:text-xl font-medium leading-relaxed whitespace-pre-line text-emerald-200">
                  {currentCard.back}
                </div>
                {currentCard.tip && (
                  <div className="mt-5 p-3 rounded-xl bg-white/10 border border-white/10 flex items-start space-x-2 text-xs text-amber-200">
                    <Lightbulb className="w-4 h-4 shrink-0 mt-0.5 text-amber-300" />
                    <span>{currentCard.tip}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Card Bottom Meta */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700/60">
            <span className="text-xs text-slate-400 dark:text-slate-500 font-medium">
              {currentCard.title}
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleLearned(currentCard.id);
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                isCurrentLearned
                  ? 'bg-emerald-500 text-white'
                  : isFlipped
                    ? 'bg-white/20 text-white hover:bg-white/30'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {isCurrentLearned ? '✓ Öğrenildi' : 'Öğrenildi Olarak İşaretle'}
            </button>
          </div>
        </div>
      )}

      {/* Control Buttons */}
      <div className="flex items-center justify-between px-2">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="flex items-center space-x-1.5 px-4 py-2 rounded-xl text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-40"
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Önceki Kart</span>
        </button>

        <button
          onClick={handleNext}
          disabled={currentIndex === total - 1}
          className="flex items-center space-x-1.5 px-5 py-2.5 rounded-xl text-sm font-medium bg-brand-700 hover:bg-brand-800 text-white disabled:opacity-40 shadow-xs"
        >
          <span>Sonraki Kart</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
