"use client";

import { useState, useRef, useEffect } from "react";
import {
  SkipBackIcon,
  SkipForwardIcon,
  RepeatIcon,
  ShuffleIcon,
  VolumeIcon,
  Volume1Icon,
  Volume2Icon,
  VolumeXIcon,
  XIcon,
  ExpandIcon,
} from "lucide-react";
import Image from "next/image";
import { IoPauseSharp, IoPlaySharp } from "react-icons/io5";

interface Track {
  title: string;
  artist: string;
  cover: string;
  audioSrc: string;
}

const demoTracks: Track[] = [
  {
    title: "rue royale",
    artist: "nomar.wav,cloud cover",
    cover: "/rueroyalecover.png",
    audioSrc: process.env.NEXT_PUBLIC_RUE_ROYALE || "",
  },
  {
    title: "Better Days",
    artist: "Purrple Cat",
    cover: "/betterdays-cover.png",
    audioSrc: process.env.NEXT_PUBLIC_BETTER_DAYS || "",
  },
];

// Custom heart icon to support fill color
const HeartIcon = ({ filled = false }: { filled?: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill={filled ? "rgb(220, 38, 38)" : "none"}
    stroke={filled ? "rgb(220, 38, 38)" : "currentColor"}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
  </svg>
);

const NowPlayingBar = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [tracks, _setTracks] = useState<Track[]>(demoTracks);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(75);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isShuffleOn, setIsShuffleOn] = useState(false);
  const [isRepeatOn, setIsRepeatOn] = useState(false);
  const [isDraggingVolume, setIsDraggingVolume] = useState(false);
  const [isDraggingProgress, setIsDraggingProgress] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_audioLoaded, setAudioLoaded] = useState(false);
  const [expandMobilePlayer, setExpandMobilePlayer] = useState(false);
  const [expandDesktopPlayer, setExpandDesktopPlayer] = useState(false);
  const [playerTransitioning, setPlayerTransitioning] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const volumeBarRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  const currentTrack = tracks[currentTrackIndex];

  // Create audio element and set up initial state
  useEffect(() => {
    // Create audio element if it doesn't exist
    if (!audioRef.current) {
      audioRef.current = new Audio(currentTrack.audioSrc);

      // Set up event listeners
      audioRef.current.addEventListener("loadedmetadata", () => {
        if (audioRef.current) {
          setDuration(audioRef.current.duration);
          setAudioLoaded(true);
        }
      });

      audioRef.current.addEventListener("ended", handleTrackEnd);

      // Set initial volume
      audioRef.current.volume = volume / 100;
    }

    return () => {
      // Clean up
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener("loadedmetadata", () => {});
        audioRef.current.removeEventListener("ended", handleTrackEnd);
      }

      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, []);

  // Handle track end event
  const handleTrackEnd = () => {
    if (audioRef.current) {
      if (isRepeatOn) {
        audioRef.current.currentTime = 0;
        audioRef.current
          .play()
          .catch((err) => console.error("Failed to replay track:", err));
      } else {
        // If it's the last track and not on repeat, pause and reset
        if (currentTrackIndex === tracks.length - 1 && !isShuffleOn) {
          setIsPlaying(false);
          // Reset to beginning of current track
          audioRef.current.currentTime = 0;
        } else {
          // Otherwise play next track
          handleNextTrack();
        }
      }
    }
  };

  // Handle track changes
  useEffect(() => {
    if (audioRef.current) {
      // Store playing state before changing track
      const wasPlaying = !audioRef.current.paused;

      // Remove old event listener before updating
      audioRef.current.removeEventListener("ended", handleTrackEnd);

      // Update the src
      audioRef.current.src = currentTrack.audioSrc;
      audioRef.current.load(); // Force reload metadata

      // Reset state
      setProgress(0);
      setCurrentTime(0);
      setAudioLoaded(false);

      // Add updated event listener
      audioRef.current.addEventListener("ended", handleTrackEnd);

      // Add one-time event listener for metadata loading
      const handleMetadata = () => {
        if (audioRef.current) {
          setDuration(audioRef.current.duration);
          setAudioLoaded(true);

          // Resume playing if it was playing before
          if (wasPlaying) {
            audioRef.current.play().catch(() => {
              console.log("Playback failed - user may need to interact first");
            });
          }
        }
      };

      audioRef.current.addEventListener("loadedmetadata", handleMetadata, {
        once: true,
      });
    }
  }, [currentTrack.audioSrc]);

  // Update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);

  // Handle progress updates
  useEffect(() => {
    const updateProgress = () => {
      if (audioRef.current) {
        setCurrentTime(audioRef.current.currentTime);
        if (audioRef.current.duration) {
          setProgress(
            (audioRef.current.currentTime / audioRef.current.duration) * 100
          );
        }
      }
    };

    if (isPlaying) {
      // Clear any existing intervals
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }

      // Start a new interval
      progressIntervalRef.current = setInterval(updateProgress, 50);
    } else {
      // Clear interval when not playing
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
    }

    // Clean up on unmount
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [isPlaying]);

  // Handle dragging
  useEffect(() => {
    // Add event listeners for mouse movements when dragging
    const handleMouseMove = (e: MouseEvent) => {
      if (isDraggingVolume && volumeBarRef.current) {
        const rect = volumeBarRef.current.getBoundingClientRect();
        const percentage = Math.max(
          0,
          Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)
        );
        setVolume(Math.round(percentage));
        if (audioRef.current) {
          audioRef.current.volume = percentage / 100;
        }
      }

      if (isDraggingProgress && progressBarRef.current && audioRef.current) {
        const rect = progressBarRef.current.getBoundingClientRect();
        const percentage = Math.max(
          0,
          Math.min(100, ((e.clientX - rect.left) / rect.width) * 100)
        );
        const newTime = (percentage / 100) * audioRef.current.duration;
        setProgress(percentage);
        setCurrentTime(newTime);
        audioRef.current.currentTime = newTime;
      }
    };

    const handleMouseUp = () => {
      setIsDraggingVolume(false);
      setIsDraggingProgress(false);
    };

    if (isDraggingVolume || isDraggingProgress) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDraggingVolume, isDraggingProgress]);

  const formatTime = (time: number) => {
    if (!isFinite(time) || isNaN(time)) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Playback failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNextTrack = () => {
    if (isShuffleOn) {
      // Select random track except current one
      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * tracks.length);
      } while (nextIndex === currentTrackIndex && tracks.length > 1);
      setCurrentTrackIndex(nextIndex);
    } else {
      const nextIndex = (currentTrackIndex + 1) % tracks.length;
      setCurrentTrackIndex(nextIndex);
    }
    // The audio source change is handled in the useEffect
  };

  const handlePrevTrack = () => {
    // If we're more than 3 seconds into the track, go to start of current track
    if (audioRef.current && audioRef.current.currentTime > 3) {
      audioRef.current.currentTime = 0;
    } else {
      // Otherwise go to previous track
      const prevIndex =
        currentTrackIndex === 0 ? tracks.length - 1 : currentTrackIndex - 1;
      setCurrentTrackIndex(prevIndex);
    }
    // The audio source change is handled in the useEffect
  };

  const handleProgressMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current && audioRef.current.duration) {
      setIsDraggingProgress(true);
      const rect = e.currentTarget.getBoundingClientRect();
      const percentage = ((e.clientX - rect.left) / rect.width) * 100;
      const newTime = (percentage / 100) * audioRef.current.duration;

      setProgress(percentage);
      setCurrentTime(newTime);
      audioRef.current.currentTime = newTime;
    }
  };

  const handleProgressTouch = (e: React.TouchEvent<HTMLDivElement>) => {
    if (
      audioRef.current &&
      audioRef.current.duration &&
      progressBarRef.current
    ) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const touch = e.touches[0];
      const percentage = ((touch.clientX - rect.left) / rect.width) * 100;
      const newTime = (percentage / 100) * audioRef.current.duration;

      setProgress(percentage);
      setCurrentTime(newTime);
      audioRef.current.currentTime = newTime;
    }
  };

  const handleVolumeMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDraggingVolume(true);
    const rect = e.currentTarget.getBoundingClientRect();
    const percentage = ((e.clientX - rect.left) / rect.width) * 100;
    setVolume(Math.round(percentage));
    if (audioRef.current) {
      audioRef.current.volume = percentage / 100;
    }
  };

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  const toggleShuffle = () => {
    setIsShuffleOn(!isShuffleOn);
  };

  const toggleRepeat = () => {
    setIsRepeatOn(!isRepeatOn);
  };

  const toggleExpandMobilePlayer = () => {
    setPlayerTransitioning(true);
    setExpandMobilePlayer(!expandMobilePlayer);

    // After transition completes, reset the flag
    setTimeout(() => {
      setPlayerTransitioning(false);
    }, 300);
  };

  const toggleExpandDesktopPlayer = () => {
    setPlayerTransitioning(true);
    setExpandDesktopPlayer(!expandDesktopPlayer);

    // After transition completes, reset the flag
    setTimeout(() => {
      setPlayerTransitioning(false);
    }, 300);
  };

  const getVolumeIcon = () => {
    if (volume === 0) {
      return <VolumeXIcon className="w-5 h-5" />;
    } else if (volume < 33) {
      return <VolumeIcon className="w-5 h-5" />;
    } else if (volume < 67) {
      return <Volume1Icon className="w-5 h-5" />;
    } else {
      return <Volume2Icon className="w-5 h-5" />;
    }
  };

  return (
    <>
      {/* Mobile Player Bar (collapsed view) - positioned at bottom above mobile nav */}
      <div
        className={`${
          expandMobilePlayer ? "opacity-0 pointer-events-none" : "opacity-100"
        } md:hidden w-full bg-neutral-900 h-16 items-center px-3 fixed bottom-16 left-0 right-0 z-20 border-t border-neutral-800 transition-opacity duration-300 ease-in-out flex`}
      >
        <div className="w-10 h-10 flex-shrink-0 bg-neutral-800 rounded mr-3 overflow-hidden">
          {currentTrack.cover && (
            <Image
              src={currentTrack.cover}
              alt={currentTrack.title}
              width={40}
              height={40}
              className="object-cover"
            />
          )}
        </div>

        <div className="flex-1">
          <h4 className="text-white text-sm font-medium truncate">
            {currentTrack.title}
          </h4>
          <p className="text-neutral-400 text-xs truncate">
            {currentTrack.artist}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button className="text-white" onClick={handlePlayPause}>
            {isPlaying ? (
              <IoPauseSharp className="w-6 h-6" />
            ) : (
              <IoPlaySharp className="w-6 h-6 ml-0.5" />
            )}
          </button>

          <button
            className="text-neutral-400 hover:text-white"
            onClick={handleNextTrack}
          >
            <SkipForwardIcon className="w-5 h-5" />
          </button>

          <button
            className="text-neutral-400 hover:text-white"
            onClick={toggleExpandMobilePlayer}
            disabled={playerTransitioning}
          >
            <ExpandIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Progress bar for mini player */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-neutral-800">
          <div
            className="bg-green-500 h-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Mobile Player (expanded view) */}
      <div
        className={`${
          expandMobilePlayer
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-full pointer-events-none"
        } md:hidden fixed inset-0 bg-gradient-to-b from-neutral-900 to-black z-50 p-5 flex flex-col transition-all duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center mb-8">
          <button
            className="text-white items-center justify-center rounded-full h-10 w-10 bg-spotify-dark-highlight/90 p-2 hover:bg-spotify-dark"
            onClick={toggleExpandMobilePlayer}
            disabled={playerTransitioning}
          >
            <XIcon className="w-6 h-6" />
          </button>
          <span className="text-white text-sm font-medium">Now Playing</span>
          <button
            className={`${isLiked ? "text-red-600" : "text-white"}`}
            onClick={toggleLike}
          >
            <HeartIcon filled={isLiked} />
          </button>
        </div>

        <div className="flex-1 flex items-center justify-center mb-8">
          <div className="w-64 h-64 bg-neutral-800 rounded-lg overflow-hidden shadow-xl">
            {currentTrack.cover && (
              <Image
                src={currentTrack.cover}
                alt={currentTrack.title}
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            )}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-white text-xl font-bold mb-1">
            {currentTrack.title}
          </h3>
          <p className="text-neutral-400">{currentTrack.artist}</p>
        </div>

        <div className="mb-8">
          <div className="w-full flex items-center gap-2 mb-1">
            <div
              ref={progressBarRef}
              className="h-1 flex-1 bg-neutral-700 rounded-full overflow-hidden cursor-pointer"
              onMouseDown={handleProgressMouseDown}
              onTouchStart={handleProgressTouch}
            >
              <div
                className="bg-green-500 h-full rounded-full"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          <div className="flex justify-between text-xs text-neutral-400">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <div className="flex justify-between items-center mb-10 px-4 pb-4">
          <button
            className={`${isShuffleOn ? "text-green-500" : "text-neutral-400"}`}
            onClick={toggleShuffle}
          >
            <ShuffleIcon className="w-6 h-6" />
          </button>

          <button className="text-white" onClick={handlePrevTrack}>
            <SkipBackIcon className="w-8 h-8" />
          </button>

          <button
            className="bg-white rounded-full w-14 h-14 flex items-center justify-center text-black"
            onClick={handlePlayPause}
          >
            {isPlaying ? (
              <IoPauseSharp className="w-8 h-8" />
            ) : (
              <IoPlaySharp className="w-8 h-8 ml-1" />
            )}
          </button>

          <button className="text-white" onClick={handleNextTrack}>
            <SkipForwardIcon className="w-8 h-8" />
          </button>

          <button
            className={`${isRepeatOn ? "text-green-500" : "text-neutral-400"}`}
            onClick={toggleRepeat}
          >
            <RepeatIcon className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Desktop Expanded Player (only shows when toggled) */}
      <div
        className={`${
          expandDesktopPlayer
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-full pointer-events-none"
        } hidden lg:flex fixed inset-0 bg-gradient-radial from-black to-black/80 z-50 p-8 flex-col transition-all duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center mb-8">
          <button
            className="text-white items-center justify-center rounded-full h-10 w-10 bg-spotify-dark-highlight/90 p-2 hover:bg-spotify-dark-elevated"
            onClick={toggleExpandDesktopPlayer}
            disabled={playerTransitioning}
          >
            <XIcon className="w-6 h-6 " />
          </button>
          <span className="text-white text-lg font-bold">Now Playing</span>
          <button
            className={`${isLiked ? "text-red-600" : "text-white"}`}
            onClick={toggleLike}
          >
            <HeartIcon filled={isLiked} />
          </button>
        </div>

        <div className="flex-1 flex gap-12 items-center justify-center mb-8">
          {/* Album art */}
          <div className="w-96 h-96 bg-neutral-800 rounded-lg overflow-hidden shadow-xl">
            {currentTrack.cover && (
              <Image
                src={currentTrack.cover}
                alt={currentTrack.title}
                width={384}
                height={384}
                className="w-full h-full object-cover"
              />
            )}
          </div>

          {/* Track info and controls */}
          <div className="w-96">
            <h2 className="text-white text-3xl font-bold mb-2">
              {currentTrack.title}
            </h2>
            <p className="text-neutral-400 text-xl mb-8">
              {currentTrack.artist}
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Player */}
      <footer className="h-20 bg-black lg:flex items-center px-4 hidden">
        <div className="grid grid-cols-3 w-full">
          {/* Now playing info (left) */}
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 bg-neutral-800 rounded flex-shrink-0 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
              onClick={toggleExpandDesktopPlayer}
            >
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
            <div
              className="cursor-pointer hover:opacity-80 transition-opacity"
              onClick={toggleExpandDesktopPlayer}
            >
              <h4 className="text-white text-sm font-medium">
                {currentTrack.title}
              </h4>
              <p className="text-neutral-400 text-xs">{currentTrack.artist}</p>
            </div>
            <button
              className={`hover:scale-110 transition-all duration-200 ${
                isLiked ? "text-red-600" : "text-neutral-400 hover:text-white"
              }`}
              onClick={toggleLike}
            >
              <HeartIcon filled={isLiked} />
            </button>
          </div>

          {/* Player controls (center) */}
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4 mb-2">
              <button
                className={`hover:scale-110 transition-transform ${
                  isShuffleOn
                    ? "text-green-500"
                    : "text-neutral-400 hover:text-white"
                }`}
                onClick={toggleShuffle}
              >
                <ShuffleIcon className="w-5 h-5" />
              </button>
              <button
                className="text-neutral-400 hover:text-white hover:scale-110 transition-transform"
                onClick={handlePrevTrack}
              >
                <SkipBackIcon className="w-5 h-5" />
              </button>
              <button
                className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-black hover:scale-110 transition-transform"
                onClick={handlePlayPause}
              >
                {isPlaying ? (
                  <IoPauseSharp className="w-5 h-5" />
                ) : (
                  <IoPlaySharp className="w-5 h-5 ml-0.5" />
                )}
              </button>
              <button
                className="text-neutral-400 hover:text-white hover:scale-110 transition-transform"
                onClick={handleNextTrack}
              >
                <SkipForwardIcon className="w-5 h-5" />
              </button>
              <button
                className={`hover:scale-110 transition-transform ${
                  isRepeatOn
                    ? "text-green-500"
                    : "text-neutral-400 hover:text-white"
                }`}
                onClick={toggleRepeat}
              >
                <RepeatIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="w-full flex items-center gap-2">
              <span className="text-xs text-neutral-400 w-10 text-right">
                {formatTime(currentTime)}
              </span>
              <div
                ref={progressBarRef}
                className="h-1 flex-1 bg-neutral-700 rounded-full overflow-hidden cursor-pointer group"
                onMouseDown={handleProgressMouseDown}
              >
                <div
                  className="bg-neutral-400 h-full rounded-full group-hover:bg-green-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <span className="text-xs text-neutral-400 w-10">
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
            <button className="text-neutral-400 hover:text-white">
              {getVolumeIcon()}
            </button>
            <div
              ref={volumeBarRef}
              className="w-24 cursor-pointer group"
              onMouseDown={handleVolumeMouseDown}
            >
              <div className="h-1 bg-neutral-700 rounded-full overflow-hidden">
                <div
                  className="bg-neutral-400 h-full rounded-full group-hover:bg-green-500"
                  style={{ width: `${volume}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default NowPlayingBar;
