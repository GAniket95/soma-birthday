import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { useMemo, useState } from 'react';
import type { QuestionItem } from '../config/birthdayData';

type Props = {
  questions: QuestionItem[];
  onContinue: () => void;
};

export function MemoryQuiz({ questions, onContinue }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  const activeQuestion = useMemo(() => questions[activeIndex], [activeIndex, questions]);
  const isLast = activeIndex === questions.length - 1;

  const goPrevious = () => {
    setIsRevealed(false);
    setActiveIndex((current) => (current === 0 ? questions.length - 1 : current - 1));
  };

  const goNext = () => {
    setIsRevealed(false);
    setActiveIndex((current) => (current + 1) % questions.length);
  };

  return (
    <section className="chapter-shell">
      <div className="relative mx-auto max-w-5xl">
        <div className="mb-6 flex items-center justify-between text-sm uppercase tracking-[0.3em] text-pink-100/80">
          <span>Chapter 03</span>
          <span>{activeIndex + 1} / {questions.length}</span>
        </div>

        <div className="glass-panel p-6 sm:p-10">
          <div className="mb-6 flex items-center justify-center gap-2 text-pink-100/80">
            <Heart className="h-4 w-4 fill-pink-300 text-pink-300" />
            <span className="text-xs uppercase tracking-[0.35em]">Do You Remember?</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="overflow-hidden rounded-[30px] border border-white/10 bg-[#2b1322]">
              {activeQuestion.image ? (
                <img src={activeQuestion.image} alt={activeQuestion.question} className="h-[360px] w-full object-cover" />
              ) : (
                <div className="flex h-[360px] items-center justify-center bg-[radial-gradient(circle,_rgba(255,255,255,0.1),_transparent_60%)] text-4xl text-white/70">💌</div>
              )}
            </div>

            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeQuestion.id + '-' + String(isRevealed)}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.45 }}
                  className="space-y-5"
                >
                  {!isRevealed ? (
                    <>
                      <h2 className="font-serif text-3xl text-white sm:text-4xl">{activeQuestion.question}</h2>
                      <button type="button" className="primary-button" onClick={() => setIsRevealed(true)}>
                        Reveal This Memory
                      </button>
                    </>
                  ) : (
                    <>
                      <h2 className="font-serif text-3xl text-white sm:text-4xl">I remember.</h2>
                      <p className="text-lg leading-8 text-pink-50/80">{activeQuestion.answer}</p>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="mt-8 flex flex-wrap gap-3">
                <button type="button" className="nav-button" onClick={goPrevious}>
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </button>
                <button type="button" className="nav-button" onClick={goNext}>
                  Next
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>

              {isRevealed && isLast && (
                <button type="button" className="primary-button mt-6" onClick={onContinue}>
                  Continue Our Story ❤️
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
