/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const Background = () => {
  return (
    <div className="fixed inset-0 z-0 bg-[#2a0101] overflow-hidden flex items-center justify-center select-none pointer-events-none">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/infinite-tsukuyomi-naruto.960x540.mp4" type="video/mp4" />
      </video>
      
      {/* Deep red atmospheric sky gradient overlay to blend */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
    </div>
  )
}

const NinjaScroll = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-10 w-full min-h-[100dvh] flex flex-col items-center justify-center p-4">
      {/* The main scroll assembly */}
      <div className="relative w-full max-w-[650px] flex flex-col items-center mt-20 sm:mt-0">
        
        {/* Shuriken & Rope Overlay (Visible only when closed) */}
        <AnimatePresence>
          {!isOpen && (
            <motion.div 
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9, filter: "blur(5px)" }}
              transition={{ duration: 0.3 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[64px] sm:h-[80px] z-30 flex flex-col items-center justify-center cursor-pointer group"
              onClick={() => setIsOpen(true)}
            >
              {/* Rope Binding */}
              <div className="absolute top-1/2 -translate-y-1/2 w-[92%] sm:w-[85%] h-8 sm:h-10 bg-[#5c1a1b] border-y-2 border-red-950 shadow-[0_5px_20px_rgba(0,0,0,0.8)] flex flex-col justify-center gap-[2px] z-10">
                <div className="w-full h-[1px] bg-red-950/50 mix-blend-multiply"></div>
                <div className="w-full h-[1px] bg-red-950/50 mix-blend-multiply"></div>
                <div className="w-full h-[1px] bg-red-950/50 mix-blend-multiply"></div>
              </div>
              
              {/* Spinning Shuriken */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 transition-transform group-hover:scale-110 group-active:scale-95">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="w-24 h-24 sm:w-28 sm:h-28 drop-shadow-[0_0_20px_rgba(0,0,0,0.9)] text-[#1a1a1a]"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                     <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" stroke="#000" strokeWidth="0.5" />
                     <circle cx="12" cy="12" r="3" fill="#000" />
                     <circle cx="12" cy="12" r="1.5" fill="#d1bfae" />
                  </svg>
                </motion.div>
              </div>
              
              {/* Hint floating below the closed scroll */}
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="absolute top-[calc(50%+4rem)] sm:top-[calc(50%+4.5rem)] text-orange-200/90 tracking-[0.2em] text-[10px] sm:text-xs font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] z-40 bg-black/60 px-5 sm:px-6 py-2 rounded-full border border-red-900/60 backdrop-blur-md uppercase whitespace-nowrap"
              >
                Click on the shuriken to open
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Top Roller Cylinder */}
        <div className="w-full flex items-center justify-center z-20">
          <div className="h-8 sm:h-10 w-4 sm:w-5 bg-gradient-to-r from-red-950 via-red-900 to-red-950 rounded-l-md border-y border-l border-red-950/80 shadow-md"></div>
          <div className="h-[32px] sm:h-[40px] w-[90%] sm:w-[85%] bg-gradient-to-b from-[#1a1a1a] via-[#3f3f3f] to-[#111111] shadow-[0_10px_20px_rgba(0,0,0,0.8)] border-y border-gray-900/80 relative overflow-hidden">
             {/* Wood grain subtlties / Highlights */}
             <div className="absolute inset-x-0 top-1 h-[1px] bg-white/10"></div>
          </div>
          <div className="h-8 sm:h-10 w-4 sm:w-5 bg-gradient-to-l from-red-950 via-red-900 to-red-950 rounded-r-md border-y border-r border-red-950/80 shadow-md"></div>
        </div>

        {/* The Paper / Canvas Container */}
        <motion.div 
          initial={{ height: 0 }}
          animate={{ height: isOpen ? 'auto' : 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-[92%] sm:w-[87%] bg-[#d9cdb0] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative box-border bg-cover bg-center"
          style={{
            backgroundImage: `url('/Scroll.jpg')`,
            boxShadow: 'inset 0 0 50px rgba(0,0,0,0.3), 0 20px 40px rgba(0,0,0,0.8)'
          }}
        >
          {/* Faint overlay to ensure text readability over the image */}
          <div className="absolute inset-0 bg-white/40 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-[#d9cdb0]/30 backdrop-blur-[0.5px]"></div>
          
          {/* Scroll Content */}
          <div className="px-6 py-10 sm:px-12 sm:py-16 text-black/90 font-serif min-h-[500px] flex flex-col justify-center items-center relative z-10 font-medium">
              
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 15 }}
                transition={{ delay: isOpen ? 1.0 : 0, duration: 1 }}
                className="space-y-6 sm:space-y-8 text-lg sm:text-2xl font-bold leading-loose sm:leading-relaxed text-center w-full max-w-lg text-black/90 drop-shadow-md"
              >
                <p>
                  Fate brought us together,<br/>
                  and fate wrote the end of our beginning.
                </p>
                <p>
                  We parted briefly, yet still watched each other’s shadows and whispers.<br/>
                  We tried to understand,<br/>
                  some drifted softly,<br/>
                  some parted forever.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 15 }}
                transition={{ delay: isOpen ? 1.8 : 0, duration: 1 }}
                className="mt-10 sm:mt-12 space-y-6 text-base sm:text-xl leading-relaxed text-center w-full max-w-lg"
              >
                <p className="font-bold text-black drop-shadow-sm">This note is for them:</p>
                <div className="py-8 my-2 relative bg-white/40 backdrop-blur-md rounded-xl shadow-[inset_0_0_20px_rgba(255,255,255,0.7)] border border-black/10">
                  {/* Decorative faint borders */}
                  <div className="absolute top-0 left-[10%] right-[10%] h-[2px] bg-black/30"></div>
                  <div className="absolute bottom-0 left-[10%] right-[10%] h-[2px] bg-black/30"></div>
                  
                  <p className="font-bold italic text-black/95 drop-shadow-md font-serif leading-loose tracking-wide sm:text-2xl text-xl">
                    "The world is vast, we know it well,<br/>
                    yet round it turns —<br/>
                    and soon, in its circle,<br/>
                    We shall meet again"
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={{ delay: isOpen ? 2.5 : 0, duration: 1.5 }}
                className="mt-12 sm:mt-16 text-right self-stretch pr-4 sm:pr-8"
              >
                <p className="text-[1.2rem] sm:text-[1.5rem] font-bold tracking-widest text-[#4a0202] drop-shadow-sm">—Regards from Pain</p>
                <p className="text-sm sm:text-base text-black/80 font-medium italic mt-3 tracking-wider">(A silent observer)</p>
              </motion.div>

              {/* Close Button at the bottom */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={{ delay: isOpen ? 3.0 : 0, duration: 1 }}
                className="mt-12 sm:mt-16"
              >
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                  }} 
                  className="px-6 py-2 text-black/40 hover:text-red-900 transition-colors text-xs tracking-[0.3em] uppercase border border-transparent hover:border-red-900/30 rounded-full"
                >
                  Seal
                </button>
              </motion.div>
          </div>
        </motion.div>

        {/* Bottom Roller Cylinder */}
        <div className="w-full flex items-center justify-center z-20 relative -mt-[1px]">
          <div className="h-8 sm:h-10 w-4 sm:w-5 bg-gradient-to-r from-red-950 via-red-900 to-red-950 rounded-l-md border-y border-l border-red-950/80 shadow-md"></div>
          <div className="h-[32px] sm:h-[40px] w-[90%] sm:w-[85%] bg-gradient-to-b from-[#111111] via-[#3f3f3f] to-[#0a0a0a] shadow-[0_10px_20px_rgba(0,0,0,0.8)] border-y border-gray-900/80 relative overflow-hidden">
             {/* Wood grain subtlties / Highlights */}
             <div className="absolute inset-x-0 bottom-1 h-[1px] bg-white/5"></div>
          </div>
          <div className="h-8 sm:h-10 w-4 sm:w-5 bg-gradient-to-l from-red-950 via-red-900 to-red-950 rounded-r-md border-y border-r border-red-950/80 shadow-md"></div>
        </div>

      </div>
    </div>
  )
}

export default function App() {
  return (
    <>
      <Background />
      <NinjaScroll />
    </>
  );
}
