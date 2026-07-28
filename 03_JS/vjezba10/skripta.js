// while petlja
//radi sa boolean tipom podatka
//sve dok je TRUE ostalje u petlji

//beskonačna petlja

while (true) {
    console.log('Edunova')
    break
}

//continue i break rade rade isto kao u ''for''

let brojac = 0

console.time('while petlja')

while (brojac++ < 100) {
    //console.log(brojac) //od 1 do 100
    //if(brojac % 10 === 0){
    console.log(brojac)
}


console.timeEnd('while petlja')

//novi primjer

let brojUnos = '1262'  //simulacija unosa korisnika = suma zbroj 11, izvede se4 puta 4 iteracije


console.time('ZB1')
suma = 0
for (let i = 0; i < brojUnos.length; i++) {
    suma += Number(brojUnos[i])
}

console.timeEnd('ZB1')
console.log(suma) //suma 11

console.time('ZB2')
let broj = Number(brojUnos) // ovo se izvodi jednom

suma = 0

while (broj > 0) {
    suma += broj % 10  //1262  -> 2  | 126 --> 6
    broj = broj - (broj % 10) // 1262 - 2 = 1260  | 126 - 6 = 120
    broj /= 10 //126 | 12
}
console.timeEnd('ZB2')
console.log(suma)
// 1262 % 10 = 2
//1262 / 10 = 126 cjelobrojno, 126 * 10 = 1260, 1262 - 1260 = 2

//126 % 10 = 6
//126/10 = 12 cjelobrojno, 12*10=120, 126-120 = 6

//12 % 10 = 2
//1 % 10 = 1

//činjenica: u petlje (for,while) se ne mora ući
const x = 5
for(let i = 0; i > x;i++){
    console.log('Ušao u petlju')
}

const podaciApi = [
    {
        ime : 'Pero'
    },
    {
        ime: 'Marko'
    },
    {
        ime : 'Marija'
    }
]

while(podaciApi.length>0){
    //funkcija pop () uzima prvi element iz niza i skraćuje niz za taj element (smanji length)
    console.log('Ušao u petlju', podaciApi.pop()?.ime)
}

