import introVideo from "../../../../assets/video/video.mp4";
import cover from "../../../../assets/image/cover.jpg";
import {
    FaPlay,
    FaPause,
    FaExpand,
    FaCompress,
    FaVolumeMute,
    FaVolumeUp,
    FaRedo,
    FaTimes
} from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import useClickOutside from "../../../../hooks/useClickOutside";

const VideoPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [showVolume, setShowVolume] = useState(false);
    const [volume, setVolume] = useState(0);
    const [progress, setProgress] = useState(0);

    const containerRef = useRef(null);
    const videoRef = useRef(null);
    const volumeRef = useRef(null);

    const handlePlayPause = () => {
        const video = videoRef.current;
        if (video.paused) {
            video.play();
            setIsPlaying(true);

        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    const handleEnded = () => {
        setIsPlaying(false);
        setProgress(0);
        setShowVolume(false);
    };

    const handleFullscreen = async () => {
        const container = videoRef.current.parentElement;
        if (!document.fullscreenElement) {
            await container.requestFullscreen();
            setIsFullscreen(true);
        } else {
            await document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    const handleCloseFullscreen = async () => {
        if (document.fullscreenElement) {
            await document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    useEffect(() => {
        const handleFullscreen = () => {
            setIsFullscreen(Boolean(document.fullscreenElement));
        };

        document.addEventListener(
            "fullscreenchange",
            handleFullscreen
        );

        return () => {
            document.removeEventListener(
                "fullscreenchange",
                handleFullscreen
            );
        };
    }, []);

    const handleMute = () => {
        const video = videoRef.current;

        const newMuted = !video.muted;

        video.muted = newMuted;
        setIsMuted(newMuted);

        if (!newMuted && video.volume === 0) {
            video.volume = 0.3;
            setVolume(0.3);
        }

        setShowVolume(!newMuted);
    };

    useEffect(() => {
        const video = videoRef.current;

        if (!video) return;

        video.volume = 0;
        video.muted = true;
    }, []);

    const handleVolumeChange = (e) => {
        const value = Number(e.target.value);

        videoRef.current.volume = value;
        videoRef.current.muted = value === 0;

        setVolume(value);
        setIsMuted(value === 0);
    };

    const handleReplay = () => {
        const video = videoRef.current;

        video.currentTime = 0;
        video.play();
        setIsPlaying(true);
    };

    const handleProgressChange = (e) => {
        const video = videoRef.current;

        if (!video) return;

        const newProgress = Number(e.target.value);

        video.currentTime =
            (newProgress / 100) * video.duration;

        setProgress(newProgress);
    };

    const handleTimeUpdate = () => {
        const video = videoRef.current;

        if (!video.duration) return;

        const percentage =
            (video.currentTime / video.duration) * 100;

        setProgress(percentage);
    };

    useClickOutside(volumeRef, () => setShowVolume(false));

    return (
        <div className="video-container" ref={containerRef}>
            <video
                ref={videoRef}
                width="300"
                muted={isMuted}
                poster={cover}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleEnded}
            >
                <source src={introVideo} type="video/mp4" />
                Your browser doesn't support HTML video.
            </video>
            <div className={`video-controls ${isPlaying ? "playing" : ""}`}>
                <button className="playPauseBtn" title={!isPlaying ? "Play" : "Pause"} onClick={handlePlayPause}>
                    {!isPlaying ? <FaPlay /> : <FaPause />}
                </button>
                <button className="expandVideoBtn" title={!isFullscreen ? "Enter Fullscreen" : "Exit Fullscreen"} onClick={handleFullscreen}>
                    {!isFullscreen ? <FaExpand /> : <FaCompress />}
                </button>
                <button className="muteBtn" title={isMuted ? "Mute" : "Unmute"} onClick={handleMute}>
                    {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                </button>
                {showVolume && (
                    <div className="volumeControl">
                        <input type="range" className="volumeSlider" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} />
                    </div>
                )}
                {isPlaying && (
                    <input type="range" className="progressBar" value={progress} min="0" max="100" onChange={handleProgressChange} />
                )}
                <button className="replayBtn" title="Replay" onClick={handleReplay}>
                    <FaRedo />
                </button>
                {isFullscreen && (
                    <button className="closeFullscreenBtn" title="Close" onClick={handleCloseFullscreen}>
                        <FaTimes />
                    </button>
                )}
            </div>
        </div>
    )
};

export default VideoPlayer;