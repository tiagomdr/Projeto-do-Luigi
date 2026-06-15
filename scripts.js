const formulario = document.querySelector('.formulario')
const mascara = document.querySelector('.mascara')


function mostrarForm() {
    formulario.style.left = '50%'
    formulario.style.transform = 'translateX(-50%)'
    mascara.style.visibility = 'visible'
}


function desaparecerForm() {
     formulario.style.left = '-342px'
     mascara.style.visibility = 'hidden'
}

function linkpararepositorio() {
    window.open('https://github.com/tiagomdr/Projeto-do-Luigi', '_blank')
}
