let currentLevel = 1;

function nextLevel(){
    if (currentLevel == 1 && returnLang() == "default")
        currentLevel += 1;
}

function returnCurrentLevel(){
    return currentLevel
}