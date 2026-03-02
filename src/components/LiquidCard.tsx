import React from 'react';
import { motion } from 'framer-motion';

interface LiquidCardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  dark?: boolean;
}

export const LiquidCard: React.FC<LiquidCardProps> = ({ children, className = '', onClick, dark = false }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -5, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative overflow-hidden rounded-2xl
        ${dark ? 'liquid-glass-dark' : 'liquid-glass'}
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none specular-highlight rounded-2xl" />
      <div className="relative z-10 h-full w-full">
        {children}
      </div>
    </motion.div>
  );
};
