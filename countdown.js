const getRemainTime = deadline => {
    let now = new Date(),
        // milisecundos: lo dividimos entre 1000 y le sumamos 1000 ms
        remainTime = (new Date(deadline) - now + 1000) / 1000,
        // segundos: modulo de 60 y lo convertimos a entero
        // concatenamos un cero a la izquierda ej. 010 09 08 07 ..
        // slice corta el string empezando de la izquierda
        remainSeconds = ("0" + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ("0" + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ("0" + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));

    return{
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
};

// console.log(getRemainTime("Oct 12 2017 23:17:48 GMT-0300"));

const countdown = (deadline, elem, finalMessage) => {
    const elemento = document.getElementById(elem);
    
    const timerUpdate = setInterval( () => {
        let t = getRemainTime(deadline);
        elemento.innerHTML = `${t.remainDays}d:${t.remainHours}h:${t.remainMinutes}m:${t.remainSeconds}s`;
        
        if (t.remainTime <= 1) {
            clearInterval(timerUpdate);
            elemento.innerHTML = finalMessage;
        }
    },1000)
}

countdown("Oct 12 2017 23:39:13 GMT-0300",'clock',"final!!!");