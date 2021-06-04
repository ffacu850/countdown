const countDown = (limitDate, finalMessage) => {
    const countDownDate = new Date (limitDate).getTime()
    let countDownTempo = setInterval(() => {
        let now = new Date().getTime()
        let limitTime = countDownDate - now
    let days = Math.floor(limitTime / (1000 * 60 * 60 * 24))
    let hours = ("0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).slice(-2)
    let minutes = ("0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))).slice(-2)
    let seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / (1000))).slice(-2)

    document.querySelector(".countdown").innerHTML = `<h2>Faltan: ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos<h2>`
    if(limitTime < 0){
        clearInterval(countDownTempo)
        document.querySelector(".countdown").innerHTML = `<h2>${finalMessage}<h2>`
    }
    },1000)
}

export default countDown