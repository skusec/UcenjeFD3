//operatori

//aritmetički operatori
// + - * /

// ULAZ
const a=2, b=3  //deklariranje dvije varijable u jednoj liniji

let rez //undefined 
// ALGORITAM
rez = a + b
//IZLAZ
console.log('rez', rez) // 5

// modulo operator (%)
//ostatak nakon cjelobrojnog dijeljenja

// 9 % 2 
// 4 * 2 8
// 9 - 8 = 1 <- ovo je rezultat

console.log(9 % 2) // 1
console.log(8 % 2) // 0

//modulo se najčešće koriste pri određivanju parnosti broja


// operatori dodjele 

rez += 2  //isto kao i rez = rez + 2

console.log('rez + 2', rez)



//debugger
rez = rez + 3

console.log('rez + 3', rez)

//postoje i -= *= /=


//način za uvećavanje varijable za broj 1
rez = rez + 1 //11
rez += 1 // 12
rez++ //13 // ovaj način zapisa se nikada ne bi trebao koristiti sam u liniji

// inkrement ++ i dekrement --
//kada se koristi i kada se uvećava/smanjuje 

let i = 0

//prvo koristi pa uvećava
console.log('i++', i++) // 0 --> nakon ispisa i=1

//prvo uvećaj pa koristi
console.log('++i', ++i) // 2 // --> 1 + 1 daje 2 i onda to ispiše



i = 2
let j = 1
i = j++ - i // 1 - 2   j = 2, i= -1
j += --i - ++j     // i = -2 - 3= -5, j = -3
console.log(i-j) // 1


// operatori uspoređivanja  == ===  (= je operator dodjeljivanja)

// različito !=

console.log(5 != 4) // true, 5 je različito od 4
console.log('5' != 5)  //false
console.log('5' !== 5) //true

// <, >, <=, >=
const godine = 18 

console.log(godine > 18)  // false 18 nije veće od 18
console.log(godine >= 18)  // true

// logički operatori -> rade na logičkom tipu podatka : boolean
const ispunjenUvjet = godine >= 18
console.log('ispunjenUvjet', typeof ispunjenUvjet, ispunjenUvjet)

// AND, OR, i NOT (I, ILI, NE)
// &&, ||, !

const imaNovaca = true

console.log('Može u disko', ispunjenUvjet && imaNovaca) //true

//vrijede pravila Booleovih tablica

console.log(!imaNovaca)

//ternarni operator
console.log(godine >= 18 ? 'Punoljetan' : 'Maloljetan')  //Punoljetan - zato što smo odredili const godine = 18

//operator spajanja - nadoljepljivanja (concatination)

console.log('Marko ima ' + godine + 'godina') //ovo nije baš najbolje

console.log(`Marko ima ${godine} godina` ) 

const x = '7', y = 5
console.log(x + y)  //75

//spread operator - operator proširivanja (...)

const niz = [2,1] //konstanta koja se ne može mijenjati
//console noviNiz = [0,... niz, 3]

//console.table(noviNiz) // ovdje sam zabrljao - ispraviti kasnije


const osoba = {
    ime: 'Pero',
    prezime: 'Perić'

}

const polaznik = {
    ...osoba,
    edukacija: 'FD'
}



//suprotno od proširivanja je destructing operator

const [prvi,drugi] = [1,2]  // dobijemo varijable prvi i drugi koje imaju vrijednosti 

console.log(prvi,drugi)

const {prezime, ...meniBitno} = polaznik
//prezime je ovdje otpadak, ne treba mi 

console.log(meniBitno) //imam ime i edukacija, bez prezimena


//nullish calescing operator (??)
//ako je vrijednost varijable null ili undefined koristi nešto drugo

let sifra

console.log(sifra ?? 'Šifra nije postavljena')

sifra = 1

console.log(sifra ?? 'Šifra nije postavljena')



//optional chaining operater - ?.
//idemo vidjeti što radi točka

const korisnik = {
    adresa: {
        grad: 'Osijek', 
        ulica: 'Trg'
    }
}

console.log(korisnik.adresa.grad)  // Osijek

console.log(korisnik?.adresa?.ulica?.toUppercase)

//odraditi ovaj dio do kraja, ZAPEO 










