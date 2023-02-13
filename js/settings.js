//change tabs
function changeTab(tabID) {
    let allTabs = document.querySelectorAll(".tab_container");
    allTabs.forEach(element => {
        element.style.display = "none";
    });
    document.getElementById(tabID).style.display = "block";
}
function activateTab(self, tabID) {
    document.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    });
    self.classList.add("active");
    changeTab(tabID);
}


let lang = "default";
function changeLang(lang_) {
    // console.log(lang_);
    // console.log(lang);
    // console.log(lang_ === lang);
    if (lang_ === lang) return;
    switch (lang_) {
        case "ascii":
            lang = "ascii";
            changeClassTextToAscii("windowTitle");
            document.querySelectorAll("p").forEach(element => {
                changeThisTextToAscii(element);
            });
            document.querySelectorAll(".asciiHash").forEach(element => {
                changeThisTextToAscii(element);
            });
            document.querySelectorAll("label").forEach(element => {
                changeThisTextToAscii(element);
            });
            changeClassAsciiToText("winControls"); // change windows controls to normal
            break;
        default:
            lang = "default";
            completeLevel(1); POSTdata(localStorage.getItem('loginDetail'), "0000000000000001");
            document.getElementById("PanBackorPointer").style.display = "none";
            changeClassTextToAscii("winControls"); // change windows controls to ascii (temporarily)
            changeClassAsciiToText("windowTitle");
            document.querySelectorAll("p").forEach(element => {
                changeThisAsciiToText(element);
            });
            document.querySelectorAll(".asciiHash").forEach(element => {
                changeThisAsciiToText(element);
            });
            document.querySelectorAll("label").forEach(element => {
                changeThisAsciiToText(element);
            });
            nextLevel();
            installApp(getFromSystemRegister('BACKOR Store'));
            break;
    }
}

function returnLang(){
    return lang;
}
activateTab(document.getElementById('defaultSettingsTab'), 'tab_general')