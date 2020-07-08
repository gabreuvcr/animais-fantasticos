import initNumberAnimation from './number-animation.js';

export default function initAnimalsFetch() {
  async function animalsFetch(url) {
    try {
      const animalsResponse = await fetch(url);
      const animalsJson = await animalsResponse.json();
      const numerosGrid = document.querySelector('.numeros-grid');
      
      animalsJson.forEach(animal => {
        const animalDiv = createAnimal(animal);
        numerosGrid.appendChild(animalDiv);
      });

      initNumberAnimation();
    }
    catch(err) {
      console.log(Error(err));
    }
  }

  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');

    div.innerHTML = `<h3>${animal.specie}</h3>
    <span data-numero>${animal.total}</span>`

    return div;
  }

  animalsFetch('api-animals.json');
}
