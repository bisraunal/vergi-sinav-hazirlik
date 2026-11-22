import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import QuizView from './components/QuizView';
import FlashcardsView from './components/FlashcardsView';
import MockExamView from './components/MockExamView';
import MistakesView from './components/MistakesView';
import StatsView from './components/StatsView';

import { QUESTIONS } from './data/questions';
import { FLASHCARDS } from './data/flashcards';

export default function App() {
  // State from LocalStorage
  const [activeTab, setActiveTab] = useState('quiz');
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('vr_dark_mode') === 'true';
  });
  const [userAnswers, setUserAnswers] = useState(() => {
    try {
      const saved = localStorage.getItem('vr_answers');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });
  const [bookmarkedIds, setBookmarkedIds] = useState(() => {
    try {
      const saved = localStorage.getItem('vr_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [mistakeIds, setMistakeIds] = useState(() => {
    try {
      const saved = localStorage.getItem('vr_mistakes');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [examDate, setExamDate] = useState(() => {
    return localStorage.getItem('vr_exam_date') || '';
  });

  // Sync dark mode class with html element
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('vr_dark_mode', darkMode);
  }, [darkMode]);

  // Persist user answers
  useEffect(() => {
    localStorage.setItem('vr_answers', JSON.stringify(userAnswers));
  }, [userAnswers]);

  // Persist bookmarks
  useEffect(() => {
    localStorage.setItem('vr_bookmarks', JSON.stringify(bookmarkedIds));
  }, [bookmarkedIds]);

  // Persist mistakes
  useEffect(() => {
    localStorage.setItem('vr_mistakes', JSON.stringify(mistakeIds));
  }, [mistakeIds]);

  // Persist exam date
  useEffect(() => {
    localStorage.setItem('vr_exam_date', examDate);
  }, [examDate]);

  // Record a question as mistake
  const handleRecordMistake = (qId) => {
    setMistakeIds(prev => {
      if (!prev.includes(qId)) {
        return [...prev, qId];
      }
      return prev;
    });
  };

  // Remove a mistake from the pool
  const handleRemoveMistake = (qId) => {
    setMistakeIds(prev => prev.filter(id => id !== qId));
  };

  // Clear all mistakes
  const handleClearAllMistakes = () => {
    if (window.confirm('Hata havuzundaki tüm soruları temizlemek istediğinize emin misiniz?')) {
      setMistakeIds([]);
    }
  };

  // Toggle bookmark
  const toggleBookmark = (qId) => {
    setBookmarkedIds(prev => 
      prev.includes(qId) ? prev.filter(id => id !== qId) : [...prev, qId]
    );
  };

  // Reset all progress
  const handleResetProgress = () => {
    if (window.confirm('Tüm çözülen sorular, cevaplar ve istatistikler sıfırlanacak. Emin misiniz?')) {
      setUserAnswers({});
      setMistakeIds([]);
      setBookmarkedIds([]);
      localStorage.removeItem('vr_answers');
      localStorage.removeItem('vr_mistakes');
      localStorage.removeItem('vr_bookmarks');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors font-sans">
      {/* Top Navbar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        stats={{ mistakesCount: mistakeIds.length, streak: 1 }}
        examDate={examDate}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {activeTab === 'quiz' && (
          <QuizView
            questions={QUESTIONS}
            userAnswers={userAnswers}
            setUserAnswers={setUserAnswers}
            bookmarkedIds={bookmarkedIds}
            toggleBookmark={toggleBookmark}
            onRecordMistake={handleRecordMistake}
          />
        )}

        {activeTab === 'flashcards' && (
          <FlashcardsView flashcards={FLASHCARDS} />
        )}

        {activeTab === 'mock' && (
          <MockExamView 
            questions={QUESTIONS} 
            onRecordMistake={handleRecordMistake}
          />
        )}

        {activeTab === 'mistakes' && (
          <MistakesView
            questions={QUESTIONS}
            mistakeIds={mistakeIds}
            onRemoveMistake={handleRemoveMistake}
            onClearAllMistakes={handleClearAllMistakes}
            onStartMistakesQuiz={() => setActiveTab('quiz')}
          />
        )}

        {activeTab === 'stats' && (
          <StatsView
            questions={QUESTIONS}
            userAnswers={userAnswers}
            mistakeIds={mistakeIds}
            examDate={examDate}
            setExamDate={setExamDate}
            onResetProgress={handleResetProgress}
          />
        )}
      </main>

      {/* Zen Minimal Footer */}
      <footer className="py-6 border-t border-slate-200/80 dark:border-slate-800 text-center text-xs text-slate-400 dark:text-slate-500">
        <p>Vergi Dairesi Müdür Yardımcılığı Sınavı Hazırlık Platformu • Başarılar Dileriz</p>
      </footer>
    </div>
  );
}
