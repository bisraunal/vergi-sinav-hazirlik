import React from 'react';
import { BookOpen, Moon, Sun, Award, Flame, Calendar } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, darkMode, setDarkMode, stats, examDate }) {
  // Calculate days left to exam if set
  const calculateDaysLeft = () => {
    if (!examDate) return null;
    const today = new Date();
    const target = new Date(examDate);
    const diffTime = target - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const daysLeft = calculateDaysLeft();

  const navItems = [
    { id: 'quiz', label: 'Soru Bankası' },
    { id: 'flashcards', label: 'Hap Bilgiler' },
    { id: 'mock', label: 'Deneme Sınavı' },
    { id: 'mistakes', label: 'Yanlışlarım', badge: stats?.mistakesCount || 0 },
    { id: 'stats', label: 'Gelişim' }
  ];

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand */}
          <div 
            onClick={() => setActiveTab('quiz')} 
            className="flex items-center space-x-3 cursor-pointer group select-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-700 to-brand-500 flex items-center justify-center text-white shadow-sm shadow-brand-500/20 group-hover:scale-105 transition-transform">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-semibold text-lg tracking-tight text-slate-900 dark:text-white">VergiRehber</span>
                <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-brand-100 dark:bg-brand-950 text-brand-700 dark:text-brand-300">
                  Müdür Yrd.
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">GİB Görevde Yükselme Hazırlık</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`relative px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === item.id
                    ? 'text-brand-700 dark:text-brand-300 bg-brand-50/80 dark:bg-brand-950/60 shadow-xs'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100/70 dark:hover:bg-slate-800/60'
                }`}
              >
                {item.label}
                {item.badge > 0 && (
                  <span className="ml-1.5 px-1.5 py-0.2 rounded-full text-[11px] font-bold bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300">
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* Right Badges & Controls */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Days Left Countdown Badge */}
            {daysLeft !== null ? (
              <div className="flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-900/60 text-amber-800 dark:text-amber-300 text-xs font-medium">
                <Calendar className="w-3.5 h-3.5" />
                <span>{daysLeft} gün kaldı</span>
              </div>
            ) : null}

            {/* Daily Streak Indicator */}
            <div className="hidden sm:flex items-center space-x-1 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900/60 text-emerald-800 dark:text-emerald-300 text-xs font-medium">
              <Flame className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              <span>{stats?.streak || 1} Gün</span>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              title={darkMode ? 'Gündüz Modu' : 'Gece Modu'}
              className="p-2 rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Sub Navigation bar */}
        <div className="flex md:hidden overflow-x-auto py-2 space-x-2 scrollbar-none border-t border-slate-100 dark:border-slate-800">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === item.id
                  ? 'text-brand-700 dark:text-brand-300 bg-brand-50 dark:bg-brand-950'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {item.label}
              {item.badge > 0 && (
                <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] bg-rose-100 text-rose-700 dark:bg-rose-900 dark:text-rose-200">
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
