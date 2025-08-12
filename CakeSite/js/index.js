import {
    initAuthButton,
    handleLockedSection,
    updateLanguageLockedMessage,
    setupAuth,
} from "./authManager.js";

const authBtn = document.getElementById("authBtn");
initAuthButton(authBtn);
handleLockedSection();
setupAuth();
  
import { initMobileMenu } from "./mobileMenu.js";
initMobileMenu();

import { initThemeManager } from "./themeManager.js";
initThemeManager();

import { initMusicPlayer } from "./musicPlayer.js";
initMusicPlayer();

import { initVideoPlayer } from "./videoPlayer.js";
initVideoPlayer();

import { cakeData } from "./cakeData.js";
import { initCakeRenderer, renderCakes } from "./cakeRender.js";

initCakeRenderer("#cakeContainer");
const selectedLang = localStorage.getItem("selectedLang") || 'en';
renderCakes(cakeData, selectedLang);

import { initLightbox } from './lightbox.js';
initLightbox();

// 語言切換處理
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

// 三個語言按鈕點擊事件
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

function renderCategoryButtons() {
    const categoryButtons = document.querySelector('.category-filter');
    categoryButtons.innerHTML = "";

    const selectedLang = localStorage.getItem("selectedLang") || "en";
    categoryBtns.forEach(button => {
      langs.forEach(lang => {
        const btn = document.createElement("button");
        btn.className = `btn-${button.type} ${lang}` + (button.type === "all" ? " active" : "");
        btn.setAttribute("data-type", button.type);
        btn.textContent = button.label[lang];
        btn.style.display = lang === selectedLang ? "inline-block" : "none";
        categoryButtons.appendChild(btn);
      });
    });
  
    addCategoryEvents();
}  

// 掛載分類按鈕事件
function addCategoryEvents() {
    const categoryBtns = document.querySelectorAll('.category-filter button');
    for (let i = 0; i < categoryBtns.length; i++) {
      categoryBtns[i].addEventListener('click', function () {
        const type = this.getAttribute('data-type');
        filterProducts(type);
        highlightCategory(type);
      });
    }
}

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
renderCategoryButtons();


document.addEventListener("click", function (e) {
    // 點擊不是語言按鈕和選單時，關閉語言選單
    if (langOptions.style.display === "flex" && !langOptions.contains(e.target) && !langToggle.contains(e.target)) {
        langOptions.style.display = "none";
    }
});