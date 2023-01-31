var webContent = document.getElementById("main_webbrowser_div");
var searchBar = document.getElementById("browserSearchBar");
var currentPage = "";
var pageHistory = [];
var historyPage = 0;
//level variables
var emailShow = false;
/*const twoFactorCode = generateTwoFactorCode();*/
var sendSms = false;
var emailcode = changePngValue("./images/wallpaper.png", "center");

//control web content
function searchBarControler(site=""){ //jediná funkce, která se volá mimo tento script
    webContent = document.getElementById("main_webbrowser_div");
    //currentPage = site;
    if (site == ""){
        searchBar = document.getElementById("browserSearchBar");
        currentPage = searchBar.value;
    }else{
        currentPage = site;
    }
    if (currentPage.includes("www.") || (currentPage.includes(".cz") || currentPage.includes(".com") || currentPage.includes(".tv"))){
        currentPage = currentPage.replace("www.", "");
        currentPage = currentPage.replace(".cz", "");
        currentPage = currentPage.replace(".com", "");
        currentPage = currentPage.replace(".tv", "");
    }
    for (let i = historyPage; i>pageHistory.length -1;i--){
        pageHistory.pop();
    }
    pageHistory.push(currentPage);
    historyPage = pageHistory.length -1;
    loadSite();
}

function deleteContent(){
    webContent.style.backgroundImage = "none";
    webContent.style.color = "#2b2a33";
    webContent.innerHTML = "";

}

async function loadSite(){
    webContent = document.getElementById("main_webbrowser_div");
    searchBar = document.getElementById("browserSearchBar");
    deleteContent();
    webContent.style.backgroundColor = "white";
    await sleep(500);
    deleteContent();
    findSite();
}

function findSite(){
    switch (currentPage){
        case "twitch":
        case "twitch.tv/venca1":
            venca();
            break;
        case "email":
            email();
            break;
        // case "generatecode":
        //     generatecode();
        //     break;
        case "enigmaManual":
            enigmaManual();
            break;
        default:
            nonExistingSite();
    }
}

function historyUp(){
    if (pageHistory.length-1 != historyPage){
        historyPage++;
        currentPage = pageHistory[historyPage];
        loadSite();
    }
}

function historyDown(){
    if (0 != historyPage){
        historyPage--;
        currentPage = pageHistory[historyPage];
        loadSite();
    }
}
//sites content
function nonExistingSite(){
    webContent.style.backgroundColor = "#2b2a33";
    let newText = document.createElement("p");
    newText.innerHTML = "We did not find this page: '"+currentPage+"'";
    newText.style.color = "white";
    webContent.style.cssText = "display: flex; justify-content: center; align-items: center;"
    webContent.appendChild(newText);
}

function venca(){
    searchBar.value = "www.twitch.tv/venca1450";
    webContent.style.backgroundImage = "url('images/WebBrowser/twitchBackground.png')";
    webContent.style.backgroundSize = "100% 100%";
    webContent.style.backgroundRepeat = "no-repeat";
}

function email(){
    searchBar.value = "www."+currentPage+".com";
    if (emailShow){
        webContent.style.backgroundImage = "url('images/WebBrowser/yesemail.png')";
    }else{
        sendSms = true;
        localStorage.setItem("sendSMS", true);
        let newDiv = document.createElement("div");
        let newPasswordInput = document.createElement("input");
        let newButton = document.createElement("button");
        let newText = document.createElement("p");
        let newLogo = document.createElement("img");
        newDiv.style.marginTop = (webContent.clientHeight/2-80)+"px";
        newDiv.style.marginLeft = (webContent.clientWidth/2-100)+"px";
        newDiv.style.width = "200px";
        newDiv.style.position = "absolute";
        newDiv.setAttribute("id", "loginEmail");
        newLogo.src = "images/WebBrowser/emailLogo.png";
        newText.innerHTML = "Poslali jsme vám do SMS 6-místný ověřovací kód";
        newText.style.color = "black";
        newPasswordInput.style.height = "30px";
        newPasswordInput.style.width = "100%";
        newPasswordInput.style.margin = "0";
        newPasswordInput.setAttribute("id", "emailPasswordInput");
        newPasswordInput.setAttribute("onkeyup", "if(event.keyCode===13){emailSumbitButton.click()}")
        newButton.setAttribute("id", "emailSumbitButton");
        newButton.style.height = "30px";
        newButton.style.margin = "0";
        newButton.style.marginTop = "3px";
        newButton.style.cursor = "pointer";
        newButton.innerHTML = "Submit";
        newButton.setAttribute("onclick", "twoFactorEmail()");
        webContent.appendChild(newDiv);
        let div = document.getElementById("loginEmail");
        div.appendChild(newLogo);
        div.appendChild(newText);
        div.appendChild(newPasswordInput);
        div.appendChild(newButton);
        setTimeout(() => { if (last_screen == "images/telefon-messages-menuBlank.svg"){changeTelephoneScreen("Messages")}}, 2000)
    }
    webContent.style.backgroundSize = "100% 100%";
    webContent.style.backgroundRepeat = "no-repeat";
}

function enigmaManual(){
    searchBar.value = "www.enigmaManual.cz";
    webContent.style.backgroundImage = "url('images/enigmaInfo.png')";
    webContent.style.backgroundSize = "100% 100%";
    webContent.style.backgroundRepeat = "no-repeat";
}

function generatecode(){
    searchBar.value = "www."+currentPage+".com";
    let newDiv = document.createElement("div");
    let newText = document.createElement("p");
    let newButton = document.createElement("button");
    newDiv.style.marginTop = (webContent.clientHeight/2-20)+"px";
    newDiv.style.marginLeft = (webContent.clientWidth/2-100)+"px";
    newDiv.style.width = "auto";
    newDiv.style.position = "absolute";
    newDiv.setAttribute("id", "generatecodediv");
    newText.setAttribute("id", "generateText");
    newText.setAttribute("class", "unselectable");
    newText.style.color = "black";
    newButton.innerHTML = "Vygenerovat kód";
    newButton.setAttribute("onclick", "generateSafeCode()");
    newButton.style.cursor = "pointer";
    webContent.appendChild(newDiv);
    let div = document.getElementById("generatecodediv");
    div.appendChild(newText);
    div.appendChild(newButton);
    div.style.marginLeft = (webContent.clientWidth/2-div.clientWidth/2)+"px";
}

//other things
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function twoFactorEmail(){
    let userInput = document.getElementById("emailPasswordInput");
    if (userInput.value.toUpperCase() == emailcode[5]){
        emailShow = true;
        loadSite("email");
        localStorage.setItem("emailTFW", true);
    }else{
        userInput.style.backgroundColor = "red";
    }
}/*
function generateTwoFactorCode(){
    return (parseInt(Math.round(Math.random()*10)).toString())+
        (parseInt(Math.round(Math.random()*10)).toString())+
        (parseInt(Math.round(Math.random()*10)).toString())+
        (parseInt(Math.round(Math.random()*10)).toString())+
        (parseInt(Math.round(Math.random()*10)).toString())+
        (parseInt(Math.round(Math.random()*10)).toString());
}*/

function loadEmailData(){
    //load sms and email login
    sendSms = localStorage.getItem("sendSMS");
    emailShow = localStorage.getItem("emailTFW");
}

loadEmailData();
