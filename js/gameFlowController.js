buildVersion = "alpha 2.9h1.17";

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
    /*Check buildVersion*/
    if (getFromRegister("buildVersion") != buildVersion) {
        removeFromRegister("currentActiveLevel");
        addToRegister("buildVersion", buildVersion);
    }
    if (getFromRegister("currentActiveLevel") == null) {
        startVirusGame();
    }
    else {
        let savedLevel = getFromRegister("currentActiveLevel");
        for (let i = 0; i < savedLevel; i++) {
            completeLevel(i+1);
        }
        /*Jednotlive levely*/
        if (savedLevel >= 1) {
            document.getElementById("sys-lang-options").selectedIndex = 1;
            installApp(getFromSystemRegister('BACKOR Store'));
        }
        if (savedLevel >= 2) {
            document.getElementById("store_antivirus").style.display = 'none';
            document.getElementById('av_installer_file').style.display = 'block';
            document.getElementById('application' + getFromSystemRegister('Antivirus')).setAttribute('onclick', 'focusWindow(\'Antivirus\'); completeLevel(6)'); 
        }
        if (savedLevel >= 4) {
            for (let i = 0; i < 6; i++) {
                document.getElementById("file" + i).remove();
            }
            document.getElementById("fileHidden").remove();
            loadCountDeletedFiles();
        }
        if (savedLevel >= 5) {
            installApp(getFromSystemRegister('Antivirus'));
        }
        if (savedLevel >= 7) {
            document.getElementById('av_redemption').remove();
        }
        if (savedLevel >= 9) {
            document.getElementById('application' + getFromSystemRegister('Decrypt.exe')).setAttribute('onclick', 'focusWindow("Decrypt.exe"); completeLevel(10)');
            installApp(getFromSystemRegister('Decrypt.exe'));
        }
        if (savedLevel >= 11) {
            document.getElementById("store_terminal").style.display = 'none';
            installApp(getFromSystemRegister('*jmeno_uzivatele*@spspurkynova'));
        }

        showPanBackor();
        //console.log(levelNumber);
    }
}