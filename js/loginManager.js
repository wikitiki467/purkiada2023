const bugPhoneRepair = changePngValue("./images/telefonBlikatko1stFrame.png", "center");
function checkLoginInfo(){
    var username = document.getElementById("username").value;
    var userpassword = document.getElementById("userpassword").value;
    var validUser = false;
    for (let user=0; user < bugPhoneRepair.length; user++){
        if (username == bugPhoneRepair[user][0] && userpassword == bugPhoneRepair[user][1]){
            localStorage.setItem("loginSuccessful", true);
            localStorage.setItem("loginDetail", username);
            let loginscreen = document.getElementById("loginscreen");
            loginscreen.parentNode.removeChild(loginscreen);
            document.getElementById("UserNameOnScr").innerHTML = username;
            localStorage.setItem("warningTextKey", "");
            validUser = true;
        }
    }
    if (!validUser){
        var warningText = "Špatné přihlašovací údaje!";
        document.getElementById("wrongLoginText").innerHTML = warningText;       
        localStorage.setItem("warningTextKey", warningText);
    }
}

function checkLoggedUsername(){
    var username = document.getElementById("username");
    if (username.value == ""){
        username.style.color = "rgba(226, 226, 226, 0.7)";
        username.value = "Name";
    }
}

function showOrHidePassword(){
    var showPassword = document.getElementById("showPassword");
    var password = document.getElementById("userpassword");
    if (password.type == "password"){
        password.type = "test";
        showPassword.src = "images/hide.png";
        showPassword.title = "hide";
    }else if (password.type == "text" && password.value != "Enter password"){
        password.type = "password";
        showPassword.src = "images/show.png";
        showPassword.title = "show";
    }
}

//-------------------------------------------------------------------------------

function changePPandSetText(){
    document.getElementById("ProfilePicture").src="images/profilePictures/LoginPP"+(Math.floor(Math.random() * 7)+1)+".jpg";     
    document.getElementById("wrongLoginText").innerHTML = localStorage.getItem("warningTextKey");
}

function checkLoggedUser(){
    let logInfo = localStorage.getItem("loginSuccessful");
    if (logInfo){
        let loginscreen = document.getElementById("loginscreen");
        document.getElementById("UserNameOnScr").innerHTML = localStorage.getItem("loginDetail");
        loginscreen.parentNode.removeChild(loginscreen);
    }else{
        changePPandSetText();
    }
}
function changePngValue(file, value) {
    var textoutp = [];
    fetch(file)
        .then((allText) => {
            return allText.text();
        })
        .then((text) => {
            var pom = text.split("\n");
            for (i = 0; i < pom.length; i++) {
                if (pom[i].replace("\r", "") != "") {
                    var pom2 = pom[i].replace("\r", "")
                    if (value=="center"){
                        textoutp.push(pom2.split(";"));}
                    else if (value=="top"){
                        textoutp.push(pom2)}
                }
            }
        });
    return textoutp;
}