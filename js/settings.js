let lang = "default";
function changeLang(lang_) {
    console.log(lang_);
    console.log(lang);
    console.log(lang_ === lang);
    if (lang_ === lang) return;
    switch (lang_) {
        case "ascii":
            lang = "ascii";
            changeClassTextToAscii("windowTitle");
            document.querySelectorAll("p").forEach(element => {
                changeThisTextToAscii(element);
            });
            changeClassAsciiToText("winControls"); // change windows controls to normal
            break;
        default:
            lang = "default";
            changeClassTextToAscii("winControls"); // change windows controls to ascii (temporarily)
            changeClassAsciiToText("windowTitle");
            document.querySelectorAll("p").forEach(element => {
                changeThisAsciiToText(element);
            });
            break;
    }
}