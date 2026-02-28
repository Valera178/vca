import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LiquidCard } from './LiquidCard';
import { Video, CheckCircle2, Circle, Send, Sparkles, ChevronRight } from 'lucide-react';

interface Task {
  id: number;
  title: string;
  completed: boolean;
  fen?: string;
  type: 'tactics' | 'endgame' | 'opening';
}

const mockTasks: Task[] = [
  { id: 1, title: 'Решить 10 тактических задач на связку', completed: true, type: 'tactics' },
  { id: 2, title: 'Мат ферзем и королем', completed: false, fen: '8/8/8/8/8/4k3/4Q3/4K3 w - - 0 1', type: 'endgame' },
  { id: 3, title: 'Повторить Итальянскую партию (белые)', completed: false, type: 'opening' },
];

export const StudentCabinet: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>(mockTasks);
  const [chatMessage, setChatMessage] = useState('');
  const [messages, setMessages] = useState<{ id: number; text: string; isAi: boolean }[]>([
    { id: 1, text: 'Привет! Я твой ИИ-ассистент. Готов помочь разобрать позиции или обсудить теорию.', isAi: true }
  ]);

  const toggleTask = (taskId: number) => {
    setTasks(tasks.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t));
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const newMsg = { id: Date.now(), text: chatMessage, isAi: false };
    setMessages(prev => [...prev, newMsg]);
    setChatMessage('');

    // Mock AI response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        id: Date.now() + 1,
        text: 'Отличный вопрос! Подумай, как изменение пешечной структуры на ферзевом фланге повлияет на безопасность черного короля. Какие слабые поля образуются?',
        isAi: true
      }]);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-32 pb-20 relative bg-[#0B1120] text-slate-200">
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#0B1120] to-[#0B1120] z-0" />

       <div className="container mx-auto px-4 max-w-6xl relative z-10">

          <header className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
             <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center font-bold text-white text-2xl shadow-[0_0_20px_rgba(16,185,129,0.5)] border-2 border-white/20">
                   И
                </div>
                <div>
                   <h1 className="text-3xl font-bold text-white tracking-tight">Кабинет: Иван</h1>
                   <p className="text-emerald-400 font-medium">Уровень: Продвинутый</p>
                </div>
             </div>

             <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative flex items-center gap-3 px-8 py-4 bg-blue-600/20 hover:bg-blue-600/30 border border-blue-500/30 rounded-2xl transition-all"
             >
                <div className="absolute inset-0 rounded-2xl bg-blue-500/10 blur-xl group-hover:bg-blue-500/20 transition-all pointer-events-none" />
                <Video className="text-blue-400" size={24} />
                <span className="font-bold text-blue-100 text-lg tracking-wide relative z-10">Подключиться к Zoom</span>
                <span className="absolute -top-2 -right-2 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500"></span>
                </span>
             </motion.button>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

             {/* Tasks Column */}
             <div className="lg:col-span-5 flex flex-col gap-6">
                <LiquidCard className="p-6 md:p-8 flex-1 border-white/10" dark>
                   <div className="flex items-center justify-between mb-8">
                      <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                         <span className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">📋</span>
                         Задания
                      </h2>
                      <span className="bg-white/5 px-3 py-1 rounded-full text-xs font-semibold text-slate-300 border border-white/10">
                         {tasks.filter(t => t.completed).length} / {tasks.length} выполнено
                      </span>
                   </div>

                   <div className="space-y-4">
                      {tasks.map(task => (
                         <div
                           key={task.id}
                           onClick={() => toggleTask(task.id)}
                           className={`group flex items-start gap-4 p-4 rounded-xl border transition-all cursor-pointer ${
                              task.completed
                                 ? 'bg-emerald-500/5 border-emerald-500/20 opacity-70 hover:opacity-100'
                                 : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-emerald-500/30'
                           }`}
                         >
                            <button className={`mt-0.5 shrink-0 transition-colors ${task.completed ? 'text-emerald-500' : 'text-slate-500 group-hover:text-emerald-400'}`}>
                               {task.completed ? <CheckCircle2 size={22} /> : <Circle size={22} />}
                            </button>
                            <div className="flex-1">
                               <h3 className={`font-medium transition-colors ${task.completed ? 'text-slate-400 line-through' : 'text-slate-200 group-hover:text-white'}`}>
                                  {task.title}
                               </h3>
                               {task.fen && !task.completed && (
                                  <div className="mt-3 bg-black/40 rounded-lg p-3 border border-white/5 flex items-center justify-between group-hover:border-emerald-500/20 transition-colors">
                                     <span className="text-xs font-mono text-slate-400 truncate max-w-[150px]">{task.fen}</span>
                                     <button className="text-xs bg-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-md font-semibold hover:bg-emerald-500 hover:text-white transition-colors flex items-center gap-1">
                                        Решить
                                        <ChevronRight size={14} />
                                     </button>
                                  </div>
                               )}
                            </div>
                         </div>
                      ))}
                   </div>
                </LiquidCard>
             </div>

             {/* AI Chat Column */}
             <div className="lg:col-span-7 flex flex-col h-[600px]">
                <LiquidCard className="flex flex-col h-full border-white/10 overflow-hidden" dark>
                   <div className="px-6 py-4 border-b border-white/10 bg-white/5 flex items-center justify-between shrink-0 z-10 backdrop-blur-md">
                      <div className="flex items-center gap-3">
                         <div className="relative">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-lg">
                               <Sparkles size={20} />
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-[#1e293b]"></div>
                         </div>
                         <div>
                            <h2 className="text-lg font-bold text-white leading-tight">Gemini Chess AI</h2>
                            <p className="text-xs text-emerald-400 font-medium tracking-wide">В сети • Отвечает как Валерий</p>
                         </div>
                      </div>
                   </div>

                   <div className="flex-1 p-6 overflow-y-auto custom-scrollbar flex flex-col gap-6 relative bg-gradient-to-b from-transparent to-black/20">
                      {messages.map((msg) => (
                         <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className={`flex gap-4 ${msg.isAi ? 'flex-row' : 'flex-row-reverse'}`}
                         >
                            {msg.isAi && (
                               <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 mt-1">
                                  <Sparkles size={16} />
                               </div>
                            )}
                            <div className={`
                               p-4 rounded-2xl max-w-[85%] leading-relaxed text-sm md:text-base shadow-lg
                               ${msg.isAi
                                  ? 'bg-slate-800/80 text-slate-200 rounded-tl-sm border border-white/10 backdrop-blur-md'
                                  : 'bg-emerald-600 text-white rounded-tr-sm shadow-[0_5px_20px_rgba(16,185,129,0.25)]'
                               }
                            `}>
                               {msg.text}
                            </div>
                         </motion.div>
                      ))}
                   </div>

                   <div className="p-4 border-t border-white/10 bg-black/20 shrink-0 z-10 backdrop-blur-md">
                      <form onSubmit={handleSendMessage} className="relative flex items-center gap-3">
                         <input
                            type="text"
                            value={chatMessage}
                            onChange={(e) => setChatMessage(e.target.value)}
                            placeholder="Спроси о позиции или правиле..."
                            className="flex-1 bg-white/5 border border-white/10 rounded-2xl pl-5 pr-12 py-4 text-white placeholder:text-slate-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all"
                         />
                         <button
                            type="submit"
                            disabled={!chatMessage.trim()}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-purple-600 hover:bg-purple-500 disabled:bg-slate-700 disabled:text-slate-400 text-white rounded-xl flex items-center justify-center transition-all disabled:opacity-50 shadow-md"
                         >
                            <Send size={18} className={chatMessage.trim() ? "translate-x-[-1px] translate-y-[1px]" : ""} />
                         </button>
                      </form>
                   </div>
                </LiquidCard>
             </div>

          </div>
       </div>
    </div>
  );
};
