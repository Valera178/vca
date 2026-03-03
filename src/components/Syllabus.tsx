import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LiquidCard } from './LiquidCard';
import { ChevronDown, Send } from 'lucide-react';

interface Program {
  id: string;
  title: string;
  audience: string;
  focus: string;
  color: string;
}

const programs: Program[] = [
  {
    id: 'start',
    title: 'Старт (Фундамент)',
    audience: 'Для тех, кто только выучил ходы или делает первые шаги.',
    focus: 'Учимся базовой безопасности — не отдавать (не «зевать») фигуры просто так. Изучение простейших линейных матов и матов легкими фигурами. Постановка уверенного начала партии.',
    color: 'from-blue-500/20 to-cyan-500/10'
  },
  {
    id: 'advanced',
    title: 'Продвинутый (Тактика и Стратегия)',
    audience: 'Для ребят с базовым опытом, играющих на любительском уровне.',
    focus: 'Изучение основ шахматной стратегии (слабые/сильные поля, пешечные структуры). Отработка типичных приемов атаки на короля. Глубокое погружение в базовые окончания (эндшпиль).',
    color: 'from-emerald-500/20 to-teal-500/10'
  },
  {
    id: 'pro',
    title: 'Pro (Спортивное мастерство)',
    audience: 'Для амбициозных игроков, готовых к серьезной борьбе.',
    focus: 'Подготовка к первым официальным соревнованиям и турнирам. Глубокая работа над личным дебютным репертуаром. Изучение психологии шахматной борьбы, тайм-менеджмента и игры в цейтноте.',
    color: 'from-purple-500/20 to-fuchsia-500/10'
  }
];

export const Syllabus: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="programs" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-4xl z-10 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16 drop-shadow-lg">
          Учебные программы
        </h2>

        <div className="flex flex-col gap-6">
          {programs.map((program) => {
            const isExpanded = expandedId === program.id;

            return (
              <LiquidCard key={program.id} className="overflow-hidden p-0 border-white/10 group">
                 <div className="absolute inset-0 bg-gradient-to-r opacity-20 pointer-events-none transition-opacity duration-300 group-hover:opacity-40" />

                 <div
                   className="p-6 md:p-8 cursor-pointer flex items-center justify-between relative z-10"
                   onClick={() => toggleExpand(program.id)}
                 >
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-emerald-400 transition-colors">{program.title}</h3>
                    </div>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-slate-400"
                    >
                      <ChevronDown size={28} />
                    </motion.div>
                 </div>

                 <AnimatePresence>
                   {isExpanded && (
                     <motion.div
                       initial={{ height: 0, opacity: 0 }}
                       animate={{ height: 'auto', opacity: 1 }}
                       exit={{ height: 0, opacity: 0 }}
                       transition={{ duration: 0.4, ease: "easeInOut" }}
                       className="overflow-hidden"
                     >
                        <div className="p-6 md:p-8 pt-0 border-t border-white/5 bg-black/20">
                           <div className="mb-6 space-y-4">
                              <div>
                                <h4 className="text-sm uppercase tracking-wider text-emerald-400 font-semibold mb-1">Для кого</h4>
                                <p className="text-slate-300">{program.audience}</p>
                              </div>
                              <div>
                                <h4 className="text-sm uppercase tracking-wider text-emerald-400 font-semibold mb-1">Фокус курса</h4>
                                <p className="text-slate-300">{program.focus}</p>
                              </div>
                           </div>

                           <div className="mt-8 pt-6 border-t border-white/10">
                              <h4 className="text-lg font-semibold text-white mb-4">Записаться на этот курс</h4>
                              <form className="flex flex-col md:flex-row gap-4" onSubmit={(e) => { e.preventDefault(); alert('Заявка отправлена!'); }}>
                                 <input
                                   type="text"
                                   placeholder="Имя"
                                   className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                                   required
                                 />
                                 <input
                                   type="text"
                                   placeholder="Telegram / Телефон"
                                   className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                                   required
                                 />
                                 <button
                                   type="submit"
                                   className="bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl px-6 py-3 font-semibold transition-all flex items-center justify-center gap-2 shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)]"
                                 >
                                   <span>Отправить</span>
                                   <Send size={18} />
                                 </button>
                              </form>
                           </div>
                        </div>
                     </motion.div>
                   )}
                 </AnimatePresence>
              </LiquidCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};
