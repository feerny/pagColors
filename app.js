const selectColor = document.querySelector('#ChangeColor');
const container = document.querySelector('.container');
const input_color = document.querySelector('#txt-color');
const btn_generate = document.querySelector('#btn-generate');
const tittle = document.querySelector('#tittle');

const claro = document.getElementById("claro");
const oscuro = document.getElementById("oscuro");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const option5 = document.querySelector("#option5");
const option6 = document.querySelector("#option6");
const contenedor = document.getElementById("contenedor");
const body = document.getElementById("body");

claro.addEventListener('click',cambioClaro);
oscuro.addEventListener('click',cambioOscuro);

selectColor.addEventListener('change',changeColor);
input_color.addEventListener('keyup', changetxtColor)
btn_generate.addEventListener('click', generate_color);


function cambioClaro(){
    body.style.backgroundColor="white";
    body.style.transition = "all .5s ease"
    claro.setAttribute("class","ocultar");
    oscuro.setAttribute("class","mostrar boton-oscuro");
    option1.setAttribute("class","option");
    option2.setAttribute("class","option");
    option3.setAttribute("class","option");
    option4.setAttribute("class","option");
    option5.setAttribute("class","option");
    option6.setAttribute("class","option");
    selectColor.setAttribute("class","select");
    contenedor.setAttribute("class","container");
    btn_generate.setAttribute("class","button")
    input_color.setAttribute("class","input");
}

function cambioOscuro(){
    body.style.backgroundColor="black";
    body.style.transition = "all .5s ease"
    oscuro.setAttribute("class","ocultar");
    claro.setAttribute("class","mostrar boton-claro");
    option1.setAttribute("class","option-black");
    option2.setAttribute("class","option-black");
    option3.setAttribute("class","option-black");
    option4.setAttribute("class","option-black");
    option5.setAttribute("class","option-black");
    option6.setAttribute("class","option-black");
    selectColor.setAttribute("class","select-black");
    contenedor.setAttribute("class","container-black");
    btn_generate.setAttribute("class","button-black");
    input_color.setAttribute("class","input-black");
}

function changeColor() {  
    container.style.backgroundColor= selectColor.value;
    tittle.style.color= selectColor.value;
    container.style.transition= "all .5s ease";
}

function changetxtColor() {  
    container.style.backgroundColor= "#"+input_color.value;
    tittle.style.color= "#"+input_color.value;
    container.style.transition= "all .5s ease";
}

function generate_color() { 
    container.style.backgroundColor= "#"+randomNum();
    tittle.style.color= "#"+randomNum();
    container.style.transition= "all .5s ease";
}

function randomNum(min=100, max=900) {
    return parseInt( Math.random() * (max - min) + min);	
}


