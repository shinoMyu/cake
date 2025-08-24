import { initAuthButton, handleLockedSection, setupAuth } from "./authManager.js";
import { initMobileMenu } from "./mobileMenu.js";
import { initThemeManager } from "./themeManager.js";
import { initMusicPlayer } from "./musicPlayer.js";
import { initVideoPlayer } from "./videoPlayer.js";
import { renderCategoryButtons } from "./categoryRender.js";
import { initCakeRenderer } from "./cakeRender.js";
import { initLightbox } from './lightbox.js';
import { initLangManager } from "./langManager.js";

const authBtn = document.getElementById("authBtn");
initAuthButton(authBtn);
handleLockedSection();
setupAuth();
initMobileMenu();
initThemeManager();
initMusicPlayer();
initVideoPlayer();
renderCategoryButtons();
initCakeRenderer("#cakeContainer");

initLightbox();


initLangManager();