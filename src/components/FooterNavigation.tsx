import { ArrowLeft, ArrowRight, Heart } from 'lucide-react';

type Props = {
  chapter: number;
  totalChapters: number;
  onSelect: (chapter: number) => void;
  canAdvance: boolean;
};

export function FooterNavigation({ chapter, totalChapters, onSelect, canAdvance }: Props) {
  const canGoBack = chapter > 0;
  const canGoForward = chapter < totalChapters - 1 && canAdvance;

  return (
    <div className="sticky bottom-5 z-40 mx-auto mt-4 flex w-fit items-center gap-3 rounded-full border border-white/10 bg-[#180d17]/80 p-2 backdrop-blur-md">
      <button type="button" disabled={!canGoBack} className="nav-button disabled:cursor-not-allowed disabled:opacity-40" onClick={() => onSelect(chapter - 1)}>
        <ArrowLeft className="h-4 w-4" />
        Back
      </button>
      <div className="flex items-center gap-2 rounded-full border border-pink-200/20 bg-pink-300/10 px-3 py-2 text-[10px] uppercase tracking-[0.35em] text-pink-100/80">
        <Heart className="h-3.5 w-3.5 fill-pink-300 text-pink-300" />
        Chapter {chapter + 1} / {totalChapters}
      </div>
      <button type="button" disabled={!canGoForward} className="nav-button disabled:cursor-not-allowed disabled:opacity-40" onClick={() => onSelect(chapter + 1)}>
        Next
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
