import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, Heart, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { ParticleBackground } from './ParticleBackground';

type Props = {
  herName: string;
  birthdayMessage: string;
  heroImage: string;
  heroImageAlt: string;
  onSurprisePop: () => void;
  onStart: () => void;
};

export function WelcomeScreen({ herName, birthdayMessage, heroImage, heroImageAlt, onSurprisePop, onStart }: Props) {
  const [surpriseRevealed, setSurpriseRevealed] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  const popSurprise = () => {
    setSurpriseRevealed(true);
    onSurprisePop();
  };

  return (
    <div className="chapter-shell flex items-center justify-center">
      <ParticleBackground count={30} />
      {surpriseRevealed && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 overflow-hidden">
          {Array.from({ length: 28 }, (_, index) => {
            const colors = ['#ffd166', '#f7a8c4', '#b9a2ff', '#a8e6cf', '#fff1a8'];
            const symbols = ['✦', '♥', '●', '◆'];
            return (
              <motion.span
                key={index}
                className="absolute -top-8 select-none"
                style={{
                  left: `${(index * 37) % 100}%`,
                  color: colors[index % colors.length],
                  fontSize: `${14 + (index % 4) * 5}px`,
                }}
                initial={{ y: -24, x: 0, opacity: 0, rotate: 0 }}
                animate={{ y: '110vh', x: index % 2 ? 48 : -42, opacity: [0, 1, 1, 0], rotate: 360 }}
                transition={{
                  duration: 3.2 + (index % 5) * 0.45,
                  delay: (index % 10) * 0.12,
                  ease: 'linear',
                }}
              >
                {symbols[index % symbols.length]}
              </motion.span>
            );
          })}
        </div>
      )}
      <div className="relative mx-auto max-w-5xl text-center">
        <AnimatePresence mode="wait">
          {!surpriseRevealed ? (
            <motion.div
              key="surprise"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.55 }}
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-200/25 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-pink-100/80">
                <Sparkles className="h-3.5 w-3.5" />
                A little surprise is floating your way
              </div>
              <h1 className="font-serif text-4xl leading-tight text-white sm:text-6xl">Someone special has a surprise for you...</h1>
              <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-pink-50/75 sm:text-lg">
                Tap the balloon to pop it and reveal your birthday surprise.
              </p>

              <motion.button
                type="button"
                aria-label="Pop the balloon to reveal your birthday surprise"
                className="group relative mx-auto mt-10 flex h-56 w-48 flex-col items-center justify-center focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-pink-200"
                onClick={popSurprise}
                animate={{ y: [0, -14, 0], rotate: [-2, 2, -2] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                whileTap={{ scale: 1.18, opacity: 0 }}
              >
                <span className="relative block h-36 w-32 rounded-[50%_50%_46%_46%] border border-pink-100/50 bg-[radial-gradient(circle_at_32%_25%,#fff0f4_0%,#f3a5bf_24%,#d95f8e_75%,#9f3c70_100%)] shadow-[inset_-14px_-18px_28px_rgba(80,16,51,0.28),0_20px_55px_rgba(230,110,162,0.3)] transition-transform group-hover:scale-105">
                  <span className="absolute left-7 top-6 h-8 w-4 rotate-[35deg] rounded-full bg-white/50 blur-[1px]" />
                  <Heart className="absolute inset-0 m-auto h-9 w-9 fill-white/80 text-white/80" />
                  <span className="absolute -bottom-2 left-1/2 h-0 w-0 -translate-x-1/2 border-l-[8px] border-r-[8px] border-t-[11px] border-l-transparent border-r-transparent border-t-[#d95f8e]" />
                </span>
                <span className="mt-2 h-16 w-px bg-gradient-to-b from-pink-100/80 to-transparent" />
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="birthday"
              initial={{ opacity: 0, y: 28, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
            >
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-200/25 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-pink-100/80">
                <Sparkles className="h-3.5 w-3.5" />
                For the one who makes my universe brighter
              </div>
              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15, duration: 0.65, type: 'spring' }}
                className="mx-auto w-full max-w-full whitespace-nowrap text-center font-serif text-[clamp(1.15rem,6.15vw,5.25rem)] leading-tight text-white"
              >
                {birthdayMessage}
              </motion.h1>
              <div className="mt-6 flex items-center justify-center gap-3 text-3xl font-semibold tracking-[0.12em] text-pink-200 sm:text-5xl">
                <span>{herName}</span>
                <Heart className="h-7 w-7 fill-pink-300 text-pink-300" />
              </div>
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-pink-50/80 sm:text-xl">Today is all about you.</p>
              {heroImage && !imageFailed && (
                <motion.img
                  src={heroImage}
                  alt={heroImageAlt}
                  onError={() => setImageFailed(true)}
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.35, duration: 0.65 }}
                  className="mx-auto mt-8 max-h-[320px] w-auto max-w-full rounded-[28px] border border-pink-200/30 object-contain shadow-[0_24px_70px_rgba(0,0,0,0.38)]"
                />
              )}
              <button type="button" className="primary-button mt-10" onClick={onStart}>
                Open Your Surprise <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
