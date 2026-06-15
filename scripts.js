const formulario = document.querySelector('.formulario')
const mascara = document.querySelector('.mascara')


function mostrarForm() {
    formulario.style.left = '50%'
    formulario.style.transform = 'translateX(-50%)'
    mascara.style.zIndex = '1'
    mascara.style.display = 'block'
    formulario.style.transition = '1s ease-in'
}


function desaparecerForm() {
     formulario.style.left = '-342px'
     mascara.style.display = 'none'
     formulario.style.transition = '1s ease'
}