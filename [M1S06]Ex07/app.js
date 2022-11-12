async function buscaAPI() {
    try {
        const api = await fetch('https://api.coincap.io/v2/assets/bitcoin', {
            method: 'GET'
        })

        const dados = await api.json()
        // console.log(dados)

        // const { data } = await api.json()
        //
        // fazendo com { data }, já desestruturamos diretamente o data lá do fetch, fazendo com que pudéssemos digitar abaixo diretamente data.symbol e data.priceUsd apenas, sem precisar do nome da variável antes.

        
        console.log(`O preço do Bitcoin - ${dados.data.symbol} em dólares hoje é $${dados.data.priceUsd}.`)

    } catch(erro) {
        console.error(`Erro: ${erro}`)
    }
}
buscaAPI()