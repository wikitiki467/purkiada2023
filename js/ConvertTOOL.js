var INbtn = 0;
var OUTbtn = "";

function copyToClipboard(id) {
  var copyText = document.getElementById(id);
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*Pro telefony, možná zbytečný...*/
  navigator.clipboard.writeText(copyText.value);

  alert("Copied the text: " + copyText.value);
}
function a2bin(){
  var output = document.getElementById("OUTp");
  var input = document.getElementById("INp").value;
  str = "";
  for (var i = 0; i < input.length; i++){str += "0"+ input[i].charCodeAt(0).toString(2);}
  output.value = str
}

function a2hex(){
  var output = document.getElementById("OUTp");
  var input = document.getElementById("INp").value;
  var arr1 = [];
  for (var n = 0, l = input.length; n < l; n ++){
    var hex = Number(input.charCodeAt(n)).toString(16);
    arr1.push(hex);
  }
  output.value = arr1.join('');
}

function hex2a(){
  var hex = document.getElementById("INp").value.toString();//force conversion
  var output = document.getElementById("OUTp");
  var str = '';
  for (var i = 0; i < hex.length; i += 2){str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));}
  output.value = str;
}

function hex2bin(){
  var output = document.getElementById("OUTp");
  var input = document.getElementById("INp").value;
  output.value = parseInt(input.toString(), 16).toString(2);
}

function bin2hex(){
  var output = document.getElementById("OUTp");
  var input = document.getElementById("INp").value;
  output.value = parseInt(input, 2).toString(16);
}

function bin2a(){
  var output = document.getElementById("OUTp");
  var input = document.getElementById("INp").value;
  var hex = parseInt(input, 2).toString(16);
  var str = '';
  for (var i = 0; i < hex.length; i += 2){str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));}
  output.value = str;
}

function choose_INP(id){
  if(id == "ASCB1"){INbtn = 1; selected_BTN(0, 1);}
  if(id == "HEXB1"){INbtn = 2; selected_BTN(1, 1);}
  if(id == "BINB1"){INbtn = 3; selected_BTN(2, 1);}
  return INbtn;
}

function choose_OUT(id){
  if(id == "ASCB2"){OUTbtn = "A";selected_BTN(0, 0);}
  if(id == "HEXB2"){OUTbtn = "B";selected_BTN(1, 0);}
  if(id == "BINB2"){OUTbtn = "C";selected_BTN(2, 0);}
  return OUTbtn;
}

function choose_convertor(){
  var set = INbtn + OUTbtn;
  if(set == "1B"){a2hex();}
  if(set == "1C"){a2bin();}
  if(set == "2A"){hex2a();}
  if(set == "2C"){hex2bin();}
  if(set == "3A"){bin2a();}
  if(set == "3B"){bin2hex();}
}

function selected_BTN(btn, IO){
  if(IO == 1){
    for (var i = 0; i < 3; i++){ document.getElementById(BTNS[i]+1).style.backgroundColor = "rgb(58, 58, 58)"; }
    document.getElementById(BTNS[btn]+1).style.backgroundColor = "rgb(100, 100, 100)";
  }
  else{
    for (var i = 0; i < 3; i++){ document.getElementById(BTNS[i]+2).style.backgroundColor = "rgb(58, 58, 58)"; }
    document.getElementById(BTNS[btn]+2).style.backgroundColor = "rgb(100, 100, 100)";
  }
}