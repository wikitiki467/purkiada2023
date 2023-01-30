
function deleteFileInFE(target) {
    if(document.getElementById(target)){
        document.getElementById(target).remove();
    }
}

function changeFileText(newText) {
    document.getElementById("folderText").innerHTML = newText;
};

function contextMenu(e) {
    if (document.getElementsByClassName("fileContextMenu").length > 0){
        document.getElementById('contentDisplay').removeChild(document.getElementsByClassName("fileContextMenu")[0]);
    }

    /*get mouse target*/
    let target = e.target;

    if (target.className == "fe_folders" || target.className == "textOverflow1Line" || target.className == "fe_folder_img"){
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

        for (let i = 0; i < 4; i++) {
            const option = document.createElement('li');
            option.className = 'fileContextMenuOption';
            option.innerText = 'Option ' + i;
            if (i == 3){
                if (target.className != "fe_folders"){
                    target = target.parentElement.id;
                }else{
                    target = target.id;
                }
                option.setAttribute("onclick", "deleteFileInFE('"+target+"')");
                console.log(option);
            }
            div.appendChild(option);
        }

        e.preventDefault();
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
