function initChangeTheme() {
  function changeTheme(event) {
    event.preventDefault();
    map = document.querySelector('.mapa img');
    if (this.innerHTML === "Dark") {
      this.innerHTML = "Light";
      map.src = "img/mapa-dark.png";
    } else {
      this.innerHTML = "Dark";
      map.src = "img/mapa-light.png";
    }
    document.body.classList.toggle("light");
  }
  
  const theme = document.querySelector(".js-theme");
  
  theme.addEventListener("click", changeTheme);
}

function initTabNav() {  
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');

  if(tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove('ativo');  
      });
      tabContent[index].classList.add('ativo');
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => activeTab(index));
    });
  }
};

function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');

  if(accordionList.length) {
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
  const internalLinks = document.querySelectorAll('.js-menu a[href^="#"]');
  
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
  })
}

function initScrollAnimation() {
  const sections = document.querySelectorAll('.js-scroll');
  if(sections.length) {
    const windowHeight = window.innerHeight * 0.65; 
    
    function scrollAnimation() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowHeight) < 0;
        if(isSectionVisible) {
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
