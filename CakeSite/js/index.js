// 登入狀態與登入按鈕控制
let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
let selectedLang = localStorage.getItem("selectedLang") || 'en';

// 登入按鈕
const authBtn = document.getElementById("authBtn");
const authText = authBtn.querySelector(".auth-text");

let clickCount = 0;

// 登出功能
function signOut() {
    localStorage.removeItem("isLoggedIn");
    alert("You have been signed out.");
    location.reload(); // // 重新載入頁面
}

// 根據登入狀態設定按鈕行為
if (!isLoggedIn) {
    authText.textContent = "Sign in";
    authBtn.onclick = function (e) {
        e.stopPropagation();
        toggleAuthText(function () {
            window.location.href = "login-register.html";
        });
    };
} else {
    authText.textContent = "Sign out";
    authBtn.onclick = function (e) {
        e.stopPropagation();
        toggleAuthText(signOut);
    };
}


// 未登入提示訊息處理（Locked Section）
const videoContainer = document.querySelector('.video-container');
const introText = document.querySelector('.intro-text');
const categoryButtons = document.querySelector('.category-filter');
const products = document.querySelector('.product-grid');

// 登入提示訊息內容（多語言）
const lockedMessage = document.createElement('div');
lockedMessage.className = "locked-section";
lockedMessage.style.textAlign = "center";

let langMap = {
    en: {
        message: "Please log in using the <span class='highlight'>top right</span> button to view the products."
    },
    traditional: {
        message: "請使用<span class='highlight'>右上角</span>按鈕登入以瀏覽蛋糕內容。"
    },
    jp: {
        message: "ログインするとケーキをご覧いただけます、<span class='highlight'>右上</span>のボタンからログインしてください。"
    }
};

// 更新提示訊息的語言
function updateLanguageLockedMessage(lang) {
    const text = langMap[lang] || langMap.en;
    lockedMessage.innerHTML = `<p class="${lang}">${text.message}</p>`;
}

// 根據登入狀態處理內容顯示
if (!isLoggedIn) {
    if (videoContainer) videoContainer.style.display = 'none';
    if (introText) introText.classList.add('centered-intro');
    if (products) products.classList.add("blurred");
    if (categoryButtons) categoryButtons.classList.add("blurred");

    // 插入登入提示
    updateLanguageLockedMessage(selectedLang);

    if (products && products.parentElement) {
        products.parentElement.appendChild(lockedMessage);
    }

    // 高亮提示登入按鈕（scroll出現提示）
    const observer = new IntersectionObserver(function (entries) {
        for (let i = 0; i < entries.length; i++) {
            let entry = entries[i];
            if (entry.isIntersecting) {
                const authBtn = document.querySelector('.auth');
                if (authBtn) {
                    authBtn.classList.add('highlight');
                }
                observer.disconnect(); // 加完一次就停止觀察
                break;
            }
        }
    }, { threshold: 0.5 });

    const locked = document.querySelector('.locked-section');
    if (locked) {
        observer.observe(locked);
    }
} else {
    if (videoContainer) videoContainer.style.display = '';
    if (products) products.style.display = '';
    if (categoryButtons) categoryButtons.classList.remove("blurred");

    // 移除提示
    const existing = document.querySelector('.locked-section');
    if (existing) existing.remove();
}

// 小螢幕的登入/登出點擊處理
function toggleAuthText(action) {
    if (window.innerWidth <= 768) {
        clickCount++;
        if (clickCount === 1) {
            authBtn.classList.add("show-text");
        } else {
            action();
        }
    } else {
        action();
    }
}
// 點擊其他地方時隱藏文字提示與重設點擊次數
document.addEventListener("click", function () {
    authBtn.classList.remove("show-text");
    clickCount = 0;
});


// 商品分類篩選函式
function filterProducts(type) {
    const items = document.querySelectorAll('.product-item');
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (type === 'all') {
            item.style.display = 'block';
        } else {
            item.style.display = item.classList.contains(type) ? 'block' : 'none';
        }
    }
}

function highlightCategory(type) {
    const allButtons = document.querySelectorAll('.category-filter button');
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove('active');
        if (allButtons[i].getAttribute('data-type') === type) {
            allButtons[i].classList.add('active');
        }
    }
}

// 掛載分類按鈕事件
const categoryBtns = document.querySelectorAll('.category-filter button');
for (let i = 0; i < categoryBtns.length; i++) {
    categoryBtns[i].addEventListener('click', function () {
        const type = this.getAttribute('data-type');
        filterProducts(type);
        highlightCategory(type);
    });
}


// 語言切換處理
// 切換語言選單的開關
function toggleLangMenu() {  
    const menu = document.getElementById('langOptions');
    menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
}

// 切換按鈕事件
const langToggle = document.querySelector(".lang-toggle");
langToggle.addEventListener("click", function () {
    toggleLangMenu();
});

// 語言切換函式
let langs = ['en', 'traditional', 'jp'];
function showLanguage(lang) {
    localStorage.setItem("selectedLang", lang);
    // 顯示選中的語言
    for (let i = 0; i < langs.length; i++) {
        let code = langs[i];
        let elements = document.querySelectorAll('.' + code);
        for (let j = 0; j < elements.length; j++) {
            elements[j].style.display = (code === lang) ? 'block' : 'none';
        }
    }

    // 更改語言按鈕狀態
    const buttons = document.querySelectorAll('#langOptions button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('active');
    }
    const activeBtn = document.querySelector('.btn-' + lang);
    if (activeBtn) activeBtn.classList.add('active');
    // 收起語言選單
    document.getElementById('langOptions').style.display = 'none';

    // 若有登入提示訊息，更新語言
    if (document.querySelector('.locked-section')) {
        updateLanguageLockedMessage(lang);
    }

    // 更新分類 active 狀態
    const currentActive = document.querySelector('.category-filter button.active');
    if (currentActive) {
        const type = currentActive.getAttribute('data-type');
        highlightCategory(type);
    } else {
        // 如果完全沒有 active，預設回到 All
        highlightCategory('all');
    }

}
// 執行初始語言設定
showLanguage(selectedLang);

// 四個語言按鈕點擊事件
function createLangHandler(lang) {
    return function () {
        showLanguage(lang);
    };
}
for (let i = 0; i < langs.length; i++) {
    let lang = langs[i];
    const btn = document.querySelector(".btn-" + lang);
    if (btn) {
        btn.addEventListener("click", createLangHandler(lang));
    }
}

// 選單 - 小螢幕 menu 切換
const menuToggle = document.getElementById("menu-toggle");
const menuOverlay = document.getElementById("menu-overlay");
let isMenuOpen = false;

menuToggle.onclick = function () {
    isMenuOpen = !isMenuOpen;

    menuToggle.src = isMenuOpen ? "image/close.png" : "image/menu.png";
    if (isMenuOpen) {
        menuOverlay.classList.remove("hidden");
    } else {
        menuOverlay.classList.add("hidden");
    }
};

// 點選選單項目後自動關閉
const menuLinks = menuOverlay.querySelectorAll("a");
for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", function () {
        menuOverlay.classList.add("hidden");
        menuToggle.src = "image/menu.png";
        isMenuOpen = false;
    });
}
// 點其他地方也會關閉
document.addEventListener("click", function (e) {
    if (isMenuOpen && !menuOverlay.contains(e.target) && !menuToggle.contains(e.target)) {
        menuOverlay.classList.add("hidden");
        menuToggle.src = "image/menu.png";
        isMenuOpen = false;
    }
});


// music 音樂控制區塊
const music = document.getElementById('background-music');
const musicIcon = document.getElementById('music-icon');
const musicBtn = document.getElementById('musicBtn');
let isPlaying = false;

musicBtn.addEventListener('click', function () {
    if (!isPlaying) {
        music.play();
        musicIcon.src = 'image/music_note.png';
        isPlaying = true;
    } else {
        music.pause();
        musicIcon.src = 'image/music_off.png';
        isPlaying = false;
    }
});

// video 影片控制區塊
const video = document.getElementById('intro-video');
const playPauseBtn = document.getElementById('playPauseBtn');
const muteBtn = document.getElementById('muteBtn');
const replayBtn = document.getElementById('replayBtn');
const volumeSlider = document.getElementById('volumeSlider');
const progressBar = document.getElementById('progressBar');
const volumeControl = document.getElementById('volumeControl');

video.volume = 0; // 保證靜音 + 音量值為0
volumeSlider.value = 0;

let musicWasInterrupted = false;  // 判斷影片播放時是否暫停音樂

// 播放 / 暫停影片
playPauseBtn.onclick = function () {
    if (video.paused) {
        video.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
        progressBar.style.display = 'block';

        let buttons = document.querySelectorAll('.video-controls button');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.add('transparent');
        }

        // 如果音樂有播放，就暫停
        if (isPlaying) {
            music.pause();
            musicIcon.src = 'image/music_off.png';
            isPlaying = false;
            musicWasInterrupted = true;
        }
    } else {
        video.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
        progressBar.style.display = 'none';

        // 移除透明
        let buttons = document.querySelectorAll('.video-controls button');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('transparent');
        }
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
        volumeControl.style.display = 'none';
    } else {
        muteBtn.innerHTML = '<i class="fas fa-volume-up"></i>';
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
    if (musicWasInterrupted) {
        music.play();
        musicIcon.src = 'image/music_note.png';
        isPlaying = true;
        musicWasInterrupted = false;
    }
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
    if (musicWasInterrupted) {
        music.play();
        musicIcon.src = 'image/music_note.png';
        isPlaying = true;
        musicWasInterrupted = false;
    }
};

// 點擊其他區域時隱藏音量滑桿
document.addEventListener('click', function (event) {
    // 點的不是靜音鍵或音量滑桿，就隱藏音量滑桿
    if (!muteBtn.contains(event.target) && !volumeSlider.contains(event.target)) {
        volumeControl.style.display = 'none';
    }
});

// 圖片放大 - Lightbox 功能
const images = document.querySelectorAll(".product-img");
let currentIndex = 0;

// 開啟放大圖
function openLightbox(src) {
    document.getElementById("lightbox-img").src = src;
    document.getElementById("lightbox").style.display = "flex";

    // 記錄目前點擊的圖片位置
    for (let i = 0; i < images.length; i++) {
        if (images[i].src === src) {
            currentIndex = i;
            break;
        }
    }

    document.querySelector("header").style.display = "none"; // 隱藏導覽列
}

// 關閉放大圖
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
    document.querySelector("header").style.display = ""; // 顯示導覽列
}

// 顯示上一張
function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    document.getElementById("lightbox-img").src = images[currentIndex].src;
}
// 顯示下一張
function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("lightbox-img").src = images[currentIndex].src;
}

// 所有 product-img 加入事件監聽（綁定點擊事件）
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", function () {
        openLightbox(this.src);
    });
}
// 左右箭頭與關閉按鈕
document.querySelector(".arrow.left").addEventListener("click", function (event) {
    event.stopPropagation();
    showPrev();
});
document.querySelector(".arrow.right").addEventListener("click", function (event) {
    event.stopPropagation();
    showNext();
});
document.getElementById("lightbox").onclick = closeLightbox;
document.querySelector(".close-btn").onclick = closeLightbox;
