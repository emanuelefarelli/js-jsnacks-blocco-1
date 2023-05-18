// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let array = [];
let somma = 0;

for(let i = 0 ; i < 10 ; i++){
    let num = parseInt(prompt("Inserisci un numero:"));
    array.push(num);
    somma += array[i];
}

console.log('La somma dei tuoi numeri è: ' + somma);


