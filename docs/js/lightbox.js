// 圖片放大 - Lightbox 功能
let images, lightbox, lightboxImg;
let currentIndex = 0;

export function initLightbox() {
    lightbox = document.getElementById("lightbox");
    lightboxImg = document.getElementById("lightbox-img");

    if (!images.length || !lightbox || !lightboxImg) return;

    // 左右箭頭與關閉按鈕
    document.querySelector(".arrow.left")?.addEventListener("click", e => {
        e.stopPropagation();
        showPrev();
    });
    document.querySelector(".arrow.right")?.addEventListener("click", e => {
        e.stopPropagation();
        showNext();
    });
    document.getElementById("lightbox").onclick = closeLightbox;
    document.querySelector(".close-btn").onclick = closeLightbox;
}

export function bindLightboxEvents(imageSelector = ".product-img") {
  images = document.querySelectorAll(imageSelector);
  if (!images.length) return;

  images.forEach((img, i) => {
      img.addEventListener("click", () => openLightbox(i));
  });
}

// 開啟放大圖
function openLightbox(index) {
    currentIndex = index;
    lightboxImg.src = images[currentIndex].src;
    lightbox.style.display = "flex";
    document.querySelector("header").style.display = "none"; // 隱藏導覽列
}

// 關閉放大圖
function closeLightbox() {
    lightbox.style.display = "none";
    document.querySelector("header").style.display = ""; // 顯示導覽列
}

// 顯示上一張
function showPrev() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
}

// 顯示下一張
function showNext() {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
}



  

