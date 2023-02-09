let errorCode = "chybovykod";
const firstCode = generateRandomStringOfRandomLength(6,9);
const secondCode = generateRandomStringOfRandomLength(6,9);
const thirdCode = generateRandomStringOfRandomLength(6, 9);
const codes = [firstCode, secondCode, thirdCode];

function decrypt(){
    input = document.getElementById("decrypt1").value;
    console.log(input);
    if(input == "1"){
        document.getElementById("decryptmsg").innerHTML = "Chyba - kód chyby " + errorCode;
        completeLevel(18);
    }else if (input == "2"){
        completeLevel(20);
    }else if (input == "3"){

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