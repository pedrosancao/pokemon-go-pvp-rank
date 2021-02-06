import {
  pokedex,
  getByName,
  getByFamily,
  calculateRank,
} from '../dist/index.js';

const datalist = document.getElementById('pokedex');
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

document.getElementById('calculate').addEventListener('click', () => {
  const formData = {};
  document.querySelectorAll('input[name]').forEach(({ name, value }) => {
    formData[name] = value;
  });
  try {
    const pokedexEntry = getByName({ name: formData.pokemon });
    const { rank, occurence } = calculateRank({
      pokedexEntry,
      refAttackStat: parseInt(formData.attack, 10),
      refDefenseStat: parseInt(formData.defense, 10),
      refHealthStat: parseInt(formData.health, 10),
      maxCP: 1500,
      maxLevel: 40,
      minimumStatValue: 0,
    });
    console.log(occurence, rank);
  } catch (error) {
    console.log(error);
  }
});
