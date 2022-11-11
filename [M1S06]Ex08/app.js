let res = document.querySelector('div#res')
let img = document.querySelector('img#imagem')
let nome = document.querySelector('p#nome')
let email = document.querySelector('p#email')
let endereco = document.querySelector('p#endereco')

async function buscaAPI() {
    try {
        const resultado = await fetch('https://randomuser.me/api/?results=4', {
            method: 'GET'
        })
        console.log(resultado)

        const dados = await resultado.json()
        console.log(dados.results[0].name)

        // Foto HTML
        img.setAttribute('src', `${dados.results[0].picture.large}`);
        // Foto console
        console.log(`${dados.results[0].picture.large}`)

        // Título / Nome / Sobrenome HTML
        nome.innerHTML = `${dados.results[0].name.title} ${dados.results[0].name.first} ${dados.results[0].name.last}`
        // Título / Nome / Sobrenome console
        console.log(`${dados.results[0].name.title} ${dados.results[0].name.first} ${dados.results[0].name.last}`)

        // E-mail HTML
        email.innerHTML += `${dados.results[0].email}`
        // E-mail console
        console.log(`${dados.results[0].email}`)

        // Endereço completo HTML
        endereco.innerHTML += `${dados.results[0].location.street.name} - ${dados.results[0].location.street.number} ${dados.results[0].location.city} - ${dados.results[0].location.state} - ${dados.results[0].location.country}`
        // Endereço completo console
        console.log(`${dados.results[0].location.street.name} - ${dados.results[0].location.street.number} ${dados.results[0].location.city} - ${dados.results[0].location.state} - ${dados.results[0].location.country}`)

    } catch(erro) {

    }
}
buscaAPI()

// Evento click para mostrar e esconder NOME
const checkNome = document.querySelector("input#checkNome")

checkNome.addEventListener('click', (event) => {
    console.log(event)
    console.log(event.target)
    console.log(event.target.checked)
    const paragrafo = document.querySelector('p#nome')
    const checado = event.target.checked

    if (checado) {
        paragrafo.classList.remove('ocultar')
        paragrafo.classList.add('mostrar')
    } else {
        paragrafo.classList.remove('mostrar')
        paragrafo.classList.add('ocultar')
    }
})

// Evento click para mostrar e esconder E-MAIL
const checkEmail = document.querySelector('input#checkEmail')

checkEmail.addEventListener('click', (event) => {
    const paragrafo = document.querySelector('p#email')
    const checado = event.target.checked

    if (checado) {
        paragrafo.classList.remove('ocultar')
        paragrafo.classList.add('mostrar')
    } else {
        paragrafo.classList.remove('mostrar')
        paragrafo.classList.add('ocultar')
    }
})

// Evento click para mostrar e esconder Endereço
const checkEnd = document.querySelector('input#checkEnd')

checkEnd.addEventListener('click', (event) => {
    const paragrafo = document.querySelector('p#endereco')
    const checado = event.target.checked

    if (checado) {
        paragrafo.classList.remove('ocultar')
        paragrafo.classList.add('mostrar')
    } else {
        paragrafo.classList.remove('mostrar')
        paragrafo.classList.add('ocultar')
    }
})