var set=0;
var end = false;
const powerOffButton = document.getElementById("powerOffButton");
const blackscreen_ = document.getElementById("blackscreen");
const hand = document.getElementById("hand");
var generated_code_text = document.getElementById("generated_code");
function turnOff(){
    if (set==1){
        if (end){
            setTimeout(() => { generated_code_text.innerHTML = "Tento kód napište: „"+generateSafeCode(true)+"“"; }, 200);
        }
        powerOffButton.style.backgroundImage = 'url("./images/MONITORoff.svg")';
        blackscreen_.style.zIndex = "100";
        set = 0;
    } else{
        generated_code_text.innerHTML = "";
        powerOffButton.style.backgroundImage = 'url("./images/MONITORon.svg")';
        blackscreen_.style.zIndex = "1";
        set = 1;
    }
}
function firstTurnOn(){
    setTimeout(() => {hand.style.bottom = "0";}, 500);
    setTimeout(() => {powerOffButton.click()}, 1000);
    setTimeout(() => {hand.style.bottom = "-30vh";}, 1500);

} firstTurnOn();
function endingScreen() {
    setTimeout(() => { generated_code_text.innerHTML = "Tento kód napište: „"+generateSafeCode(true)+"“"; }, 200);
    blackscreen_.style.backgroundImage = "url('./images/ending_sceen.png')";
    end = true;
    powerOffButton.click();

}