const time = document.getElementById('time')
const reset = document.getElementById('reset')
const start = document.getElementById('start')
const timer = document.getElementById('timer')

start.addEventListener('click', ()=>{
    if (time.value.length == 0) {
        alert("Please enter time")
        return;
    }
    timer.innerText = `${time.value}:00`
    var timeMin = time.value - 1;
    var timeSec = 60;
    if(timeMin != 0 && timeSec != 0){
        var intv = setInterval(() => {
            if(timeSec!=0){
                timeSec--;
            }
            else{
                timeMin--;
                timeSec = 60;
            }
        timer.innerText = `${timeMin}:${timeSec}`;
        }, 1000);
    }
    else{
        clearInterval(intv)
    }
    reset.addEventListener('click', ()=>{
    timer.innerText = `${time.value}:00`;
    clearInterval(intv);
    })
})