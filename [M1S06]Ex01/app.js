function sleep(valor) {
    return new Promise ( (resolve, reject) => { 
       setTimeout(() => {
           resolve(console.log(`O valor passado foi ${valor}`)) 
       }, 3000)
    })
  }

sleep(10)


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