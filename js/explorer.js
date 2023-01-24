let hiddenFilesShown = false;
function toggleHiddenFiles() {
    if (hiddenFilesShown) {
        var hiddenFiles = document.querySelectorAll('.hiddenFiles');
        for (var i = 0; i < hiddenFiles.length; i++) {
            hiddenFiles[i].classList.add('showHiddenFiles');
        }
        hiddenFilesShown = false;
    }
    else {
        var hiddenFiles = document.querySelectorAll('.hiddenFiles');
        for (var i = 0; i < hiddenFiles.length; i++) {
            hiddenFiles[i].classList.remove('showHiddenFiles');
        }
        hiddenFilesShown = true;
    }
}
function showHiddenFiles(state){ // state = true/false
    if (state){
        if (!hiddenFilesShown) return 
        var hiddenFiles = document.querySelectorAll('.hiddenFiles');
        for (var i = 0; i < hiddenFiles.length; i++) {
            hiddenFiles[i].classList.remove('showHiddenFiles');
        }
        hiddenFilesShown = false;
    } else if (!state){
        if (hiddenFilesShown) return 
        var hiddenFiles = document.querySelectorAll('.hiddenFiles');
        for (var i = 0; i < hiddenFiles.length; i++) {
            hiddenFiles[i].classList.add('showHiddenFiles');
        }
        hiddenFilesShown = true;
    }
}