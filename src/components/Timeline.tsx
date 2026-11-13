import { motion } from 'framer-motion';
import { ArrowRight, Flower2, Heart, Infinity as InfinityIcon, MessageCircle, Sparkles, Star } from 'lucide-react';
import type { TimelineItem } from '../config/birthdayData';

const milestoneDetails = [
  {
    icon: Sparkles,
    title: 'A little hello',
    caption: 'The start of something lovely',
    artwork: 'rounded-full border border-amber-200/30 bg-amber-200/10 shadow-[0_0_55px_rgba(251,191,36,0.12)]',
    iconStyle: 'h-14 w-14 text-amber-100',
    textStyle: 'text-amber-100/80',
  },
  {
    icon: MessageCircle,
    title: 'Words that stayed',
    caption: 'One conversation became many',
    artwork: 'rounded-[30px_30px_30px_8px] border border-sky-200/25 bg-sky-200/10 rotate-[-4deg]',
    iconStyle: 'h-12 w-12 text-sky-100',
    textStyle: 'text-sky-100/80',
  },
  {
    icon: Flower2,
    title: 'A day in bloom',
    caption: 'The world felt brighter together',
    artwork: 'rounded-[42%_58%_55%_45%] border border-fuchsia-200/25 bg-fuchsia-200/10',
    iconStyle: 'h-14 w-14 text-fuchsia-100',
    textStyle: 'text-fuchsia-100/80',
  },
  {
    icon: Star,
    title: 'One for always',
    caption: 'A memory with its own little sparkle',
    artwork: 'rounded-[32%_68%_38%_62%] border border-violet-200/25 bg-violet-200/10 rotate-3',
    iconStyle: 'h-12 w-12 fill-violet-200/20 text-violet-100',
    textStyle: 'text-violet-100/80',
  },
  {
    icon: InfinityIcon,
    title: 'To all that comes',
    caption: 'Our best chapters are still ahead',
    artwork: 'rounded-[28px] border border-rose-200/25 bg-rose-200/10 shadow-[0_0_55px_rgba(251,113,133,0.12)]',
    iconStyle: 'h-14 w-14 text-rose-100',
    textStyle: 'text-rose-100/80',
  },
];

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
              const detail = milestoneDetails[index % milestoneDetails.length];
              const StickerIcon = detail.icon;
              const card = (
                <div
                  key={item.id}
                  className={`relative order-1 w-full rounded-[24px] border border-white/10 bg-[#22111d]/80 p-4 sm:w-[46%] sm:p-6 ${isLeft ? 'sm:order-1' : 'sm:order-2'}`}
                >
                  <div
                    className={`absolute -left-3 top-6 h-3 w-3 rounded-full border-2 border-pink-200 bg-[#1c0d18] sm:top-8 ${
                      isLeft ? 'sm:left-auto sm:-right-4' : 'sm:-left-4'
                    }`}
                  />
                  <div className="mb-3 text-[10px] uppercase tracking-[0.35em] text-pink-200/70">{item.date}</div>
                  <h3 className="font-serif text-2xl text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-pink-50/80">{item.description}</p>
                  {item.image && (
                    <img src={item.image} alt={item.title} className="mt-4 h-[360px] w-full rounded-2xl object-cover" />
                  )}
                </div>
              );
              const sticker = (
                <div
                  aria-hidden="true"
                  className={`hidden flex-col items-center justify-center text-center sm:flex sm:w-[46%] ${
                    isLeft ? 'sm:order-2' : 'sm:order-1'
                  }`}
                >
                  <div className={`flex h-36 w-36 items-center justify-center ${detail.artwork}`}>
                    <StickerIcon className={detail.iconStyle} />
                  </div>
                  <span className={`mt-4 font-serif text-lg italic ${detail.textStyle}`}>{detail.title}</span>
                  <span className="mt-2 max-w-48 text-xs leading-5 text-pink-100/55">{detail.caption}</span>
                </div>
              );

              return (
                <motion.article
                  key={`timeline-${item.id}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="relative flex items-center justify-between"
                >
                  {isLeft ? card : sticker}
                  {isLeft ? sticker : card}
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
