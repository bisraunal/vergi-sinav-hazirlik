import React, { useState, useEffect } from 'react';
import { 
  Clock, 
  CheckCircle, 
  XCircle, 
  Award, 
  RotateCcw, 
  AlertTriangle, 
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  HelpCircle,
  Zap,
  Target,
  Flame,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function MockExamView({ questions, onRecordMistake }) {
  const [examActive, setExamActive] = useState(false);
  const [examQuestions, setExamQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(6000); // 100 minutes (6000s) default
  const [totalTime, setTotalTime] = useState(6000);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedCount, setSelectedCount] = useState(80); // Default to official 80 questions

  // Timer effect
  useEffect(() => {
    let timer;
    if (examActive && !isFinished && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && examActive && !isFinished) {
      handleFinishExam();
    }
    return () => clearInterval(timer);
  }, [examActive, isFinished, timeLeft]);

  // Fisher-Yates robust shuffle algorithm to prevent question repetition
  const shuffleArray = (array) => {
    const copy = [...array];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  };

  const startExam = (count = 80) => {
    const qCount = Math.min(count, questions.length);
    const shuffled = shuffleArray(questions).slice(0, qCount);
    
    // Official timing:
    // 80 Soru -> 100 Dakika (Resmi GİB/MEB Sınavı)
    // 50 Soru -> 60 Dakika (Hızlı Deneme)
    // 100 Soru -> 120 Dakika (Kapsamlı Simülasyon)
    let minutes = 100;
    if (count === 50) minutes = 60;
    else if (count === 100) minutes = 120;
    else if (count === 80) minutes = 100;
    else minutes = Math.round(count * 1.25);

    const totalSeconds = minutes * 60;

    setExamQuestions(shuffled);
    setCurrentIdx(0);
    setAnswers({});
    setTimeLeft(totalSeconds);
    setTotalTime(totalSeconds);
    setIsFinished(false);
    setExamActive(true);
  };

  const handleSelect = (optionIdx) => {
    if (isFinished) return;
    setAnswers({
      ...answers,
      [examQuestions[currentIdx].id]: optionIdx
    });
  };

  const handleFinishExam = () => {
    setIsFinished(true);

    // Record mistakes
    examQuestions.forEach(q => {
      const selected = answers[q.id];
      if (selected !== undefined && selected !== q.correctAnswer) {
        if (onRecordMistake) onRecordMistake(q.id);
      }
    });

    // Calculate score (GİB kuralı: Yanlış doğruyu götürmez, doğrudan doğru sayısı / soru sayısı * 100)
    let correct = 0;
    examQuestions.forEach(q => {
      if (answers[q.id] === q.correctAnswer) correct++;
    });

    const score = Math.round((correct / examQuestions.length) * 100);
    if (score >= 70) {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const optionLetters = ['A', 'B', 'C', 'D'];

  // Pre-exam Start Screen
  if (!examActive) {
    return (
      <div className="max-w-3xl mx-auto py-8 px-4 text-center space-y-8">
        <div>
          <div className="w-16 h-16 rounded-2xl bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 flex items-center justify-center mx-auto mb-4 shadow-xs">
            <Award className="w-8 h-8" />
          </div>
          <div className="inline-block px-3 py-1 rounded-full bg-brand-100 text-brand-800 dark:bg-brand-950 dark:text-brand-300 text-xs font-semibold uppercase tracking-wider mb-2">
            GİB Görevde Yükselme Standart Formatı
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Vergi Dairesi Müdür Yardımcılığı Deneme Sınavı
          </h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-lg mx-auto leading-relaxed">
            Şu ana kadar yapılan resmi GİB/MEB sınavlarının kurallarına birebir uygun: <strong>4 şık (A, B, C, D)</strong>, yanlışın doğruyu götürmediği ve <strong>70 puan barajlı</strong> sınav simülasyonu.
          </p>
        </div>

        {/* Official Rules Info Banner */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl mx-auto text-left text-xs">
          <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <span className="text-slate-400 block mb-0.5">Soru Formatı</span>
            <span className="font-bold text-slate-800 dark:text-white text-sm">4 Seçenek (A-D)</span>
          </div>
          <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <span className="text-slate-400 block mb-0.5">Yanlış Kuralı</span>
            <span className="font-bold text-emerald-600 dark:text-emerald-400 text-sm">Doğruyu Götürmez</span>
          </div>
          <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <span className="text-slate-400 block mb-0.5">Baraj Puanı</span>
            <span className="font-bold text-brand-700 dark:text-brand-300 text-sm">70 / 100 Puan</span>
          </div>
          <div className="p-3 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <span className="text-slate-400 block mb-0.5">Soru Havuzu</span>
            <span className="font-bold text-slate-800 dark:text-white text-sm">528 Soru</span>
          </div>
        </div>

        {/* Exam Type Selector Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
          {/* 80 Soru - Resmi Format */}
          <div 
            onClick={() => setSelectedCount(80)}
            className={`p-5 rounded-2xl border transition-all cursor-pointer relative ${
              selectedCount === 80 
                ? 'border-brand-600 bg-brand-50/60 dark:bg-brand-950/40 ring-2 ring-brand-500 shadow-md' 
                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="w-8 h-8 rounded-lg bg-brand-100 text-brand-800 dark:bg-brand-900 dark:text-brand-200 flex items-center justify-center font-bold">
                80
              </span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-brand-700 text-white shadow-xs">
                Resmi GİB Formatı
              </span>
            </div>
            <div className="text-lg font-bold text-slate-900 dark:text-white">80 Soru (100 Dk)</div>
            <div className="text-xs text-slate-500 mt-1">Soru Başına: 1.25 Puan</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-3 pt-3 border-t border-slate-100 dark:border-slate-700/60">
              MEB / GİB'in uyguladığı gerçek sınav formatıdır.
            </div>
          </div>

          {/* 50 Soru - Hızlı Pratik */}
          <div 
            onClick={() => setSelectedCount(50)}
            className={`p-5 rounded-2xl border transition-all cursor-pointer ${
              selectedCount === 50 
                ? 'border-brand-600 bg-brand-50/60 dark:bg-brand-950/40 ring-2 ring-brand-500 shadow-md' 
                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300 flex items-center justify-center font-bold">
                50
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                Pratik Deneme
              </span>
            </div>
            <div className="text-lg font-bold text-slate-900 dark:text-white">50 Soru (60 Dk)</div>
            <div className="text-xs text-slate-500 mt-1">Soru Başına: 2.0 Puan</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-3 pt-3 border-t border-slate-100 dark:border-slate-700/60">
              1 saatlik pratik çalışma ve eksik tespit seansı.
            </div>
          </div>

          {/* 100 Soru - Tam Kapsam */}
          <div 
            onClick={() => setSelectedCount(100)}
            className={`p-5 rounded-2xl border transition-all cursor-pointer ${
              selectedCount === 100 
                ? 'border-brand-600 bg-brand-50/60 dark:bg-brand-950/40 ring-2 ring-brand-500 shadow-md' 
                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300 flex items-center justify-center font-bold">
                100
              </span>
              <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                Tam Kapsam
              </span>
            </div>
            <div className="text-lg font-bold text-slate-900 dark:text-white">100 Soru (120 Dk)</div>
            <div className="text-xs text-slate-500 mt-1">Soru Başına: 1.0 Puan</div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-3 pt-3 border-t border-slate-100 dark:border-slate-700/60">
              Tüm konuları içeren genişletilmiş deneme.
            </div>
          </div>
        </div>

        {/* Start Button */}
        <div>
          <button
            onClick={() => startExam(selectedCount)}
            className="px-10 py-3.5 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-medium text-base shadow-sm transition-transform active:scale-95 cursor-pointer"
          >
            {selectedCount} Soruluk Denemeyi Başlat
          </button>
        </div>
      </div>
    );
  }

  // Result Screen after exam finished
  if (isFinished) {
    let correctCount = 0;
    let wrongCount = 0;
    let blankCount = 0;

    examQuestions.forEach(q => {
      const ans = answers[q.id];
      if (ans === undefined) blankCount++;
      else if (ans === q.correctAnswer) correctCount++;
      else wrongCount++;
    });

    // Score calculation: (Correct / Total) * 100
    const pointPerQuestion = 100 / examQuestions.length;
    const rawScore = correctCount * pointPerQuestion;
    const score = Math.round(rawScore * 10) / 10;
    const isPassed = score >= 70;

    return (
      <div className="max-w-3xl mx-auto space-y-6 py-6">
        <div className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center shadow-xs">
          <div className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-4 ${
            isPassed ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600' : 'bg-amber-50 dark:bg-amber-950/60 text-amber-600'
          }`}>
            <Award className="w-10 h-10" />
          </div>

          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            {isPassed ? 'Tebrikler! Sınavı Kazandınız 🎉' : 'Çalışmaya Devam! Eksikleri Kapatabilirsin 💪'}
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            GİB Vergi Dairesi Müdür Yardımcılığı Resmi Sınav Karnesi
          </p>

          <div className="text-4xl font-black text-brand-700 dark:text-brand-300 my-5">
            {score} <span className="text-lg font-normal text-slate-400">/ 100 Puan</span>
          </div>

          <div className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold mb-6 tracking-wide bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200">
            {isPassed ? '✅ 70 Puan Barajı Aşıldı (Başarılı)' : '⚠️ Baraj: 70 Puan (Tekrar Çözünüz)'}
          </div>

          <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto mb-6">
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300">
              <div className="text-2xl font-bold">{correctCount}</div>
              <div className="text-xs">Doğru</div>
            </div>
            <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300">
              <div className="text-2xl font-bold">{wrongCount}</div>
              <div className="text-xs">Yanlış</div>
            </div>
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
              <div className="text-2xl font-bold">{blankCount}</div>
              <div className="text-xs">Boş</div>
            </div>
          </div>

          <div className="text-xs text-slate-500 mb-6 bg-slate-50 dark:bg-slate-900/50 p-3 rounded-xl max-w-md mx-auto">
            ℹ️ <strong>GİB Kuralı:</strong> Yanlışlar doğruları götürmemiştir. Puanınız doğrudan {examQuestions.length} soru üzerinden {correctCount} doğru cevap karşılığı hesaplanmıştır.
          </div>

          <button
            onClick={() => setExamActive(false)}
            className="px-6 py-2.5 rounded-xl bg-brand-700 hover:bg-brand-800 text-white text-sm font-medium transition-colors cursor-pointer"
          >
            Yeni Deneme Sınavı Seç
          </button>
        </div>

        {/* Detailed Question Review */}
        <div className="space-y-4">
          <h4 className="font-semibold text-slate-800 dark:text-white px-1">
            Soru Detayları ve Gerekçeli Açıklamalar ({examQuestions.length} Soru)
          </h4>
          {examQuestions.map((q, idx) => {
            const userAns = answers[q.id];
            const isCorrect = userAns === q.correctAnswer;
            const isBlank = userAns === undefined;

            return (
              <div 
                key={q.id}
                className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-3 text-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                      Soru {idx + 1}
                    </span>
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300">
                      {q.articleRef}
                    </span>
                  </div>
                  <span className={`text-xs font-bold ${
                    isBlank ? 'text-slate-400' : isCorrect ? 'text-emerald-600' : 'text-rose-600'
                  }`}>
                    {isBlank ? '⚪ Boş Bırakıldı' : isCorrect ? '✓ Doğru' : '✗ Yanlış'}
                  </span>
                </div>

                <p className="font-medium text-slate-800 dark:text-slate-100">{q.question}</p>

                {/* Given Answer vs Correct Answer */}
                <div className="text-xs text-slate-600 dark:text-slate-300 p-3 bg-slate-50 dark:bg-slate-900/40 rounded-xl space-y-1.5 border border-slate-200/60 dark:border-slate-700/60">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-emerald-700 dark:text-emerald-400">
                      Doğru Cevap: ({optionLetters[q.correctAnswer]}) {q.options[q.correctAnswer]}
                    </p>
                    {q.source_url && (
                      <a 
                        href={q.source_url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-[11px] text-brand-700 dark:text-brand-400 hover:underline inline-flex items-center space-x-0.5"
                      >
                        <span>Mevzuat</span>
                        <ExternalLink className="w-2.5 h-2.5 ml-0.5" />
                      </a>
                    )}
                  </div>
                  {!isBlank && !isCorrect && (
                    <p className="text-rose-600 dark:text-rose-400">
                      Verdiğiniz Cevap: ({optionLetters[userAns]}) {q.options[userAns]}
                    </p>
                  )}
                  <p className="pt-1 text-slate-600 dark:text-slate-300 text-xs leading-relaxed border-t border-slate-200/60 dark:border-slate-800">
                    {q.explanation}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Active Exam View
  const currentQ = examQuestions[currentIdx];
  const userSelected = answers[currentQ.id];

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {/* Exam Header Bar */}
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 flex items-center justify-between shadow-xs">
        <div className="flex items-center space-x-2">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-brand-100 text-brand-800 dark:bg-brand-950 dark:text-brand-300">
            Soru {currentIdx + 1} / {examQuestions.length}
          </span>
          <span className="text-xs text-slate-400 hidden sm:inline">
            Cevaplanan: {Object.keys(answers).length}
          </span>
        </div>

        {/* Countdown Timer */}
        <div className={`flex items-center space-x-1.5 px-3 py-1 rounded-lg text-sm font-mono font-bold ${
          timeLeft < 300 
            ? 'bg-rose-100 text-rose-700 dark:bg-rose-950 dark:text-rose-300 animate-pulse' 
            : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200'
        }`}>
          <Clock className="w-4 h-4" />
          <span>{formatTime(timeLeft)}</span>
        </div>

        <button
          onClick={() => {
            if (window.confirm('Sınavı sonlandırmak ve sonuçlarınızı görmek istiyor musunuz?')) {
              handleFinishExam();
            }
          }}
          className="px-3.5 py-1.5 rounded-lg text-xs font-medium bg-rose-600 hover:bg-rose-700 text-white transition-colors cursor-pointer"
        >
          Sınavı Bitir
        </button>
      </div>

      {/* Question Card */}
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-100 dark:border-slate-700/60 pb-3">
          <span>{currentQ.articleRef}</span>
          <span className="text-xs px-2 py-0.5 rounded bg-brand-50 text-brand-700 dark:bg-brand-950 dark:text-brand-300 font-semibold">
            {optionLetters.length} Seçenekli GİB Formatı
          </span>
        </div>

        <h3 className="text-base sm:text-lg font-medium text-slate-800 dark:text-slate-100 leading-relaxed">
          {currentQ.question}
        </h3>

        {/* Options */}
        <div className="space-y-3">
          {currentQ.options.map((opt, idx) => {
            const isSelected = userSelected === idx;
            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-start space-x-3.5 cursor-pointer ${
                  isSelected 
                    ? 'border-brand-600 bg-brand-50/70 dark:bg-brand-950/40 text-brand-900 dark:text-brand-100 ring-1 ring-brand-600 font-medium'
                    : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/80 hover:border-slate-300 text-slate-700 dark:text-slate-200'
                }`}
              >
                <span className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-semibold shrink-0 ${
                  isSelected 
                    ? 'bg-brand-700 text-white' 
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300'
                }`}>
                  {optionLetters[idx]}
                </span>
                <span className="text-sm sm:text-base leading-snug pt-0.5 flex-1">
                  {opt}
                </span>
              </button>
            );
          })}
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700/60">
          <button
            onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
            disabled={currentIdx === 0}
            className="px-4 py-2 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 disabled:opacity-40 cursor-pointer"
          >
            ← Önceki Soru
          </button>

          {currentIdx < examQuestions.length - 1 ? (
            <button
              onClick={() => setCurrentIdx(prev => Math.min(examQuestions.length - 1, prev + 1))}
              className="px-5 py-2 rounded-lg text-xs font-medium bg-brand-700 hover:bg-brand-800 text-white transition-colors cursor-pointer"
            >
              Sonraki Soru →
            </button>
          ) : (
            <button
              onClick={handleFinishExam}
              className="px-5 py-2 rounded-lg text-xs font-medium bg-emerald-600 hover:bg-emerald-700 text-white transition-colors cursor-pointer"
            >
              Sınavı Tamamla ✓
            </button>
          )}
        </div>
      </div>

      {/* Question Matrix Drawer */}
      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 shadow-xs">
        <div className="text-xs font-medium text-slate-500 mb-2">Soru Matrisi:</div>
        <div className="flex flex-wrap gap-1.5 max-h-32 overflow-y-auto">
          {examQuestions.map((q, idx) => {
            const isAnswered = answers[q.id] !== undefined;
            const isCurrent = idx === currentIdx;
            return (
              <button
                key={q.id}
                onClick={() => setCurrentIdx(idx)}
                className={`w-7 h-7 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  isCurrent 
                    ? 'ring-2 ring-brand-500 bg-brand-700 text-white' 
                    : isAnswered 
                    ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300' 
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-500 hover:bg-slate-200'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
