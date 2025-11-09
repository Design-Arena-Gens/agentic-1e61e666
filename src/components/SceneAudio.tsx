"use client";

import { useEffect, useRef, useState } from "react";

const ORCHESTRAL_SCORE =
  "https://cdn.pixabay.com/download/audio/2022/10/10/audio_2a87f8ccfe.mp3?filename=rise-of-legends-122185.mp3";

export default function SceneAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(ORCHESTRAL_SCORE);
    audio.loop = true;
    audio.volume = 0.6;
    audioRef.current = audio;

    const markReady = () => setIsReady(true);
    audio.addEventListener("canplaythrough", markReady, { once: true });

    return () => {
      audio.pause();
      audio.removeEventListener("canplaythrough", markReady);
    };
  }, []);

  const togglePlayback = async () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
      return;
    }

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (err) {
      console.error("Audio playback error:", err);
    }
  };

  return (
    <button
      type="button"
      onClick={togglePlayback}
      aria-pressed={isPlaying}
      disabled={!isReady && !isPlaying}
      className="inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-5 py-2 text-sm text-white/80 transition hover:border-white/50 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60 disabled:cursor-not-allowed disabled:opacity-60"
    >
      <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
        <span
          className={`relative block h-3 w-3 transition-transform ${
            isPlaying ? "scale-125" : "scale-100"
          }`}
        >
          {isPlaying ? (
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="h-3 w-[2px] rounded bg-white/80" />
              <span className="ml-[6px] h-3 w-[2px] rounded bg-white/80" />
            </span>
          ) : (
            <span className="absolute left-1/2 top-1/2 -translate-x-[35%] -translate-y-1/2">
              <span className="block h-3 w-[10px] -skew-x-[10deg] rounded bg-white/80" />
            </span>
          )}
        </span>
      </span>
      <div className="text-left">
        <span className="block text-xs uppercase tracking-[0.32em] text-white/60">
          Epic Score
        </span>
        <span className="block font-medium text-white">
          {isPlaying ? "Pause Orchestral Theme" : "Play Orchestral Theme"}
        </span>
      </div>
    </button>
  );
}
