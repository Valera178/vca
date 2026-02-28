import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User } from 'lucide-react';

interface DynamicIslandProps {
  onLoginClick: () => void;
  isLoggedIn: boolean;
  onLogoutClick: () => void;
}

export const DynamicIsland: React.FC<DynamicIslandProps> = ({ onLoginClick, isLoggedIn, onLogoutClick }) => {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        layout
        className={`
          pointer-events-auto
          liquid-glass rounded-full px-6 py-3
          flex items-center justify-between
          transition-all duration-500 ease-in-out
          ${scrolled ? 'bg-black/60 shadow-2xl backdrop-blur-xl' : ''}
          ${expanded ? 'w-[90%] md:w-[600px] rounded-[32px]' : 'w-auto gap-8'}
        `}
        style={{
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)'
        }}
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(16,185,129,0.5)]">
            V
          </div>
          {(!scrolled || expanded) && (
             <span className="font-semibold text-white tracking-wide hidden sm:block">Valery Chess Academy</span>
          )}
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="flex items-center gap-6"
            >
               <a href="#about" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">О тренере</a>
               <a href="#programs" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">Программы</a>
               <a href="#reviews" className="text-sm font-medium text-slate-300 hover:text-emerald-400 transition-colors">Отзывы</a>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex items-center gap-4">
           {!isLoggedIn ? (
               <button
                  onClick={onLoginClick}
                  className="text-sm font-medium text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-2"
               >
                 <User size={16} />
                 <span className="hidden sm:inline">Войти</span>
               </button>
           ) : (
               <button
                  onClick={onLogoutClick}
                  className="text-sm font-medium text-rose-400 hover:text-rose-300 transition-colors"
               >
                 Выйти
               </button>
           )}

           <button
              onClick={() => setExpanded(!expanded)}
              className="text-slate-300 hover:text-white transition-colors"
           >
             {expanded ? <X size={20} /> : <Menu size={20} />}
           </button>
        </div>
      </motion.nav>
    </div>
  );
};
