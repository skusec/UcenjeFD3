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
            rezultat.style.color= 'red'
            return //prekida izvođenja click funkcije - short curcuiting
        }

        const b = Number(bString)
        if (!b) {
            rezultat.innerHTML = 'B nije broj'
            rezultat.style.color= 'red'
            return
        }
        
        //kao program sam ovdje siguran da su a i b brojevi
        rezultat.innerHTML = a > b ? a : b
        rezultat.style.color = 'green'

        //kraj 1.zadatka

    }

    if(zadatak === '2'){
    //početak 2.zadatka
    
    const a = Number(aString)
    if(!a){
        rezultat.innerHTML = 'A nije broj'
        rezultat.style.color = 'red'
        return
    }

    const b = Number(bString)
    if(!b){
        rezultat.innerHTML = 'B nije broj'
        rezultat.style.color = 'red'
        return
    }

    const c = Number(cString)
    if(!c){
        rezultat.innerHTML = 'C nije broj'
        rezultat.style.color = 'red'
        return
    }

    const veceIzmeduAiB = a > b ? a : b

    rezultat.innerHTML = veceIzmeduAiB > c ? veceIzmeduAiB : c
    rezultat.style.color = 'green'

    //kraj 2.zadatka

    }

    if(zadatak === '3'){
    //početak 3.zadatka

    const a = Number(aString)
    if(!a){
        rezultat.innerHTML = 'A nije broj'
        rezultat.style.color = 'red'
        return
    }

    const b = Number(bString)
    if(!b){
        rezultat.innerHTML = 'B nije broj'
        rezultat.style.color = 'red'
        return
    }

    const c = Number(cString)
    if(!c){
        rezultat.innerHTML = 'C nije broj'
        rezultat.style.color = 'red'
        return
    }

    const d = Number(dString)
    if(!d){
        rezultat.innerHTML = 'D nije broj'
        rezultat.style.color = 'red'
        return
    }

    const manjiIzmeduAiB = a < b ? a : b
    const manjiIzmeduCiD = c < d ? c : d

    rezultat.innerHTML = manjiIzmeduAiB < manjiIzmeduCiD ? manjiIzmeduAiB : manjiIzmeduCiD
    rezultat.style.color = 'green'

    //kraj 3.zadatka
    
    }


})