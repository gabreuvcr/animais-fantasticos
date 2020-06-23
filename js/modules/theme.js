export default function initChangeTheme() {
  function changeTheme(event) {
    event.preventDefault();
    const map = document.querySelector('.mapa img');

    if (document.body.dataset.theme === 'light') {
      this.innerText = 'Light';
      map.src = 'img/mapa-dark.png';
      document.body.dataset.theme = 'dark'
    } else if (document.body.dataset.theme === 'dark') {
      this.innerText = 'Dark';
      map.src = 'img/mapa-light.png';
      document.body.dataset.theme = 'light'
    }
  }
  
  const theme = document.querySelector('[data-button-theme]');
  theme.addEventListener('click', changeTheme);
}
