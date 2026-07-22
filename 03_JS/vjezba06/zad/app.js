const rez = document.getElementById('rezultat')

document.getElementById('izvedi').addEventListener('click', () => {
        rez.innerHTML= ''
        const aString = document.getElementById('inputA').value
        const zad = Number(document.getElementById('zadatak').value)
        
        switch(zad){
            case 1: 
                //počinje prvi zadatak
            if(!aString){
                rez.innerHTML = 'Obavezan unos'  //ovdje se osiguravamo da korisnik mora nešto unijeti
                rez.style.color = 'red'
                return // return prekida if, switch i function ()=>{}
            }
           
            switch(aString.toLowerCase().trim){    //sa ovim lowercase i .trim smo smanjili mogucnost greske unosa korisnika (capslock ili razmak pa unos)
                case 'start':
                rez.innerHTML = 'Pokretanje programa'
                rez.style.color = 'green'
                break

                case 'stop':
                    rez.innerHTML = 'Zaustavljanje programa'
                    rez.style.color = 'yellow'
                    break
                case 'pauza':
                    rez.innerHTML = 'Pauziranje programa'
                    rez.style.color = 'antique'
                    break
                default:
                    rez.innerHTML= 'Neodgovarajuća komanda'
                    rez.style.color = 'red'

            }



                //završen prvi zadatak
                break

                case 2:
                    //počinje 2. zadatak
                if(!aString){
                    rez.innerHTML = 'Obavezan unos'
                    rez.style.color = 'red'
                    return
                }

                if(aString.length>1){
                    rez.innerHTML = 'Unesi jedno slovo'
                    rez.style.color = 'red'
                    return
                }

                switch(aString.toLowerCase()){
                    case 'a':
                    case 'b':
                    case 'c':
                    rez.innerHTML = 'Položio'
                    rez.style.color = 'green'
                    break
                    case 'd':
                    case 'f':
                        rez.innerHTML = 'Nije položio'
                        rez.style.color = 'yellow'
                        break
                    default:
                        rez.innerHTML= 'Unesi A, B, C, D ili F'
                        rez.style.color= 'red'
                }
                    



                    //završen 2.zadatak
                    break

                case 3:
                    //počinje 3.zadatak
                    if(!aString){
                        rez.innerHTML = 'Obavezan unos bodova'
                        rez.style.color = 'red'
                        return
                    }

                    const bodovi = Number(aString)

                    if(isNaN(bodovi)){
                        rez.innerHTML = 'Unesi broj'
                        rez.style.color = 'red'
                        return
                    }

                    if(bodovi < 0 || bodovi > 100){
                        rez.innerHTML = 'Broj bodova mora biti od 0 do 100'
                        rez.style.color = 'red'
                        return
                    }

                    switch(true){
                        case bodovi < 50:
                            rez.innerHTML = 'Nedovoljan'
                            rez.style.color = 'red'
                            break

                        case bodovi <= 64:
                            rez.innerHTML = 'Dovoljan'
                            rez.style.color = 'yellow'
                            break

                        case bodovi <= 79:
                            rez.innerHTML = 'Dobar'
                            rez.style.color = 'orange'
                            break
                        
                        case bodovi <= 89:
                            rez.innerHTML = 'Vrlo dobar'
                            rez.style.color = 'green'
                            break

                        case bodovi <= 100:
                            rez.innerHTML = 'Odličan'
                            rez.style.color = 'green'
                            break    
                    }

                    //završen 3.zadatak
                    break

                    case 4:
                        //počinje 4. zadatak
                    if(!aString){
                        rez.innerHTML = 'Obavezan unos namirnice'
                        rez.style.color = 'red'
                        return
                    }
                    
                    switch(aString.toLowerCase()){
                        case 'janjetina':
                        case 'svinjetina':
                        case 'teletina':
                        rez.innerHTML = 'Meso'
                        rez.style.color = 'red'
                        break

                        case 'jabuka':
                        case 'kruška':
                        case 'šljiva':
                        case 'jagoda':
                        rez.innerHTML = 'Voće'
                        rez.style.color = 'green'
                        break

                        default:
                            rez.innerHTML = 'Ne može se odrediti'
                            rez.style.color = 'gray'
                    }

                    //završen 4.zadatak
                    break



        }
    
})




// Zadaci

// 1. zadatak
// Napiši program koji prima string komandu ("start", "stop", "pauza") i ispisuje odgovarajuću poruku.
// Primjer ulaza: "pause"
// Ispis: "Pauza programa"

// 2. zadatak
// Napiši program koji prima ocjenu ("A", "B", "C", "D", "F") i ispisuje:
// "Položio" za "A", "B", "C"
// "Nije položio" za "D" i "F"

// 3. zadatak
// Napiši program koji prima broj bodova (0–100) i ispisuje ocjenu:
// < 50 → "Nedovoljan"
// 50–64 → "Dovoljan"
// 65–79 → "Dobar"
// 80–89 → "Vrlo dobar"
// 90–100 → "Odličan"
// Napomena: koristi switch(true).


// 4. zadatak
// Za uneseno ime namirnice ispisi dali je voće ili meso ili nemozes odrediti
// npr. ulaz janjetina, svinjetina, teletina ispis Meso
// npr. ulaz jabuka, kruška, šljiva, jagoda ispis Voće
// npr. žablji kraci ispis Ne može se odrediti 



