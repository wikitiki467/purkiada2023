function startVirusGame() {
    let popup = new SystemPermissionPopup("Virus.exe", "changeLang('ascii');showPanBackor()");
    popup.canClose = false;
    popup.troll = true;
    popup.show();
}


function completeLevel(levelNumber) {
    if (levelNumber == getCurrentActiveLevel() + 1) {
        incrementCurrentActiveLevel();
        let backor = document.getElementById('PanBackorGUI');
        let backorText = document.querySelector("#PanBackorGUI div.text");
        // backor.style.transition = 'backgroundColor 2s';
        // backorText.style.transition = 'backgroundColor 2s';
        backor.style.backgroundColor = 'red';
        backorText.style.backgroundColor = 'red';
        sleep(2000).then(() => {
            // backor.style.transition = 'none';
            // backorText.style.transition = 'none';
            backor.style.backgroundColor = 'black';
            backorText.style.backgroundColor = 'black';
        });
    }
}

document.querySelectorAll('form').forEach(function (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        let formData = new FormData(form)
        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "multipart/form-data" },
            body: new URLSearchParams(formData).toString()
        }).then(() => ntlFormSuccess()).catch((error) =>
            alert(error))
    });

    function ntlFormSuccess() {
        console.log("form submitted")
        form.reset();
    }
});

function validateForm() {
    let errors = [];
    // loop through all input fields
    for (var i = 0; i < document.forms[0].length; i++) {
        // if the field is empty
        if (document.forms[0][i].value == "") {
            // add the field name to the errors array
            errors.push(document.forms[0][i].name);
        }
    }
    // if there are errors
    if (errors.length > 0) {
        console.log("The following fields are required: " + errors.join(", "));
        return false;
    }
    return true;
}

