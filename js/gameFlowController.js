function startVirusGame(){
    let popup = new SystemPermissionPopup("Virus.exe", "showPanBackor()");
    popup.canClose = false;
    popup.show();
}