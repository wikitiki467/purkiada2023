function changeScanningType(scanType){   
    document.getElementById("av_scanBTN").innerHTML = scanType + " sken";
}

var scanInProgress = false;

function startScan(){
    if(!scanInProgress){
        scanInProgress = true;
        let text = document.getElementById('av_scanInfo_text');
        let status = document.getElementById('av_scanInfo_status');
        let button = document.getElementById('av_scanInfoBTN');

        text.innerHTML = "";
        status.innerHTML = "";
        button.style.display = "none";

        document.getElementById('av_footer').style.height = '70%';
        document.getElementById('av_scanBTN').innerHTML = '...';
        document.getElementById('av_footer').setAttribute('height', '70%');

        setTimeout(() => {if(document.getElementById('av_footer').getAttribute('height') == '70%')document.getElementById('av_scanInfo').style.display = "flex";
        text.innerHTML = "<p>Scanning hard drive</p>";
        status.innerHTML = "<p>...</p>";

        setTimeout(() => {text.innerHTML += "<p>Scanning registers</p>"; status.innerHTML = "<p>✓</p><p>...</p>";}, 2000);
        if (document.getElementById("scan-type-options").value == "Fast"){
            setTimeout(() => {text.innerHTML += "<p>Scanning memory</p>"; status.innerHTML = "<p>✓</p><p>✓</p><p>...</p>";}, 4000);
            setTimeout(() => {text.innerHTML += "<p>Turning on Firewall</p>"; status.innerHTML = "<p>✓</p><p>✓</p><p>✓</p><p>...</p>";}, 6000);
            setTimeout(() => {status.innerHTML = "<p>✓</p><p>✓</p><p>✓</p><p>✓</p>";}, 8000);
            setTimeout(() => {button.innerHTML = "Everything is OK"; button.style.background = "rgb(59, 221, 59)"; button.style.display = "unset"; document.getElementById("av_scanBTN").innerHTML = document.getElementById("scan-type-options").value + " scan"; scanInProgress = false; completeLevel(8);}, 8500); /*✓✗*/
        }else{
            setTimeout(() => {text.innerHTML += "<p>Scanning memory</p>"; status.innerHTML = "<p>✓</p><p>✓</p><p>...</p>";}, 4000);
            setTimeout(() => {status.innerHTML = "<p>✓</p><p>✓</p><p>✗</p>";}, 8000);
            setTimeout(() => {button.innerHTML = "Virus found!"; button.style.background = "red"; button.style.display = "unset"; setTimeout(() => {scanInProgress = false; document.getElementById("av_scanBTN").innerHTML = document.getElementById("scan-type-options").value + " scan"; button.innerHTML = "Unable to remove!"}, 4500);}, 8500); /*✓✗*/
            setTimeout(() => {text.innerHTML += "<br>"; status.innerHTML = "<p>✓</p><p>✓</p><p>✗</p><p><br></p>";}, 8500);
            setTimeout(() => {text.innerHTML += "Removing virus"; status.innerHTML = "<p>✓</p><p>✓</p><p>✗</p><p><br></p><p>...</p>";}, 8500);
            setTimeout(() => {status.innerHTML = "<p>✓</p><p>✓</p><p>✗</p><p><br></p><p>✗</p>";}, 13000);
            setTimeout(() => {completeLevel(8); completeLevel(9);}, 13000);
            setTimeout(() => {document.getElementById('application' + getFromSystemRegister('Decrypt.exe')).setAttribute('onclick', 'focusWindow("Decrypt.exe"); completeLevel(10)'); installApp(getFromSystemRegister('Decrypt.exe'));}, 13000);
            setTimeout(() => {document.getElementsByClassName("store_content_right_item")[0].style.display="flex";}, 13000);
        }
        
        }, 3200);
    }
}

function startFileScan(isVir){
    focusWindow("Antivirus");
    if(!scanInProgress){
        scanInProgress = true;
        let text = document.getElementById('av_scanInfo_text');
        let status = document.getElementById('av_scanInfo_status');
        let button = document.getElementById('av_scanInfoBTN');

        text.innerHTML = "";
        status.innerHTML = "";
        button.style.display = "none";

        document.getElementById('av_footer').style.height = '70%';
        document.getElementById('av_scanBTN').innerHTML = '...';
        document.getElementById('av_footer').setAttribute('height', '70%');

        setTimeout(() => {if(document.getElementById('av_footer').getAttribute('height') == '70%')document.getElementById('av_scanInfo').style.display = "flex";
        text.innerHTML = "<p>Scanning file</p>";
        status.innerHTML = "<p>...</p>";

        if (isVir){
            setTimeout(() => {status.innerHTML = "<p>✗</p>";}, 2000);
            setTimeout(() => {button.innerHTML = "Virus found!"; button.style.background = "red"; button.style.display = "unset"; document.getElementById("av_scanBTN").innerHTML = document.getElementById("scan-type-options").value + " scan"; scanInProgress = false; setTimeout(() => {button.innerHTML = "Virus removed succesfully!"}, 4500);}, 2500); /*✓✗*/
        }else{
            setTimeout(() => {status.innerHTML = "<p>✓</p>";}, 2000);
            setTimeout(() => {button.innerHTML = "Everything is OK"; button.style.background = "rgb(59, 221, 59)"; button.style.display = "unset"; document.getElementById("av_scanBTN").innerHTML = document.getElementById("scan-type-options").value + " scan"; scanInProgress = false; completeLevel(8);}, 2500); /*✓✗*/
        }

        }, 3200);
    }
}

function stopScan(){
    document.getElementById('av_scanInfoBTN').style.display = "none";
    document.getElementById('av_footer').setAttribute('height', '20%');
    document.getElementById('av_scanInfo').style.display = "none";
    document.getElementById('av_footer').style.height = '20%';
    document.getElementById('av_scanBTN').innerHTML = document.getElementById('scan-type-options').value + " sken";
}