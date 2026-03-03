import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LiquidCard } from './LiquidCard';
import { Search, Loader2, Play, AlertCircle, ArrowRight } from 'lucide-react';

export const LichessIntegration: React.FC = () => {
  const [url, setUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<null | { id: string; inaccuracies: number; mistakes: number; blunders: number }>(null);
  const [error, setError] = useState<string | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setResult(null);

    if (!url.includes('lichess.org/')) {
       setError('Пожалуйста, введите корректную ссылку на партию Lichess.');
       return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setResult({
        id: url.split('/').pop() || 'game123',
        inaccuracies: Math.floor(Math.random() * 5) + 1,
        mistakes: Math.floor(Math.random() * 3),
        blunders: Math.floor(Math.random() * 2)
      });
    }, 1500);
  };

  return (
    <section className="py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
            Открытый Анализ Партий
          </h2>
          <p className="text-xl text-emerald-100/80 mb-12">
            Вставьте ссылку на вашу партию с Lichess, и мы найдем ключевые ошибки с помощью API.
          </p>

          <LiquidCard className="p-8 md:p-12 relative overflow-visible border-white/20">
             <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 mix-blend-screen pointer-events-none" />

             <form onSubmit={handleAnalyze} className="relative z-10 flex flex-col md:flex-row gap-4 mb-8">
               <div className="relative flex-1">
                 <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                 <input
                   type="text"
                   value={url}
                   onChange={(e) => setUrl(e.target.value)}
                   placeholder="https://lichess.org/..."
                   className="w-full bg-black/30 border border-white/10 rounded-xl pl-12 pr-4 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/50 transition-all font-medium text-lg shadow-inner"
                 />
               </div>
               <button
                 type="submit"
                 disabled={loading || !url}
                 className="bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-700 disabled:text-slate-400 text-white rounded-xl px-8 py-4 font-semibold transition-all flex items-center justify-center gap-2 shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] disabled:shadow-none"
               >
                 {loading ? <Loader2 size={24} className="animate-spin" /> : <span>Анализировать</span>}
               </button>
             </form>

             <AnimatePresence mode="wait">
               {error && (
                 <motion.div
                   initial={{ opacity: 0, y: -10 }}
                   animate={{ opacity: 1, y: 0 }}
                   exit={{ opacity: 0 }}
                   className="text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-lg p-4 flex items-center justify-center gap-2"
                 >
                    <AlertCircle size={18} />
                    <span>{error}</span>
                 </motion.div>
               )}

               {result && (
                 <motion.div
                   initial={{ opacity: 0, scale: 0.95 }}
                   animate={{ opacity: 1, scale: 1 }}
                   className="bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border border-white/5"
                 >
                   <div className="flex items-center justify-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-white rounded flex items-center justify-center text-slate-900 shadow-md">
                        <Play size={20} fill="currentColor" />
                      </div>
                      <span className="text-xl font-bold text-white tracking-wide">Lichess Game {result.id}</span>
                   </div>

                   <div className="grid grid-cols-3 gap-4 mb-8">
                      <div className="bg-slate-900/50 rounded-xl p-4 flex flex-col items-center border border-white/5">
                        <span className="text-3xl font-bold text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.3)]">{result.inaccuracies}</span>
                        <span className="text-sm text-slate-400 mt-1 uppercase tracking-wider">Неточности</span>
                      </div>
                      <div className="bg-slate-900/50 rounded-xl p-4 flex flex-col items-center border border-white/5">
                        <span className="text-3xl font-bold text-orange-400 drop-shadow-[0_0_10px_rgba(251,146,60,0.3)]">{result.mistakes}</span>
                        <span className="text-sm text-slate-400 mt-1 uppercase tracking-wider">Ошибки</span>
                      </div>
                      <div className="bg-slate-900/50 rounded-xl p-4 flex flex-col items-center border border-white/5">
                        <span className="text-3xl font-bold text-rose-500 drop-shadow-[0_0_10px_rgba(244,63,94,0.3)]">{result.blunders}</span>
                        <span className="text-sm text-slate-400 mt-1 uppercase tracking-wider">Зевки</span>
                      </div>
                   </div>

                   <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <p className="text-emerald-50/90 font-medium text-left">
                        Узнайте, почему вы сделали эти ошибки. Детальный разбор партии с тренером!
                      </p>
                      <button className="bg-white text-emerald-600 hover:bg-emerald-50 rounded-lg px-6 py-2.5 font-bold transition-colors whitespace-nowrap flex items-center gap-2 shadow-lg">
                        Записаться
                        <ArrowRight size={16} />
                      </button>
                   </div>
                 </motion.div>
               )}
             </AnimatePresence>
          </LiquidCard>
        </motion.div>
      </div>
    </section>
  );
};
