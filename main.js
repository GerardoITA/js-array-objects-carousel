const images = [
    { 
    image: 'img/01.webp', 
    title: 'Marvel\'s Spiderman Miles Morale', 
    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', 
}, 
    { 
    image: 'img/02.webp', 
    title: 'Ratchet & Clank: Rift Apart', 
    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', 
}, 
    { 
    image: 'img/03.webp',
    title: 'Fortnite', 
    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", 
}, 
    { 
    image: 'img/04.webp', 
    title: 'Stray', 
    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', 
}, 
    {
    image: 'img/05.webp', 
    title: "Marvel's Avengers", 
    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', 
}];
/* Definisco main container */
const mainContainer = document.getElementById("container");
const divContainer = document.createElement("div");
divContainer.classList.add("item-container");
mainContainer.appendChild(divContainer);

const arrowUp = document.createElement("div");
arrowUp.classList.add("arrow");
arrowUp.id = "up";
divContainer.append(arrowUp); 
arrowUp.innerHTML = `
<i class="fa-solid fa-arrow-up"></i>`;

const arrowDown = document.createElement("div");
arrowDown.classList.add("arrow");
arrowDown.id = "down";
divContainer.append(arrowDown);
arrowDown.innerHTML = `
<i class="fa-solid fa-arrow-down"></i>`;

/* Crea item con immagine all'interno */
for (let i = 0; i < images.length; i++){
   const divItem = document.createElement("div");
   divItem.classList.add("item");
   divContainer.append(divItem); 

   let imgItem = document.createElement("img");
   divItem.append(imgItem);
   imgItem.src = images[i].image;

   let titleImage = document.createElement("h2");
   divItem.append(titleImage);
   titleImage.classList.add("titleImage");
   titleImage.innerHTML = images[i].title;

   let descImage = document.createElement("p");
   divItem.append(descImage);
   descImage.classList.add("descImage");
   descImage.innerHTML = images[i].text;

   if (i == 0) {
    divItem.classList.add("active");
   }

}

const oggetti = document.getElementsByClassName("item");
const prossimo = document.getElementById("down");
const precedente = document.getElementById("up");

let show = 0;

prossimo.addEventListener(`click`,

    function () {
        if (show < oggetti.length - 1) {

            oggetti[show].classList.remove("active");

            show++;

            oggetti[show].classList.add("active");
        }
    });

precedente.addEventListener(`click`,
    function () {
        if (show > oggetti.length - 5) {
            oggetti[show].classList.remove("active");

            show--;

            oggetti[show].classList.add("active");
        }
    }
);
