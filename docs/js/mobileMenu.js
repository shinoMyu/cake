// 選單 - 小螢幕 menu 切換
let menuToggle, menuOverlay;
let isMenuOpen = false;

export function initMobileMenu(toggleSelector = "#menu-toggle", overlaySelector = "#menu-overlay") {
    menuToggle = document.querySelector(toggleSelector);
    menuOverlay = document.querySelector(overlaySelector);

    if (!menuToggle || !menuOverlay) return;

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
    // 點其他地方關閉選單項目
    document.addEventListener("click", function (e) {
        if (isMenuOpen && !menuOverlay.contains(e.target) && !menuToggle.contains(e.target)) {
            menuOverlay.classList.add("hidden");
            menuToggle.src = "image/menu.png";
            isMenuOpen = false;
        }
    });
}