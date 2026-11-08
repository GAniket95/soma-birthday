import { AnimatePresence, motion } from 'framer-motion';
import { Gift, Heart, Mail } from 'lucide-react';
import { useState } from 'react';

type Props = {
  finalLetter: string;
  herName: string;
  senderName: string;
  onReplay: () => void;
};

export function LoveLetter({ finalLetter, herName, senderName, onReplay }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    window.setTimeout(() => setShowLetter(true), 900);
  };

  return (
    <section className="chapter-shell">
      <div className="relative mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between text-sm uppercase tracking-[0.3em] text-pink-100/80">
          <span>Chapter 06</span>
          <span>The Final Love Letter</span>
        </div>

        <div className="glass-panel p-8 sm:p-10">
          {!isOpen ? (
            <div className="flex flex-col items-center justify-center gap-6 py-12 text-center">
              <div className="mb-3 flex h-20 w-20 items-center justify-center rounded-full border border-pink-200/30 bg-pink-300/10 text-pink-200">
                <Mail className="h-10 w-10" />
              </div>
              <h2 className="font-serif text-4xl text-white sm:text-5xl">A Little Letter, Just for You</h2>
              <button type="button" className="primary-button" onClick={handleOpen}>
                Open Your Letter ❤️
              </button>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              {!showLetter ? (
                <motion.div
                  key="envelope"
                  initial={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92, y: -24 }}
                  transition={{ duration: 0.35 }}
                  className="relative mx-auto h-[250px] w-full max-w-[540px] [perspective:1200px]"
                >
                  <div className="absolute inset-0 rounded-[24px] border border-pink-200/30 bg-[linear-gradient(135deg,#3b1a31,#201622)] shadow-[0_30px_100px_rgba(0,0,0,0.35)]" />
                  <motion.div
                    initial={{ rotateX: 0 }}
                    animate={{ rotateX: -165 }}
                    transition={{ duration: 0.85, ease: 'easeInOut' }}
                    className="absolute inset-x-0 top-0 h-1/2 rounded-t-[24px] border border-pink-200/25 bg-[linear-gradient(135deg,#d987aa,#8b416d)]"
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                      transformOrigin: 'top',
                      backfaceVisibility: 'hidden',
                    }}
                  />
                  <Heart className="absolute inset-0 m-auto h-10 w-10 fill-pink-200 text-pink-200" />
                </motion.div>
              ) : (
                <motion.div
                  key="letter"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="rounded-[28px] border border-white/10 bg-[#20141d] p-6 text-left shadow-[0_20px_45px_rgba(0,0,0,0.2)] sm:p-8"
                >
                    <div className="mb-6 flex items-center gap-2 text-pink-200">
                      <Gift className="h-4 w-4" />
                      <span className="text-xs uppercase tracking-[0.35em]">For {herName}</span>
                    </div>
                    <div className="space-y-5 whitespace-pre-line font-serif text-lg leading-8 text-pink-50/90 sm:text-xl">
                      {finalLetter}
                    </div>

                    <div className="mt-8 rounded-[22px] border border-pink-200/20 bg-pink-200/5 p-6 text-center">
                      <p className="font-serif text-3xl text-white sm:text-4xl">Happy Birthday, My Future Wife ❤️</p>
                      <p className="mt-3 text-sm uppercase tracking-[0.25em] text-pink-100/70">Here’s to all the beautiful chapters we have not written yet.</p>
                    </div>

                    <div className="mt-8 flex justify-center">
                      <button type="button" className="primary-button" onClick={onReplay}>
                        Replay Our Story
                      </button>
                    </div>

                    <div className="mt-10 text-center text-pink-100/80">
                      <span className="text-4xl">💗</span>
                      <p className="mt-4 font-serif text-xl sm:text-2xl">Forever Yours, {senderName}</p>
                    </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
}
