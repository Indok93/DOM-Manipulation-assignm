/* DOMcelementer */



/* Opgave 1.1
Du skal finde elementet med id="redFigure" og console logge det.
Du skal finde elementet med id="yellowFigure" og console logge det. 
*/

// din kode her
let figureRed = document.getElementById('redFigure');
console.log(figureRed);
let figureYellow = document.getElementById('yellowFigure');
console.log(figureYellow);

/* opgave 1.2
Du skal ændre baggrundsfarve på de to elementer du har fundet i opgave 1.1
farven på elementerne skal være blå. brug evt. elelement.style.backgroundColor
*/

// din kode her
figureRed.style.backgroundColor = 'blue';
figureYellow.style.backgroundColor = 'blue';


/* opgave 2.1
Du skal oprette følgende HTML elementer i Elementet med id opgaveTwo.
- et h2 med teksten: Opgave 2.1 løsning
- et p med teksten: Jeg har løst opgave 2.1
*/

// din kode her
let titleOne = document.createElement('h2');
let paragraphOne = document.createElement('p');

titleOne.innerText = 'Opgave 2.1 løsning';
paragraphOne.innerText = 'Jeg har løst opgave 2.1';

const HTMLdiv = document.getElementById('opgaveTwo');
HTMLdiv.appendChild(titleOne);
HTMLdiv.appendChild(paragraphOne);

// opgave 3 liveHTML lists
/* opgave 3.1
Du skal finde alle elementer med klassen purpleFigures og console logge resultatet
*/

// din kode her
let figurePurple = document.getElementsByClassName('purpleFigures');
console.log(figurePurple);

/* opgave 3.2
Du skal finde alle elementer med klassen purpleFigures og bruge array.from() til at konvertere listen
til et array hvor du kan bruge map funktionen til at ændre baggrundsfarven til rød.
array.from beskrivelse HER: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
*/

// din kode her
let PurpleFigures = Array.from(figurePurple);
PurpleFigures.map((figure) => {
    figure.style.backgroundColor = 'red';
})


/* opgave 3.3
Brug din array til at ændre h3 elementets, inden i purpleFigures, tekst til RED. du kan bruge
myElement.children[0].innerHTML til at ændre 1. child elements inner html.
*/

// din kode her
PurpleFigures.forEach((figure) => {
    figure.children[0].innerHTML = `<h3>RED</h3>`;
});



/* opgave 4
opret DOM elementer i elementet med id opgaveFour, udfra data objectet myData.
Du skal vælge element tags der giver mening i forbindelse med HTML5 semantisk tagging.
Fyld dine elementers innerHtML eller andre atributter med dine data
*/

const myData = {
    name: 'tiger',
    image: 'assets/img/standard_tiger.jpg',
    description: 'En tiger er et stort, katteagtig rovdyr med orange og sort striber i pelsen og skarpe tænder og kløer.'
};


// din kode her
let heading = document.createElement('h4');
let img = document.createElement('img');
let description = document.createElement('p');

heading.innerHTML = myData.name;
img.src = myData.image;
description.innerHTML = myData.description;

img.setAttribute('style', 'width: 100%');
img.setAttribute('alt', 'image-of-tiger');

const myDomElement = document.getElementById('opgaveFour')

myDomElement.appendChild(heading);
myDomElement.appendChild(img);
myDomElement.appendChild(description);
console.log(myDomElement);