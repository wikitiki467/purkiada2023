function convertToAscii(text) {
    let asciiCodes = [];
    for (let i = 0; i < text.length; i++) {
      asciiCodes.push(text.charCodeAt(i));
    }
    return asciiCodes;
}
function convertAsciiToText(asciiCodes){
    let result = "";
    asciiCodes.forEach(code => {
        result += String.fromCharCode(code);
    });
    return result;
}
function getTextFromElement(element){
    return element.innerText;
}
function changeClassTextToAscii(classname){
    document.querySelectorAll(`.${classname}`).forEach(element => {
        let asciiCodesList = convertToAscii(getTextFromElement(element));
    let result = "";
    asciiCodesList.forEach(code => {
        result += code + " ";
    });
    element.innerText = result;
    });
}
function changeThisTextToAscii(elem){
    let asciiCodesList = convertToAscii(getTextFromElement(elem));
    let result = "";
    for (let i = 0; i < asciiCodesList.length - 1; i++){
        result += asciiCodesList[i] + " ";
    }
    result += asciiCodesList[asciiCodesList.length-1];
    elem.innerText = result;
}
function changeClassAsciiToText(classname){
    document.querySelectorAll(`.${classname}`).forEach(element => {
        let asciiCodesList = getTextFromElement(element).split(" ");
        let result = convertAsciiToText(asciiCodesList);
        element.innerText = result;
    });
}
function changeThisAsciiToText(elem){
    let asciiCodesList = getTextFromElement(elem).split(" ");
    let result = convertAsciiToText(asciiCodesList);
    elem.innerText = result;
}

  