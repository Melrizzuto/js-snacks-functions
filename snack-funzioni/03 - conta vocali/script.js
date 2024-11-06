/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function filterVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let vowelsArray = [];

    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) {
            vowelsArray.push(str[i].toLowerCase());
        }
    }

    return vowelsArray.length;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(filterVowels(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)