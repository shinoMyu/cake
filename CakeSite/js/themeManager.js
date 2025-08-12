const THEME_KEY = "selectedTheme";
const DEFAULT_THEME = "orange";  

function applyTheme(theme) {
    document.body.classList.remove("theme-blue");
    if (theme === "blue") {
        document.body.classList.add("theme-blue");
      }
}
export function initThemeManager(toggleSelector = ".theme-toggle", optionsSelector = "#themeOptions") {
    const themeToggle = document.querySelector(toggleSelector);
    const themeOptions = document.querySelector(optionsSelector);
    const themeButtons = themeOptions.querySelectorAll("button");
    
    // 初始化按鈕狀態
    const savedTheme = localStorage.getItem(THEME_KEY) || DEFAULT_THEME;
    applyTheme(savedTheme);
    if (themeButtons) {
        themeButtons.forEach(btn => {
            btn.classList.remove("active");
            if (btn.getAttribute("data-theme") === savedTheme) {
                btn.classList.add("active");
            }
        });
    }
    // 切換選單顯示
    themeToggle?.addEventListener("click", () => {
        if (!themeOptions) return;
        themeOptions.style.display = (themeOptions.style.display === "flex") ? "none" : "flex";
    });
    // 點擊按鈕切換主題
    themeButtons?.forEach(button => {
        button.addEventListener("click", () => {
            const selectedTheme = button.getAttribute("data-theme");
            applyTheme(selectedTheme);
            localStorage.setItem(THEME_KEY, selectedTheme);
        
            // 更新按鈕高亮
            themeButtons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        
            // 關閉選單
            themeOptions.style.display = "none";
        });
    });        

    document.addEventListener("click", function (e) {
        // 點擊不是主題按鈕和選單時，關閉主題選單    
        if (themeOptions.style.display === "flex" && !themeOptions.contains(e.target) && !themeToggle.contains(e.target)) {
            themeOptions.style.display = "none";
        }
    });
}    