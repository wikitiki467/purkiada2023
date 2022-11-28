const randWallpaper = changePngValue("./images/wallpaper.png", "center");

function PASS_check(id){
  var EnteredPASS = document.getElementById("pass"+id);
  let EnteredPASSWORD = EnteredPASS.value.toLowerCase();
  var color_back = setTimeout(() => { EnteredPASS.style.backgroundColor = "White"; }, 1000);

  if(randWallpaper[id-1] == EnteredPASSWORD){
    localStorage.setItem(id, document.getElementById("pass"+id).value);
    if (id==5){endingScreen()}
    EnteredPASS.style.backgroundColor = "LightGreen";
    document.getElementById("application"+id).style.backgroundColor = "LightGreen"; color_back;
    document.getElementById("pass"+id).setAttribute("onfocus", " ");
    document.getElementById("pass"+id).setAttribute("onkeydown", "return false");
    }
  else{EnteredPASS.style.backgroundColor = "Red";color_back;
  }
}

function loadData(){
  for (let id = 1;id<6;id++){
    let storageItem = localStorage.getItem(id);
    if(storageItem !== null){
      document.getElementById("pass"+id).value = storageItem;
    }
  }
}
loadData();

