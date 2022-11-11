async function buscaAPI() {
    try {
        const api = await fetch('https://api.coincap.io/v2/assets/bitcoin', {
            method: 'GET'
        })

        const dados = await api.json()
        console.log(dados)
        
        console.log(`O preço do Bitcoin - ${dados.data.symbol} em dólares hoje é $${dados.data.priceUsd}.`)

    } catch(erro) {
        console.error(`Erro: ${erro}`)
    }
}
buscaAPI()