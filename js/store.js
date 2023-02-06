function showStorePopup() {
    const popup = document.getElementById("store_popup")
    popup.style.display="block";
    popup.setAttribute("onclick", "focusWindow('File explorer'); changeFolderTab('fe_downloads')");
    setTimeout(()=>{popup.style.display="none"}, 5000);
}