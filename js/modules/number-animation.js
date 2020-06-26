export default function initNumberAnimation() {
  function numberAnimation() {
    const numbers = document.querySelectorAll('[data-numero]');

    numbers.forEach(number => {
      const total = Number(number.innerText);
      const increment = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start += increment;
        number.innerText = start;
        if(start > total) {
          number.innerHTML = total;
          clearInterval(timer);
        }
      }, 25 * Math.random());
      
    });
  }

  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('active')) {
      observer.disconnect();
      numberAnimation();
    }
  }

  const observerTarget = document.querySelector('.numeros');
  const observer = new MutationObserver(handleMutation);
  observer.observe(observerTarget, {attributes: true});
}
