/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui
function letterInitialFilter(arrayStr, letter) {
    let newArray = [];
    const letterChoice = letter.toLowerCase();
    for (let i = 0; i < arrayStr.length; i++) {

        if (arrayStr[i].charAt(0).toLowerCase() === letterChoice) {
            newArray.push(arrayStr[i]);
        }
    }

    
    return newArray;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(letterInitialFilter(names, "a"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]