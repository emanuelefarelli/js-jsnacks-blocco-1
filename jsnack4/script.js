// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.

let userNumber = parseInt(prompt("inserisci un numero di 4 cifre di cui vuoi sommare le singole cifre"));
let somma = 0;

for(let i = 0 ; i < 4 ; i++){
    let numberToken = parseInt(userNumber % 10);
    userNumber = userNumber / 10;
    console.log(numberToken);
    somma += numberToken;
}

console.log("La somma delle cifre è: " + somma);
