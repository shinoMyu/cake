import { categoryBtns } from "./categoryButtons.js";
import { getCurrentLang } from "./langManager.js";

export function renderCategoryButtons(lang = getCurrentLang()) {
  const container = document.querySelector(".category-filter");
  container.innerHTML = "";

  categoryBtns.forEach(button => {
    const btn = document.createElement("button");
    btn.className = `btn-${button.type}` + (button.type === "all" ? " active" : "");
    btn.setAttribute("data-type", button.type);
    btn.textContent = button.label[lang];
    container.appendChild(btn);
  });

  addCategoryEvents();
}

function addCategoryEvents() {
  document.querySelectorAll(".category-filter button").forEach(btn => {
    btn.addEventListener("click", () => {
      const type = btn.getAttribute("data-type");
      filterProducts(type);
      highlightCategory(type);
    });
  });
}

function filterProducts(type) {
  document.querySelectorAll(".product-item").forEach(item => {
    item.style.display = (type === "all" || item.classList.contains(type)) ? "block" : "none";
  });
}

export function highlightCategory(type) {
  document.querySelectorAll(".category-filter button").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-type") === type);
  });
}
