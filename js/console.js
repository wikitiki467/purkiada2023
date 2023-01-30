let ipconfigText = `BackoraOS IP Configuration

Wireless LAN adapter Wi-Fi:

Connection-specific DNS Suffix. . : facebok.ru
IPv4 Address. . . . . . . . . . . : 192.168.420.69
Subnet Mask . . . . . . . . . . . : 255.255.252.0
Default Gateway . . . . . . . . . : 192.168.0.1`

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
                addConsoleLine("Nah, to zvladneš sam");
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
                addConsoleLine(ipconfigText);
                break;
            case commandStartsWith("ping"): // ------------------- ping
                ping(commandSplit[1]);
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