let errorCode = generateRandomStringOfRandomLength(6,9);
const firstCode = generateRandomStringOfRandomLength(6,9);
const secondCode = generateRandomStringOfRandomLength(6,9);
const thirdCode = generateRandomStringOfRandomLength(6,9);
const codes = [firstCode, secondCode, thirdCode];

function decrypt(){
    input = document.getElementById("decrypt1").value;
    if(input == getCode(0)){
        document.getElementById("decryptmsg").innerHTML = "Chyba - kód chyby " + errorCode;
        completeLevel(18);
    }else if (input == getCode(1)){
        completeLevel(20);
        incrementCode(thirdCode);
        document.getElementById("decryptmsg").innerHTML = "Chyba - nesprávný kód!";
    }else if (input == getCode(2)){
        completeLevel(23);
    }else{
        document.getElementById("decryptmsg").innerHTML = "Nedefinovaná funkce!";
    }
}
function getCode(number){
    return codes[number];
}
function getErrorCode(){
    return errorCode;
}