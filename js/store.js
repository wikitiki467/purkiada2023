function moveToFolder(appTitle, folderId, imgSource) {
    let parent = document.getElementById(folderId)
    let img = document.createElement("img");
    img.setAttribute("src", imgSource);
    let element = document.createElement("div");
    element.setAttribute("class", "fe_files");
    element.onclick = focusWindow(appTitle);
    element.appendChild(img);
    parent.appendChild(element);

}

function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }