function deleteLocalData(){
    localStorage.clear();
    console.log("Data byly smazány!");
}

function loadLocalData(){
    //load levels
    for (let id = 1;id<6;id++){
      let storageItem = localStorage.getItem(id);
      if(storageItem){
        document.getElementById("application"+id).style.backgroundColor = "LightGreen";
        document.getElementById("pass"+id).setAttribute("onkeydown", "return false");
      }
    }
    document.getElementById("browserSearchBar").value = "";
}
loadLocalData();

