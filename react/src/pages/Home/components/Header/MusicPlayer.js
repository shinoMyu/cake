import musicOn from "../../../../assets/image/music_note.png";
import musicOff from "../../../../assets/image/music_off.png";
import musicFile from "../../../../assets/audio/日々の喜び.mp3";
import { useMusic } from "../../../../context/MusicPlayerContext";

const MusicPlayer = () => {
    const { 
        audioRef,
        isPlaying,
        handleToggleMusic
    } = useMusic();

    return (
        <div className="music">
            <button title="Music" onClick={handleToggleMusic}>
                <img src={isPlaying ? musicOn : musicOff} alt="Music" />
            </button>
            <audio loop ref={audioRef}>
                <source src={musicFile} type="audio/mp3" />
                Your browser doesn't support HTML audio.
            </audio>
        </div>
    )
};

export default MusicPlayer;