import { createContext, useContext, useState, useRef } from "react";

const MusicPlayerContext = createContext();

export const MusicProvider = ({ children }) => {
    const audioRef = useRef(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [wasInterrupted, setWasInterrupted] = useState(false);

    const handleToggleMusic = () => {
        const audio = audioRef.current;
        if (!audio) return;

        if (audio.paused) {
            audio.play();
            setIsPlaying(true);
        } else {
            audio.pause();
            setIsPlaying(false);
        }
    };

    const pauseMusicForVideo = () => {
        const audio = audioRef.current;

        if (!audio) return;

        if (!audio.paused) {
            audio.pause();
            setIsPlaying(false);
            setWasInterrupted(true);
        }
    };

    const resumeMusicAfterVideo = () => {
        const audio = audioRef.current;

        if (!audio || !wasInterrupted) return;

        audio.play();
        setIsPlaying(true);
        setWasInterrupted(false);
    };

    return (
        <MusicPlayerContext.Provider
            value={{
                audioRef,
                isPlaying,
                handleToggleMusic,
                pauseMusicForVideo,
                resumeMusicAfterVideo
            }}>
            {children}
        </MusicPlayerContext.Provider>
    );
};

export const useMusic = () => useContext(MusicPlayerContext);