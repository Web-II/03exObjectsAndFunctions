'use strict';
// Schrijf een functie makeStringRepeater
// De functie heeft 1 parameter, bv. nrOfTimes, die aangeeft hoeveel keer
// een string moet herhaald worden.
// De functie makeStringRepeater retourneert een functie. Deze functie heeft 1 parameter,
// i.e. een string, en retourneert de string, nrOfTimes aan elkaar geplakt

// Gebruik dit om je code te testen:
const stringDoubler = makeStringRepeater(2);
const stringTripler = makeStringRepeater(3);
console.log(stringDoubler('abc ')); // abc abc
console.log(stringTripler('def ')); // def def def
