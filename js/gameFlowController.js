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
        addToRegister("currentActiveLevel", getCurrentActiveLevel());
        showPanBackor();
    }
}

function loadGame() {
    if (getFromRegister("currentActiveLevel") == null) {
        startVirusGame();
    }
    else {
        for (let i = 0; i < getFromRegister("currentActiveLevel"); i++) {
            completeLevel(i+1);
        }
        /*Jednotlive levely*/
        if (getFromRegister("currentActiveLevel") >= 1) {
            document.getElementById("sys-lang-options").selectedIndex = 1;
            installApp(getFromSystemRegister('BACKOR Store'));
        }

        showPanBackor();
    }
}