import initNumberAnimation from './number-animation.js';

export default function initFetchAnimals() {
  async function fetchAnimals(url) {
    const responseAnimals = await fetch(url);
    const jsonAnimals = await responseAnimals.json();
    const numerosGrid = document.querySelector('.numeros-grid');
    
    jsonAnimals.forEach(animal => {
      const divAnimal = createAnimal(animal);
      numerosGrid.appendChild(divAnimal);
    });

    initNumberAnimation();
  }

  function createAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');

    div.innerHTML = `<h3>${animal.specie}</h3>
    <span data-numero>${animal.total}</span>`

    return div;
  }

  fetchAnimals('api-animals.json');
}
