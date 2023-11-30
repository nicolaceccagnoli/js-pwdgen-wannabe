// Prompt Del Nome

const userName = prompt('Dimmi il tuo Nome:');
console.log(userName);

// Prompt Del Cognome

const surname = prompt('Dimmi il tuo Cognome:');
console.log(surname);

// Prompt del Colore Preferito

const favoriteColor = prompt('Dimmi il tuo colore preferito:');
console.log(favoriteColor);

// Generatore Casuale di numeri
let casualNumber = Math.floor((Math.random() * 100) + 1);
console.log(casualNumber);

// Le Informazioni vengono Stampate in Pagina

const password =`${userName}${surname}${favoriteColor}${casualNumber}`;
console.log(password);

document.getElementById('password').innerHTML = 'La password generata appositamente per te è :' + ' ' + (password);