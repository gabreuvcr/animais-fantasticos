export default function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');

  if (accordionList.length) {
    function activeAccordion() {
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('active');
    }

    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion)
    });
  }
}
