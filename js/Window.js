var screenDiv = document.getElementById("contentDisplay");
var pocetOken;
var dragValue;
var mouseOnWindowX;
var mouseOnWindowY;
var windowID;
var positionX;
var positionY;
var openedWindows = [];
var listOfAllWindows = [];

function getCountOfApplications(){
    let htmlListOfAllWindows = document.getElementsByClassName("window")
    for (let i = 0; i < htmlListOfAllWindows.length; i++){
        listOfAllWindows.push(htmlListOfAllWindows[i]);
    }

    for (let number = 0; number < pocetOken; number++){
        openedWindows.push(false);
    }
}

function generateApps(){
    let appBuilds = document.querySelectorAll("appBuild")
    pocetOken = appBuilds.length;

    for (i=0; i < appBuilds.length; i++){
        let builder = appBuilds[i];
        let width = builder.getAttribute("width");
        let height = builder.getAttribute("height");
        let title = builder.getAttribute("title");
        let icon = "../images/levelLogos/" + builder.getAttribute("icon");
        let backgroundImage = "../images/levelBackground/" + builder.getAttribute("backgroundImage");
        let backgroundColor = builder.getAttribute("backgroundColor");
        let scroll = builder.getAttribute("scroll");
        let maximize = builder.getAttribute("maximize");

        newApp(builder, width, height, title, icon, backgroundImage, backgroundColor, scroll, maximize, i+1);
    }
}

function newApp(appBuild, width, height, title, icon, backgroundImage, backgroundColor, scroll, maximize, appID){
    let contentDisplay = document.getElementById("contentDisplay");

    /*Create application shortcut*/
    const applicationShortcut = document.createElement("div");
    applicationShortcut.id = "application"+appID;
    applicationShortcut.className = "applicationShortcut";
    applicationShortcut.title = title;
    applicationShortcut.setAttribute("onclick", 'moveWindow('+appID+'); openWindow('+appID+'); window_z_index('+appID+')');
    applicationShortcut.setAttribute("icon", icon);

    /*Style*/
    applicationShortcut.style.marginLeft = (2 + ((appID-1)*6)) + "%";
    applicationShortcut.style.backgroundImage = "url('" + icon + "')";

    contentDisplay.appendChild(applicationShortcut);

    /*Generate window*/
        /*Create main window div*/
        const window = document.createElement("div");
        window.id = "window"+appID;
        window.className = "window";
        window.setAttribute("onclick", 'window_z_index('+appID+')');

        /*Style*/
        if (width != null){
            window.style.width = width;
        }
        if (height != null){
            window.style.height = height;
        }
        window.setAttribute("defaultWidth", `${window.style.width}`);
        window.setAttribute("defaultHeight", `${window.style.height}`);

        contentDisplay.appendChild(window);

        /*Create window header*/
        const windowHeader = document.createElement("div");
        windowHeader.className = "windowHeader";
        window.appendChild(windowHeader);

        const windowTitle = document.createElement("div");
        windowTitle.className = "windowTitle unselectable";
        windowTitle.innerHTML = title;
        windowHeader.appendChild(windowTitle);

        const windowMinimize = document.createElement("div");
        windowMinimize.className = "windowMinimize unselectable";
        windowMinimize.innerHTML = "<p>－</p>";
        windowMinimize.setAttribute("onclick", 'minimizeWindow('+appID+')');
        windowHeader.appendChild(windowMinimize);

        if (maximize != "false"){
            windowMinimize.style.right = "100px";

            const windowMaximize = document.createElement("div");
            windowMaximize.className = "windowMaximize unselectable";
            windowMaximize.innerHTML = "<p>▢</p>";
            windowMaximize.setAttribute("onclick", 'maximizeWindow('+appID+')');
            windowHeader.appendChild(windowMaximize);
        }

        const windowClose = document.createElement("div");
        windowClose.className = "windowClose unselectable";
        windowClose.innerHTML = "<p>✕</p>";
        windowClose.setAttribute("onclick", 'exitWindow('+appID+')');
        windowHeader.appendChild(windowClose);

        /*Create content div*/
        const main_div = document.createElement("div");
        main_div.className = "main_div";
        main_div.style.backgroundImage = "url('" + backgroundImage + "')";
        main_div.style.background = backgroundColor;
        if (scroll != null){
            main_div.setAttribute("scroll", `${scroll}`);
        }
        window.appendChild(main_div);

    /*Move content to generated window*/
    main_div.innerHTML = appBuild.innerHTML;

    /*Delete current app invoker tag*/
    appBuild.remove();
}

function moveWindow(windowID){
    let window = document.getElementById("window"+windowID);
    let windowControler = window.getElementsByClassName("windowTitle")[0];

    windowControler.onmousedown = function(e){
        dragValue = window;
        mouseOnWindowX = Math.abs((e.pageX-screenDiv.offsetLeft)-window.offsetLeft);
        mouseOnWindowY = Math.abs((e.pageY-screenDiv.offsetTop)-window.offsetTop);
        window_z_index(windowID);

        if (window.clientWidth == screenDiv.clientWidth && window.clientHeight == screenDiv.clientHeight){
            window.style.width = window.getAttribute("defaultWidth");
            window.style.height = window.getAttribute("defaultHeight");

            window.style.left = e.pageX - screenDiv.offsetLeft - (window.clientWidth / 2) + "px";
            mouseOnWindowX = window.clientWidth / 2;
        }
        
    }
}

document.onmouseup = function(e){
    positionX = e.pageX;
    positionY = e.pageY;
    dragValue = null;
}

document.onmousemove = function(e){
    if (document.getElementById("window"+windowID) != null){

        /*screen*/
        let screenPositionX = screenDiv.offsetLeft;
        let screenPositionY = screenDiv.offsetTop;
        let screenWidth = screenDiv.clientWidth / 100;
        let screenHeight = screenDiv.clientHeight / 100;
        
        /*mouse*/
        let x = e.pageX - screenPositionX;
        let y = e.pageY - screenPositionY;
        
        screenX = x / screenWidth - mouseOnWindowX / screenWidth;
        screenY = y / screenHeight - mouseOnWindowY / screenHeight;
        
        if (dragValue != null){
            dragValue.style.left = screenX + "%";
            dragValue.style.top = screenY + "%";
        }
    } 
}

function exitWindow(window_ID){
    let window = document.getElementById("window"+window_ID);
    window.style.left = "130%";
    
    taskBarOpendWindows(window_ID, "close");
}

function openWindow(window_ID){
    if (window_ID > 0){
        windowID = window_ID;
    }

    let window = document.getElementById("window"+windowID);

    let screenWidth = screenDiv.clientWidth / 100;
    let screenHeight = screenDiv.clientHeight / 100;
    let windowWidth = window.clientWidth / 2;
    let windowHeight = window.clientHeight / 2;
    
    window.style.left = 50 - windowWidth / screenWidth + "%";
    window.style.top = 50 - windowHeight / screenHeight + "%";
    
    taskBarOpendWindows(windowID, "open");
}

function maximizeWindow(window_ID){
    let window = document.getElementById("window"+window_ID);

    if (window.clientWidth != screenDiv.clientWidth && window.clientHeight != screenDiv.clientHeight){
        window.style.left = 0;
        window.style.top = 0;
        window.style.width = "100%";
        window.style.height = "100%";
    }else{
        window.style.width = window.getAttribute("defaultWidth");
        window.style.height = window.getAttribute("defaultHeight");

        let screenWidth = screenDiv.clientWidth / 100;
        let screenHeight = screenDiv.clientHeight / 100;
        let windowWidth = window.clientWidth / 2;
        let windowHeight = window.clientHeight / 2;
    
        window.style.left = 50 - windowWidth / screenWidth + "%";
        window.style.top = 50 - windowHeight / screenHeight + "%";
    }
}

function minimizeWindow(window_ID){
    let window = document.getElementById("window"+window_ID);

    window.style.left = "130%";
}

//---------------------------------------------------------------

var sortByZIndex = function(a, b) {
    return a.style.zIndex - b.style.zIndex;
}

function window_z_index(window_ID){
    listOfAllWindows.sort(sortByZIndex);

    for (let i = 0; i < listOfAllWindows.length; i++){
        listOfAllWindows[i].style.zIndex = i + 1;
    }

    document.getElementById("window" + window_ID).style.zIndex = listOfAllWindows.length + 1;
}

function taskBarOpendWindows(window_ID, action){
    if (!openedWindows[window_ID-1] && action == "open"){

        let currentWindow = document.getElementById("window"+window_ID);
        elementTitle = currentWindow.getElementsByClassName("windowTitle")[0];

        let newDiv = document.createElement("div");
        newDiv.setAttribute("id", "icon"+window_ID);
        newDiv.setAttribute("class", "taskBarIcon");
        newDiv.setAttribute("title", elementTitle.innerHTML);
        newDiv.setAttribute("onclick", "window_z_index("+window_ID+"); openWindow("+window_ID+")");

        let newImg = document.createElement("img");
        newImg.style.height = "95%";
        newImg.style.width = "95%";
        newImg.style.borderRadius = "3px";
        newImg.src = document.getElementById("application"+window_ID).getAttribute("icon");
        
        document.getElementById("taskBar").appendChild(newDiv);
        document.getElementById("icon"+window_ID).appendChild(newImg);

        openedWindows[window_ID-1] = true;

        let taskBarDiv = document.getElementById("icon"+window_ID);
        taskBarDiv.style.width = taskBarDiv.clientHeight + "px";

    }else if (openedWindows[window_ID-1] && action == "close"){
        let icon = document.getElementById("icon"+window_ID);
        icon.parentNode.removeChild(icon);
        openedWindows[window_ID-1] = false;
    }
}
