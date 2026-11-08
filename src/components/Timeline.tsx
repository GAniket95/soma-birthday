import { motion } from 'framer-motion';
import { ArrowRight, Heart } from 'lucide-react';
import type { TimelineItem } from '../config/birthdayData';

type Props = {
  timeline: TimelineItem[];
  onContinue: () => void;
};

export function Timeline({ timeline, onContinue }: Props) {
  return (
    <section className="chapter-shell">
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-6 flex items-center justify-between text-sm uppercase tracking-[0.3em] text-pink-100/80">
          <span>Chapter 04</span>
          <span>{timeline.length} milestones</span>
        </div>

        <div className="glass-panel p-6 sm:p-10">
          <div className="mb-8 flex items-center justify-center gap-2 text-pink-100/80">
            <Heart className="h-4 w-4 fill-pink-300 text-pink-300" />
            <span className="text-xs uppercase tracking-[0.35em]">Our Journey Together</span>
          </div>

          <div className="relative space-y-8 before:absolute before:bottom-0 before:left-4 before:top-0 before:w-px before:bg-gradient-to-b before:from-pink-200/0 before:via-pink-200/60 before:to-pink-200/0 sm:before:left-1/2">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className={`relative flex ${isLeft ? 'sm:justify-start' : 'sm:justify-end'}`}
                >
                  <div className="relative w-full max-w-full rounded-[24px] border border-white/10 bg-[#22111d]/80 p-4 sm:max-w-[46%] sm:p-6">
                    <div className="absolute -left-3 top-6 h-3 w-3 rounded-full border-2 border-pink-200 bg-[#1c0d18] sm:-left-4 sm:top-8" />
                    <div className="mb-3 text-[10px] uppercase tracking-[0.35em] text-pink-200/70">{item.date}</div>
                    <h3 className="font-serif text-2xl text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-pink-50/80">{item.description}</p>
                    {item.image && (
                      <img src={item.image} alt={item.title} className="mt-4 h-44 w-full rounded-2xl object-cover" />
                    )}
                  </div>
                </motion.article>
              );
            })}
          </div>

          <div className="mt-8 flex justify-center">
            <button type="button" className="primary-button" onClick={onContinue}>
              Continue Our Story <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
