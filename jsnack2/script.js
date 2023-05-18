// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const invitati = ['Gabibbo','Regina Elisabetta','Gesù','Ugo','Mario','Agamennone','Lisetta','Lisona','Geltrude Biservissima'];

const userName = prompt('Inserisci il tuo nome!');
let check = false


for(let i = 0 ; i < invitati.length ; i++){
    if(userName == invitati[i]){
        check = true;
    }
}

if(check == true){
    console.log("Sei ammesso!");
}else{
    console.log("Non sei ammesso!");
}