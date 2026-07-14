// ulaz
const ime = prompt('Unesi ime')

// izlaz
console.log(ime)
// ispisuje vrijednost varijable


// ispisuje tip podatka varijable
console.log(typeof ime)

console.log('ime', typeof ime, ime) //string

console.log(`Dobar dan ${ime}!`)

// number
const unosGodina = '2026'

// konverzija u broj
const godina = Number(unosGodina)

console.log(
    'unosGodina', typeof unosGodina, unosGodina,
    'godina', typeof godina, godina
)



const pi = parseFloat('3.14')

console.log('pi', typeof pi, pi)

//tip podatka boolean - logička vrijednost
const logickaVrijednost = true //druga moguća vrij. FALSE

console.log('logickaVrijednost', typeof logickaVrijednost, logickaVrijednost)

// logickaVrijednost=false skripta.js:38 Uncaught TypeError: Assignment to constant variable.

// 2.Način deklariranja varijable

let broj = 7
console.log('broj', typeof broj, broj)

// let broj = 8 Uncaught SyntaxError: Identifier 'broj' has already been declared

// 3.način deklariranja varijabli 
var x = 8
console.log('x', typeof x, x)
x = '8'
console.log('x', typeof x, x)
var x = true
console.log('x', typeof x, x)

const velikiBroj = 654316531681651n //biginit broj
console.log('velikiBroj', typeof velikiBroj, velikiBroj)

//const se ne može deklarirati bez vrijednosti

let varijabla;

console.log('varijabla', typeof varijabla, varijabla) //undefined je i tip i vrijednost

varijabla = 7
console.log('varijabla', typeof varijabla, varijabla)

//JSON - JavaScript Object Notation
const osoba = {
    id: 1,
    ime: 'Sean',
    placa: 2345.99,
    zaposlen: true
}

console.log('osoba', typeof osoba, osoba)
console.table(osoba)

//Array, niz, polja
const niz = [1, 2, 3, 4, 5, 6, 7, 8]
console.log('niz', typeof niz, niz)
console.table(niz)

const json = [
    {
        color: "red",
        value: "#f00"
    },
    {
        color: "green",
        value: "#0f0"
    },
    {
        color: "blue",
        value: "#00f"
    },
    {
        color: "cyan",
        value: "#0ff"
    },
    {
        color: "magenta",
        value: "#f0f"
    },
    {
        color: "yellow",
        value: "#ff0"
    },
    {
        color: "black",
        value: "#000"
    }
]

console.table(json)

//u JS je i funkcija tip podatka
//stari način definiranja funkcije
function pozdrav() {
    console.log('Pozdrav iz funkcije')
}

console.log('pozdrav', typeof pozdrav, /*pozdrav*/)
//poziv funkcije
pozdrav()

//novi način definiranja funkcije
const pozdravi = () => console.log('Pozdrav iz nove funkcije')

console.log('pozdravi', typeof pozdravi)
pozdravi()

//ovo nećemo nikada koristiti
const id1 = Symbol('Edunova') //edunova je samo opis ali je vrijednost jedinstvena
const id2 = Symbol('Edunova')

console.log('id1', typeof id1, id1)
console.log('id2', typeof id2, id2)

//danas smo koristiti =
// = je operator dodjeljivanja
// operator usporedbe == i ===
// == usporedba po vrijednosti 
// === usporedba po vrijednosti i po tipu podataka
console.log('7' == 7)  //true
console.log('7' === 7) //false
console.log(7 === 7) //true

console.log(id1 == id2) //false
console.log(id1 === id2) //false