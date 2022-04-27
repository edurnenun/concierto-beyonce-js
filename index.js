// Tu código va aquí: 
//<14 no pueden entrar
//14>=17 acomapñados de 18
//18>= entran



function gestionarAdmision() {
    let edad=16;
    //let edad=0;
    //let edad=8;
    //let edad=12;
    //let edad=14;
    //let edad=17;
    //let edad=18;
    //let edad=35;
    //let edad=99;

    if (edad>=18) {
        console.log ("Eres mayor de edad, puedes entrar.")
    } else if (edad>=14){
        console.log ("Puedes entrar, pero sólo si te acompaña una persona mayor de edad.")
    } else{
        console.log ("Lo siento, eres demasiado joven, vuelve a intentarlo en unos años.")
    }
    } 
gestionarAdmision();
 
  /* 0, 8, 12, 14, 17, 18, 35 y 99. */