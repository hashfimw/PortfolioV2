"use client";

import { useState, useRef, useEffect } from "react";
import {
  HeartIcon,
  PauseIcon,
  PlayIcon,
  SkipBackIcon,
  SkipForwardIcon,
  RepeatIcon,
  ShuffleIcon,
  VolumeIcon,
} from "lucide-react";
import Image from "next/image";

interface Track {
  title: string;
  artist: string;
  duration: number; // in seconds
  cover: string;
  audioSrc: string;
}

const demoTracks: Track[] = [
  {
    title: "Old Song",
    artist: "But Its Lofi Remix",
    duration: 800, // 3:45
    cover: "/loficover.jpeg",
    audioSrc: "/track1.mp3",
  },
  {
    title: "Portfolio Highlights",
    artist: "Hashfi M",
    duration: 198, // 3:18
    cover: "/images/portfolio.jpg",
    audioSrc: "/audio/track2.mp3",
  },
];

const NowPlayingBar = () => {
  const [tracks, setTracks] = useState<Track[]>(demoTracks);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(75);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const currentTrack = tracks[currentTrackIndex];

  useEffect(() => {
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        if (progressIntervalRef.current) {
          clearInterval(progressIntervalRef.current);
          progressIntervalRef.current = null;
        }
      } else {
        audioRef.current.play();
        progressIntervalRef.current = setInterval(() => {
          if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
            setProgress(
              (audioRef.current.currentTime / audioRef.current.duration) * 100
            );
          }
        }, 1000);
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNextTrack = () => {
    setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    if (isPlaying && audioRef.current) {
      // Need to wait for the new audio src to load
      setTimeout(() => {
        audioRef.current?.play();
      }, 100);
    }
  };

  const handlePrevTrack = () => {
    setCurrentTrackIndex((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
    if (isPlaying && audioRef.current) {
      setTimeout(() => {
        audioRef.current?.play();
      }, 100);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const progressBar = e.currentTarget;
      const clickPosition =
        e.clientX - progressBar.getBoundingClientRect().left;
      const newPercentage = (clickPosition / progressBar.clientWidth) * 100;
      const newTime = (newPercentage / 100) * audioRef.current.duration;

      audioRef.current.currentTime = newTime;
      setProgress(newPercentage);
      setCurrentTime(newTime);
    }
  };

  const handleVolumeClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const volumeBar = e.currentTarget;
    const clickPosition = e.clientX - volumeBar.getBoundingClientRect().left;
    const newVolume = Math.round((clickPosition / volumeBar.clientWidth) * 100);

    setVolume(Math.max(0, Math.min(100, newVolume)));
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  return (
    <footer className="h-20 bg-neutral-900 border-t border-neutral-800 lg:flex items-center px-4 hidden">
      <audio
        ref={audioRef}
        src={currentTrack.audioSrc}
        onLoadedMetadata={() => {
          if (audioRef.current) {
            setDuration(audioRef.current.duration);
          }
        }}
        onEnded={handleNextTrack}
      />

      <div className="grid grid-cols-3 w-full">
        {/* Now playing info (left) */}
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-neutral-800 rounded flex-shrink-0 overflow-hidden">
            {currentTrack.cover && (
              <Image
                src={currentTrack.cover}
                alt={currentTrack.title}
                width={56}
                height={56}
                className="rounded object-cover"
              />
            )}
          </div>
          <div>
            <h4 className="text-white text-sm font-medium">
              {currentTrack.title}
            </h4>
            <p className="text-neutral-400 text-xs">{currentTrack.artist}</p>
          </div>
          <button className="text-neutral-400 hover:text-white">
            <HeartIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Player controls (center) */}
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-4 mb-2">
            <button className="text-neutral-400 hover:text-white">
              <ShuffleIcon className="w-5 h-5" />
            </button>
            <button
              className="text-neutral-400 hover:text-white"
              onClick={handlePrevTrack}
            >
              <SkipBackIcon className="w-5 h-5" />
            </button>
            <button
              className="bg-white rounded-full p-2 text-black hover:scale-105 transition-transform"
              onClick={handlePlayPause}
            >
              {isPlaying ? (
                <PauseIcon className="w-4 h-4" />
              ) : (
                <PlayIcon className="w-4 h-4" />
              )}
            </button>
            <button
              className="text-neutral-400 hover:text-white"
              onClick={handleNextTrack}
            >
              <SkipForwardIcon className="w-5 h-5" />
            </button>
            <button className="text-neutral-400 hover:text-white">
              <RepeatIcon className="w-5 h-5" />
            </button>
          </div>
          <div className="w-full flex items-center gap-2">
            <span className="text-xs text-neutral-400">
              {formatTime(currentTime)}
            </span>
            <div
              className="h-1 flex-1 bg-neutral-700 rounded-full overflow-hidden cursor-pointer"
              onClick={handleProgressClick}
            >
              <div
                className="bg-neutral-400 h-full rounded-full hover:bg-green-500 transition-colors"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <span className="text-xs text-neutral-400">
              {formatTime(duration)}
            </span>
          </div>
        </div>

        {/* Volume & other controls (right) */}
        <div className="flex justify-end items-center gap-3">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-white"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.036 10.036 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
          <button className="text-neutral-400 hover:text-white">
            <VolumeIcon className="w-5 h-5" />
          </button>
          <div className="w-24 cursor-pointer" onClick={handleVolumeClick}>
            <div className="h-1 bg-neutral-700 rounded-full overflow-hidden">
              <div
                className="bg-neutral-400 h-full rounded-full hover:bg-green-500 transition-colors"
                style={{ width: `${volume}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NowPlayingBar;
