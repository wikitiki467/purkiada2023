let set = 0;
let end = false;
const powerOffButton = document.getElementById("powerOffButton");
const monitorScreen = document.getElementById("contentDisplay");
let monitorTaskBar = document.getElementById("taskBar");
const hand = document.getElementById("hand");
let generated_code_text = document.getElementById("generated_code");
function turnOff(){
    if (set==1){
        // if (end){
        //     setTimeout(() => { generated_code_text.innerHTML = "Tento kód napište: „"+generateSafeCode(true)+"“"; }, 200);
        // }
        powerOffButton.style.backgroundImage = 'url("./images/MONITORoff.svg")';
        monitorTaskBar.style.filter = "brightness(0)";
        monitorScreen.style.filter = "brightness(0)";
        set = 0;
    } else{
        // generated_code_text.innerHTML = "";
        powerOffButton.style.backgroundImage = 'url("./images/MONITORon.svg")';
        monitorTaskBar.style.filter = "brightness(1)";
        monitorScreen.style.filter = "brightness(1)";
        set = 1;
    }
}
function firstTurnOn(){
    setTimeout(() => {hand.style.bottom = "-1.5vh";}, 500);
    setTimeout(() => {powerOffButton.click()}, 1000);
    setTimeout(() => {hand.style.bottom = "-30vh";}, 1500);

} firstTurnOn();
function endingScreen() {
    setTimeout(() => { generated_code_text.innerHTML = "Tento kód napište: „"+generateSafeCode(true)+"“"; }, 200);
    blackscreen_.style.backgroundImage = "url('./images/ending_sceen.png')";
    end = true;
    powerOffButton.click();

}
function restart() {
    turnOff();
    firstTurnOn();
}