import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Newspaper } from 'lucide-react';
import { LiquidCard } from './LiquidCard';

interface Review {
  id: number;
  name: string;
  avatar: string;
  text: string;
  result: string;
  isSender: boolean;
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Алексей',
    avatar: 'A',
    text: 'Валерий, спасибо за разбор вчерашней партии! Наконец-то понял, почему нельзя было пешку h толкать так рано.',
    result: 'Поднял рейтинг с 1200 до 1550',
    isSender: true,
  },
  {
    id: 2,
    name: 'Тренер',
    avatar: 'V',
    text: 'Отлично! В следующий раз постарайся сначала закончить развитие на ферзевом фланге.',
    result: '',
    isSender: false,
  },
  {
    id: 3,
    name: 'Мария (мама Саши)',
    avatar: 'M',
    text: 'Саша выиграл школьный турнир! Все благодаря вашим занятиям. Стал намного спокойнее и внимательнее даже за уроками.',
    result: '1 место в турнире до 10 лет',
    isSender: true,
  }
];

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-24 relative overflow-hidden bg-slate-900/50">
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

       <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

             {/* Reviews Column */}
             <div>
                <div className="flex items-center gap-4 mb-10">
                   <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <MessageCircle size={24} />
                   </div>
                   <h2 className="text-3xl md:text-4xl font-bold text-white">Wall of Success</h2>
                </div>

                <div className="flex flex-col gap-6 relative">
                   {reviews.map((review, i) => (
                      <motion.div
                         key={review.id}
                         initial={{ opacity: 0, x: review.isSender ? -20 : 20 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.5, delay: i * 0.2 }}
                         className={`flex gap-4 ${review.isSender ? 'flex-row' : 'flex-row-reverse'}`}
                      >
                         <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white shadow-lg shrink-0 ${review.isSender ? 'bg-slate-700' : 'bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]'}`}>
                            {review.avatar}
                         </div>

                         <div className={`max-w-[85%] ${review.isSender ? 'items-start' : 'items-end'}`}>
                            <div className={`text-xs text-slate-400 mb-1 px-2 flex ${review.isSender ? 'justify-start' : 'justify-end'}`}>
                               {review.name}
                            </div>
                            <div className={`
                               p-4 rounded-2xl relative shadow-md
                               ${review.isSender
                                  ? 'bg-slate-800 text-slate-200 rounded-tl-sm border border-slate-700'
                                  : 'bg-emerald-600 text-white rounded-tr-sm shadow-[0_5px_15px_rgba(16,185,129,0.3)]'
                               }
                            `}>
                               {review.text}
                            </div>
                            {review.result && (
                               <div className="mt-2 inline-block px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                                  🏆 {review.result}
                               </div>
                            )}
                         </div>
                      </motion.div>
                   ))}
                </div>
             </div>

             {/* Blog Column */}
             <div>
                <div className="flex items-center gap-4 mb-10">
                   <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center text-blue-400">
                      <Newspaper size={24} />
                   </div>
                   <h2 className="text-3xl md:text-4xl font-bold text-white">Новости и Статьи</h2>
                </div>

                <LiquidCard className="p-1 max-h-[600px] overflow-y-auto custom-scrollbar border-white/10">
                   <div className="p-6 space-y-6">
                      <article className="group cursor-pointer">
                         <div className="text-xs font-semibold text-emerald-400 mb-2 tracking-wider uppercase">Анонс</div>
                         <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors">Открыт набор в группу "Pro" на Сентябрь</h3>
                         <p className="text-slate-400 text-sm leading-relaxed mb-4">
                            Готовимся к осеннему циклу турниров. Разбираем новинки в Сицилианской защите и работаем над психологией эндшпиля...
                         </p>
                         <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
                      </article>

                      <article className="group cursor-pointer">
                         <div className="text-xs font-semibold text-blue-400 mb-2 tracking-wider uppercase">Психология</div>
                         <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">Как не сломаться после обидного зевка?</h3>
                         <p className="text-slate-400 text-sm leading-relaxed mb-4">
                            Разбираем фундаментальную цитату Савелия Тартаковера. Почему самоанализ важнее заучивания дебютов и как правильно работать над ошибками.
                         </p>
                         <div className="h-px w-full bg-gradient-to-r from-white/10 to-transparent" />
                      </article>

                      <article className="group cursor-pointer">
                         <div className="text-xs font-semibold text-purple-400 mb-2 tracking-wider uppercase">Разбор Партии</div>
                         <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">Мемориал Корчного: Атака на ферзевом</h3>
                         <p className="text-slate-400 text-sm leading-relaxed mb-4">
                            Детальный анализ моей партии против международного мастера. Разбираем критический момент на 24-м ходу, когда позиция казалась безнадежной.
                         </p>
                      </article>
                   </div>
                </LiquidCard>
             </div>

          </div>
       </div>
    </section>
  );
};
