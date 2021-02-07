import {
  pokedex,
  getByName,
  getByFamily,
  calculateRank,
} from '../dist/index.js';
import { hideMessage, showMessage } from './message.js';

const datalist = document.getElementById('pokedex');
const submit = document.getElementById('calculate');
const result = document.getElementById('result');

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
  });
}

function renderTable(rows, quantity) {
  result.innerHTML = '';
  rows.slice(0, quantity || rows.length).forEach(row => {
    const tr = result.appendChild(document.createElement('tr'));
    if (row.color) {
      tr.style.backgroundColor = row.color;
    }
    const cells = [
      row.rank,
      row.attackStat,
      row.defenseStat,
      row.healthStat,
      row.level,
      row.cp,
      row.percentual,
    ];
    tr.innerHTML = `<td>${cells.join('</td><td>')}</td>`;
  });
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
  })
    .then(({ occurence, rank }) => {
      const max = rank[0].product;
      const min = rank[rank.length - 1].product;
      const range = max - min;
      const table = rank.map(({ product, ...props }) => {
        const percentual = `${((product / max) * 100).toFixed(2)}%`;
        return { ...props, product, percentual };
      });
      const colorHue = parseInt(((occurence.product - min) / range) * 100, 10);
      table.unshift({
        ...occurence,
        percentual: `${((occurence.product / max) * 100).toFixed(2)}%`,
        color: `hsl(${colorHue}, 100%, 50%)`,
      });
      renderTable(table, 50);
    })
    .catch(error => {
      console.log(error.message);
      showMessage('Could not find Pokémon data.');
    });
});
