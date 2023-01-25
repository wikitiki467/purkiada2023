function startVirusGame(){
    let popup = new SystemPermissionPopup("Virus.exe", "changeLang('ascii');showPanBackor()");
    popup.canClose = false;
    popup.show();
}

var currentActiveLevel = 1;
function completeLevel(levelNumber){
    if (levelNumber == currentActiveLevel){
        currentActiveLevel += 1;
        /*Prepnuti dialogu pana Backora*/
    }
}