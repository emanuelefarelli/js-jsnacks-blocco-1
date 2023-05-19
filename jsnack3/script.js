// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,  se è dispari inseriscilo nell’array.

let array = [];

for(let i = 0 ; i < 6 ; i++){
    let userNumber = prompt("Inserisci un numero:");
    if((userNumber % 2) == 0){
        console.log("Nah, non mi piace")
    }else{
        console.log("Mi piace! Lo aggiungo alla mia collezione")
        array[array.length] = userNumber;
    }
}

console.log("Ecco la mia collezione: " + array)
