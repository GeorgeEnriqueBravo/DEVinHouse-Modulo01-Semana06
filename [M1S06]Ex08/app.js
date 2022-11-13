const criaElemento = (tipo, texto) => {
    const elemento = document.createElement(tipo)
    elemento.innerText = texto
    return elemento
  }
  
  async function buscaAPI(usuarios = 4) {

      try {
          const resultado = await fetch(`https://randomuser.me/api/?results=${usuarios}`)
          const { results } = await resultado.json()
          // console.log(results)
      
          const res = document.getElementById('res')
          res.innerHTML = ''
      
          results.forEach((user) => {
              const p = document.createElement('p')
              const divUsuario = document.createElement('div')
              const texto = document.createElement('div')
              // console.log(divUsuario)

              divUsuario.classList.add('divUsuario')
              texto.classList.add('texto')

              // Foto HTML
              const foto = document.createElement('img')
              foto.src = user.picture.large
              
              // Título / Nome / Sobrenome HTML
              const nome = criaElemento('p', `${user.name.title} ${user.name.first} ${user.name.last}`)
              nome.setAttribute('class', 'classNome')
              
              // E-mail HTML
              const email = criaElemento('p', user.email)
              email.setAttribute('class', 'classEmail')
              
              // Endereço completo HTML
              const endereco = criaElemento(
                'p',
                `${user.location.street.name} - ${user.location.street.number} - ${user.location.city} - ${user.location.state} - ${user.location.country}`
              )
              endereco.setAttribute('class', 'classEnd')
        
              divUsuario.appendChild(foto)
              texto.appendChild(nome)
              texto.appendChild(email)
              texto.appendChild(endereco)
              divUsuario.appendChild(texto)
              p.appendChild(divUsuario)
              res.appendChild(p)
          });
      } catch (error) {
          console.error(error)
      }
  }
  buscaAPI()
  
  const numUsuarios = document.getElementById('numUsuarios')
  numUsuarios.addEventListener('change', (event) => buscaAPI(event.target.value))

///////////////////////////////////////////////////////////////

// Evento click para mostrar ou esconder NOME
const checkNome = document.querySelector('input#checkNome')

checkNome.addEventListener('click', (event) => {
    const endereco = document.getElementsByClassName('classNome')
    console.log(endereco)

    const checado = event.target.checked
    console.log(checado)

    for (let i = 0; i < endereco.length; i++) {
        if (checado) {
            endereco[i].style.visibility = "visible"
        } else {
            endereco[i].style.visibility = "hidden"
        } 
    }
})

// Evento click para mostrar ou esconder E-MAIL
const checkEmail = document.querySelector('input#checkEmail')

checkEmail.addEventListener('click', (event) => {
    const endereco = document.getElementsByClassName('classEmail')
    console.log(endereco)

    const checado = event.target.checked
    console.log(checado)

    for (let i = 0; i < endereco.length; i++) {
        if (checado) {
            endereco[i].style.visibility = "visible"
        } else {
            endereco[i].style.visibility = "hidden"
        } 
    }
})

// Evento click para mostrar ou ocultar o Endereço
const checkEnd = document.querySelector('input#checkEnd')

checkEnd.addEventListener('click', (event) => {
    const endereco = document.getElementsByClassName('classEnd')
    // console.log(endereco)

    const checado = event.target.checked
    // console.log(checado)

    for (let i = 0; i < endereco.length; i++) {
        if (checado) {
            endereco[i].style.visibility = "visible"
        } else {
            endereco[i].style.visibility = "hidden"
        } 
    }
})