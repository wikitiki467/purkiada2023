let panBackorGUI = document.getElementById("PanBackorGUI")
let panBackorDialogText = document.getElementById("PanBackorDialogText");
let shown = false;
let PanBackorDialogy = [
    "Zdravím, jsem pan Bačkor. Vypadá to že tvůj počítač byl 'zavirován', ale není se čeho bát. Společnými silami se pokusíme dát vše do pořádku. Klikni na mě!",
    "Zvláštní... Zdá se že žádný text nedává smysl. Je možné, že virus záměrně změnil systémový jazyk počítače, aby bylo těžší se ho zbavit.<br>Tím bych asi začal..."
];
let currentPanBackorDialog = PanBackorDialogy[0];

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
    panBackorGUI.style.right = "-54vw";
}

function hidePanBackor(){
    panBackorGUI.style.right = "-90vw";
}

function changePanBackorDialog(text){
    panBackorDialogText.innerHTML = text;
}

function nextPanBackorDialog(){
    if (currentPanBackorDialog == PanBackorDialogy[0]){
        currentPanBackorDialog = PanBackorDialogy[1];
        changePanBackorDialog(currentPanBackorDialog)
    }
}

changePanBackorDialog(currentPanBackorDialog);

// move eyes with mouse

$("body").mousemove(function(event) {
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
