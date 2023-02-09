/*System Register*/
let systemRegister = {};

function addToSystemRegister(appID, appTitle){
    if (!(appID in systemRegister)){
        systemRegister[appTitle] = appID;
        return true;
    }
    else{
        console.warn("[Register] AppID: " + appID + "("+appTitle+") already exists in system register");
        return false;
    }
}

function getFromSystemRegister(appID){
    if (appID in systemRegister){
        return systemRegister[appID];
    }
    else{
        return null;
    }
}

/*Register*/
function addToRegister(key, value){
    localStorage.setItem(key, value);
}

function getFromRegister(key){
    if (localStorage.getItem(key) != null){
        return localStorage.getItem(key);
    }
    else{
        return null;
    }
}

function removeFromRegister(key){
    if (localStorage.getItem(key) != null){
        localStorage.removeItem(key);
        return true;
    }
    else{
        console.warn("[Register] Key: " + key + " does not exist in register");
        return false;
    }
}

function clearRegister(submit){
    if (submit == "submit"){
        localStorage.clear();
        console.log("[Register] Register cleared");
    }
    else{
        console.warn("[Register] Clearing register requires submit");
        console.error("[Register] Be careful when clearing register!");
    }
}