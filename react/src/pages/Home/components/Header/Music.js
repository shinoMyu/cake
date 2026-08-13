const Music = () => {
    return (
        <div className="music">
            <button id="musicBtn" title="Music">
                <img id="music-icon" src={music} alt="Music" />
            </button>
            <audio id="background-music" loop>
                <source src={musicFile} type="audio/mp3" />
                Your browser doesn't support HTML audio.
            </audio>
        </div>
    )
};

export default Music;