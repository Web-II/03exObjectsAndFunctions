'use strict';

const wint = {
  steen: 'schaar',
  schaar: 'blad',
  blad: 'steen',
};

const keuzeGebruiker = prompt(
  'Kies je blad, steen of schaar?',
  'steen',
).toLowerCase();

let keuzeComputer = Object.keys(wint)[Math.floor(Math.random() * 3)];
console.log('keuze computer:', keuzeComputer);
console.log(geefResultaat(keuzeGebruiker, keuzeComputer));

const kapitaliseer = (woord) =>
  woord.charAt(0).toUpperCase() + woord.substring(1);

function geefResultaat(keuzeSpeler, keuzeComputer) {
  if (keuzeSpeler === keuzeComputer) {
    return 'Het resultaat is een gelijkspel!';
  }
  if (wint[keuzeSpeler] === keuzeComputer) {
    return `${kapitaliseer(keuzeSpeler)} wint - jij wint!`;
  }
  return `${kapitaliseer(keuzeComputer)} wint - computer wint!`;
}
