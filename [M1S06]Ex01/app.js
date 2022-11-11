function sleep(valor) {
    return new Promise ( (resolve, reject) => { 
       setTimeout(() => {
           resolve(console.log(`O valor passado foi ${valor}`)) 
       }, 3000)
    })
  }

sleep(10)