function consoleInput(event) {
    let input = document.getElementById("console_input");
    let output = document.getElementById("console_output_text");
    if (event.keyCode == 13) {
        let command = input.value;
        input.value = "";
        if (command == "help") {
            addConsoleLine("Nah, to zvladneš sam");
        } else if (command == "clear" || command == "cls") {
            clearConsole();
        } else if (command.startsWith("echo")) {
            addConsoleLine(command.substring(5));
        } else if (command == "" || command == " ") {
            addConsoleLine("");
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
    let output = document.getElementById("console_output_text")
    output.innerHTML = "&nbsp;";
}