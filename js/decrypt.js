let errorCode = "chybovykod";
function decrypt(){
    input = document.getElementById("decrypt1");
    if(input == "1"){
        document.getElementById("decryptmgs").innerHTML = "Chyba - kód chyby" + errorCode;
        completeLevel(18);
    }else if (input == "2"){
        completeLevel(20);
    }else if (input == "3"){

    }else{
        document.getElementById("decryptmgs").innerHTML = "Nedefinovaná funkce!";
    }
}
function getErrorCode(){
    return errorCode;
}