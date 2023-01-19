let panBackorGUI = document.getElementById("PanBackorGUI")
let panBackorDialogText = document.getElementById("PanBackorDialogText");
let shown = false

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
    panBackorGUI.style.right = "0";
}

function hidePanBackor(){
    panBackorGUI.style.right = "-28vw";
}

function changePanBackorDialog(text){
    panBackorDialogText.innerHTML = text;
}

changePanBackorDialog("ma uprimna reakce");