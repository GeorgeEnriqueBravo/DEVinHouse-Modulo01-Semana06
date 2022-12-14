
const retornoEmpresa1 = new Promise( (resolve, reject) => 
setTimeout(resolve, 5000, "Empresa 1") ); // 5 segundos

const retornoEmpresa2 = new Promise( (resolve, reject) => 
setTimeout(resolve, 3000, "Empresa 2") ); // 3 segundos

// Promise.race([retornoEmpresa1, retornoEmpresa2])
//     .then((empresaVencedora) => console.log(`A empresa vencedora foi a ${empresaVencedora}.`))

Promise.race([retornoEmpresa1, retornoEmpresa2])
    .then((empresaVencedora) => {
        console.log(`A empresa vencedora foi a ${empresaVencedora}.`)

        const res = document.querySelector('div#res')
        res.innerHTML = `A empresa vencedora foi a ${empresaVencedora}.`
    })
    .catch((erro) => console.error(`Erro: ${erro}`))
    .finally(() => console.log(`Fim do processo.`))