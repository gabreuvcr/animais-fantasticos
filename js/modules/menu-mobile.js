import outsideClick from './outside-click.js';

export default function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]');
  const menuList = document.querySelector('[data-menu="list"]');
  const dropMenu = document.querySelector('[data-dropdown]')
  const userEvents = ['click', 'touchstart'];

  function openMenu(event) {
    menuList.classList.add('active');
    menuButton.classList.add('active');
    dropMenu.classList.add('active');
    outsideClick(menuList, userEvents, () => {
      menuList.classList.remove('active');
      menuButton.classList.remove('active');
      dropMenu.classList.remove('active');
    });
  }

  userEvents.forEach((userEvent) => {
    menuButton.addEventListener(userEvent, openMenu);
  })
}
