/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function initialFilter(arrayName){
    let newArray = []; variabile di accumulo
    for (let i = 0; i < arrayName.length; i++) {
        const element = arrayName[i];
        newArray.push(element[0]);
        
    }
    return newArray;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(initialFilter(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]