function openVideo(file){
    document.getElementById("videoPlayer").src = file;
    moveWindow(5);
    openWindow(5);
    setTimeout(() => {window_z_index(5);}, 50);   
}