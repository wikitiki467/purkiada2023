function consoleInput(event) {
    let input = document.getElementById("console_input");
    let output = document.getElementById("console_output_text");
    if (event.keyCode == 13) {
        let command = input.value;
        input.value = "";
        if (command == "help") {
            addConsoleLine("Nah, to zvladneš sam");
        } else if (command == "clear") {
            clearConsole();
        } else {
            addConsoleLine(`'${command}' is not recognized as an internal or external command,
            operable program or batch file.`);
        }
        // input.focus();
    }
}
function addConsoleLine(text) {
    let output = document.getElementById("console_output_text");
    output.innerText += `\n${text}`;
}
function clearConsole() {
    document.getElementById("console").innerHTML = "&nbsp;";
}