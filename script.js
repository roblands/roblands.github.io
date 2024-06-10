const map = document.querySelector("#map");
const tDM = document.querySelectorAll(".trozo-map");
const score = document.querySelector("#score")


const randomNumber = Math.round( Math.random() * 100);


let numeroRandom2 = 0;
let puntoVerde;

const rondas = (random)=>{
    random = Math.round( Math.random() * 99);
    numeroRandom2 = random;
    let pointGreen = tDM[numeroRandom2];
    puntoVerde = pointGreen;
    puntoVerde.classList.add("punto-verde");
}
const quitarPuntosVerdes = ()=>{
    puntoVerde.classList.remove("punto-verde")
};




rondas(numeroRandom2);





let posicionExacta = randomNumber;
let posicion = tDM[randomNumber];
let pointScore = 0;

posicion.classList.add("pacman-derecha");


//probar modificar la propiedad margin con alguna variable
// tDM[3].setAttribute("style", "background: #F00;")
//para editar el atributo de algo es con setAttribute, ej:
// map.setAttribute("style", "background: #F00;");

let contador = 2;


const cajaPadreBtns = document.querySelector(".div-2");
const btnArriba = document.querySelector("#btn-arriba");
const btnIzquierda = document.querySelector("#btn-izquierda");
const btnAbajo = document.querySelector("#btn-abajo");
const btnDerecha = document.querySelector("#btn-derecha");


btnArriba.addEventListener("click", ()=>{
    if(posicionExacta > 9){
        remover();
        posicion.classList.add("default");
        posicionExacta -= 10;
        posicion = tDM[posicionExacta];

        if((contador % 2) == 0){
            posicion.classList.add("pacman-arriba");
        }
        else if((contador % 2 == 1)){
            posicion.classList.add("pacman-arriba-cerrada");
        }
    }
    comprobarVictoria();
});

btnIzquierda.addEventListener("click", ()=>{
    if((posicionExacta % 10) != 0){
        remover();
        posicion.classList.add("default");
        posicionExacta -= 1;
        posicion = tDM[posicionExacta];



        
        if((contador % 2) == 0){
            posicion.classList.add("pacman-izquierda");
        }
        else if((contador % 2 == 1)){
            posicion.classList.add("pacman-izquierda-cerrado");
        }
    comprobarVictoria();

}
});

btnDerecha.addEventListener("click", ()=>{
    if((posicionExacta % 10) != 9){
        remover();
        posicion.classList.add("default");
        posicionExacta += 1;
        posicion = tDM[posicionExacta];


        
        if((contador % 2) == 0){
            posicion.classList.add("pacman-derecha");
        }
        else if((contador % 2 == 1)){
            posicion.classList.add("pacman-derecha-cerrada");
        }
    comprobarVictoria();
    }

});
btnAbajo.addEventListener("click", ()=>{
    if(posicionExacta < 90){
        remover();

        posicion.classList.add("default");
        posicionExacta += 10;
        posicion = tDM[posicionExacta];



        
        if((contador % 2) == 0){
            posicion.classList.add("pacman-abajo");
        }
        else if((contador % 2 == 1)){
            posicion.classList.add("pacman-abajo-cerrado");
        }
    comprobarVictoria();
        
    }

});



window.addEventListener("keypress", (evnt)=>{
    if(evnt.key == "w"){
        if(posicionExacta > 9){
            remover();
            posicion.classList.add("default");
            posicionExacta -= 10;
            posicion = tDM[posicionExacta];

            if((contador % 2) == 0){
                posicion.classList.add("pacman-arriba");
            }
            else if((contador % 2 == 1)){
                posicion.classList.add("pacman-arriba-cerrada");
            }
        }
        comprobarVictoria();
    }
    else if(evnt.key == "d"){
        if((posicionExacta % 10) != 9){
            remover();
            posicion.classList.add("default");
            posicionExacta += 1;
            posicion = tDM[posicionExacta];


            
            if((contador % 2) == 0){
                posicion.classList.add("pacman-derecha");
            }
            else if((contador % 2 == 1)){
                posicion.classList.add("pacman-derecha-cerrada");
            }
        comprobarVictoria();
        }
    }
    else if(evnt.key == "s"){
        if(posicionExacta < 90){
            remover();

            posicion.classList.add("default");
            posicionExacta += 10;
            posicion = tDM[posicionExacta];



            
            if((contador % 2) == 0){
                posicion.classList.add("pacman-abajo");
            }
            else if((contador % 2 == 1)){
                posicion.classList.add("pacman-abajo-cerrado");
            }
        comprobarVictoria();
            
        }
    }
    else if(evnt.key == "a"){
        if((posicionExacta % 10) != 0){
            remover();
            posicion.classList.add("default");
            posicionExacta -= 1;
            posicion = tDM[posicionExacta];



            
            if((contador % 2) == 0){
                posicion.classList.add("pacman-izquierda");
            }
            else if((contador % 2 == 1)){
                posicion.classList.add("pacman-izquierda-cerrado");
            }
        comprobarVictoria();

        }
    }
    contador++;
});


const comprobarVictoria = ()=>{
    if(posicionExacta == numeroRandom2){
        pointScore += 1;
        let textoDeScore = `score: ${pointScore}`
        score.innerHTML = textoDeScore;
        quitarPuntosVerdes();
        rondas();

        
        // location.reload();
    }
};

const remover = ()=>{
    posicion.classList.remove("pacman-izquierda");
    posicion.classList.remove("pacman-abajo");
    posicion.classList.remove("pacman-derecha");
    posicion.classList.remove("pacman-arriba");
    posicion.classList.remove("pacman-arriba-cerrada");
    posicion.classList.remove("pacman-derecha-cerrada");
    posicion.classList.remove("pacman-abajo-cerrado");
    posicion.classList.remove("pacman-izquierda-cerrado");
}

comprobarVictoria();

