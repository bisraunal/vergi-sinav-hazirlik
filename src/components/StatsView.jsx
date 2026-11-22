import React, { useState } from 'react';
import { 
  BarChart3, 
  Target, 
  Flame, 
  Calendar, 
  CheckCircle, 
  AlertCircle, 
  RotateCcw,
  BookOpen,
  Award,
  Sparkles
} from 'lucide-react';
import { CATEGORIES } from '../data/categories';

export default function StatsView({ 
  questions, 
  userAnswers, 
  mistakeIds, 
  examDate, 
  setExamDate, 
  onResetProgress 
}) {
  const [targetDateInput, setTargetDateInput] = useState(examDate || '');

  // Calculate statistics
  const totalQuestions = questions.length;
  const answeredEntries = Object.values(userAnswers);
  const totalAnswered = answeredEntries.length;
  const correctCount = answeredEntries.filter(a => a.isCorrect).length;
  const accuracy = totalAnswered > 0 ? Math.round((correctCount / totalAnswered) * 100) : 0;

  // Breakdown by category
  const categoryStats = CATEGORIES.filter(c => c.id !== 'all').map(cat => {
    const catQuestions = questions.filter(q => q.category === cat.id);
    const catTotal = catQuestions.length;
    let catAnswered = 0;
    let catCorrect = 0;

    catQuestions.forEach(q => {
      const ans = userAnswers[q.id];
      if (ans) {
        catAnswered++;
        if (ans.isCorrect) catCorrect++;
      }
    });

    const catAccuracy = catAnswered > 0 ? Math.round((catCorrect / catAnswered) * 100) : 0;
    const catProgress = catTotal > 0 ? Math.round((catAnswered / catTotal) * 100) : 0;

    return {
      ...cat,
      total: catTotal,
      answered: catAnswered,
      correct: catCorrect,
      accuracy: catAccuracy,
      progress: catProgress
    };
  });

  const handleSaveDate = (e) => {
    e.preventDefault();
    setExamDate(targetDateInput);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Top Welcome / Motivation Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-900 to-slate-900 text-white shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <div className="flex items-center space-x-2 text-brand-300 text-xs font-semibold uppercase tracking-wider mb-1">
            <Sparkles className="w-4 h-4" />
            <span>Sınav Hazırlık İlerlemesi</span>
          </div>
          <h2 className="text-2xl font-bold">Hedef: Vergi Dairesi Müdür Yardımcılığı</h2>
          <p className="mt-2 text-sm text-slate-300 max-w-lg leading-relaxed">
            "Düzenli ve disiplinli tekrar, mevzuat sınavlarının en büyük anahtarıdır. Her gün 20 soru bile büyük fark yaratır."
          </p>
        </div>

        {/* Exam Date Setting Box */}
        <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm border border-white/10 w-full sm:w-auto text-center shrink-0">
          <form onSubmit={handleSaveDate} className="space-y-2">
            <div className="text-xs text-brand-200 font-medium flex items-center justify-center space-x-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>Sınav Tarihi Belirle</span>
            </div>
            <input 
              type="date"
              value={targetDateInput}
              onChange={(e) => setTargetDateInput(e.target.value)}
              className="w-full text-xs px-2.5 py-1.5 rounded-lg bg-slate-900/80 text-white border border-white/20 focus:outline-none"
            />
            <button 
              type="submit"
              className="w-full px-2.5 py-1 text-xs bg-brand-500 hover:bg-brand-400 rounded-lg font-medium transition-colors"
            >
              Kaydet
            </button>
          </form>
        </div>
      </div>

      {/* KPI Stats Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-xs">
          <span className="text-xs text-slate-400 font-medium">Çözülen Soru</span>
          <div className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mt-1">
            {totalAnswered} <span className="text-sm font-normal text-slate-400">/ {totalQuestions}</span>
          </div>
          <div className="mt-2 text-[11px] text-slate-500">
            %{Math.round((totalAnswered / (totalQuestions || 1)) * 100)} Tamamlandı
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-xs">
          <span className="text-xs text-slate-400 font-medium">Genel Doğruluk</span>
          <div className="text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">
            %{accuracy}
          </div>
          <div className="mt-2 text-[11px] text-slate-500">
            {correctCount} Doğru Yanıt
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-xs">
          <span className="text-xs text-slate-400 font-medium">Hata Havuzu</span>
          <div className="text-2xl sm:text-3xl font-bold text-rose-600 dark:text-rose-400 mt-1">
            {mistakeIds.length}
          </div>
          <div className="mt-2 text-[11px] text-slate-500">
            Tekrar Edilecek Soru
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-xs">
          <span className="text-xs text-slate-400 font-medium">Mevzuat Alanı</span>
          <div className="text-2xl sm:text-3xl font-bold text-brand-700 dark:text-brand-300 mt-1">
            {categoryStats.length}
          </div>
          <div className="mt-2 text-[11px] text-slate-500">
            Aktif Kanun Modülü
          </div>
        </div>
      </div>

      {/* Category Breakdown Progress */}
      <div className="p-6 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-xs space-y-5">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-brand-600" />
            <span>Kanun ve Konu Bazlı Başarı Analizi</span>
          </h3>
        </div>

        <div className="space-y-4">
          {categoryStats.map(cat => (
            <div key={cat.id} className="space-y-1.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-800 dark:text-slate-200">
                  {cat.name}
                </span>
                <span className="text-slate-500">
                  {cat.answered} / {cat.total} Soru • <strong className="text-emerald-600">%{cat.accuracy} Doğruluk</strong>
                </span>
              </div>
              
              {/* Dual progress bar (grey background, blue answered, green correct) */}
              <div className="h-2.5 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden flex">
                <div 
                  className="bg-emerald-500 h-full transition-all duration-500" 
                  style={{ width: `${(cat.correct / (cat.total || 1)) * 100}%` }}
                  title={`Doğru: ${cat.correct}`}
                />
                <div 
                  className="bg-rose-400/80 h-full transition-all duration-500" 
                  style={{ width: `${((cat.answered - cat.correct) / (cat.total || 1)) * 100}%` }}
                  title={`Yanlış: ${cat.answered - cat.correct}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reset Progress Section */}
      <div className="pt-4 border-t border-slate-200 dark:border-slate-700 flex justify-end">
        <button
          onClick={onResetProgress}
          className="flex items-center space-x-1.5 text-xs text-slate-400 hover:text-rose-600 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Tüm İlerlemeyi Sıfırla</span>
        </button>
      </div>
    </div>
  );
}
