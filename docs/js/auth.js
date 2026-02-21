export function setupAuth() {
// 點擊其他地方時隱藏文字與重設點擊次數
document.addEventListener("click", function () {
    authBtn.classList.remove("show-text");
    clickCount = 0;
});
}