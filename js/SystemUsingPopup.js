class SystemUsingPopup{
    constructor(fileName, openedIn, onClickFunction){
        this.appName = "Soubor je používán.";
        this.onClickFunction = onClickFunction;
        this.title = "Akci nelze dokončit, protože soubor je otevřený v programu "+openedIn+".";
        this.publisher = "Unknown";
        this.fileName = fileName;
        this.fileOrigin = "Hard drive on this computer";
    }

    show() {
        if (document.querySelectorAll("sysUsingPopup").length == 0){
            let monitor = document.getElementsByClassName("monitor")[0];

            const blackOverlay = document.createElement("div");
            blackOverlay.className = "spp_blackOverlay";
            blackOverlay.style.position = "absolute";
            blackOverlay.style.zIndex = 999999998;
            blackOverlay.style.width = "100%";
            blackOverlay.style.height = "100%";

            monitor.appendChild(blackOverlay);

            const window = document.createElement("sysUsingPopup");
            window.className = "spp_window unselectable";
            window.style.width = "446px";
            window.style.height = "300px";
            window.style.left = "calc(50% - 223px)";
            window.style.top = "calc(50% - 150px)";
            window.style.zIndex = 999999999;
            window.setAttribute("canClose", this.canClose)

            monitor.appendChild(window);

            const windowHeader = document.createElement("div");
            windowHeader.className = "spp_windowHeader";
            window.appendChild(windowHeader);

            const windowTitle = document.createElement("div");
            windowTitle.className = "ssp_windowTitle unselectable";
            windowTitle.innerHTML = "Soubor je používán.";
            windowHeader.appendChild(windowTitle);

            const windowClose = document.createElement("div");
            windowClose.className = "spp_windowClose unselectable";
            windowClose.innerHTML = "<p class='winControls'>✕</p>";
            windowClose.setAttribute("onclick", 'closeSysUsingPopup()');
            if (this.troll){
                windowClose.addEventListener("mouseenter", function(){
                    windowClose.firstChild.innerText = "✓"
                });
                windowClose.addEventListener("mouseleave", function(){
                    windowClose.firstChild.innerText = "✕"
                });
                windowClose.setAttribute("onclick", this.onClickFunction + "; forceCloseSysUsingPopup();");
            }
            windowHeader.appendChild(windowClose);

            /*Create content div*/
            const main_div = document.createElement("div");
            main_div.className = "spp_main_div";

            window.appendChild(main_div);
        
            /*Content in main div*/
            const uac = document.createElement("div");
            uac.className = "uac";

            main_div.appendChild(uac);
            
            /* */
            const header = document.createElement("div");
            header.className = "header";

            uac.appendChild(header);

            const question = document.createElement("div");
            question.className = "question";
            question.innerHTML = this.title;

            header.appendChild(question);

            /* */
            const content = document.createElement("div");
            content.className = "content";

            uac.appendChild(content);

            const name = document.createElement("div");
            name.className = "name";
            name.innerHTML = this.appName;

            content.appendChild(name);

            const details = document.createElement("div");
            details.className = "details";

            content.appendChild(details);

            const textOverflow1Line = document.createElement("div");
            textOverflow1Line.className = "textOverflow1Line";
            textOverflow1Line.innerHTML = "Publisher: <span>"+this.publisher+"</span>";

            details.appendChild(textOverflow1Line);

            const br = document.createElement("br");

            details.appendChild(br);

            const textOverflow2Line = document.createElement("div");
            textOverflow2Line.className = "textOverflow1Line";
            textOverflow2Line.innerHTML = "File origin: <span>"+this.fileOrigin+"</span>";

            details.appendChild(textOverflow2Line);

            const buttons = document.createElement("div");
            buttons.className = "buttons";

            uac.appendChild(buttons);

            const btnOpakovat = document.createElement("div");
            btnOpakovat.className = "btnwrap btnyes";

            buttons.appendChild(btnOpakovat);

            const opakovat = document.createElement("div");
            opakovat.className = "yes";
            opakovat.innerHTML = "Opakovat";
            opakovat.setAttribute("onclick", this.onClickFunction + "; forceCloseSysUsingPopup();");

            btnOpakovat.appendChild(opakovat);

            buttons.innerHTML += "‎ ";

            const btnZrusit = document.createElement("div");
            btnZrusit.className = "btnwrap btnno";

            buttons.appendChild(btnZrusit);

            const zrusit = document.createElement("div");
            zrusit.className = "no";
            zrusit.innerHTML = "Zrušit";

            btnZrusit.appendChild(zrusit);
        }
    }

    hide(){
        closeSysPermissionPopup();
    }
}

function closeSysUsingPopup(){
    let popupWindow = document.querySelectorAll("sysUsingPopup");
    
    if (popupWindow.length == 1 && popupWindow[0].getAttribute("canClose") == "true"){
        forceCloseSysPermissionPopup()
    }
}

function forceCloseSysUsingPopup(){
    let popupWindow = document.querySelectorAll("sysUsingPopup");

    if (popupWindow.length == 1){
        popupWindow[0].remove();
        document.getElementsByClassName("spp_blackOverlay")[0].remove();
    }
}