buildVersion = "after14.2h14";

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
        // console.log("Level " + levelNumber + " completed");
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
        if (savedLevel >= 10) {
            document.getElementById("store_terminal").style.display = 'flex';
        }
        if (savedLevel >= 11) {
            document.getElementById("store_terminal").style.display = 'none';
            installApp(getFromSystemRegister('*jmeno_uzivatele*@spspurkynova'));
        }
        if (savedLevel >= 13) {
            let killedList = getFromRegister("killedList");
            let killedCount = getFromRegister("killedCount");
            if (killedList == null) {
                killedList = "";
            }
            loadProgress(killedList, killedCount)
        }
        if (savedLevel >= 15) {
            addConsoleLine(getCode(0));
        }
        if (savedLevel >= 16) {
            document.getElementById("decrypt1").value = getCode(0);
            decrypt1();
        }
        if (savedLevel >= 17) {
            document.getElementById('application' + getFromSystemRegister("CrashNote.txt")).setAttribute('onclick', 'focusWindow("CrashNote.txt"); skipConsoleLevels()');
            installApp(getFromSystemRegister("CrashNote.txt"));
        }
        if (savedLevel >= 18) {
            document.getElementById("decrypt2").value = getCode(1);
            decrypt2();
        }
        if (savedLevel >= 20) {
            PanBackor20();
        }
        if (savedLevel >= 22) {
            document.getElementById("decrypt3").value = getCode(2);
            decrypt3();
            document.getElementById("theend").style.display = "block";
        }    

        showPanBackor();
        //console.log(levelNumber);
    }
}
async function sha256(message) {
    // encode as UTF-8
    const msgBuffer = new TextEncoder().encode(message);

    // hash the message
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);

    // convert ArrayBuffer to Array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    // convert bytes to hex string
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

async function POSTdataHelp(username, level, hash){
    // let salt =  await GETdata().then(function(data){return data['salt']});
    // console.log(salt);
    // let hash = sha256(username + level + salt).then(function(data){console.log(data); return data});
    // console.log(hash);
    $.ajax({
      type: 'PUT',
      url: 'https://komkry.pythonanywhere.com/',
      contentType: 'application/json',
      data: JSON.stringify({level, username, hash}), // access in body
    }).done(function (msg) {
    //   console.log('SUCCESS', msg);
    }).fail(function (msg) {
      console.log('FAIL', msg);
    }).always(function (msg) {
    //   console.log('ALWAYS');
    });
}
async function POSTdata(username, level) {
    let salt =  await GETdata().then(function(data){return data['salt']});
    // console.log(salt);
    let hash = await sha256(username + level + salt).then(function(data){return data});
    // console.log(hash);
    POSTdataHelp(username, level, hash);
}
function GETdata(){
    return $.get("https://komkry.pythonanywhere.com/");
}