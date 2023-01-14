let panBackoraGUI = document.getElementById("PanBackorGUI")
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
    panBackoraGUI.style.right = "0";
}

function hidePanBackor(){
    panBackoraGUI.style.right = "-28vw";
}