import React, { useState } from 'react';
import { AlertCircle, CheckCircle2, RotateCcw, Trash2, ArrowRight, BookOpen } from 'lucide-react';

export default function MistakesView({ 
  questions, 
  mistakeIds, 
  onRemoveMistake, 
  onClearAllMistakes,
  onStartMistakesQuiz 
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const mistakeQuestions = questions.filter(q => mistakeIds.includes(q.id));
  const filteredMistakes = mistakeQuestions.filter(q => 
    selectedCategory === 'all' ? true : q.category === selectedCategory
  );

  if (mistakeQuestions.length === 0) {
    return (
      <div className="py-20 text-center max-w-md mx-auto">
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-lg font-semibold text-slate-800 dark:text-white">
          Harika! Yanlış havuzunuz tertemiz.
        </h3>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Soru çözerken yanlış yaptığınız sorular otomatik olarak buraya toplanır ve aralıklı tekrarla pekiştirmenizi sağlar.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header Banner */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-rose-500/10 via-amber-500/10 to-transparent border border-rose-200 dark:border-rose-900/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-rose-700 dark:text-rose-400 font-semibold text-sm">
            <AlertCircle className="w-4 h-4" />
            <span>Akıllı Tekrar Havuzu</span>
          </div>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-1">
            Toplam {mistakeQuestions.length} Yanlış Soru
          </h2>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
            Bu soruları tekrar çözerek kanun maddelerini tam olarak pekiştirebilirsiniz.
          </p>
        </div>

        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <button
            onClick={onStartMistakesQuiz}
            className="flex-1 sm:flex-none flex items-center justify-center space-x-2 px-4 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white font-medium text-sm shadow-xs transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Yanlışlarımı Çöz</span>
          </button>
          
          <button
            onClick={onClearAllMistakes}
            className="px-3 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 text-sm transition-colors"
            title="Tümünü Temizle"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Mistake Questions List */}
      <div className="space-y-4">
        {filteredMistakes.map((q, index) => (
          <div 
            key={q.id}
            className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/90 dark:border-slate-700/80 shadow-xs space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-rose-50 text-rose-700 dark:bg-rose-950 dark:text-rose-300">
                {q.articleRef}
              </span>
              <button
                onClick={() => onRemoveMistake(q.id)}
                className="text-xs text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center space-x-1"
                title="Bu soruyu öğrendim, listeden çıkar"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Öğrendim</span>
              </button>
            </div>

            <p className="text-sm font-medium text-slate-800 dark:text-slate-100">
              {q.question}
            </p>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-900/40 text-xs text-slate-600 dark:text-slate-300 leading-relaxed border border-slate-100 dark:border-slate-700/60">
              <strong className="text-emerald-700 dark:text-emerald-400 block mb-1">
                Doğru Cevap: {q.options[q.correctAnswer]}
              </strong>
              {q.explanation}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
