class SystemPermissionPopup{
    constructor(appName, onClickFunction){
        this.appName = appName;
        this.onClickFunction = onClickFunction;
        this.title = "Do you want to allow this app from an unknown publisher to make changes to your device?";
        this.publisher = "Unknown";
        this.fileOrigin = "Hard drive on this computer";
        this.canClose = true;
    }

    show() {
        if (document.querySelectorAll("sysPermissionPopup").length == 0){
            let monitor = document.getElementsByClassName("monitor")[0];

            const blackOverlay = document.createElement("div");
            blackOverlay.className = "spp_blackOverlay";
            blackOverlay.style.position = "absolute";
            blackOverlay.style.zIndex = 999999998;
            blackOverlay.style.width = "100%";
            blackOverlay.style.height = "100%";

            monitor.appendChild(blackOverlay);

            const window = document.createElement("sysPermissionPopup");
            window.className = "spp_window unselectable";
            window.style.width = "446px";
            window.style.height = "300px";
            window.style.left = "calc(50% - 223px)";
            window.style.top = "calc(50% - 150px)";
            window.style.zIndex = 999999999;

            monitor.appendChild(window);

            const windowHeader = document.createElement("div");
            windowHeader.className = "spp_windowHeader";
            window.appendChild(windowHeader);

            const windowTitle = document.createElement("div");
            windowTitle.className = "ssp_windowTitle unselectable";
            windowTitle.innerHTML = "User Account Control";
            windowHeader.appendChild(windowTitle);

            const windowClose = document.createElement("div");
            windowClose.className = "spp_windowClose unselectable";
            windowClose.innerHTML = "<p class='winControls'>✕</p>";
            windowClose.setAttribute("onclick", 'closeSysPermissionPopup()');
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
            textOverflow1Line.innerHTML = "Publisher: <span class="+this.publisher+">Unknown</span>";

            details.appendChild(textOverflow1Line);

            const br = document.createElement("br");

            details.appendChild(br);

            const textOverflow2Line = document.createElement("div");
            textOverflow2Line.className = "textOverflow1Line";
            textOverflow2Line.innerHTML = "File origin: <span class="+this.fileOrigin+">Hard drive on this computer</span>";

            details.appendChild(textOverflow2Line);

            const moredetails = document.createElement("div");
            moredetails.className = "moredetails";
            moredetails.innerHTML = "Show more details";
            moredetails.setAttribute("onclick", "this.style.opacity = this.style.opacity==''?'.9':this.style.opacity-.1");

            content.appendChild(moredetails);

            const buttons = document.createElement("div");
            buttons.className = "buttons";

            uac.appendChild(buttons);

            const btnyes = document.createElement("div");
            btnyes.className = "btnwrap btnyes";

            buttons.appendChild(btnyes);

            const yes = document.createElement("div");
            yes.className = "yes";
            yes.innerHTML = "Yes";
            yes.setAttribute("onclick", this.onClickFunction + "; forceCloseSysPermissionPopup();");

            btnyes.appendChild(yes);

            buttons.innerHTML += "‎ ";

            const btnno = document.createElement("div");
            btnno.className = "btnwrap btnno";

            buttons.appendChild(btnno);

            const no = document.createElement("div");
            no.className = "no";
            no.innerHTML = "No";
            no.setAttribute("onclick", 'closeSysPermissionPopup()');

            btnno.appendChild(no);
        }
    }

    hide(){
        closeSysPermissionPopup();
    }
}

function closeSysPermissionPopup(){
    let popupWindow = document.querySelectorAll("sysPermissionPopup");

    if (popupWindow.length == 1 && popupWindow[0].canClose){
        forceCloseSysPermissionPopup()
    }
}

function forceCloseSysPermissionPopup(){
    let popupWindow = document.querySelectorAll("sysPermissionPopup");

    if (popupWindow.length == 1){
        popupWindow[0].remove();
        document.getElementsByClassName("spp_blackOverlay")[0].remove();
    }
}