//funckionalne metode - skraćuju kod, danas se STANDARDNO koriste
//prvo nam trebaju podaci

const korisnici = [
    {
        id: 1,
        ime: 'Ana',
        prezime: 'Kartek',
        godine: 25,
        admin: false //na zadnje svojstvo ne mora ali može doći doći do zareza
    },
    {
        id: 2,
        ime: 'Karlo',
        prezime: 'Totig',
        godine: 29,
        admin: false
    },
    {
        id: 3,
        ime: 'Marko',
        prezime: 'Ćutić',
        godine: 45,
        admin: true
    },
     {
        id: 4,
        ime: 'Nikola',
        prezime: 'Ćutić',
        godine: 49,
        admin: true 
    },
     {
        id: 5,
        ime: 'Žana',
        prezime: 'Đitko',
        godine: 18,
        admin: false 
    }
]

console.table(korisnici)

//forEach () - zamjenjuje (skraćuje) for petlju

for(let i = 0;i < korisnici.length; i++){
    console.log(korisnici[i].ime)
}

console.log('****************************')

korisnici.forEach(korisnik => console.log(korisnik.ime)) //primjer forEach (skraćivanje) petlje

console.log('****************************')

korisnici.forEach(o => console.log(`${o.ime} ${o.prezime}`))

console.log('****************************')

korisnici.forEach(o =>{
    let oslovi = 'Poštovan'
    if(o.ime.endsWith('a')){
        oslovi += 'a gospođo'
    }else{
        oslovi += 'i gospodine'
    }

    console.log(`${oslovi} ${o.ime} ${o.prezime}`)
})

console.log('****************************')

//sintaksa kojoj se teži
korisnici.forEach(o => console.log(`Poštovan${o.ime.endsWith('a') ? 'a gospođo' : 'i gospodine'} ${o.ime} ${o.prezime}`))

console.log('****************************')

//map()
//želim iz niza korisnici napraviti novi niz koji ima samo imena

const samoImena = korisnici.map(o => o.ime)

console.table(samoImena)

console.log('****************************')

korisnici.map(o => o.ime).forEach(ime => console.log(ime))

console.log('****************************')

const ip = korisnici.map(o => o.ime + ' ' + o.prezime)
console.table(ip)

console.log('****************************')

const maliNiz = korisnici.map(({id, ime, prezime}) => ({sifra: id, osoba:ime + ' ' + prezime}))

console.table(maliNiz)

console.log('****************************')

// find()

console.log(korisnici.find(o => o.id === 3) ?.ime ?? 'ne postoji')

//traži po imenu i prezimenu 
console.log(korisnici.find(o => o.ime === 'Ana' && o.prezime === 'Kartek').id)  //id = 1

//findIndex()

console.log(maliNiz.findIndex(o => o.sifra === 100))  //rezultat -1 znači da ne postoji


//filter()

console.table(korisnici.filter(o => o.godine > 40))

//reduce()

console.log(korisnici.reduce((suma, o) => suma + o.godine, 0)) //0 je početna vrijednost sume [iz nekog razloga mi ne radi u konzoli]

//some()

console.log(korisnici.some(o => o.admin) ? 'ima admina' : 'nema admina')

//every()

console.log(korisnici.every(o => o.godine > 18) ? 'Svi su punoljetni' : 'nisu punoljetni')




