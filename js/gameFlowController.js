function startVirusGame(){
    let popup = new SystemPermissionPopup("Virus.exe", "");
    popup.canClose = false;
    popup.show();
}