let jeMisto = false;
let ongoing = false;

function AVInstall(){
    //udělat podmínku, která bude kontrolovat jestli "je místo"

    //není místo
    if(ongoing == false && jeMisto==false){
        ongoing = true;
        document.getElementsByClassName("progress_bar_bg")[0].style.display="block";
        document.getElementsByClassName("progress_bar")[0].style.width="250px";
        setTimeout(()=>{
        document.getElementById("wizardErrorTitle").innerHTML = "Instalace přerušena!";
        document.getElementById("wizardErrorText").innerHTML = "Nedostatek místa v uložišti!";
        ongoing = false;}, 5000);
    }
    else{console.log("ještě to jede")};
}