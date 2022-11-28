const telefon = document.getElementById("telephone");
const sipka = document.getElementById("telephone-arrow");
var button = document.getElementById("telephone-button-messages");
var last_screen = "images/telefon.svg"
var move = true;
var bug = false;
const blackscreen = document.getElementById("blackscreen");
const openEmailConversation = document.getElementById("telephone-button-open-conversation");
const screens = {
    "Main" : ["images/telefon.svg","telephone-button-messages", "Messages"],
    "Messages" : [["images/telefon-messages-menuBlank.svg", "telephone-button-messages-back", "Main"],
                  ["images/telefon-messages-menuNewMessage.svg", "telephone-button-messages-back", "Main"]],
    "MessagesEmail" : ["images/telefon-messages-email.svg", "telephone-button-messages-back", "Main"],
    "OFF" : ["images/telefon-off.svg", "telephone-button-none", null],
}

function telefonNahoru() {
    if (move) {
        telefon.style.zIndex= 102;
        telefon.style.bottom = "-40px";
        telefon.style.width= "250px";
        sipka.style.bottom="445px";
        sipka.style.right="90px";
        sipka.style.rotate="180deg";
        sipka.style.zIndex= 103;
        sipka.setAttribute("onclick", "telefonDolu()");
        button.style.zIndex=103;
        if (last_screen == "images/telefon-messages-menuNewMessage.svg") {openEmailConversation.style.zIndex = "103";}
        setTimeout(() => { telefon.setAttribute("src", last_screen); }, 100);
    }

}
function telefonDolu(){
    if (move) {
        telefon.setAttribute("src", screens["OFF"][0]);
        telefon.style.zIndex= 100;
        telefon.style.bottom = "-370px";
        telefon.style.width= "200px";
        sipka.style.zIndex= 100;
        sipka.style.bottom="4vh";
        sipka.style.right="65px";
        sipka.style.rotate="0deg";
        button.style.zIndex = 1;
        openEmailConversation.style.zIndex = "0";
        sipka.setAttribute("onclick", "telefonNahoru()");
    }
}

function changeTelephoneScreen(screen){
    if (move){
        if (screen == "Messages"){
            if (sendSms) {
                screen = screens[screen][1];
                openEmailConversation.style.zIndex = "103";
            }else{screen = screens[screen][0];openEmailConversation.style.zIndex = "0";}
        }else {screen = screens[screen];openEmailConversation.style.zIndex = "0";}
        telefon.setAttribute("src", screen[0]);
        button.setAttribute("id", screen[1]);
        button = document.getElementById(screen[1]);
        button.setAttribute("onclick", "changeTelephoneScreen('"+screen[2]+"')")
        if (screen[2] != null) {last_screen = screen[0];}
    }
}

window.addEventListener('keydown', (event) => {
    if (event.keyCode===38 && sipka.style.rotate == "0deg" && move){ /*↑*/
        telefonNahoru();
    }
    else if (event.keyCode===40 && sipka.style.rotate == "180deg" && move){ /*↓*/
        telefonDolu();
        if ((blackscreen.style.zIndex == 1 || blackscreen.style.zIndex == "") && !bug){
            setTimeout(() => { congratsYouFoundABug() }, 200);
        }else{setTimeout(() => { telefon.setAttribute("src", "images/telefon-off.svg");}, 100);}
    }
function congratsYouFoundABug(){
    if (telefon.getAttribute("src") != "images/telefon-off.svg") {
        telefon.setAttribute("src", "images/nosignal.gif");
        move = false;
        telefon.style.zIndex= 102;
        telefon.style.bottom = "-40px";
        telefon.style.width= "250px";
        sipka.style.bottom="445px";
        sipka.style.right="90px";
        sipka.style.rotate="180deg";
        sipka.style.zIndex= 103;
        setTimeout(() => {
            a = document.getElementById("powerOffButton");
            b = document.getElementById("blackscreen");
            b.style.backgroundImage = "url('../images/bluecreen.png')";
            a.click();
        }, 2000);
        setTimeout(() => {
            b.style.backgroundImage = "";
            move = true;
            bug = true;
            telefonDolu();
        },6000)
        setTimeout(() => {firstTurnOn();}, 6500)
    }
}
})

