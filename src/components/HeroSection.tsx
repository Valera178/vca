import React from 'react';
import { motion } from 'framer-motion';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute top-[40%] right-[10%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Valery Chess Academy
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl font-light text-emerald-100 max-w-3xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Инновационная цифровая образовательная экосистема для системного развития интеллекта через глубокое изучение шахматного мастерства.
        </motion.p>

        <motion.div
           className="flex flex-col sm:flex-row items-center justify-center gap-6"
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5, delay: 0.4 }}
        >
          <button className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full font-semibold text-lg transition-all shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:shadow-[0_0_60px_rgba(16,185,129,0.6)] transform hover:-translate-y-1">
            Начать обучение
          </button>
          <a href="#about" className="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md text-slate-200 border border-white/10 rounded-full font-medium text-lg transition-all flex items-center gap-2">
            Узнать больше
          </a>
        </motion.div>

        <motion.div
          className="mt-24 p-8 liquid-glass max-w-4xl mx-auto rounded-[32px] border-white/10 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
          <h2 className="text-2xl font-bold text-white mb-4">О Наставнике</h2>
          <p className="text-lg text-slate-300 leading-relaxed text-left">
            <span className="text-emerald-400 font-semibold">Валерий</span> — действующий игрок (2305 Elo на Lichess, топ-1%), кандидатский уровень игры.
            Более 10 лет непрерывного погружения в шахматы. В отличие от тренеров-теоретиков, Валерий регулярно проходит проверку боем
            на высочайшем уровне, передавая ученикам навык «выживаемости» и спортивной злости.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
