function dataAtual() {
    setInterval(() => {
        const data = new Date().toLocaleTimeString();
        console.log(data)
    }, 2000)
}

dataAtual()