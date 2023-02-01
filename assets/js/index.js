borde = document.querySelector("#imagenclick")
borde.onclick = function bordeImagen() {

    imgaen1 = document.querySelector('#imagenclick');
    if (imgaen1.style.border == "") {
        imgaen1.style.border = "4px solid black";
    } else {
        imgaen1.style.border = "";
    }
}

/* parte 2 */

const input1 = document.querySelector("#sticker1")
const input2 = document.querySelector("#sticker2")
const input3 = document.querySelector("#sticker3")
const resultado = document.querySelector("#resultado")
const verify = document.querySelector(".verify")

verify.addEventListener("click", function verificar() {
    const a = Number(input1.value)
    const b = Number(input2.value)
    const c = Number(input3.value)
    const total = (a + b + c)

    if (a < 0 || b < 0 || c < 0) {
        resultado.innerHTML = "Solo valores entre 1 y 10"

    } else if (total > 10) {
        resultado.innerHTML = "Excede el maximo"

    } else if (total > 0) {
        resultado.innerHTML = `Llevas ${total} stickers`

    } else {
        resultado.innerHTML = "No has seleccionado stickers para llevar"
    }
})

/* parte 3 */


const ingresar = document.querySelector('#enter');


function verificarpassword() {
    const num1 = document.querySelector('.contraseña #pass1').value;
    const num2 = document.querySelector('.contraseña #pass2').value;
    const num3 = document.querySelector('.contraseña #pass3').value;
    const resultadopassword = document.querySelector('#resultadocontraseña')

    if (num1 == 9 && num2 == 1 && num3 == 1) {
        resultadopassword.innerHTML = 'Primera contraseña correcta';
    }
    else if (num1 == 7 && num2 == 1 && num3 == 4) {
        resultadopassword.innerHTML = 'Segunda contraseña correcta';
    }
    else {
        resultadopassword.innerHTML = 'Contraseña incorrecta';
    }
}

ingresar.addEventListener("click", verificarpassword);


