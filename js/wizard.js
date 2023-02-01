let ongoing = false;
let AVInstalled = false;

function AVInstall(){
    //udělat podmínku, která bude kontrolovat jestli "je místo"
    let countDeletedFiles = getCountDeletedFiles();
    console.log(countDeletedFiles);

    //nesmaže hidden
    if(ongoing == false && AVInstalled == false && countDeletedFiles == 6){ //smaže všechny soubory - rickroll se necheckuje

        failInstall();

        setTimeout(()=>{
        resetFiles();
        completeLevel(2);
        completeLevel(3);
        }, 5000);
    }
    //všechny a smaže hidden
    else if(ongoing == false && AVInstalled == false && countDeletedFiles == 7){
        setTimeout(()=>{
            document.getElementsByClassName("progress_bar")[0].style.transition="ease-in-out 5s";
            document.getElementsByClassName("progress_bar_bg")[0].style.display="block";
            document.getElementsByClassName("progress_bar")[0].style.width="300px";
        }, 15);
                
        setTimeout(()=>{
        document.getElementById("wizardErrorTitle").innerHTML = "Instalace dokončena!";
        document.getElementById("wizardErrorText").innerHTML = "Nyní můžete zavřít čaroděje..";
        document.getElementsByClassName("wizard_error_title")[0].style.display="block";
        document.getElementsByClassName("wizard_error_text")[0].style.display="block";

        installApp(getFromSystemRegister('Antivirus'));

        AVInstalled = true;
        
        completeLevel(2); //skip
        completeLevel(3); //skip
        completeLevel(4);

        ongoing = false;
        }, 5000);
    }else if(ongoing == true){ //spamuje
        console.log("spam!!");
    }else if(countDeletedFiles < 6){ //nesmaže všechny
        failInstall();
        setTimeout(()=>{completeLevel(2)}, 5000);
    }else{
        console.log("neumíš podmínkovat");
    }
}
        
function resetFiles(){ 
    for (let i = 0; i < 6; i++){
        const file = document.createElement("div");
        file.className = "fe_files";
        file.id = "file"+i;
        file.setAttribute("onclick", "focusWindow('File'); changeFileText('"+i+"')");
        
        document.getElementById("fe_main").appendChild(file);

        const image = document.createElement("img");
        image.className = "fe_files_img";
        image.src = "images/levelLogos/DARK/fileDefault.png";

        file.appendChild(image);

        const text = document.createElement("p");
        text.innerHTML = i;

        file.appendChild(text);
        resetCountDeletedFiles();
        //AVInstall();
    }
}

function failInstall(){
    document.getElementsByClassName("wizard_error_title")[0].style.display="none";
        document.getElementsByClassName("wizard_error_text")[0].style.display="none";

        document.getElementsByClassName("progress_bar")[0].style.transition="ease-in-out 0s";
        document.getElementsByClassName("progress_bar")[0].style.width="0px";

        ongoing = true;
        setTimeout(()=>{
        document.getElementsByClassName("progress_bar")[0].style.transition="ease-in-out 5s";
        document.getElementsByClassName("progress_bar_bg")[0].style.display="block";
        document.getElementsByClassName("progress_bar")[0].style.width="250px";
        }, 15);
        
        setTimeout(()=>{
        document.getElementsByClassName("wizard_error_title")[0].style.display="block";
        document.getElementsByClassName("wizard_error_text")[0].style.display="block";
        ongoing = false;
        }, 5000);
}
/*for (let i = 0; i < 6; i++){
    const file = document.createElement("div");
    file.className = "fe_files";
    file.id = "file"+i;
    file.setAttribute("onclick", "focusWindow('File'); changeFileText('"+i+"')");
    
    document.getElementById("fe_main").appendChild(file);

    const image = document.createElement("img");
    image.className = "fe_files_img";
    image.src = "images/levelLogos/DARK/fileDefault.png";

    file.appendChild(image);

    const text = document.createElement("p");
    text.innerHTML = i;

    file.appendChild(text);
    AVInstall();
}*/