var webContent = document.getElementById("main_webbrowser_div");
var searchBar = document.getElementById("browserSearchBar");
var currentPage = "";
var pageHistory = [];
var historyPage = 0;
//level variables
var emailShow = false;
/*const twoFactorCode = generateTwoFactorCode();*/
var sendSms = false;
//var emailcode = changePngValue("./images/wallpaper.png", "center");

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
    if (currentPage.includes("www.") || (currentPage.includes(".cz") || currentPage.includes(".com") || currentPage.includes(".tv")) || currentPage.includes(".ru")){
        currentPage = currentPage.replace("www.", "");
        currentPage = currentPage.replace(".cz", "");
        currentPage = currentPage.replace(".com", "");
        currentPage = currentPage.replace(".tv", "");
        currentPage = currentPage.replace(".ru", "");
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
        case "error":
            errorChecker();
            break;
        // case "generatecode":
        //     generatecode();
        //     break;
        case "enigmaManual":
            enigmaManual();
            break;
        case "antivirus":
            antivirus();
            break;
        case "startVirus":
            browserWinVirus();
            browserTabVirus();
            break;
        // case "virus":
        //     if (virusWinEnabled){
        //         virus();
        //         break;
        //     }
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

function errorChecker(){
    webContent.style.backgroundImage = "url('images/WebBrowser/error_background.jpg')";
    webContent.style.backgroundSize = "100% 100%";
    webContent.style.backgroundRepeat = "no-repeat";
    webContent.style.display = "flex";
    webContent.style.flexDirection = "column";
    webContent.style.justifyContent = "center";
    webContent.style.alignItems = "center";
    let headerDiv = document.createElement("div");
    let header = document.createElement("h1");
    header.innerText = "Error Checker";
    header.style.color = "White";
    header.style.fontSize = "50px";
    headerDiv.style.backgroundColor = "#0b2233";
    headerDiv.style.padding = "10px";
    headerDiv.style.marginBottom = "50px";
    headerDiv.style.borderRadius = "10px";
    let div = document.createElement("div");
    let input = document.createElement("input");
    let button = document.createElement("button");
    button.innerText = "Hledat";
    button.style.height = "20px";
    button.style.width = "60px";
    button.style.marginTop = "10px";
    button.style.textAlign = "center";
    button.style.color = "black";
    button.style.cursor = "pointer";

    div.style.display = "flex";
    div.style.backgroundColor = "#0b2233";
    div.style.flexDirection = "column";
    div.style.justifyContent = "center";
    div.style.alignItems = "center";
    div.style.width = "50%";
    div.style.borderRadius = "10px";
    div.style.padding = "10px";

    input.setAttribute("placeholder", "Zadejte číslo chyby");
    div.appendChild(input);
    div.appendChild(button);
    headerDiv.appendChild(header);
    webContent.appendChild(headerDiv);
    webContent.appendChild(div);
    let answer = document.createElement("p");
    button.onclick = function() {
        if(input.value == "455") {
            answer.innerText = "Correct";   
        }
        else {
            answer.innerText = "Incorrect";
        }
        webContent.appendChild(answer); 
    };
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
        setTimeout(() => { if (last_screen == "images/telefon/telefon-messages-menuBlank.svg"){changeTelephoneScreen("Messages")}}, 2000)
    }
    webContent.style.backgroundSize = "100% 100%";
    webContent.style.backgroundRepeat = "no-repeat";
}

function enigmaManual(){
    searchBar.value = "www.enigmaManual.cz";
    webContent.style.backgroundImage = "url('images/general/enigmaInfo.png')";
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

let purktivirusCode = Math.random().toString(36).substring(5);
function getPurktivirusCode(){
    return purktivirusCode;
}
function antivirus(){
    webContent.style.backgroundColor = "red";
    webContent.style.display = "flex";
    webContent.style.flexDirection = "column";
    webContent.style.justifyContent = "center";
    webContent.style.alignItems = "center";
    let mainText = document.createElement("h1");
    mainText.innerText = "PurktiVirus";
    mainText.style.color = "white";
    mainText.style.fontSize = "50px";
    mainText.style.margin = "0";
    let newDiv = document.createElement("div");
    let header = document.createElement("h1");
    let text = document.createElement("p");
    let button = document.createElement("button");
    let code = document.createElement("p");
    
    header.innerText = "VAROVÁNÍ";
    text.innerText = "Vaše předplatné PurktiVirus vypršelo. Chcete-li PurktiVirus používat i nadále, obnovte prosím své předplatné.";
    text.classList.add("unselectable");
    button.innerText = "PRODLOUŽIT PŘEDPLATNÉ";

    newDiv.style.display = "flex";
    newDiv.style.flexDirection = "column";
    newDiv.style.justifyContent = "center";
    newDiv.style.alignItems = "center";
    newDiv.style.width = "85%";
    newDiv.style.maxWidth = "500px";
    newDiv.style.padding = "5%";
    newDiv.style.backgroundColor = "white";
    newDiv.style.borderRadius = "10px";
    newDiv.style.boxShadow = "0px 0px 10px black";
    newDiv.style.textAlign = "center";
    newDiv.setAttribute("id", "antivirusDiv");
    header.style.marginTop = "10px";
    text.style.marginTop = "10px";
    button.style.marginTop = "10px";
    button.style.cursor = "pointer";
    button.style.width = "unset";
    button.style.padding = "10px 20px";
    button.id = "antivirusButton";
    button.setAttribute("onclick", 'purktivirusCode = purktivirusCode==""?Math.random().toString(36).substring(5):purktivirusCode;document.getElementById("antivirusButton").remove();document.getElementById("antivirusCode").innerText = purktivirusCode;');
    code.style.marginTop = "10px";
    code.style.color = "red";
    code.id = "antivirusCode";

    newDiv.appendChild(header);
    newDiv.appendChild(text);
    newDiv.appendChild(button);
    newDiv.appendChild(code);

    webContent.appendChild(mainText);
    webContent.appendChild(newDiv);
}

// browser virus
let virusTabEnabled = false;
function browserTabVirus(){
    
    $('.browserTab.virusTab').each(function(){
        $(this).css('display', virusTabEnabled?'none':'flex');
        // get <p> element and change text
        $(this).children('p').text(Math.random().toString(36).substring(7));
    });
    // $('.browserTab:not(.virusTab)').each(function(){
    //     $(this).css('display', virusTabEnabled?'flex':'none');
    // });
    virusTabEnabled = !virusTabEnabled;

}
let virusWinEnabled = false;
async function browserWinVirus(){
    virusWinEnabled = !virusWinEnabled;
    let virIMGs = ["virus1.png", "twitchBackground.png", "milfs.png", "ram.png", "free-yPod.png"]
    let historyIMG = [];
    let defaultPath = "images/WebBrowser/"
    while (virusWinEnabled){
        // random from virIMGs
        if (virIMGs.length == 0) { virIMGs = historyIMG; historyIMG = [];} 
        let randomIndex = Math.floor(Math.random()*virIMGs.length);
        let currentImg = virIMGs[randomIndex];
        historyIMG.push(currentImg);
        virIMGs.splice(randomIndex, 1);

        webContent = document.getElementById("main_webbrowser_div");
        searchBar = document.getElementById("browserSearchBar");
        searchBar.value = Math.random().toString(36).substring(2);
        let randomDomain = ["ru", "online", "com", "net", "org", "info", "biz", "us", "uk", "co.uk", "ca", "eu", "ru", "com.ru", "net.ru", "org.ru"];
        searchBar.value += "." + randomDomain[Math.floor(Math.random()*randomDomain.length)];
        deleteContent();
        webContent.style.backgroundColor = "white";
        await sleep(500);
        deleteContent();
        webContent.style.backgroundColor = "black";
        webContent.style.backgroundImage = "url('" + defaultPath + currentImg + "')";
        webContent.style.backgroundSize = "100% 100%";
        // random sleep 4-10s
        await sleep(Math.floor(Math.random()*4000)+3000);
    }
    
}
//browserWinVirus();
//browserTabVirus();
