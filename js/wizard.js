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
        if (document.getElementById("file3")){
            resetCountDeletedFiles();

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
                AVInstall();
            }
        }else{
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
                completeLevel(3);

                ongoing = false;
            }, 1000);
        }
    }
}