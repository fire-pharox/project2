/* let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

document.getElementById("celander").innerHTML = `${day}/${month}/${year}`;

Present = setInterval(time,1000);

function time(){
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    document.getElementById("time").innerHTML = `${hours}:${minutes}:${seconds}`;
}; */

const myTime = document.getElementById("time");
let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

document.getElementById("celander").innerHTML = `${day}/${month}/${year}`

update();
setInterval(update,1000);


function update(){

    let date = new Date();
    myTime.innerHTML = formatTime(date);

    function formatTime(date){
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amorpm = hours >= 12? "pm": "am"
        hours = (hours %12) || 12;
        
        hours = formatZero(hours);
        minutes = formatZero(minutes);
        seconds = formatZero(seconds);
        return `${hours}:${minutes}:${seconds} ${amorpm}`
    }
    function formatZero(time){
        time = time.toString();
        return time.length <2 ? "0" + time : time;
    }
};
