// 登入狀態
export let isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
// 登入按鈕
let authBtn, authText;

let clickCount = 0;

// 登出功能
function signOut() {
    localStorage.removeItem("isLoggedIn");
    alert("You have been signed out.");
    location.reload(); // 重新載入頁面
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
// 初始化登入按鈕
export function initAuthButton(authButtonElement) {
    authBtn = authButtonElement;    
    authText = authBtn.querySelector(".auth-text");
  
    if (!authBtn || !authText) return;
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
}
    // 未登入提示訊息內容（Locked Section）
    const lockedMessage = document.createElement('div');
    lockedMessage.className = "locked-section";
    lockedMessage.style.textAlign = "center";

    const langMap = {
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
export function updateLanguageLockedMessage(lang) {
    const text = langMap[lang] || langMap.en;
    lockedMessage.innerHTML = `<p class="${lang}">${text.message}</p>`;
}
export function handleLockedSection() {
    const videoContainer = document.querySelector('.video-container');
    const introText = document.querySelector('.intro-text');
    const categoryButtons = document.querySelector('.category-filter');
    const products = document.querySelector('.product-grid');
    const selectedLang = localStorage.getItem("selectedLang") || 'en';

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
}

export function setupAuth() {
    // 點擊其他地方時隱藏文字與重設點擊次數
    document.addEventListener("click", function () {
        if (!authBtn) return;
        authBtn.classList.remove("show-text");
        clickCount = 0;
    });
}