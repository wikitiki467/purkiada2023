function popup(title, text){
    let contentDisplay = document.getElementById("app_container");
    const popup = document.createElement("div");
    popup.className = "window popup";
    popup.style.height = "180px";
    popup.style.width = "400px";
    popup.style.background = "white";
    contentDisplay.appendChild(popup);

    const popupHeader = document.createElement("div");
    popupHeader.className = "windowHeader";
    popupHeader.style.cursor = "default";
    popup.appendChild(popupHeader);

    const popupTitle = document.createElement("div");
    popupTitle.className = "windowTitle unselectable";
    popupTitle.innerHTML = title;
    popupHeader.appendChild(popupTitle);

    const popupClose = document.createElement("div");
    popupClose.className = "windowClose unselectable";
    popupClose.innerHTML = "<p class='winControls'>✕</p>";
    popupClose.setAttribute("onclick", 'this.parentNode.parentNode.remove()');
    popupHeader.appendChild(popupClose);

    const popupText = document.createElement("p");
    popupText.style.position = "absolute";
    popupText.style.top = "60px";
    popupText.style.left = "10px";
    popupText.className = "popupText";
    popupText.innerHTML = text;
    popup.appendChild(popupText);

    /*Create button*/
    const popupButton = document.createElement("button");
    popupButton.style.position = "absolute";
    popupButton.style.bottom = "10px";
    popupButton.style.right = "10px";
    popupButton.style.borderRadius = "0";
    popupButton.style.background = "rgb(7, 76, 104)";
    popupButton.style.cursor = "pointer";
    popupButton.className = "popupButton";
    popupButton.innerHTML = "OK";
    popupButton.setAttribute("onclick", 'this.parentNode.remove()');
    popup.appendChild(popupButton);

    repositionPopup();
}

function repositionPopup(){
    let popup = document.getElementsByClassName("popup")[0];
    popup.style.left = "calc(50% - " + (popup.offsetWidth / 2) + "px)";
    popup.style.top = "calc(50% - " + (popup.offsetHeight / 2) + "px)";
}