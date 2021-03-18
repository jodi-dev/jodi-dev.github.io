
// you can use app's unique identifier here
const LOCAL_STORAGE_KEY = "toggle-bootstrap-theme";

const LOCAL_META_DATA = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));

// you can change this url as needed
const DARK_THEME_PATH = "assets/css/dark.css";
const LIGHT_BRAND_PATH = "assets/images/logo-light.svg"
const DARK_BRAND_PATH = "assets/images/logo-dark.svg"

const DARK_STYLE_LINK = document.getElementById("dark-theme-style");
const THEME_TOGGLER = document.getElementById("theme-toggler");
const THEME_TOGGLER_ICON = document.getElementById("theme-toggler-icon");
const BRAND_SET = document.getElementById("brand");

let isDark = LOCAL_META_DATA && LOCAL_META_DATA.isDark;

// check if user has already selected dark theme earlier
if (isDark) {
  enableDarkTheme();
} else {
  disableDarkTheme();
}


/**
 * Apart from toggling themes, this will also store user's theme preference in local storage.
 * So when user visits next time, we can load the same theme.
 *
 */
function toggleTheme() {
  isDark = !isDark;
  if (isDark) {
    enableDarkTheme();
  } else {
    disableDarkTheme();
  }
  const META = { isDark };
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(META));
}

function enableDarkTheme() {
  DARK_STYLE_LINK.setAttribute("href", DARK_THEME_PATH);
  BRAND_SET.src = DARK_BRAND_PATH;
  THEME_TOGGLER_ICON.className = "fa fa-sun-o";
}

function disableDarkTheme() {
  DARK_STYLE_LINK.setAttribute("href", "");
  BRAND_SET.src = LIGHT_BRAND_PATH;
  THEME_TOGGLER_ICON.className = "fa fa-moon-o";
}
