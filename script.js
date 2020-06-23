function initChangeTheme() {
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

function initTabNav() {  
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li');
  const tabContent = document.querySelectorAll('[data-tab="content"] section');

  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');  
      });
      const direction = tabContent[index].dataset.anime;
      tabContent[index].classList.add('ativo', direction);
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => activeTab(index));
    });
  }
}

function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');

  if (accordionList.length) {
    function activeAccordion() {
      this.classList.toggle('ativo');
      this.nextElementSibling.classList.toggle('ativo');
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    });
  }
}

function initSmoothScroll() {
  const internalLinks = document.querySelectorAll('[data-menu="smooth"] a[href^="#"]');
  
  function scrollToSection(event) {
    event.preventDefault();
    const href = this.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });

    // const top = section.offsetTop;
    // window.scrollTo({
    //   top,
    //   behavior: 'smooth',
    // });
  }
  
  internalLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}

function initScrollAnimation() {
  const sections = document.querySelectorAll('[data-anime="scroll"]');
  if (sections.length) {
    const windowHeight = window.innerHeight * 0.65; 
    
    function scrollAnimation() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowHeight) < 0;
        if (isSectionVisible) {
          section.classList.add('ativo');
        } else {
          section.classList.remove('ativo');
        }
      });
    }

    scrollAnimation();
    window.addEventListener('scroll', scrollAnimation);
  }
}

initChangeTheme();
initTabNav();
initAccordion();
initSmoothScroll();
initScrollAnimation();
