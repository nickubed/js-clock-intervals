var date = new Date();
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
let seconds = document.getElementById('second');
let minutes = document.getElementById('minute');
let hours = document.getElementById('hour');

let rotation = 6;
let minuteChange = 6;
let hourChange = 30;
let secondsCount = 0;
let minsCount = 0;


const secondRotation = () =>{
    seconds.style.transform = "rotate(" + rotation + "deg)";
    rotation += 6;
    secondsCount ++
    minRotation();
}

const minRotation = () =>{
    if(secondsCount % 60 == 0){
        minutes.style.transform = "rotate(" + minuteChange + "deg)";
        minuteChange += 6;
        minsCount ++
        secondsCount = 0;
        hourRotation();
    }

}

const hourRotation = () =>{
    if(minsCount % 60 == 0){
        hours.style.transform = "rotate(" + hourChange + "deg)";
        hourChange += 30;
        minsCount == 0;
    }
}

setInterval(secondRotation, 1000);




