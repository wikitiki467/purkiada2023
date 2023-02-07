function startVirusGame() {
    let popup = new SystemPermissionPopup("Virus.exe", "changeLang('ascii');showPanBackor()");
    popup.title = "Chcete povolit této aplikaci od neznámého vydavatele provádět změny ve vašem zařízení?";
    popup.publisher = "Neznámý vydavatel";
    popup.fileOrigin = "Pevný disk v tomto počítači";
    popup.showMoreDetails = "Zobrazit více podrobností";
    popup.yes = "Ano";
    popup.no = "Ne";
    popup.canClose = false;
    popup.troll = true;
    popup.show();
}

function completeLevel(levelNumber) {
    if (levelNumber == getCurrentActiveLevel() + 1) {
        incrementCurrentActiveLevel();
        showPanBackor();
    }
}