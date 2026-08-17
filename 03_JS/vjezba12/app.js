

const zadaci = {
  z1: (a, b) => {
    console.log('Zadatak 1');
    // 1. Ispiši apsolutnu vrijednost razlike brojeva A i B.
    console.log('Zadatak 1');
    // početak
    rezultat.innerHTML = ''
    
    if(!a.trim()){
      rezultat.innerHTML = 'prazno polje a'
      return
    }

    if(!b.trim()){
      rezultat.innerHTML = 'prazno polje b'
      return
    }
    
    
    
    const brojA = Number(a)
    const brojB = Number(b)
    if(!brojA){
      rezultat.innerHTML=('a nije broj')
      return
    }
    
     if(!brojB){
      rezultat.innerHTML=('b nije broj')
      return
    }



  //  const razlika = brojA - brojB
  //  if(!razlika < 0){
  //   rezultat.innerHTML = razlika* -1
  //  }else{
  //   rezultat.innerHTML= razlika
  //  }
  //   console.log(razlika)

  rezultat.innerHTML=Math.abs(brojA-brojB)


    
    
    
    // kraj 1
  },
  z2: (a, b) => {
    console.log('Zadatak 2');
    // početak 2
    
    
    rezultat.innerHTML = ''
    if(!a.trim()){
      rezultat.innerHTML = 'prazno polje a'
      return
    }
    
    if(!b.trim()){
      rezultat.innerHTML = 'prazno polje b'
      return
    }

    //vrijednosti su sigurno unesene

    const brojA = Number(a)
    const brojB = Number(b)

    console.log(brojA, brojB)
    if(!brojA){
      rezultat.innerHTML = 'nisi unio broj a'
      return
    }
    if(!brojB){
      rezultat.innerHTML = 'nisi unio broj b'
      return
    }
    if(!brojA>brojB){
      rezultat.innerHTML = brojA
    }else{
      rezultat.innerHTML = brojB
    }
  




    // kraj 2
  },
  z3: (a, b) => {
    console.log('Zadatak 3');
    // početak 3 
    
    
    if(a.trim() === '' || b.trim() === ''){
      rezultat.innerHTML = 'Unesite vrijednosti'
      return
    }

    const brojA = Number(a)
    if(!brojA){
      rezultat.innerHTML = 'A nije broj'
      return
    }

    console.log(brojA, b)

    let divovi = ''
    for(let i = 0; i<brojA; i++){

      if(i % 2 === 0){
        divovi += `
       <div style="background-color:${b}">&nbsp;</div>
        `
      }else{
        divovi += '<div>&nbsp;</div>'
      }

    }

    rezultat.innerHTML = divovi





    // kraj 3
  },
  z4: (a, b) => {
    console.log('Zadatak 4');
    // početak 4

    // kraj 4
  },
  z5: (a, b) => {
    console.log('Zadatak 5');
    // početak 5

    // kraj 5
  }
  // ovdje dodajemo nove zadatke
}


const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {

  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const zadatak = document.getElementById('zadatak').value;
  if (!(('z' + zadatak) in zadaci)) {
    rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
    return;
  }
  // poziv funkcije u objektu
  zadaci['z' + zadatak](a, b);
});
