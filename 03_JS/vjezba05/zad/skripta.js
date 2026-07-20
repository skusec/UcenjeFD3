const rezultat = document.getElementById('rezultat')

document.getElementById('izvedi').addEventListener('click', () => {
    //ovaj kod će se uvijek izvoditi svaki puta kada korisnik  klikne na gumb IZVEDI    
    rezultat.innerHTML = ''

    const aString = document.getElementById('a').value
    const bString = document.getElementById('b').value   // --> varijable u kojima je tekst koje je korisnik unio
    const cString = document.getElementById('c').value
    const dString = document.getElementById('d').value

    //koji je odabrani zadatak
    const zadatak = document.getElementById('zadatak').value

    if (zadatak === '1') {
        //početak 1.zadatka

        const a = Number(aString)

        //osiguravam da korisnik mora unijeti brojeve 

        if (!a) {   //ako nisi broj (ili si 0, NaN, null ili undefined)
            rezultat.innerHTML = 'A nije broj'
            rezultat.style.color='red'
            return //prekida izvođenja click funkcije - short curcuiting
        }

        const b = Number(bString)
        if (!b) {
            rezultat.innerHTML = 'B nije broj'
            rezultat.style.color='red'
            return
        }





    }

})