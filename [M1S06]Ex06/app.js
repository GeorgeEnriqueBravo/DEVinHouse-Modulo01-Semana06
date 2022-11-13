// Exercício feito apenas com o meu nome para exibição no console

// async function buscaAPI() {
//     const resultado = await fetch('https://api.agify.io/?country_id=BR&name=george', {
//         method: 'GET'
//     })
    
//     const dados = await resultado.json()

//     console.log(`O nome ${dados.name.substr(0,1).toUpperCase()}${dados.name.slice(1)}, tem a idade média ${dados.age}.`)
// }
// buscaAPI()

/////////////////////////////////////////////////////////
// Exercício feito para que o usuário possa digitar o nome que quiser
let res = document.querySelector('div#res')

async function buscaAPI(nome) {
    try {
        const api = 'https://api.agify.io/?country_id=BR&name='
        const resultado = await fetch(`${api}${nome}`, {
            method: 'GET'
        })
        
        // Erro forçado para teste do catch
        // throw 'Sem conexão'

        const dados = await resultado.json()

        if (dados.age === null) {
            res.innerHTML = `Esse nome não existe na base de dados, por favor tente outro!`
            console.log(`Esse nome não existe na base de dados, por favor tente outro!`)
        } else {
            res.innerHTML = `O nome ${dados.name.substr(0,1).toUpperCase()}${dados.name.slice(1)}, tem a idade média de ${dados.age} anos no Brasil.`

            console.log(`O nome ${dados.name.substr(0,1).toUpperCase()}${dados.name.slice(1)}, tem a idade média de ${dados.age} anos no Brasil.`)
        }

    } catch(erro) {
        res.innerHTML = `Desculpe, não foi possível verificar. <br>`
        res.innerHTML += `Erro: ${erro}.`
        console.error(`Erro: ${erro}`)
    }

}

const botao = document.querySelector('button#botao')

botao.addEventListener('click', () => {
    let nome = document.querySelector('input#nome').value

    if (nome.length === 0) {
        res.innerHTML = 'Digite algo primeiro por favor!'
        console.log("Digite algo primeiro por favor!")
    } else {
        buscaAPI(nome)
    }
})