import { motion } from 'framer-motion';
import { Music2, Pause, Play, Volume2, VolumeX } from 'lucide-react';

type Props = {
  isPlaying: boolean;
  isMuted: boolean;
  trackTitle: string;
  error: string | null;
  hasTrack: boolean;
  onTogglePlayback: () => void;
  onToggleMute: () => void;
};

export function MusicPlayer({ isPlaying, isMuted, trackTitle, error, hasTrack, onTogglePlayback, onToggleMute }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2"
    >
      {error && (
        <p role="status" className="max-w-64 rounded-xl border border-pink-200/20 bg-[#170d17]/90 px-3 py-2 text-xs text-pink-100 shadow-lg backdrop-blur-xl">
          {error}
        </p>
      )}

      <div className="flex items-center gap-3 rounded-full border border-pink-200/20 bg-[#170d17]/80 px-3 py-2 shadow-[0_18px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        <div className="flex max-w-36 items-center gap-2 text-pink-100" title={trackTitle}>
          <Music2 className="h-4 w-4 shrink-0" />
          <span className="truncate text-[10px] uppercase tracking-[0.2em]">{trackTitle}</span>
        </div>

        <button type="button" disabled={!hasTrack} aria-label={isPlaying ? 'Pause music' : 'Play music'} className="rounded-full bg-pink-300/15 p-2 text-pink-100 transition hover:bg-pink-300/25 disabled:cursor-not-allowed disabled:opacity-40" onClick={onTogglePlayback}>
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </button>

        <button type="button" disabled={!hasTrack} aria-label={isMuted ? 'Unmute music' : 'Mute music'} className="rounded-full bg-pink-300/15 p-2 text-pink-100 transition hover:bg-pink-300/25 disabled:cursor-not-allowed disabled:opacity-40" onClick={onToggleMute}>
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      </div>
    </motion.div>
  );
}
