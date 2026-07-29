const isDev = true  //veže se na 52,53 liniju

//funkcija je skup naredbi sa određenom svrhom
//s ciljem višestrukog poziva
//DRY - don't repeat yourself

//"klasične" funkcije 

//2 koraka rada s funkcijama: definicija i pozivanje

//redosljed definicije i pozivanja nije bitan

//1. funkcija koja ne prima vrijednost i ne vraća vrijednost

//1.1 definiranje 
// u () se nalaze parametri, ova ne prima parametre
//u tijelu nema return nekog tipa, ova je tipa void

function odradi() {
    console.log('Poziv funkcije odradi 1.1')
}
//odradi

//1.2 poziv funkcije odradi
odradi()

document.getElementById('gumb2').addEventListener('click', odradi)

//korištenje bezimene funkcije
document.getElementById('gumb3').addEventListener('click', function () {
       console.log('Poziv iz bezimene funkcije') 
})


//  2.vrsta --> prima parametre, ne vraća vrijednost 

//2.1 definicija
function parniBrojevi(odBroja, doBroja){  //odbroja, dobroja su parametri. Odvajaju se zarezom (,)
    for(let i = odBroja; i<doBroja; i++){
        if(i % 2 === 0){
            console.log(i)
        }
    }
}

//2.2 poziv
parniBrojevi(2,12)
parniBrojevi(127,134)

//korisni primjer druge vrste funkcije
function log(poruka){
    if(!isDev){
        return
    }
    console.log('\n')  //backslash je altgr+Q - prelazi u novi red
    console.log('+--------------------+')
    console.log(poruka)
    console.log('+--------------------+')
}

log('Prva poruka testiranje')

log('Osijek')

//3.vrsta - ne prima parametre, vraća vrijednost

//3.1 definicija




function slucajniBroj(odBroja=0, doBroja=0){   //prazna zagrada znači da ne prima parametre
    if(doBroja && odBroja){
        return (Math.random()*(doBroja - odBroja) + odBroja).toFixed(0)
    }
    
    if(odBroja){
        return (Math.random()*odBroja).toFixed(0)
    }
    
    
    
    return Math.random()
}

//3.2 poziv funkc.
//funckije koje vraćaju vrijednost kod poziva čiji se rezultat ne koristi se izvedu i bace u ''vjetar''
slucajniBroj()

//varijabli sb dodjeljujem rezultat izvođenja funkcije slucajniBroj
const sb = slucajniBroj()

log(sb)

//korištenje funkcije unutar parametra druge funkcije
log(slucajniBroj())


for(let i = 0; i<6; i++){
    log(slucajniBroj(20))   //zovem funkciju slucajni broj sa 2 parametra
}


//4.vrsta prima parametre, vraća vrijednost
//4.1 definicija

// function zbrojPrimBrojeva(odbroJa, doBroja){
//     let suma=0, prim = true
//     for(let i=odbroJa; i<doBroja; i++){
//         if(i<2){
//             continue
//         }

//         prim = true
//         for(let j = 2;j<i; j++){
//             if(i % j === 0){
//                 prim = false
//                 break
//             }
        
//         if(prim){
//             console.log(i)
//             suma += i
//         }
//         }
        

//negdje nešto ovdje nije u redu i  NE ŠLJAKA

    }
    return
}

//4.2 poziv
log(zbrojPrimBrojeva(-2, 10)) //17



const ime = 'pero'
log(ime.charCodeAt(0))

log(ime.toUpperCase())