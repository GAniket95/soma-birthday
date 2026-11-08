import { Heart } from 'lucide-react';

type Props = {
  current: number;
  total: number;
  onSelect: (chapter: number) => void;
  completedChapters: Record<number, boolean>;
};

export function ChapterNavigation({ current, total, onSelect, completedChapters }: Props) {
  return (
    <nav className="sticky top-4 z-40 mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-white/10 bg-[#1b0f19]/80 p-2 backdrop-blur-md">
      {Array.from({ length: total }).map((_, index) => {
        const active = current === index;
        const unlocked = index === 0 || completedChapters[index - 1] || index <= current;
        return (
          <button
            key={index}
            type="button"
            aria-label={`Go to chapter ${index + 1}`}
            disabled={!unlocked}
            onClick={() => onSelect(index)}
            className={`relative h-9 w-9 rounded-full border text-xs font-medium transition ${
              active
                ? 'border-pink-200 bg-pink-300/20 text-white'
                : unlocked
                  ? 'border-white/10 bg-white/5 text-pink-100/60 hover:bg-white/10'
                  : 'cursor-not-allowed border-white/10 bg-white/5 text-pink-100/20'
            }`}
          >
            {active ? <Heart className="mx-auto h-3.5 w-3.5 fill-pink-300 text-pink-300" /> : index + 1}
          </button>
        );
      })}
    </nav>
  );
}
