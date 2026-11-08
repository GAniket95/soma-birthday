import { useEffect, useRef, useState } from 'react';

export function useBackgroundMusic(src: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const hasStartedRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const audio = new Audio();
    audio.loop = true;
    audio.preload = 'auto';
    audio.volume = 0.6;
    audio.muted = false;
    audioRef.current = audio;

    const handleError = () => {
      setIsPlaying(false);
      setError('This chapter’s music could not be loaded. Check the configured audio file in public/music.');
    };

    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('error', handleError);
      audio.pause();
      audio.src = '';
    };
  }, []);

  const play = async () => {
    const audio = audioRef.current;
    if (!audio || !src) {
      return false;
    }

    hasStartedRef.current = true;
    try {
      await audio.play();
      setError(null);
      setIsPlaying(true);
      return true;
    } catch {
      setIsPlaying(false);
      setError('This chapter’s music could not be played. Check the configured audio file and try again.');
      return false;
    }
  };

  const pause = () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }
    audio.pause();
    setIsPlaying(false);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }
    audio.muted = !audio.muted;
    setIsMuted(audio.muted);
  };

  const togglePlayback = async () => {
    if (isPlaying) {
      pause();
      return;
    }
    await play();
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) {
      return;
    }

    audio.pause();
    setIsPlaying(false);
    setError(null);

    if (!src) {
      audio.removeAttribute('src');
      audio.load();
      return;
    }

    const freshSource = new URL(src, document.baseURI);
    freshSource.searchParams.set('v', Date.now().toString());
    audio.src = freshSource.toString();
    audio.load();

    if (hasStartedRef.current) {
      void audio.play().then(() => {
        setError(null);
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
        setError('This chapter’s music could not be played. Check the configured audio file and try again.');
      });
    }
  }, [src]);

  return {
    audioRef,
    isPlaying,
    isMuted,
    error,
    hasTrack: Boolean(src),
    play,
    pause,
    toggleMute,
    togglePlayback,
    setIsMuted,
  };
}
