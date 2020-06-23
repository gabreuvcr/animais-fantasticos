export default function initSmoothScroll() {
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
