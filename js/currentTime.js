function display_c(){
    var refresh=1000; // Refresh rate in milli seconds
    mytime=setTimeout('display_ct()',refresh)
}

function display_ct() {
    var x = new Date()
    var x1=x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds();
    x1 = x1 + " <br> " + x.getDate() + "." + (x.getMonth()+1) + "." + 2035;/*x.getFullYear()*/
    document.getElementById('getTime').innerHTML = x1;
    display_c();
}display_ct();