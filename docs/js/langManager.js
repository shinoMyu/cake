import { LANGS, DEFAULT_LANG, LANG_KEY } from "./langConfig.js";
import { renderCakes } from "./cakeRender.js";
import { cakeData } from "./cakeData.js";
import { updateLanguageLockedMessage } from "./authManager.js";
import { renderCategoryButtons, highlightCategory } from "./categoryRender.js";

let currentLang = localStorage.getItem(LANG_KEY) || DEFAULT_LANG;

export function initLangManager() {
    const langToggle = document.querySelector(".lang-toggle");
    const langOptions = document.getElementById("langOptions");

    // 語言切換處理
    langToggle.addEventListener("click", () => {
        langOptions.style.display = (langOptions.style.display === "flex") ? "none" : "flex";
    });

    // 顯示選中的語言
    LANGS.forEach(lang => {
        const btn = document.querySelector(`.btn-${lang}`);
        if (btn) {
            btn.addEventListener("click", () => setLanguage(lang));
        }
    });

    // 初始化
    setLanguage(currentLang);

    document.addEventListener("click", function (e) {
        // 點擊不是語言按鈕和選單時，關閉語言選單
        if (langOptions.style.display === "flex" && !langOptions.contains(e.target) && !langToggle.contains(e.target)) {
            langOptions.style.display = "none";
        }
    });
}

export function getCurrentLang() {
    return currentLang;
}

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);

    // 顯示/隱藏語言元素
    LANGS.forEach(code => {
        document.querySelectorAll("." + code).forEach(el => {
            el.style.display = (code === lang) ? "block" : "none";
        });
    });

    // 更新 active 按鈕
    document.querySelectorAll('#langOptions button').forEach(btn => btn.classList.remove("active"));
    document.querySelector(`.btn-${lang}`)?.classList.add("active");

    // 更新其他模組
    renderCakes(cakeData, lang);
    renderCategoryButtons(lang);
    updateLanguageLockedMessage(lang);

    // 更新分類 active 狀態
    const currentActive = document.querySelector('.category-filter button.active');
    if (currentActive) {
        highlightCategory(currentActive.getAttribute("data-type"));
    } else {
        highlightCategory("all");
    }

    // 關閉選單
    document.getElementById("langOptions").style.display = "none";
}
