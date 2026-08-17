import musicOn from "../../../../assets/image/music_note.png";
import musicOff from "../../../../assets/image/music_off.png";
import musicFile from "../../../../assets/audio/日々の喜び.mp3";
import { useRef, useState } from "react";

const MusicPlayer = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const handleToggleMusic = () => {
        if (!audioRef.current) return;

        if (!isPlaying) {
            audioRef.current.play();
            setIsPlaying(true);
        } else {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    }

    return (
        <div className="music">
            <button id="musicBtn" title="Music" onClick={handleToggleMusic}>
                <img id="music-icon" src={isPlaying ? musicOn : musicOff} alt="Music" />
            </button>
            <audio id="background-music" loop ref={audioRef}>
                <source src={musicFile} type="audio/mp3" />
                Your browser doesn't support HTML audio.
            </audio>
        </div>
    )
};

export default MusicPlayer;