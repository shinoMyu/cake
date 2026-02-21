// music 音樂控制區塊
let music;
let musicIcon;
let musicBtn;
let isPlaying = false;
let musicWasInterrupted = false;  // 判斷影片播放時是否暫停音樂

export function initMusicPlayer(){
    music = document.getElementById('background-music');
    musicIcon = document.getElementById('music-icon');
    musicBtn = document.getElementById('musicBtn');

    if (!music || !musicIcon || !musicBtn) return;

    musicBtn.addEventListener('click', function () {
        if (!isPlaying) {
            music.play();
            musicIcon.src = 'image/music.png';
            isPlaying = true;
        } else {
            music.pause();
            musicIcon.src = 'image/music_off.png';
            isPlaying = false;
        }
    });
}

export function pauseMusicExternally(){
    if (!music) return;

    if (isPlaying) {
        music.pause();
        musicIcon.src = 'image/music_off.png';
        isPlaying = false;
        musicWasInterrupted = true;
    }        
}

export function resumeIfInterrupted(){
    if (!music) return;

    if (musicWasInterrupted) {
        music.play();
        musicIcon.src = 'image/music.png';
        isPlaying = true;
        musicWasInterrupted = false;
    }  
}