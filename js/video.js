function openVideo(file){
    document.getElementById("videoPlayer").src = file;
    focusWindow('Video přehrávač')
    setTimeout(() => {window_z_index(5);}, 50);   
}