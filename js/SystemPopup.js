function popup(title, text){
    let contentDisplay = document.getElementById("app_container");
    const popup = document.createElement("div");
    popup.className = "window popup";
    popup.style.height = "200px";
    popup.style.width = "400px";
    popup.style.background = "white";
    contentDisplay.appendChild(popup);

    const popupHeader = document.createElement("div");
    popupHeader.className = "windowHeader";
    popup.appendChild(popupHeader);

    const popupTitle = document.createElement("div");
    popupTitle.className = "windowTitle unselectable";
    popupTitle.innerHTML = title;
    popupHeader.appendChild(popupTitle);

    const popupClose = document.createElement("div");
    popupClose.className = "windowClose unselectable";
    popupClose.innerHTML = "<p class='winControls'>✕</p>";
    popupClose.setAttribute("onclick", 'gh');
    popupHeader.appendChild(popupClose);

    repositionPopup();
}

function repositionPopup(){
    let popup = document.getElementsByClassName("popup")[0];
    popup.style.left = "calc(50% - " + (popup.offsetWidth / 2) + "px)";
    popup.style.top = "calc(50% - " + (popup.offsetHeight / 2) + "px)";
}