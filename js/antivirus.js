function changeScanningType(scanType){   
    document.getElementById("av_scanBTN").innerHTML = scanType + " scan";
}

function startScan(){
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
    setTimeout(() => {text.innerHTML += "<p>Scanning memory</p>"; status.innerHTML = "<p>✓</p><p>✓</p><p>...</p>";}, 4000);
    setTimeout(() => {text.innerHTML += "<p>Turning on Firewall</p>"; status.innerHTML = "<p>✓</p><p>✓</p><p>✓</p><p>...</p>";}, 6000);
    setTimeout(() => {status.innerHTML = "<p>✓</p><p>✓</p><p>✓</p><p>✓</p>";}, 8000);
    setTimeout(() => {button.innerHTML = "Everything is OK"; button.style.display = "unset"; document.getElementById("av_scanBTN").innerHTML = document.getElementById("scan-type-options").value + " scan";}, 8500); /*✓✗*/
    }, 3200);
}

function stopScan(){
    document.getElementById('av_scanInfoBTN').style.display = "none";
    document.getElementById('av_footer').setAttribute('height', '20%');
    document.getElementById('av_scanInfo').style.display = "none";
    document.getElementById('av_footer').style.height = '20%';
    document.getElementById('av_scanBTN').innerHTML = document.getElementById('scan-type-options').value + " scan";
}