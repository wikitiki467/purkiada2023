var pocetOken;
var dragValue;
var mouseOnWindowX;
var mouseOnWindowY;
var windowID;
var positionX;
var positionY;
var openedWindows = [];

function getCountOfApplications(){
    for (let number = 1; number < 100; number++){
        if (document.getElementById("window"+number) == null){
            pocetOken = number-1;
            break;
        }
    }
    for (let number = 0; number < pocetOken; number++){
        openedWindows.push(false);
    }
}

function moveWindow(windowNumber){
    windowID = windowNumber;
    var screenDiv = document.getElementById("contentDisplay");
    var element = document.getElementById("window"+windowID);
    var elementControler = document.getElementById("windowTitle"+windowID);
    var applicationButton = document.getElementById("application"+windowID);
    element.style.position = "absolute";
    applicationButton.style.cursor = "pointer";
    elementControler.onmousedown = function(e){
        dragValue = element;
        mouseOnWindowX = Math.abs((e.pageX-screenDiv.offsetLeft)-element.offsetLeft);
        mouseOnWindowY = Math.abs((e.pageY-screenDiv.offsetTop)-element.offsetTop);
        window_z_index();
    }
}

document.onmouseup = function(e){
    positionX = e.pageX;
    positionY = e.pageY;
    dragValue = null;
}

document.onmousemove = function(e){
    if (document.getElementById("window"+windowID) != null){
        var screenDiv = document.getElementById("contentDisplay");
        /*screen*/
        var screenPositionX = screenDiv.offsetLeft;
        var screenPositionY = screenDiv.offsetTop;
        var screenWidth = screenDiv.clientWidth / 100;
        var screenHeight = screenDiv.clientHeight / 100;
        /*mouse*/
        var x = e.pageX - screenPositionX;
        var y = e.pageY - screenPositionY;
        
        screenX = x / screenWidth - mouseOnWindowX / screenWidth;
        screenY = y / screenHeight - mouseOnWindowY / screenHeight;
        
        try{
            dragValue.style.left = screenX + "%";
            dragValue.style.top = screenY + "%";
        } catch(error){}
    } 
}

function exitWindow(windowNumber){
    var element = document.getElementById("window"+windowNumber);
    element.style.left = "130%";
    
    taskBarOpendWindows(windowNumber, "close");
}

function openWindow(windowNumber=0){
    if (windowNumber > 0){
        windowID = windowNumber;
    }
    var screenDiv = document.getElementById("contentDisplay");
    var element = document.getElementById("window"+windowID);
    var screenWidth = screenDiv.clientWidth / 100;
    var screenHeight = screenDiv.clientHeight / 100;
    var windowWidth = element.clientWidth / 2;
    var windowHeight = element.clientHeight / 2;
    
    element.style.left = 50 - windowWidth / screenWidth + "%";
    element.style.top = 50 - windowHeight / screenHeight + "%";
    
    taskBarOpendWindows(windowID, "open");
}

//---------------------------------------------------------------
function repositionAllWindows(){
    for (let number = 1; number < pocetOken+1; number++){
        let element = document.getElementById("window"+number);
        element.style.left = "130%";
    } 
}

function window_z_index(windowNumber=0){
    var windowIndexes = [];
    for (let number = 1; number < pocetOken+1; number++){
        var element = document.getElementById("window"+number);
        windowIndexes.push(element.style.zIndex);
    }
    windowIndexes = windowIndexes.sort();
    var rightIndex = 1;
    for (let index = 0; index < windowIndexes.length; index++){
        if (windowIndexes[index] != index++){
            rightIndex = index++;
            break;
        }
    }
    for (let number = 1; number < pocetOken+1; number++){
        let element = document.getElementById("window"+number);
        if (element.style.zIndex >= rightIndex){
            element.style.zIndex--;
        }
    }
    if (windowNumber == 0){
        dragValue.style.zIndex = pocetOken;
    }
    else{
        document.getElementById("window"+windowNumber).style.zIndex = pocetOken;
    }
}

function taskBarOpendWindows(windowNumber, action){
    if (!openedWindows[windowNumber-1] && action == "open"){
        elementTitle = document.getElementById("windowTitle"+windowNumber);
        var newDiv = document.createElement("div");
        var newImg = document.createElement("img");
        newImg.src = "images/levelLogos/DARK/icon"+windowNumber+".png";
        newDiv.setAttribute("id", "icon"+windowNumber);
        if (windowNumber <= 5 || windowNumber == 9){
            newDiv.setAttribute("class", "taskBarIcon");
        }
        newDiv.setAttribute("title", elementTitle.innerHTML);
        newDiv.setAttribute("onclick", "window_z_index("+windowNumber+"); openWindow("+windowNumber+")");
        newDiv.style.cursor = "pointer";
        /*style*/
        newImg.style.height = "95%";
        newImg.style.width = "95%";
        newDiv.style.textAlign = "center";
        newDiv.style.height = "80%";
        newDiv.style.width = "3%";
        newDiv.style.marginLeft = "5px";
        newDiv.style.marginRight = "5px";
        newDiv.style.display = "inline-block";
        newDiv.style.borderBottom = "2px solid grey";
        newImg.style.borderRadius = "3px";
        document.getElementById("taskBar").appendChild(newDiv);
        document.getElementById("icon"+windowNumber).appendChild(newImg);
        openedWindows[windowNumber-1] = true;
        let taskBarDiv = document.getElementById("icon"+windowNumber);
        taskBarDiv.style.width = taskBarDiv.clientHeight + "px";
    }else if (openedWindows[windowNumber-1] && action == "close"){
        var icon = document.getElementById("icon"+windowNumber);
        icon.parentNode.removeChild(icon);
        openedWindows[windowNumber-1] = false;
    }
    if (theme_set==1){
    var all = document.getElementsByClassName("taskBarIcon");
    for (var i = 0; i < all.length; i++) {
        all[i].style.filter = "invert(100)";
    }
}
}
