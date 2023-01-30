let panBackorGUI = document.getElementById("PanBackorGUI")
let panBackorDialogText = document.getElementById("PanBackorDialogText");
let shown = false;
let panBackorDialogy = [["Zdravím, jsem pan Bačkor. Vypadá to že tvůj počítač byl 'zavirován', ale není se čeho bát. Společnými silami se pokusíme dát vše do pořádku. Klikni na mě!", "Pode mnou najdeš šipky pro posouvání dialogu a kdykoliv mě můžeš zavolat tímto tlačítkem.",
"Zvláštní... Zdá se že žádný text nedává smysl. Je možné, že virus záměrně změnil systémový jazyk počítače, aby bylo těžší se ho zbavit.<br>Tím bych asi začal..."],
["Skvěle! To jednoduché máme za sebou. Vypadá to že ještě nemusíme natáhnout bačkory.;)", "Vidím že tvuj počítač není chráněn antivirem. Nevadí, jeden se dá rychle stáhnout z BACKOR Storu™."],
["Ale né! Zdá se, že virus zaplnil disk soubory a bez volného místa antivir nenainstalujeme. Rychle, musíme se všech těch souborů zbavit!"],
["Výborně! Teď spusť antivirus!"]]; //teď nvm xdd

let currentDialog = 0;
/*Current level*/
var currentActiveLevel = 0;

function getCurrentActiveLevel(){
    return currentActiveLevel;
}

function incrementCurrentActiveLevel(){
    currentActiveLevel += 1;
    currentDialog = 0;
    changePanBackorDialog(panBackorDialogy[currentActiveLevel][currentDialog]);
}

function panBackorBTN(){
    if (shown){
        hidePanBackor();
        shown = false;
    }else{
        showPanBackor();
        shown = true;
    }
}

function showPanBackor(){
    shown = true;
    panBackorGUI.style.right = "-54vw";
    document.getElementById("backor_controls").style.display = "flex";
}

function hidePanBackor(){
    shown = false;
    panBackorGUI.style.right = "-90vw";
    document.getElementById("backor_controls").style.display = "none";
}

function changePanBackorDialog(text){
    panBackorDialogText.innerHTML = text;
}

changePanBackorDialog(panBackorDialogy[currentActiveLevel][currentDialog])

function switchPanBackorDialog(direction){
    // if (currentDialog < panBackorDialogy.length-1 && direction == 1) currentDialog++, changePanBackorDialog(panBackorDialogy[currentDialog])
    // if (currentDialog > 0 && direction == -1) currentDialog--, changePanBackorDialog(panBackorDialogy[currentDialog])
    if (currentDialog + direction < panBackorDialogy[currentActiveLevel].length && currentDialog + direction >= 0) {
        currentDialog += direction;
        changePanBackorDialog(panBackorDialogy[currentActiveLevel][currentDialog]);
        /*make PanBackorPointer visible*/
        if(currentActiveLevel == 0 && currentDialog == 1){
            document.getElementById("PanBackorPointer").style.display = "block";
        }else{
            document.getElementById("PanBackorPointer").style.display = "none";
        }
    } else {
        changePanBackorDialog(panBackorDialogy[currentActiveLevel][direction > 0 ? panBackorDialogy[currentActiveLevel].length - 1 : 0]);
    }
}
// switch dialog on arrows press
document.addEventListener("keydown", function(event) {
    if (!shown) return;
    if (event.key == "ArrowLeft") {
        switchPanBackorDialog(-1);
    } else if (event.key == "ArrowRight") {
        switchPanBackorDialog(1);
    }
});

// move eyes with mouse

$("#contentDisplay").mousemove(function(event) {
    var eye = $(".eye");
    // console.log('eye', eye);
    var x = (eye.offset().left) + (eye.width() / 2);
    var y = (eye.offset().top) + (eye.height() / 2);
    var rad = Math.atan2(event.pageX - x, event.pageY - y);
    var rot = (rad * (180 / Math.PI) * -1) + 180;
    eye.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
    });
});
$("#contentDisplay").mouseleave(function(event) {
    var eye = $(".eye");
    eye.css({
        'display': 'none'
    });
});
$("#contentDisplay").mouseenter(function(event) {
    var eye = $(".eye");
    eye.css({
        'display': 'block'
    });
});
$(".Backor").mouseenter(function(event) {
    var eye = $(".eye");
    eye.css({
        'display': 'none'
    });
});
$(".Backor").mouseleave(function(event) {
    var eye = $(".eye");
    eye.css({
        'display': 'block'
    });
});