var countDeletedFiles = 0;

function getCountDeletedFiles(){
    return countDeletedFiles;
}

function resetCountDeletedFiles() {
    countDeletedFiles = 0;
}

function closeFocusedMenu() {
    if (document.getElementById('fileContextMenu') != null) {
        document.getElementById('fileContextMenu').blur();
    }
}

function deleteFileInFE(target) {
    if(document.getElementById(target.id)){
        if(target.id == "fileRick"){
            document.getElementById(target.id).remove();
        } //nevezme rickroll
        if(target.id == "av_installer_file"){    
        }
        else{
            document.getElementById(target.id).remove();
            countDeletedFiles++;
        }
    }
}

function renameFileInFE(target) {
    // console.log(target);
    let fileText = target.querySelector("p");
    fileText.classList.remove('textOverflow1Line')
    fileText.setAttribute("contenteditable", "true");
    fileText.focus();

    // označení textu
    var range = document.createRange();
    var selection = window.getSelection();
    range.selectNodeContents(fileText);
    selection.removeAllRanges();
    selection.addRange(range);

    // enter > unfocus
    fileText.addEventListener("keydown", function(e){
        if(e.keyCode == 13){
            fileText.blur();
        }
    });
    fileText.addEventListener("blur", function(){
        selection.removeAllRanges();
        fileText.classList.add('textOverflow1Line');
        fileText.setAttribute("contenteditable", "false");
        // add textOverflow1Line clas to fileText

    });
}

function changeFileText(newText) {
    document.getElementById("fileText").innerHTML = newText;
}

function changeFolderTab(tabID) {
    let allTabs = document.querySelectorAll(".fe_tab");
    allTabs.forEach(element => {
        element.style.display = "none";
    });
    document.getElementById(tabID).style.display = "grid";
}

function activateFolderTab(self, tabID) {
    document.querySelectorAll(".active").forEach(element => {
        element.classList.remove("active");
    });
    self.classList.add("active");
    changeFolderTab(tabID);
}

activateFolderTab(document.getElementById('defaultFolderTab'), 'fe_main')

function contextMenu(e) {
    if (document.getElementsByClassName("fileContextMenu").length > 0){
        document.getElementById('contentDisplay').removeChild(document.getElementsByClassName("fileContextMenu")[0]);
    }

    /*get mouse target*/
    let target = e.target;

    if (target.className.includes("fe_files") || target.className.includes("side_folder")){
        const div = document.createElement('div');
        div.className = 'fileContextMenu';
        div.id = 'fileContextMenu';

        let screenDiv = document.getElementsByClassName("monitor")[0];
        /*screen*/
        let screenPositionX = screenDiv.offsetLeft;
        let screenPositionY = screenDiv.offsetTop;
        
        /*mouse*/
        let x = e.pageX - screenPositionX;
        let y = e.pageY - screenPositionY;

        div.style.left = x + 'px';
        div.style.top = y + 'px';
        div.tabIndex = -1;
        div.addEventListener('blur', function(){
            document.getElementById('contentDisplay').removeChild(document.getElementById('fileContextMenu'));
        });

        document.getElementById('contentDisplay').appendChild(div);
        div.focus();
        if (target.className.includes("fe_files")) {
            options = {
            // 'NAME': 'ONCLICK'
            "Option 1": "console.log('Option 1')",
            "Option 2": "console.log('Option 2')",
            "Přejmenovat": `renameFileInFE(${target.id})`,
            "Odstranit": "deleteFileInFE(" + target.id + ");",
            };
            
            
        }
        else {
            options = {
                // 'NAME': 'ONCLICK'
                "Option 1": "console.log('Option 1')",
                "Option 2": "console.log('Option 2')",
                "Přejmenovat": `renameFileInFE(${target.id})`,
                "Vlastnosti": "focusWindow('Vlastnosti')",
                };
        }
        
        e.preventDefault();
        for (const [name, onclick] of Object.entries(options)) {
            const option = document.createElement('li');
            option.className = 'fileContextMenuOption';
            option.innerText = name;
            option.setAttribute("onclick", `${onclick.replace("\"", "\'")};closeFocusedMenu()`);
            div.appendChild(option);
        }
    }
}

if (document.addEventListener) {
    document.addEventListener('contextmenu', function(e) {
        contextMenu(e)
    }, false);
  } else {
        document.attachEvent('oncontextmenu', function() {
        contextMenu(e)
        window.event.returnValue = false;
    });
  }
if (localStorage.getItem("loginDetail") != "admin") {
    // disable inspect element
    document.addEventListener('contextmenu', event => event.preventDefault());

    document.addEventListener('keydown', function(event) {
        if (event.key == "F12") {
            event.preventDefault();
        }
        if (event.ctrlKey && event.shiftKey && event.key == "I") {
            event.preventDefault();
        }
        if (event.ctrlKey && event.shiftKey && event.key == "J") {
            event.preventDefault();
        }
        if (event.ctrlKey && event.shiftKey && event.key == "C") {
            event.preventDefault();
        }
        if (event.ctrlKey && event.key == "U") {
            event.preventDefault();
        }
        
    });
}
// var devToolsOpened = false;
// if (performance.navigation.type == 1 && !devToolsOpened) {
//     // developer tools are open
//     var overlay = document.createElement("div");
//     overlay.setAttribute("id", "overlay");
//     overlay.innerHTML = "<h1>Please do not open developer tools</h1>";
//     document.body.appendChild(overlay);
//     overlay.style.cssText = "position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: red; color: white; text-align: center; padding-top: 20%; z-index: 99999;";
// }
