import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart, Sparkles } from 'lucide-react';
import { useState } from 'react';
import type { MemoryItem } from '../config/birthdayData';

type Props = {
  memories: MemoryItem[];
  onContinue: () => void;
};

export function MemoryGallery({ memories, onContinue }: Props) {
  const [index, setIndex] = useState(0);
  const activeMemory = memories[index];
  const isLast = index === memories.length - 1;

  const goPrevious = () => setIndex((current) => (current === 0 ? memories.length - 1 : current - 1));
  const goNext = () => setIndex((current) => (current + 1) % memories.length);

  return (
    <section className="chapter-shell">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_30%)]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between text-sm uppercase tracking-[0.3em] text-pink-100/80">
          <span>Chapter 02</span>
          <span>{index + 1} / {memories.length}</span>
        </div>

        <div className="glass-panel overflow-hidden p-4 sm:p-8">
          <div className="mb-6 flex items-center justify-center gap-2 text-pink-200">
            <Heart className="h-5 w-5 fill-pink-300 text-pink-300" />
            <span className="text-sm uppercase tracking-[0.35em]">Our Beautiful Memories</span>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#2b1322] shadow-[0_35px_80px_rgba(0,0,0,0.3)]">
              <motion.img
                key={activeMemory.id}
                src={activeMemory.image}
                alt={activeMemory.title}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.04 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="h-[420px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#180d1b]/80 via-transparent to-transparent" />
            </div>

            <motion.div
              key={activeMemory.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-pink-200/30 bg-pink-300/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-pink-100">
                <Sparkles className="h-3.5 w-3.5" />
                Memory {index + 1}
              </div>
              <h2 className="font-serif text-3xl tracking-tight text-white sm:text-4xl">{activeMemory.title}</h2>
              <p className="text-base leading-8 text-pink-50/80">{activeMemory.message}</p>

              <div className="flex gap-3 pt-4">
                <button type="button" className="nav-button" onClick={goPrevious}>
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </button>
                <button type="button" className="nav-button" onClick={goNext}>
                  Next
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              <p className="pt-3 text-sm uppercase tracking-[0.25em] text-pink-100/60">And these are just a few of the moments I want to remember forever.</p>
              {isLast && (
                <button type="button" className="primary-button mt-2" onClick={onContinue}>
                  Continue Our Story ❤️
                </button>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
