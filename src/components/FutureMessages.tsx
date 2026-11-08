import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import { useState } from 'react';

type Props = {
  messages: string[];
  onContinue: () => void;
};

export function FutureMessages({ messages, onContinue }: Props) {
  const [index, setIndex] = useState(0);
  const isLast = index === messages.length - 1;

  const handleAdvance = () => {
    if (isLast) {
      onContinue();
      return;
    }
    setIndex((current) => current + 1);
  };

  return (
    <section className="chapter-shell">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,214,152,0.15),_transparent_30%)]" />
      <div className="relative mx-auto max-w-4xl">
        <div className="mb-6 text-sm uppercase tracking-[0.3em] text-pink-100/80">Chapter 05</div>
        <div className="glass-panel p-8 text-center sm:p-12">
          <div className="mb-6 flex items-center justify-center gap-2 text-pink-100/80">
            <Heart className="h-4 w-4 fill-pink-300 text-pink-300" />
            <span className="text-xs uppercase tracking-[0.35em]">Our Future Together</span>
          </div>

          <AnimatePresence mode="wait">
            <motion.p
              key={messages[index]}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
              className="min-h-[240px] font-serif text-3xl leading-[1.5] text-white sm:text-5xl"
            >
              {messages[index]}
            </motion.p>
          </AnimatePresence>

          <button type="button" className="primary-button mt-8" onClick={handleAdvance}>
            {isLast ? 'There\'s One More Thing...' : 'Continue'}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
