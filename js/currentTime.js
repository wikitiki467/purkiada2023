function display_c(){
    let refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
}

function display_ct() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let month = date.getMonth()+1;
    let year = date.getFullYear();
    
    if (hours.lenght() == 1) "0"+hours;
    if (minutes.lenght() == 1) "0"+minutes;
    if (seconds.lenght() == 1) "0"+seconds;
    if (month.lenght() == 1) "0"+month;

    let x1=hours+ ":" +  minutes + ":" +  seconds;
    x1 = x1 + " <br> " + date.getDate() + "." + month + "." + year;/*date.getFullYear()*/
    document.getElementById('getTime').innerHTML = x1;
    display_c();
}display_ct();