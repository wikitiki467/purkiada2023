let errorCode = generateRandomStringOfRandomLength(6,9);
const firstCode = generateRandomStringOfRandomLength(6,9);
const secondCode = generateRandomStringOfRandomLength(6,9);
const thirdCode = generateRandomStringOfRandomLength(6, 9);
const codes = [firstCode, secondCode, thirdCode];

function decrypt(){
    input = document.getElementById("decrypt1").value;
    if(input == getCode(0)){
        document.getElementById("decryptmsg").innerHTML = "Chyba - kód chyby " + errorCode;
        completeLevel(18);
        document.getElementById("decryptmsg").innerHTML = "Chyba - chyba v části kódu";
    }else if (input == getCode(1)){
        completeLevel(20);
    }else if (input == getCode(2)){

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