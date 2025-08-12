// 圖片放大 - Lightbox 功能
let images = [];
let currentIndex = 0;

export function initLightbox(imageSelector = ".product-img") {
    images = document.querySelectorAll(imageSelector);
  
    images.forEach((img, index) => {
      img.addEventListener("click", () => openLightbox(index));
    });
    
    // 左右箭頭與關閉按鈕  
    document.querySelector(".arrow.left").addEventListener("click", e => {
      e.stopPropagation();
      showPrev();
    });
  
    document.querySelector(".arrow.right").addEventListener("click", e => {
      e.stopPropagation();
      showNext();
    });
  
    document.getElementById("lightbox").onclick = closeLightbox;
    document.querySelector(".close-btn").onclick = closeLightbox;
}
// 開啟放大圖
function openLightbox(index) {
    currentIndex = index;
    document.getElementById("lightbox-img").src = images[currentIndex].src;;
    document.getElementById("lightbox").style.display = "flex";
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

