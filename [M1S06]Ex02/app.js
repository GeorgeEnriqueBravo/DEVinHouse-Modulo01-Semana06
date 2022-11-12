function dataAtual() {
    setInterval(() => {
        const data = new Date().toLocaleTimeString();
        console.log(data)
    
    // Esse try catch foi para que ele possa funcionar tanto no HTML como no terminal do Code também sem quebrar aqui.
        try {
            let res = document.getElementById('res')
            res.innerHTML = data
        } catch (error) {
            // console.error(`Erro: ${error}`)
        }

    }, 2000)
}

dataAtual()

// .toLocaleTimeString('pt-BR') converteria para a hora no Brasil caso estivéssemos usando uma maquina com configuração diferente, como por exemplo que mostrasse apenas de 1 a 12 com AM ou PM .
// Como na minha máquina já está no formato de hora do Brasil, não foi necessário o 'pt-BR' dentro dos ()