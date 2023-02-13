let ipconfigText = `BackoraOS IP Configuration

Wireless LAN adapter Wi-Fi:

Connection-specific DNS Suffix. . : facebok.ru
IPv4 Address. . . . . . . . . . . : 192.168.420.69
Subnet Mask . . . . . . . . . . . : 255.255.252.0
Default Gateway . . . . . . . . . : 192.168.0.1`

let helpText = `Seznam příkazů:
ECHO                                Zobrazí napsanou zprávu
CLEAR                               Vyčistí obsah terminálu
SHUTDOWN                            Vypne počítač
IPCONFIG                            Zobrazí síťové informace
PING                                Pingne zvolenou doménu       
EXIT                                Zavře terminál
COLOR                               Nastaví barvu pozadí terminálu
s̵̼͙̒ÿ̶͕š̶̢̟͎͂̓ṭ̷̨̙̀͝e̷͎͈͚͝m̴̪̲̃͛͝info                         Zobrazí hardware počítače
a̵̳̾͊̉͘ş̶̬̝͇̰̄́̃f̶̗̳̣̫̗͗͌̈d̷̬̰͇̤͝ͅḷ̷̢̠̆ų̸̝͙̊̏k̵̞̏j̶̢̻̉̈̒̄̄ĵ̵̛̺̠̖̞͊́̀d̵͕̘́̇̀͗̓                         Zobrazí aktivní procesy
j̵̧͖͕͝l̸̯̤̀̏̉f̸̯͉̤͠k̴͉͛d̵̝̬̈́͊͝g̸̠̱͙͗͆ĩ̴̡̍̀n̴̮͚̈́f̴̰͔̥̐j̶̠͛̐ͅg̷͕͈̅                         Ukončí vybraný proces
 `
let systeminfoText = `Systémové specifikace:
OS NAME                             BackorOS
OS VERSION                          2023
OS BUILD                            dneska
OS DIRECTORY                        C:\\
SYSTEM TYPE                         x8-based PC
SYSTEM MANUFACTURER                 wikitiki
CPU                                 Intel 8080
RAM                                 256MB
GPU                                 STG-2000
TIMEZONE                            UTC +1:00
TOTAL PHYSICAL MEMORY               512MB
AVAILABLE PHYSICAL MEMORY           159MB
MONITOR                             RTC 4:3
`

let taskListArray = [`Aktivní procesy:
Názvy procesu       Typ             Cesta programu
=================== =============== ========================
PanBackor.exe       Services        C:\\ProgramFiles\\Backor
System              Services        C:\\system\\OS
console.exe         Aplication      C:\\start
SystemSettings.exe  Services        C:\\system\\settings
IntelHD.exe         Services        C:\\system\\CPU
`,
`KryptoMine.vir      Aplication      C:\\system\\Malware<3
`,
`NVDisplay.exe       Services        C:\\system\\GPU
`,
`KeyLog.vir          Aplication      C:\\system\\Malware<3
`,
`BrowserAds.vir      Aplication      C:\\system\\Malvare<3
`];
let killed =["","",""];
let killedCount = 0;
//přidat možnost ukončení (zavření) aktivního okna přes killtask
//ukončit spam reklam ve webbrowseru při killnutí BrowserAds.vir
function consoleInput(event) {
    let input = document.getElementById("console_input");
    let output = document.getElementById("console_output_text");
    if (event.keyCode == 13) {
        let command = stripSpacesFromStart(input.value);
        input.value = "";
        addConsoleLine(`C:\\LevelProgress> ${command}`);
        const commandLowerCase = command.toLowerCase();
        function commandStartsWith(text) { return commandLowerCase.startsWith(text) };
        const commandSplit = command.split(" ");
        const commandTrim = command.trim();
        const commandLength = commandTrim.length;
        const commandSplitFirst = commandSplit[0];
        switch (true) {
            case commandStartsWith("help"): // ------------------- help
                completeLevel(12);
                addConsoleLine(helpText);
                break;
            case commandStartsWith("clear"): // ------------------ clear
                clearConsole();
                break;
            case commandStartsWith("echo"): // ------------------- echo
                addConsoleLine(command.substring(5));
                break;
            case commandStartsWith("shutdown"): // --------------- shutdown
                addConsoleLine("Shutting down...");
                setTimeout(function() {
                    restart();
                    addConsoleLine("Shut down complete.");
                }, 1000);
                break;
            case commandStartsWith("ipconfig"): // --------------- ipconfig
                addConsoleLine(ipconfigText[0]);
                break;
            case commandStartsWith("ping"): // ------------------- ping
                ping(commandSplit[1]);
                break;
            case commandStartsWith("color"):
                document.getElementById("window" + getFromSystemRegister("*jmeno_uzivatele*@spspurkynova")).getElementsByClassName("main_div")[0].style.background = commandSplit[1];
                document.getElementById("window" + getFromSystemRegister("*jmeno_uzivatele*@spspurkynova")).getElementsByClassName("console")[0].style.background = commandSplit[1];
                break;
            case commandStartsWith("systeminfo"):
                addConsoleLine(systeminfoText);
                break;
            case commandStartsWith("exit"):
                exitWindow(getFromSystemRegister("*jmeno_uzivatele*@spspurkynova"));
                clearConsole();
                break;
            case commandStartsWith("tasklist"):
                addConsoleLine(getTaskListText());
                completeLevel(13);
                break;
            case commandStartsWith("taskkill"):
                if(commandSplit[1] == "KryptoMine.vir" && killed[0] != "KryptoMine") {taskListArray.splice(getTaskLocation("KryptoMine.vir"), 1); killed[0]="KryptoMine"; consoleLevelProgress()}
                else if(commandSplit[1] == "KeyLog.vir" && killed[0] != "KeyLog") {taskListArray.splice(getTaskLocation("KeyLog.vir"), 1); killed[1]="KeyLog"; consoleLevelProgress()}
                else if(commandSplit[1] == "BrowserAds.vir" && killed[0] != "BrowserAds") {taskListArray.splice(getTaskLocation("BrowserAds.vir"), 1); killed[2]="BrowserAds"; consoleLevelProgress(); browserWinVirus(); browserTabVirus(); }
                else if(commandSplit[1] == "console.exe") {exitWindow(getFromSystemRegister("*jmeno_uzivatele*@spspurkynova")); clearConsole();}
                else if(commandSplit[1] == "PanBackor.exe" || commandSplit[1] == "System" || commandSplit[1] == "SystemSettings.exe" || commandSplit[1] == "IntelHD.exe" || commandSplit[1] == "NVDisplay.exe") {addConsoleLine("Nemožno zastavit službu - uživatel není admin!")}
                else {addConsoleLine("Neznámý proces! Ujisťete se že máte správně velikost písmen!")}
                addToRegister("killedList", killed); addToRegister("killedCount", killedCount);
                break;
            //jsem línej pak to smažu :D
                case commandStartsWith("skip"):
                killedCount = 2;
                consoleLevelProgress();
                skipConsoleLevels()
                break;
            default: // ------------------------------------------ unknown command
                if (commandTrim.length === 0) break;
                addConsoleLine(`'${commandSplitFirst}' is not recognized as an internal or external command, operable program or batsch file.`);
        }
    }
}

function addConsoleLine(text) {
    let output = document.getElementById("console_output_text");
    output.innerText += `\n${text}`;
}
function clearConsole() {
    let output = document.getElementById("console_output_text")
    output.innerHTML = "&nbsp;";
}
function lockInput(){
    document.getElementById("console_input").disabled = true;
}
function unlockInput(){
    document.getElementById("console_input").disabled = false;
}
function stripSpacesFromStart(input) {
    let output = input;
    while (output.startsWith(" ")) {
        output = output.substring(1);
    }
    return output;
}
function ping(site) {
    lockInput();
    if (site == undefined) {site = "localhost"}
    let randomTimes = [Math.floor(Math.random()* 30), Math.floor(Math.random()* 30), Math.floor(Math.random()* 30), Math.floor(Math.random()* 30)];
    let minimumTime = Math.min(...randomTimes);
    let maximumTime = Math.max(...randomTimes);
    let averageTime = Math.floor((randomTimes[0] + randomTimes[1] + randomTimes[2] + randomTimes[3]) / 4);

    addConsoleLine(`Pinging ${site} with 32 bytes of data:`);
    for (let i = 0; i < 4; i++) {
        setTimeout(function() { addConsoleLine(`Reply from ${site}: bytes=32 time=${randomTimes[i]}ms TTL=128`); }, (i+1)*1000);
    }
    setTimeout(function() { addConsoleLine(`
    Ping statistics for ${site}:
    \tPackets: Sent = 4, Received = 4, Lost = 0 (0% loss),
    Approximate round trip times in milli-seconds:
    \tMinimum = ${minimumTime}ms, Maximum = ${maximumTime}ms, Average = ${averageTime}ms
    `);unlockInput(); }, 5000);
}
function getTaskListText(){
    let taskListText =``;
    taskListArray.forEach(element => {
        taskListText += element;
    });
    return taskListText;
}
function getTaskLocation(task){
    let index ="";
    for(let i = 0; i < taskListArray.length; i++ ){
        if(taskListArray[i].indexOf(task) != -1) index = i;
    };
    return index;
}
function consoleLevelProgress(){
    if (killedCount == 0) {killedCount += 1; completeLevel(14)}
    else if (killedCount == 1) {killedCount += 1; completeLevel(15)}
    else if (killedCount == 2) {
        killedCount += 1; completeLevel(16);
        document.getElementById('application' + getFromSystemRegister("CrashNote.txt")).setAttribute('onclick', 'focusWindow("CrashNote.txt"); skipConsoleLevels()');
        installApp(getFromSystemRegister("CrashNote.txt"));
        //document.getElementById("crashText").innerHTML=getCode(0);
    };
}
function skipConsoleLevels(){
    for (let level = 12; level < 17; level++){completeLevel(level)};
    completeLevel(17);
}

function loadProgress(newkilledList, newkilledCount){
    newkilledList.split(",").forEach(function (item) {
        if (item != ""){
            taskListArray.splice(getTaskLocation(item + ".vir"), 1);
            switch (item) {
                case "KryptoMine":
                    killed[0]="KryptoMine";
                    break;
                case "KeyLog":
                    killed[1]="KeyLog";
                    break;
                case "BrowserAds":
                    killed[2]="BrowserAds";
                    browserWinVirus();
                    browserTabVirus();
                    break;
            }
        }
    });
    killedCount = parseInt(newkilledCount);
}