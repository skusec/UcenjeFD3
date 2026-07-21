//switch je višestruko grananje
//switch radi sa svim tipovima podataka i provjerava s ===
//sve što se može sa switch može i sa if

const ocjena = 5 //simulacija da je korisnik unio vrijednost broj pet

switch (ocjena) {
    case 1:
        console.log('Nedovoljan')
        break
    case 2:
        console.log('Dovoljan')
        break
    case 3:
        console.log('Dobar')
        break
    case 4:
        console.log('Vrlo dobar')
        break
    case 5:
        console.log('Izvrstan')
        break
    default:
        console.log('Nije ocjena')

}

const dan = 'Subota'

switch (dan) {
    case 'Ponedjeljak':
    case 'Utorak':
    case 'Srijeda':
    case 'Četvrtak':
    case 'Petak':
        console.log('Radni dan')
        break
    case 'Subota':
    case 'Nedjelja':
        console.log('Vikend')
        break
    default:
        console.log('Neispravan dan')
}