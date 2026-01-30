'use client';

import { useEffect, useState } from "react";
import { motion  } from 'framer-motion';
export const ChatBubble: React.FC<{ type: 'user' | 'bot'; message: string; typingDelay?: number }> = ({ type, message, typingDelay }) => {
  const [displayedMessage, setDisplayedMessage] = useState(typingDelay ? '' : message);
  const [isTyping, setIsTyping] = useState(!!typingDelay);

  useEffect(() => {
    if (typingDelay) {
      setIsTyping(true);
      const timer = setTimeout(() => {
        setIsTyping(false);
        let i = 0;
        const typingEffect = setInterval(() => {
          setDisplayedMessage(message.substring(0, i + 1));
          i++;
          if (i === message.length) clearInterval(typingEffect);
        }, 25); 
      }, typingDelay);
      return () => { clearTimeout(timer); /* clearInterval(typingEffect) - Ojo con esto */ };
    } else {
      setDisplayedMessage(message);
      setIsTyping(false);
    }
  }, [message, typingDelay]);

  return (
    <div className={`flex ${type === 'user' ? 'justify-end' : 'justify-start'} mb-2.5`}>
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`max-w-[80%] sm:max-w-[75%] px-4 py-2.5 rounded-xl shadow-sm ${
        type === 'user' 
          ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-br-md' 
          : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-100 rounded-bl-md'
      }`}>
        {isTyping ? (
          <div className="flex items-center space-x-1.5 py-1">
            {[0,1,2].map(i => (
              <motion.div 
                key={i}
                className="w-1.5 h-1.5 bg-slate-400 dark:bg-slate-500 rounded-full"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15, ease:"easeInOut" }}
              />
            ))}
          </div>
        ) : (
          <p className="text-sm leading-relaxed whitespace-pre-wrap">{displayedMessage}</p>
        )}
      </motion.div>
    </div>
  );
};