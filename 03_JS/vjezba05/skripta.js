//uvjetno grananje if

// if radi sa boolean tipom podatka

const uvjet = true  //mijenjati true/false da bi se skužila u čemu je fora 

if (uvjet) {
    console.log('Uvjet je true')
}

//kako je if binarno grananje tako postoji i else grana

if (uvjet) {
    console.log('Uvjet je ispunjen')
    console.log('Ušao sam u if granu')

}
else {
    console.log('uvjet je false')
    console.log('Ušao sam u else granu')
}

//korištenje vitičastih zagrada 
//kada se if ili else odnosi samo na jednu liniju, tada NE TREBAJU vitičaste zagrade

console.log(uvjet)
if (!uvjet)
    console.log('if bez {} !uvjet')
else
    console.log('else bez {} !uvjet')
//  console.log('Ispisati kada je false') --> ovo bi se uvijek izvodilo, no bolje se držati {} zagrada pa da je i jedna linija u pitanju

//puna (sve mogućnosti) sintaksa

const ocjena = 2  //zamislimo da je ovo upisao čovjek/korisnik

if(ocjena===3){
    console.log('Dobar')
}else if(ocjena===1){
    console.log('Nedovoljan')
}else if(ocjena===2){
    console.log('Dovoljan')
}else if(ocjena<=0 || ocjena > 5){   // logički ILI operator ||
    console.log('Nije ocjena')
}

//mogu imati koliko god želim else if

else{
    console.log('veće od 3')
}



if(ocjena>=1 && ocjena<=5){
    console.log('Ocjena je valjana')
}else{
    console.log('Nije ocjena')
}

//ternarni operator ?:

console.log(ocjena>=1 && ocjena<=5 ? 'Ocjena je valjana' : 'Nije ocjena')

//JS specifičnosti
//falsy i truly

const ime = ''

if(ime){
    console.log('Varijabla ime ima vrijednost')  // --> TRULY
}else{
    console.log('Varijabla ime NEMA vrijednost,prazna je --> \'\'')  // --> FALSY   stavljanja navodnika u console pomoću ALTGR + Q \
}

//falsy broj = 0
//falsy objekt = null
//falsy za varijablu = undefined
//falsy NaN (Not a Number)

const b = Number('aaaa')  //mijenjaj vrijednosti iz aaa u brojke da skužiš poantu
console.log(b)
//iz ovoga vidimo da je b NaN --> FALSY, !falsy = true, a truly ulazi u if granu
if(!b){
    console.log('Nisi unio broj')
}else{
    console.log(b*10)
}