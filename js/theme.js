var theme_set = 0;


const BTNS = ["ASCB", "HEXB", "BINB"];
const url_addres = ['clouds.png','pyramid.webp','BigBrain.png', 'enigma-wallpaper.jpg'];
var task_btns = document.getElementsByClassName("task_btns");
var LVL3_task = document.getElementById("task_div");
var all = document.getElementsByClassName("taskBarIcon");
var tlacitka_more = document.getElementsByClassName("tlacitko");
var BackgroundTask = document.getElementsByClassName("taskDivChanger");
var filter_set;

function change_theme(){
  if (theme_set == 0){filter_set = "invert(100)";}
  else{filter_set = "invert(0)";}
  for (var i = 0; i < all.length; i++){all[i].style.filter = filter_set;}
  for (var i = 0; i < BackgroundTask.length; i++){BackgroundTask[i].style.filter = filter_set; BackgroundTask[i].style.filter = filter_set;}
  for (var i = 0; i < tlacitka_more.length; i++){tlacitka_more[i].style.filter = filter_set; tlacitka_more[i].style.filter = filter_set;}
  for(var i = 0; i < task_btns.length; i++){task_btns[i].style.filter = filter_set;}
  document.getElementById("getTime").style.filter = filter_set;

  if( theme_set == 0){ //Light THEME
    for(var i = 1; i < 10; i++){
      document.getElementById("window" + i).style.backgroundImage = 'url("./images/levelBackground/LightWallaper.jpg")';
      if(i == 9){ document.getElementById("window" + i).style.backgroundImage =  '';}
    }
    document.getElementById("taskBar").style.backgroundColor = "White";
    document.getElementById("LEVEL3obrazek").style.display = "flex";
    document.getElementById("THEME").src = "images/taskbar/THEMEdark.svg";
    theme_set = 1;
}
  else if( theme_set == 1){ //Dark THEME        
    document.getElementById("taskBar").style.backgroundColor = "rgb(53, 52, 52)";
    document.getElementById("THEME").src = "images/taskbar/THEMElight.svg";
    document.getElementById("LEVEL3obrazek").style.display = "none";
    for(var i = 1; i < 10; i++){
      document.getElementById("window" + i).style.backgroundImage =  'url("./images/levelBackground/'+url_addres[0]+'")';
      if(i == 2){ document.getElementById("window" + i).style.backgroundImage =  'url("./images/levelBackground/'+url_addres[1]+'")';}
      if(i == 7){ document.getElementById("window" + i).style.backgroundImage =  'url("./images/levelBackground/' +url_addres[2]+'")';}
      if(i == 8){ document.getElementById("window" + i).style.backgroundImage =  'url("./images/levelBackground/' +url_addres[3]+'")';}
      if(i == 9){ document.getElementById("window" + i).style.backgroundImage =  '';}
    }
    theme_set = 0;
  }
}
