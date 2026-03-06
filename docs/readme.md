# Oefeningen Hoofdstuk 03 - Objects and Functions

## Oefening 1

Volg de slides voor de theorie van hoofdstuk 3. Na elke sectie wordt er verwezen naar het desbetreffende onderdeel van deze oefening.

## Oefening 2 - Pet Rock

### Omschrijving van de pagina

Pet rock is een beeldje dat reageert op handelingen van de gebruiker.
Bij het laden van de pagina verschijnt een alert "Hello, I'm your pet rock".

![petRockSaysHello.png](images/petRock_index.png 'pet rock says hello')

Als de gebruiker voor de eerste keer op het beeldje klikt, wordt via een prompt de naam van de gebruiker opgevraagd.

![petRockasksName.png](images/petRock_askName.png 'pet rock asks yours name')

Als de gebruiker zijn naam heeft ingegeven verschijnt een alert "It's good to meet you, _naam_gebruiker_".

![petRocksaysHello.png](images/petRock_niceToMeet.png 'pet rock says nice to meet')

Als er op Pet rock wordt geklikt wanneer de naam van de gebruiker reeds gekend is verschijnt een alert "I like the attention, _naam_gebruiker_. Thank you."

In beide gevallen wordt na de alert het beeldje aangepast in rock_happy.png. Na 2 seconden wordt terug het beeldje rock.png getoond.

![petRocksmiles.png](images/petRock_smile.png 'pet rock smiles')

### De opgave

1. Bekijk index.html. Dit bevat een beeldje.
2. Maak de javascript bestanden iRock.js en index.js aan en verwijs naar het index.js script bestand in index.html
3. Maak in iRock.js een object myPetRock. Het object heeft een property username (initieel lege string), een property image (initieel ‘images/rock.png’).

4. Schrijf een functie greetUser. De functie genereert een alert met de tekst ‘Hello I am your pet rock’. Deze functie hebben we nodig in index.js. Zorg voor de nodige export en import in de js bestanden.

5. Schrijf een functie init in index.js. Voorlopig is het enige dat gebeurt in deze functie een aanroep naar greetUser.

6. Als het load event van het window object afgevuurd wordt dient de functie init te worden aangeroepen. Stel de event handler in, run de applicatie en ga na of je begroet wordt.

7. Schrijf een functie touchRock in iRock.js.
   - Indien de username van myPetRock de lege string is dan zal deze functie via een prompt de naam van de gebruiker opvragen en de property username van myPetRock aanpassen.
   - Indien de username van myPetRock reeds ingesteld is, wordt een alert "I like the attention, <myPetRock.username>. Thank you." gegeven.

8. Pas de greetUser functie aan zodat de functie touchRock als event handler wordt ingesteld voor het click event van het beeldje.

9. Run de applicatie. Ga na of er gepast gereageerd wordt als je klikt op de rock.

10. Schrijf een functie showRock. De functie stelt het src attribuut van het beeldje in op de image property van myPetRock.

11. Pas de functie touchRock verder aan: na de alerts wordt het beeld voor eventjes aangepast in de happy rock.
    - Verander de waarde van de property image van myPetRock naar ‘images/rock_happy.png’

    - Roep showRock aan

    - Verander de waarde van de property image van myPetRock terug naar ‘images/rock.png’

    - Maak gebruik van de javascript functie setTimeOut om na twee seconden de functie showRock terug aan te roepen. De functie setTimeout bevat 2 parameters: de naam van de functie die moet worden uitgevoerd na afloop van de timer, en de timertijd in ms. setTimeout(showRock, 2 \* 1000);

12. Run de applicatie en bekijk het resultaat

Extra: geef ook weer hoe vaak er al op de rock geklikt is. Pas de boodschap "I like the attention, <myPetRock.username>. Thank you." aan en geef dan ook "You already clicked on me <aantal_keer_geklikt> times." weer.

## Oefening 3 - Scrabble

### Omschrijving van de pagina

De webpagina bevat een tekstveld en een knop Bereken waarde. Bij het klikken op de knop wordt de punten voor dit woord berekend en geretourneerd in een alert.

De waarden van de letters zijn als volgt :
a:1, b:3, c:5, d:1, e:1, f:4, g:3, h:4, i:1,j:4, k:3, l:3, m:3, n:1, o:1, p:3, q:10, r:2, s:2, t:2, u:4, v:4, w:5,x:8, y:8, z:4

Het woord javascript bvb levert 25 punten op.

![scrabbleExample.png](images/scrabble_vbJavascript.png 'Voorbeeld Javascript')

![scrabbleAlert.png](images/scrabble_alertJavascript.png 'Alert Javascript')

### De opgave

1. Declareer in scrabble.js een functie berekenPunten die een woord als parameter doorkrijgt en de punten voor dit woord berekent en retourneert.

   **Tip** gebruik een variabele letterwaarden. Letterwaarden is een object en bevat een property voor elke letter in het alfabet. De waarde van de property is het aantal punten voor deze letter.

2. Maak functie initialiseerScrabble (in scrabble.js). Stel een event handler in zodat, als de gebruiker op de knop "Bereken punten" klikt, de alert verschijnt met de berekende waarde. Maak gebruik van document.getElementById(" … ") om de knop en het tekstvak te kunnen gebruiken in de JavaScript code.
3. Declareer in de module index.js een functie init, hier wordt de functie initialiseerScrabble opgeroepen.
4. Roep de functie init aan als het venster geladen is.

## Oefening 4: Blad – steen – schaar

Refactor de oplossing van oefening 1 uit hoofdstuk 2. Herschrijf de functie `geefResultaat` in `bss.js` zodat deze gebruik maakt van onderstaand object die de winregels specifieert.

```js
const wint = {
  steen: 'schaar',
  schaar: 'blad',
  blad: 'steen',
};
```

Zorg er ook voor dat het resultaat begint met een hoofdletter en dat aangegeven wordt welke speler gewonnen heeft. Bijvoorbeeld: "**B**lad wint - jij wint!" of "**S**teen wint - computer wint!".

Maak een arrow functie `kapitaliseer` die een string als parameter neemt en deze string teruggeeft met de eerste letter in hoofdletter en de rest in kleine letters. Gebruik deze functie in `geefResultaat` om de naam van de winnende keuze te kapitaliseren.

Pas ook de berekening van de `keuzeComputer` aan zodat deze eveneens gebruik maakt van het `wint` object. Tip: `Object.keys(wint)` geeft een array terug met de keys van het object wint. Je kan deze array gebruiken om een willekeurige keuze te maken voor de computer.

## Oefening 5: Blad – steen – schaar

Refactor de vorige oplossing. I.p.v. te prompten naar de keuze van de gebruiker, dient de gebruiker te klikken op 1 van de 3 knoppen "blad", "steen", "schaar".
![bss-1.png](images/bss-1.png 'blad-steen-schaar knoppen')

Na de keuze wordt het resultaat weergegeven op de pagina.
![bss-2.png](images/bss-2.png 'blad-steen-schaar ')

1. Bekijk de html pagina
2. Refactor de code in bss.js: maak een functie `initialiseerBladSteenSchaar`. Stel een event handler in zodat, als de gebruiker op 1 van de knoppen klikt, de keuze van de computer bepaald wordt en het resultaat wordt weergegeven in de html pagina. Schrap de code die hierdoor overbodig wordt. Maak gebruik van de property `textContent` van de div-elementen om het resultaat weer te geven in de pagina, en om de tekst binnen de geselecteerde knop te lezen (deze tekst geeft de keuze van de gebruiker weer).
3. Declareer in de module index.js een functie `init`, hier wordt de functie `initialiseerBladSteenSchaar` opgeroepen. Roep de functie `init` aan als het venster geladen is.
