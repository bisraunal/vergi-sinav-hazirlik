import React, { useState, useEffect } from 'react';
import { Clock, CheckCircle, XCircle, Award, RotateCcw, AlertTriangle, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function MockExamView({ questions, onRecordMistake }) {
  const [examActive, setExamActive] = useState(false);
  const [examQuestions, setExamQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes (1200s)
  const [isFinished, setIsFinished] = useState(false);

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

  const startExam = (questionCount = 15) => {
    // Shuffle and pick questions
    const shuffled = [...questions].sort(() => 0.5 - Math.random()).slice(0, questionCount);
    setExamQuestions(shuffled);
    setCurrentIdx(0);
    setAnswers({});
    setTimeLeft(questionCount * 80); // ~80 seconds per question
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

    // Calculate score
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

  // Pre-exam Start Screen
  if (!examActive) {
    return (
      <div className="max-w-2xl mx-auto py-12 px-4 text-center">
        <div className="w-16 h-16 rounded-2xl bg-brand-50 dark:bg-brand-950/60 text-brand-700 dark:text-brand-300 flex items-center justify-center mx-auto mb-5 shadow-xs">
          <Award className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Müdür Yardımcılığı Deneme Sınavı
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
          Gerçek sınav kurallarına göre hazırlanmış, süreli ve tüm konulardan karma sorular içeren simülasyon.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-lg mx-auto text-left">
          <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <span className="text-xs text-slate-400">Soru Sayısı</span>
            <div className="text-lg font-bold text-slate-800 dark:text-white mt-1">15 Soru</div>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <span className="text-xs text-slate-400">Sınav Süresi</span>
            <div className="text-lg font-bold text-slate-800 dark:text-white mt-1">20 Dakika</div>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <span className="text-xs text-slate-400">Baraj Puanı</span>
            <div className="text-lg font-bold text-slate-800 dark:text-white mt-1">70 Puan</div>
          </div>
        </div>

        <button
          onClick={() => startExam(15)}
          className="mt-8 px-8 py-3.5 rounded-xl bg-brand-700 hover:bg-brand-800 text-white font-medium text-base shadow-sm transition-transform active:scale-95"
        >
          Deneme Sınavını Başlat
        </button>
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

    const score = Math.round((correctCount / examQuestions.length) * 100);
    const isPassed = score >= 70;

    return (
      <div className="max-w-2xl mx-auto space-y-6 py-6">
        <div className="p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-center shadow-xs">
          <div className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-4 ${
            isPassed ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600' : 'bg-amber-50 dark:bg-amber-950/60 text-amber-600'
          }`}>
            <Award className="w-10 h-10" />
          </div>

          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
            {isPassed ? 'Tebrikler! Sınav Başarılı 🎉' : 'Çalışmaya Devam! Eksikleri Kapatabilirsin 💪'}
          </h3>
          <p className="text-sm text-slate-500 mt-1">
            GİB Müdür Yardımcılığı Deneme Sınavı Karne Raporu
          </p>

          <div className="text-4xl font-black text-brand-700 dark:text-brand-300 my-6">
            {score} <span className="text-lg font-normal text-slate-400">/ 100 Puan</span>
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

          <button
            onClick={() => setExamActive(false)}
            className="px-6 py-2.5 rounded-xl bg-brand-700 hover:bg-brand-800 text-white text-sm font-medium transition-colors"
          >
            Yeni Deneme Sınavı
          </button>
        </div>

        {/* Detailed Question Review */}
        <div className="space-y-4">
          <h4 className="font-semibold text-slate-800 dark:text-white px-1">Soru Detayları ve Açıklamalar</h4>
          {examQuestions.map((q, idx) => {
            const userAns = answers[q.id];
            const isCorrect = userAns === q.correctAnswer;
            const isBlank = userAns === undefined;

            return (
              <div 
                key={q.id}
                className="p-5 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 space-y-2 text-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                    Soru {idx + 1} - {q.articleRef}
                  </span>
                  <span className={`text-xs font-bold ${
                    isBlank ? 'text-slate-400' : isCorrect ? 'text-emerald-600' : 'text-rose-600'
                  }`}>
                    {isBlank ? 'Boş Bırakıldı' : isCorrect ? '✓ Doğru' : '✗ Yanlış'}
                  </span>
                </div>
                <p className="font-medium text-slate-800 dark:text-slate-100">{q.question}</p>
                <div className="text-xs text-slate-600 dark:text-slate-300 mt-2 p-3 bg-slate-50 dark:bg-slate-900/40 rounded-xl">
                  <p className="font-semibold text-emerald-700 dark:text-emerald-400">Doğru: {q.options[q.correctAnswer]}</p>
                  <p className="mt-1">{q.explanation}</p>
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
  const optionLetters = ['A', 'B', 'C', 'D'];

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Exam Header Bar */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between shadow-xs">
        <div className="flex items-center space-x-2">
          <span className="font-semibold text-slate-800 dark:text-white text-sm">
            Soru {currentIdx + 1} / {examQuestions.length}
          </span>
        </div>

        <div className={`flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold ${
          timeLeft < 180 ? 'bg-rose-100 text-rose-700 animate-pulse' : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
        }`}>
          <Clock className="w-3.5 h-3.5" />
          <span>{formatTime(timeLeft)}</span>
        </div>

        <button
          onClick={handleFinishExam}
          className="px-3.5 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white text-xs font-medium transition-colors"
        >
          Sınavı Bitir
        </button>
      </div>

      {/* Question Card */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xs">
        <div className="text-xs font-semibold text-brand-700 dark:text-brand-300 mb-2">
          {currentQ.articleRef}
        </div>
        <h3 className="text-base sm:text-lg font-medium text-slate-800 dark:text-slate-100 leading-relaxed">
          {currentQ.question}
        </h3>

        <div className="mt-6 space-y-3">
          {currentQ.options.map((opt, i) => {
            const isChosen = answers[currentQ.id] === i;
            return (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className={`w-full text-left p-4 rounded-xl border flex items-start space-x-3.5 transition-all ${
                  isChosen
                    ? 'border-brand-600 bg-brand-50/80 dark:bg-brand-950/60 text-brand-950 dark:text-brand-100 ring-1 ring-brand-600'
                    : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700/60 text-slate-700 dark:text-slate-200'
                }`}
              >
                <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold ${
                  isChosen ? 'bg-brand-700 text-white' : 'bg-slate-100 dark:bg-slate-700 text-slate-600'
                }`}>
                  {optionLetters[i]}
                </span>
                <span className="text-sm pt-0.5">{opt}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Navigation Matrix */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))}
          disabled={currentIdx === 0}
          className="px-4 py-2 text-sm font-medium text-slate-600 dark:text-slate-300 disabled:opacity-40"
        >
          Önceki
        </button>

        {/* Quick jump pills */}
        <div className="flex space-x-1.5 overflow-x-auto max-w-[260px] sm:max-w-md py-1">
          {examQuestions.map((q, idx) => {
            const isAns = answers[q.id] !== undefined;
            const isCurrent = idx === currentIdx;
            return (
              <button
                key={q.id}
                onClick={() => setCurrentIdx(idx)}
                className={`w-7 h-7 rounded-lg text-xs font-medium shrink-0 transition-all ${
                  isCurrent 
                    ? 'ring-2 ring-brand-600 font-bold bg-brand-100 dark:bg-brand-900 text-brand-900 dark:text-white'
                    : isAns
                      ? 'bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-500'
                }`}
              >
                {idx + 1}
              </button>
            );
          })}
        </div>

        <button
          onClick={() => setCurrentIdx(Math.min(examQuestions.length - 1, currentIdx + 1))}
          disabled={currentIdx === examQuestions.length - 1}
          className="px-4 py-2 text-sm font-medium bg-brand-700 text-white rounded-lg disabled:opacity-40"
        >
          Sonraki
        </button>
      </div>
    </div>
  );
}
