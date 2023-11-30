// Prompt Del Nome

const userName = prompt('Dimmi il tuo Nome:');
console.log(userName);

// Prompt Del Cognome

const surname = prompt('Dimmi il tuo Cognome:');
console.log(surname);

// Prompt del Colore Preferito

const favoriteColor = prompt('Dimmi il tuo colore preferito:');
console.log(favoriteColor);

// Le Informazioni vengono Stampate in Pagina

const stringaTemplateLiteral = `
    Ciao mi chiamo:
    ${userName}
    ${surname}
    e il mio colore preferito è il:
    ${favoriteColor}
`;
console.log(stringaTemplateLiteral);

