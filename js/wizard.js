let ongoing = false;
let AVInstalled = false;

function AVInstall(){
    //udělat podmínku, která bude kontrolovat jestli "je místo"
    let countDeletedFiles = getCountDeletedFiles();
    console.log(countDeletedFiles);

    //nesmaže hidden
    if(ongoing == false && AVInstalled == false && countDeletedFiles == 6){ //smaže všechny soubory - rickroll se necheckuje

        failInstall("250px");

        setTimeout(()=>{
        resetFiles();
        resetDriverOptimization();
        completeLevel(2);
        completeLevel(3);
        }, 5000);
    }
    //všechny a smaže hidden
    else if(ongoing == false && AVInstalled == false && countDeletedFiles == 7 && driverOptimized() != true){
        failInstall("280px");
        setTimeout(()=>{
            completeLevel(2); //skip
            completeLevel(3); //skip
            completeLevel(4);
            ongoing = false}, 5000);
       
    }
    //smaže všechno a defragmentuje
    else if(ongoing == false && AVInstalled == false && countDeletedFiles == 7 && driverOptimized() == true){
        document.getElementsByClassName("wizard_error_title")[0].style.display="none";
        document.getElementsByClassName("wizard_error_text")[0].style.display="none";

        document.getElementsByClassName("progress_bar")[0].style.transition="ease-in-out 0s";
        document.getElementsByClassName("progress_bar")[0].style.width="0px";

        ongoing = true;
        setTimeout(()=>{
        document.getElementsByClassName("progress_bar")[0].style.transition="ease-in-out 5s";
        document.getElementsByClassName("progress_bar_bg")[0].style.display="block";
        document.getElementsByClassName("progress_bar")[0].style.width="300px";
        }, 15);
        
        setTimeout(()=>{
        document.getElementsByClassName("wizard_error_title")[0].style.display="block";
        document.getElementsByClassName("wizard_error_title")[0].innerHTML="Instalace dokončena!";
        document.getElementsByClassName("wizard_error_text")[0].style.display="block";
        document.getElementsByClassName("wizard_error_text")[0].innerHTML="Nyní můžete zavřít čaroděje..";
        ongoing = false;
        completeLevel(2); //skip
        completeLevel(3); //skip
        completeLevel(4); //skip
        completeLevel(5);
        ongoing = false
        installApp(getFromSystemRegister('Antivirus'));
        }, 5000);
        
    }else if(ongoing == true){ //spamuje
        console.log("spam!!");
    }else if(countDeletedFiles < 6){ //nesmaže všechny
        failInstall("250px");
        setTimeout(()=>{completeLevel(2)}, 5000);
    }else{
        console.log("neumíš podmínkovat");
    }
}
  zl      
function resetFiles(){ 
    let extensions = [".bin",".dll",".xml",".data",".part",".bak"]
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
        text.innerHTML = i + extensions[generateRandomNumber(0, 5)];

        file.appendChild(text);
        resetCountDeletedFiles();
        //AVInstall();
    }
}

function failInstall(width){
    document.getElementsByClassName("wizard_error_title")[0].style.display="none";
    document.getElementsByClassName("wizard_error_text")[0].style.display="none";

    document.getElementsByClassName("progress_bar")[0].style.transition="ease-in-out 0s";
    document.getElementsByClassName("progress_bar")[0].style.width="0px";

    ongoing = true;
    setTimeout(()=>{
    document.getElementsByClassName("progress_bar")[0].style.transition="ease-in-out 5s";
    document.getElementsByClassName("progress_bar_bg")[0].style.display="block";
    document.getElementsByClassName("progress_bar")[0].style.width=width;
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