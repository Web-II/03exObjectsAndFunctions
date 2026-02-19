'use strict';

const keuzeGebruiker = prompt(
  'Kies je blad, steen of schaar?',
  'steen',
).toLowerCase();

let keuzeComputer = Math.random();
keuzeComputer =
  keuzeComputer < 1 / 3 ? 'blad' : keuzeComputer < 2 / 3 ? 'steen' : 'schaar';

console.log('keuze computer:', keuzeComputer);
console.log(geefResultaat(keuzeGebruiker, keuzeComputer));

function geefResultaat(keuze1, keuze2) {
  if (keuze1 === keuze2) {
    return 'Het resultaat is een gelijkspel!';
  }
  // Maak  gebruik van het object met de winregels om het juiste resultaat terug te geven
}
