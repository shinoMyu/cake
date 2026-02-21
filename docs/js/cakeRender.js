import { LANGS } from "./langConfig.js";
import { bindLightboxEvents } from "./lightbox.js"; 

let cakeContainerEl;

export function initCakeRenderer(containerSelector) {
  cakeContainerEl = document.querySelector(containerSelector);
}

export function renderCakes(data, lang) {
    if (!cakeContainerEl || !data || data.length === 0) return;

    cakeContainerEl.innerHTML = "";

    data.forEach(cake => {
    const card = document.createElement("div");
    card.className = `product-item ${cake.category}`;

    // 圖片
    const img = document.createElement("img");
    img.src = cake.image;
    img.alt = cake.name.en;
    img.className = "product-img";
    card.appendChild(img);

    // 多語言內容：name、flavor、description、size、Style
    LANGS.forEach(l => {
        const nameEl = document.createElement("h3");
        nameEl.className = l;
        nameEl.style.display = l === lang ? "block" : "none";
        nameEl.textContent = cake.name[l];
        card.appendChild(nameEl);

        if (cake.flavor && cake.flavor[l]) {
        const flavor = document.createElement("p");
        flavor.className = l;
        flavor.style.display = l === lang ? "block" : "none";
        flavor.innerHTML = cake.flavor[lang];
        card.appendChild(flavor);
        }

        if (cake.size && cake.size[l]) {
        const size = document.createElement("p");
        size.className = l;
        size.style.display = l === lang ? "block" : "none";
        size.innerHTML = cake.size[lang];
        card.appendChild(size);
        }

        if (cake.Style && cake.Style[l]) {
        const style = document.createElement("p");
        style.className = l;
        style.style.display = l === lang ? "block" : "none";
        style.innerHTML = cake.Style[lang];
        card.appendChild(style);
        }

        if (cake.description && cake.description[l]) {
          const desc = document.createElement("p");
          desc.className = `description ${l}`;
          desc.style.display = l === lang ? "block" : "none";
          desc.innerHTML = cake.description[lang];
          card.appendChild(desc);
        }
    });
    cakeContainerEl.appendChild(card);
  });
  // 每次渲染後重新綁定 Lightbox
  bindLightboxEvents();  
}

