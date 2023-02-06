function startVirusGame() {
    let popup = new SystemPermissionPopup("Virus.exe", "changeLang('ascii');showPanBackor()");
    popup.canClose = false;
    popup.troll = true;
    popup.show();
}


function completeLevel(levelNumber) {
    if (levelNumber == getCurrentActiveLevel() + 1) {
        incrementCurrentActiveLevel();
    }
}