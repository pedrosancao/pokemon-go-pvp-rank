import {
  pokedex,
  getByName,
  getByFamily,
  calculateRank,
} from '../dist/index.js';
import { hideMessage, showMessage } from './message.js'

const datalist = document.getElementById('pokedex');
const submit = document.getElementById('calculate');

pokedex.forEach(({ name }) => {
  datalist.append(new Option(name, name));
});

document.querySelectorAll('[data-sync]').forEach(el => {
  el.addEventListener('input', ({ target: { value, dataset } }) => {
    const syncTarget = document.querySelector(dataset.sync);
    if (syncTarget) {
      syncTarget.value = value;
    }
  });
});

function makeRank(pokemon, { attack, defense, health }) {
  return new Promise((resolve, reject) => {
    try {
      const pokedexEntry = getByName({ name: pokemon });
      const { rank, occurence } = calculateRank({
        pokedexEntry,
        refAttackStat: attack,
        refDefenseStat: defense,
        refHealthStat: health,
        maxCP: 1500,
        maxLevel: 40,
        minimumStatValue: 0,
      });
      resolve({ occurence, rank });
    } catch (error) {
      reject(error);
    }
  })
}

submit.addEventListener('click', () => {
  const formData = {};
  hideMessage();
  document.querySelectorAll('input[name]').forEach(({ name, value }) => {
    formData[name] = value;
  });
  makeRank(formData.pokemon, {
    attack: parseInt(formData.attack, 10),
    defense: parseInt(formData.defense, 10),
    health: parseInt(formData.health, 10),
  }).then(({ occurence, rank }) => {
    console.log(occurence);
  }, error => {
    console.log(error.message);
    showMessage('Could not find Pokémon data.');
  });
});
