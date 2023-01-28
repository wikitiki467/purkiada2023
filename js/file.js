

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
        div.style.position = 'absolute';
        div.style.width = '150px';
        div.style.height = '100px';
        div.style.background = 'white';
        div.style.zIndex = '1000';

        let screenDiv = document.getElementsByClassName("monitor")[0];
        /*screen*/
        let screenPositionX = screenDiv.offsetLeft;
        let screenPositionY = screenDiv.offsetTop;
        
        /*mouse*/
        let x = e.pageX - screenPositionX;
        let y = e.pageY - screenPositionY;

        div.style.left = x + 'px';
        div.style.top = y + 'px';

        document.getElementById('contentDisplay').appendChild(div);

        const option = document.createElement('div');
        option.className = 'fileContextMenuOption';
        option.style.width = '100%';
        option.style.height = '25px';

        for (let i = 0; i < 4; i++) {
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