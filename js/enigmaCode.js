var rotor1POS = 0;
var rotor2POS = 0;
var rotor3POS = 0;
//                   0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25
const alphabet =  ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const reflector = [ 16, 24,  7, 14,  6, 13,  4,  2, 21, 15, 20, 25, 19,  5,  3,  9,  0, 23, 22, 12, 10,  8, 18, 17,  1, 11];
const allRotors = [[  9,  6,  3, 16, 14, 23, 20, 18,  2,  0, 12,  8,  5, 17, 21, 19, 15, 13,  4, 22, 10,  1, 11, 25, 24,  7],[ 13, 19, 25, 15, 18,  5,  1, 14, 10, 12, 22, 17,  2,  9,  3,  8, 21, 11,  0,  4, 24, 20, 23,  7,  6, 16],[  9, 21,  8, 20,  1,  7, 19,  2,  3, 24,  0, 10,  4, 16, 25, 15, 14, 18,  6, 23, 13, 17, 12, 22,  5, 11],[4,10,12,5,11,6,3,16,21,25,13,19,14,22,24,7,23,20,18,15,0,8,1,17,2,9],[0,9,3,10,18,8,17,20,23,1,11,7,22,19,12,2,16,6,25,13,15,24,5,21,14,4]];
var rotor1 =    allRotors[0];
var rotor2 =    allRotors[0];
var rotor3 =    allRotors[0];
const alphabet_keycodes = {65: 'A', 66: 'B', 67: 'C', 68: 'D', 69: 'E', 70: 'F', 71: 'G', 72: 'H', 73: 'I', 74: 'J', 75: 'K', 76: 'L', 77: 'M', 78: 'N', 79: 'O', 80: 'P', 81: 'Q', 82: 'R', 83: 'S', 84: 'T', 85: 'U', 86: 'V', 87: 'W', 88: 'X', 89: 'Y', 90: 'Z'}
const ASAP = changePngValue("./images/wallpaper.png", "center");
//Rotor manipulating
function rotor_code(user_input){
    return alphabet[safe_index(rotor1.indexOf(safe_index(rotor2.indexOf(safe_index(rotor3.indexOf(reflector[rotor3[safe_index(rotor2[safe_index(rotor1[safe_index(alphabet.indexOf(user_input)+rotor1POS)]+rotor2POS)]+rotor3POS)]])-rotor3POS))-rotor2POS))-rotor1POS)];
}

function changeRotorPos(){
    if (rotor1POS < 25){
        rotor1POS++;
    }else{
        rotor1POS = 0;
        if (rotor2POS < 25){
            rotor2POS++;
        }else{
            rotor2POS = 0;
            if (rotor3POS < 25){
                rotor3POS++;
            }else{
                rotor3POS = 0;
            }
        }
    }
    setGearAutomatically();
}
//Enigma controller
function changeRotorSetting(rotorNumber, rotorType, rotorPos){
    switch(rotorNumber){
        case 1:
            rotor1 = allRotors[rotorType-1];
            rotor1POS = rotorPos-1;
            break;
        case 2:
            rotor2 = allRotors[rotorType-1];
            rotor2POS = rotorPos-1;
            break;
        case 3:
            rotor3 = allRotors[rotorType-1];
            rotor3POS = rotorPos-1;
    }
}

function keyEvent(key){
    let enigma;
    changeRotorPos();
    enigma = rotor_code(key);
    return enigma;
}
//html connect
function LightUpResult(keypressed){
    var old_highlight = document.getElementsByClassName("neonText");//zakomentářuj aby svítili všechny stisklé klávesy:
    var old_pressed = document.getElementsByClassName("KB-Pressed");
    for (var i = 0; i < old_highlight.length; i++) {old_highlight[i].setAttribute("class", "LED");}
    for (i = 0; i < old_pressed.length; i++) {old_pressed[i].setAttribute("class", "KB");}//až sem
    let codedLetter = keyEvent(keypressed.toLowerCase()).toUpperCase();
    var new_highlight = document.getElementById("LED-"+codedLetter); /*tahle var bude zakódovaný 'key-pressed'*/
    var new_pressed = document.getElementById("Kb"+keypressed);
    new_highlight.setAttribute("class", "neonText");
    new_pressed.setAttribute("class", "KB-Pressed");
}
function HighlightOff(){
    console.log("Function HighlightOff: ")
    var highlighted = document.getElementsByClassName("neonText");
    var KBdown = document.getElementsByClassName("KB-Pressed");
    for (var i = 0; i < highlighted.length; i++) {highlighted[i].setAttribute("class", "LED");}
    for (var i = 0; i < KBdown.length; i++) {KBdown[i].setAttribute("class", "KB");}
}

function setGearManually(direction, buttonid){
    let gearDisplay = document.getElementById("gearDisplay"+buttonid);
    if (direction == "up"){
        gearDisplay.value = safe_index_gui(parseInt(gearDisplay.value) + 1);
    }else if (direction == "down"){
        gearDisplay.value = safe_index_gui(parseInt(gearDisplay.value) - 1);
    }
    changeRotorSetting(buttonid, document.getElementById("rotorSwap"+buttonid).value, gearDisplay.value);
}

function setGearAutomatically(){
    document.getElementById("gearDisplay1").value = rotor1POS+1;
    document.getElementById("gearDisplay2").value = rotor2POS+1;
    document.getElementById("gearDisplay3").value = rotor3POS+1;
}
//supporting functions
function safe_index(index){
    if (index > 25){
        return index - 26;
    }else if (index < 0){
        return 26 + index;
    }else{
        return index;
    }
}

function safe_index_gui(index){
    if (index > 26){
        return index - 26;
    }else if (index < 1){
        return 26 + index;
    }else{
        return index;
    }
}

function createRotor(input){
    let newRotor = [];
    for (let i = 0; i < 26; i++){newRotor.push(alphabet.indexOf(input[i].toLowerCase()));}
    console.log(newRotor);
}

function generateSafeCode(get){
    let answers = "";
    for (let i = 1; i<6;i++){
        let passCode = document.getElementById("pass"+i).value;
        let answer = "i";
        for (let k = 0;k<5;k++){
            if (passCode == ASAP[k]){
                answer = "x";
            }
        }
        answers += answer;
    }
    let generatedCode = "";
    let temprotor1POS = rotor1POS;
    let temprotor2POS = rotor2POS;
    let temprotor3POS = rotor3POS;
    let temprotor1 = rotor1;
    let temprotor2 = rotor2;
    let temprotor3 = rotor2;
    rotor1 = allRotors[2];
    rotor2 = allRotors[4];
    rotor3 = allRotors[3];
    rotor1POS = 17;
    rotor2POS = 3;
    rotor3POS = 25;
    for (let i = 0; i<answers.length;i++){
        generatedCode += keyEvent(answers[i]);
    }
    let username = document.getElementById("UserNameOnScr").innerHTML;
    if (!get){
        document.getElementById("generateText").innerHTML = username[0] + username[username.length-1] + generatedCode;
    }
    rotor1 = temprotor1;
    rotor2 = temprotor2;
    rotor3 = temprotor3;
    rotor1POS = temprotor1POS;
    rotor2POS = temprotor2POS;
    rotor3POS = temprotor3POS;
    return username[0] + username[username.length-1] + generatedCode;
}
window.addEventListener('keydown', (event) => {
    if(event.repeat){return false;}
    if (event.keyCode in alphabet_keycodes && document.activeElement === document.getElementById("typeBox")) { /*↑*/
        klavesa = document.getElementById("Kb"+alphabet_keycodes[event.keyCode])
        klavesa.click()
    }
})
function openEnigmaManual() {
    setTimeout(() => { moveWindow(9);
        openWindow();
        window_z_index(9);
        searchBarControler('enigmaManual'); }, 50);
}