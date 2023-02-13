let errorCode = generateRandomStringOfRandomLength(6,9);
const firstCode = generateRandomStringOfRandomLength(6,9);
const secondCode = generateRandomStringOfRandomLength(6,9);
const thirdCode = generateRandomStringOfRandomLength(6,9);
const codes = [firstCode, secondCode, thirdCode];


function decrypt1(){
    btn = document.getElementById("decryptBTN1")
    input = document.getElementById("decrypt1").value;
    if(input == getCode(0)){
        document.getElementById("decryptmsg").innerHTML = "Chyba - kód chyby " + errorCode;
        completeLevel(18);
        document.getElementById("divDecrypt2").style.display = "block";
        document.getElementById("decrypt1").setAttribute("readonly", "")
        btn.remove();
    }
    else{
        document.getElementById("decryptmsg").innerHTML = "Nedefinovaná funkce!";
    }
}
function decrypt2() {
    btn = document.getElementById("decryptBTN2")
    input = document.getElementById("decrypt2").value;
    if (input == getCode(1)){
        completeLevel(20);
        document.getElementById("decryptmsg").innerHTML = "Chyba - nesprávný kód!";
        document.getElementById("divDecrypt3").style.display = "block";
        document.getElementById("decrypt2").setAttribute("readonly", "")
        btn.remove();
    }
    else{
        document.getElementById("decryptmsg").innerHTML = "Nedefinovaná funkce!";
    }
}

function decrypt3() {
    btn = document.getElementById("decryptBTN3")
    input = document.getElementById("decrypt3").value;
    if (input == getCode(2)){
        completeLevel(23); POSTdata(localStorage.getItem('loginDetail'), "0000000000010111");
        document.getElementById("decrypt3").setAttribute("readonly", "")
        btn.remove();
    }
    else{
        document.getElementById("decryptmsg").innerHTML = "Nedefinovaná funkce!";
    }
}

function getCode(number){
    return codes[number];
}
function getErrorCode(){
    return errorCode;
}