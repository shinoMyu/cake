import * as musicControl from "./musicPlayer.js"

export function initVideoPlayer(){
    // video 影片控制區塊
    const video = document.getElementById('intro-video');
    const playPauseBtn = document.getElementById('playPauseBtn');
    const expandBtn = document.getElementById('expandVideoBtn');
    const closeFullscreenBtn = document.getElementById("closeFullscreenBtn");
    const muteBtn = document.getElementById('muteBtn');
    const replayBtn = document.getElementById('replayBtn');
    const volumeSlider = document.getElementById('volumeSlider');
    const progressBar = document.getElementById('progressBar');
    const volumeControl = document.getElementById('volumeControl');

    video.volume = 0; // 保證靜音 + 音量值為0
    volumeSlider.value = 0;

    // 播放 / 暫停影片
    playPauseBtn.onclick = function () {
        if (video.paused) {
            video.play();
            playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
            playPauseBtn.title = "Pause";            
            progressBar.style.display = 'block';
    
            let buttons = document.querySelectorAll('.video-controls button');
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].classList.add('transparent');
            }
            musicControl.pauseMusicExternally();
        } else {
            video.pause();
            playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
            playPauseBtn.title = "Play";
            progressBar.style.display = 'none';
    
            // 移除透明
            let buttons = document.querySelectorAll('.video-controls button');
            for (let i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove('transparent');
            }
        }
    };

    // 展開全螢幕
    expandBtn.onclick = function () {
        if (!document.fullscreenElement) {
            // 讓整個 video-container 進入全螢幕
            video.parentElement.requestFullscreen().catch(err => {
                console.log(`Error attempting to enable full-screen mode: ${err.message}`);
            });
            expandBtn.innerHTML = '<i class="fas fa-compress"></i>'; // 切換成縮小 icon
            expandBtn.title = "Exit Fullscreen";
        } else {
            // 如果已經是全螢幕就退出
            document.exitFullscreen();
            expandBtn.innerHTML = '<i class="fas fa-expand"></i>'; // 回復成展開 icon
            expandBtn.title = "Enter Fullscreen";
        }
    };

    // 退出全螢幕
    document.addEventListener("fullscreenchange", () => {
        if (!document.fullscreenElement) {
            expandBtn.innerHTML = '<i class="fas fa-expand"></i>';
        }
    });

    closeFullscreenBtn.onclick = function () {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
    };

    // 重播影片
    replayBtn.onclick = function () {
        video.currentTime = 0;
        video.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        progressBar.style.display = 'block';
    };

    // 靜音控制與音量滑桿
    muteBtn.onclick = function () {
        // 切換靜音狀態
        video.muted = !video.muted;

        // 根據靜音狀態決定圖示和滑桿顯示
        if (video.muted) {
            muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
            muteBtn.title = "Unmute";
            volumeControl.style.display = 'none';
        } else {
            muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
            muteBtn.title = "Mute";
            volumeControl.style.display = 'block';

            // 如果解除靜音但 volume 是 0，自動設一點點聲音
            if (video.volume === 0) {
                video.volume = 0.5;
                volumeSlider.value = 0.5;
            } else {
                volumeSlider.value = video.volume;
            }
        }
    };

    // 改變影片音量
    volumeSlider.oninput = function () {
        video.volume = volumeSlider.value;

        // 如果調到 0，也要更新靜音圖示
        if (video.volume == 0) {
            video.muted = true;
            muteBtn.innerHTML = '<i class="fas fa-volume-mute"></i>';
        } else {
            video.muted = false;
            muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
        }
    };
    
    // 如果影片暫停或播完，恢復音樂（只有當音樂之前有被暫停）
    video.onpause = function () {
        musicControl.pauseMusicExternally();
    };
    
    // 當影片播放時，更新 slider(播放進度條)
    video.ontimeupdate = function () {
        progressBar.value = (video.currentTime / video.duration) * 100;
    };
    
    // 拖曳 slider 時，更新影片時間
    progressBar.oninput = function () {
        video.currentTime = (progressBar.value / 100) * video.duration;
    };
    
    // 當影片播完,自動換成播放鍵 + 恢復音樂（如果之前有中斷）
    video.onended = function () {
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        progressBar.style.display = 'none';
    
        let buttons = document.querySelectorAll('.video-controls button');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('transparent');
        }
        musicControl.resumeIfInterrupted();
    };

    // 點擊其他區域時隱藏音量滑桿
    document.addEventListener("click", function (e) {
        if (!muteBtn.contains(e.target) && !volumeSlider.contains(e.target)) {
            volumeControl.style.display = 'none';
        }    
    });    
}
