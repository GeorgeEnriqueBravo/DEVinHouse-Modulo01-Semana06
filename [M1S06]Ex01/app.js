let res = document.getElementById('res')

function sleep(valor) {
    return new Promise ( (resolve, reject) => { 
       setTimeout(() => {
          res.innerHTML = `O valor passado foi ${valor}`
          resolve(console.log(`O valor passado foi ${valor}`)) 
       }, 3000)
    })
  }

// sleep(10)

const botao = document.getElementById('botao')

botao.addEventListener('click', () => {
    let txt = document.getElementById('txt').value

    if (txt.length === 0) {
        res.innerHTML = `Primeiro digite um valor para checar!`
    } else {
        sleep(txt)
    }

})


// Versão da Professora Thais

// function sleep(valor) {
//   return new Promise ( (resolve, reject) => { 
//      setTimeout(() => {
//          resolve(valor) 
//      }, 3000)
//   })
// }

// sleep('teste')
//   .then(function (resultado) {
//     console.log(resultado)
//   })