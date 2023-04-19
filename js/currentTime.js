function display_c(){
    let refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
}

function display_ct() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day = date.getDate();
    let month = (date.getMonth()+1);
    let year = date.getFullYear();
    if (hours < 10) {hours = `0${hours}`};
    if (minutes < 10) {minutes = `0${minutes}`};
    if (seconds < 10) {seconds = `0${seconds}`};
    if (day < 10) {day = `0${day}`};
    if (month < 10) {month = `0${month}`};

    let x1=hours+ ":" +  minutes + ":" +  seconds;
    x1 = x1 + " <br> " + day + "." + month + "." + year;/*date.getFullYear()*/
    document.getElementById('getTime').innerHTML = x1;
    display_c();
}display_ct();