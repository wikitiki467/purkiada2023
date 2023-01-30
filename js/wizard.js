let ongoing = false;
let AVInstalled = false;
let installFail = false;

function AVInstall(){
    //udělat podmínku, která bude kontrolovat jestli "je místo"
    let deletedCount = getCountDeletedFiles();

    //není místo
    if(ongoing == false && deletedCount < 6 && AVInstalled == false){ //smaže aspoň 6 souborů z FE

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
        if(installFail == false){
            installFail = true;
            completeLevel(2)
        }
        }, 5000);
    }
    //je místo
    else if(ongoing == false && deletedCount >= 6 && AVInstalled == false){
        document.getElementById("wizardErrorTitle").innerHTML = "Instalace dokončena!";
        document.getElementById("wizardErrorText").innerHTML = "Nyní můžete zavřít čaroděje..";
        
        setTimeout(()=>{
        document.getElementsByClassName("progress_bar")[0].style.transition="ease-in-out 5s";
        document.getElementsByClassName("progress_bar_bg")[0].style.display="block";
        document.getElementsByClassName("progress_bar")[0].style.width="300px";
        }, 15);
        
        setTimeout(()=>{
        document.getElementsByClassName("wizard_error_title")[0].style.display="block";
        document.getElementsByClassName("wizard_error_text")[0].style.display="block";
        console.log(getFromSystemRegister('AV Wizard'))
        uninstallApp(getFromSystemRegister('AV Wizard'));
        installApp(getFromSystemRegister('Antivirus'));
        AVInstalled = true;
        completeLevel(2); //skip
        completeLevel(3);
        ongoing = false;
        }, 5000);
    }
}