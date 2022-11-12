let res = document.querySelector('div.res')
let img = document.querySelector('img.imagem')
let nome = document.querySelector('p.nome')
let email = document.querySelector('p.email')
let endereco = document.querySelector('p.endereco')

const listaDivGeral = document.getElementsByClassName('geral')

async function buscaAPI(index, divGeral) {
    console.log(divGeral);
    // console.log(divGeral.children[0].children[0]);
    try {
        const resultado = await fetch('https://randomuser.me/api/?results=4', {
            method: 'GET'
        })
        const dados = await resultado.json()
        // Foto HTML
        divGeral.children[0].children[0].setAttribute('src', `${dados.results[index].picture.large}`);

        // Título / Nome / Sobrenome HTML
        divGeral.children[1].children[0].innerHTML = `${dados.results[index].name.title} ${dados.results[index].name.first} ${dados.results[index].name.last}`

        // E-mail HTML
        divGeral.children[1].children[1].innerHTML += `${dados.results[index].email}`

        // Endereço completo HTML
        divGeral.children[1].children[2].innerHTML += `${dados.results[index].location.street.name} - ${dados.results[index].location.street.number} ${dados.results[index].location.city} - ${dados.results[index].location.state} - ${dados.results[index].location.country}`


    } catch(erro) {

    }
}

for (let i = 0; i < listaDivGeral.length; i++) {
    buscaAPI(i, listaDivGeral[i])
}
// buscaAPI(0, listaDivGeral[0])
// buscaAPI(1, listaDivGeral[1])
// buscaAPI(2, listaDivGeral[2])
// buscaAPI(3, listaDivGeral[3])

// Evento click para mostrar e esconder NOME
const checkNome = document.querySelector("input#checkNome")

checkNome.addEventListener('click', (event) => {
    const paragrafo = document.getElementsByClassName('nome')
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
    const paragrafo = document.getElementsByClassName('email')
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
    const paragrafo = document.getElementsByClassName('endereco')
    const checado = event.target.checked

    if (checado) {
        paragrafo.classList.remove('ocultar')
        paragrafo.classList.add('mostrar')
    } else {
        paragrafo.classList.remove('mostrar')
        paragrafo.classList.add('ocultar')
    }
})