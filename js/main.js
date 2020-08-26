var setTheme = localStorage.getItem('theme');
console.log('theme:' + setTheme);
if(setTheme == null) {
  swapTheme('css/light.css');
} else {
  swapTheme(setTheme);
}

function swapTheme(cssFile) {
  document.getElementById('mystylesheet').href = cssFile;
  localStorage.setItem('theme', cssFile);
}

