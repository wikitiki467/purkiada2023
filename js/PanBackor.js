let panBackorGUI = document.getElementById("PanBackorGUI")
let panBackorDialogText = document.getElementById("PanBackorDialogText");
let shown = false;
let panBackorDialogy = [["Zdravím, jsem pan Bačkor. Vypadá to, že tvůj počítač byl 'zavirován', ale není se čeho bát. Společnými silami se pokusíme dát vše do pořádku. Klikni na mě!", "Pode mnou najdeš šipky pro posouvání dialogu a kdykoliv mě můžeš zavolat tímto tlačítkem.",
"Zvláštní... Zdá se, že spostu textu nedává smysl. Je možné, že virus záměrně změnil systémový jazyk počítače, aby bylo těžší se ho zbavit.<br>Tím bych asi začal..."],
["Skvěle! To jednoduché máme za sebou. Vypadá to, že ještě nemusíme natáhnout bačkory.;)", "Vidím, že tvuj počítač není chráněn antivirem. Nevadí, jeden se dá rychle stáhnout z BACKOR Storu™."],
["Ale né! Zdá se, že virus zaplnil disk soubory a bez volného místa antivir nenainstalujeme. Rychle, musíme se všech těch souborů zbavit!"],
["Zvláštní. Vypadá to, že vir vytvořil soubory znovu. Někde musí být soubor, co je vytváří."],
["Na počítači už nejsou žádné velké soubory, co by stály za smazání. Možná je něco se samotným diskem?"],
["Výborně! Teď spusť antivirus!"],
["Abychom mohli antivirus použít, musíme opsat aktivační kód z jeho stránek. Rychle do Browseru!"],
["Teď už stačí jen zapnout skenování."], 
["Rychlý sken nic nedetekuje. Potřebujeme něco důkladnějšího."],
["Ale né, antivirus nedokázal virus smazat celý, vypadá to, že to budeme muset udělat sami!", "Antivirus nám alespoň vytvořil dekryptační nástroj, s jehož pomocí virus smažeme."],
["Vypadá to, že pro odstranění viru potřebujeme kód, který se skládá ze tří částí. Napadá mě, že bychom mohli zastavit procesy viru.. možná nám to pomůže.", "K tomu budeme potřebovat terminál - stáhni si ho z BACKOR Storu!"],
["Terminál je úžasné a velmi užitečné místo, můžeme skrz něj zjistit všelijaké věci.", "Bohužel je to taky místo velmi obsáhlé a pro lajka nepřehledné, navíc si musíš pamatovat různé příkazy.", "Příkaz 'help' by nám mohl pomoci, zjistit příkaz pro zobrazení aktivních procesů... Zavolej ho!"],
["Ale ne, virus koruptoval grafiku terminálu a příkaz je teď nečitelný! Naštěstí online máme help centrum se všemi důležitými příkazy, najdi ho a použij příkaz pro zobrazení bežících programů."],
["Teď když vidíme všechny procesy, bude jednoduché ukončit procesy viru."], //13 
["Výborně! První proces ukončen.. Zbývají ještě 2."], //14
["Ještě 1 proces a jsme hotovi."], //15
["Virus se zhroutil a jeho chybová zpráva byla napsána do konzole. Zpráva rozhodně bude první část kódu!"], //16
["Virus se pokusil počítač zhodit a odhlásit nás. Naštěstí se mi podařilo dostat zpátky než změnil heslo.", "Systém na plochu vypsal chybový kód pádu PC. Zkus o tom kódu zjistit něco online."], //17
["Zkus dát tenhle kód do toho dekryptačního nástroje. Snad to bude náše druhá část kódu."], //18
["Skvěle! Bohužel nemám ponětí kde najít poslední část kódu...", "Zkusím se podívat do systémových složek a registrů, kde nemáš přístup.", "Kdyby se cokoliv stalo, tak mi budeš muset proskenovat složku antivirem.", " "], //19 
["Mám ten kód! Rychle ho tam opiš! Vir mi napadl složku a co nevidět se zhroutím! Ten kód je- ..."], //20
["Děkuji, zachránil jsi mě! Jak jsem říkal, kód je "+getCode(2)], //21
["Výborně, úspěšně jsi odviroval počítač a naše cesta tady skončila. Budu se na tebe těšit, až v září nastoupíš na Purkyňku!", "Konec"]]; //22

let currentDialog = 0;
/*Current level*/
var currentActiveLevel = 0;

function getCurrentActiveLevel(){
    return currentActiveLevel;
}

function incrementCurrentActiveLevel(){
    currentActiveLevel += 1;
    currentDialog = 0;
    changePanBackorDialog(panBackorDialogy[currentActiveLevel][currentDialog]);
}

function panBackorBTN(){
    if (shown){
        hidePanBackor();
        shown = false;
    }else{
        showPanBackor();
        shown = true;
    }
}

function showPanBackor(){
    shown = true;
    panBackorGUI.style.right = "-54vw";
    document.getElementById("backor_controls").style.display = "flex";
}

function hidePanBackor(){
    shown = false;
    panBackorGUI.style.right = "-90vw";
    document.getElementById("backor_controls").style.display = "none";
}

function changePanBackorDialog(text){
    panBackorDialogText.innerHTML = text;
}

changePanBackorDialog(panBackorDialogy[currentActiveLevel][currentDialog])

function switchPanBackorDialog(direction){
    // if (currentDialog < panBackorDialogy.length-1 && direction == 1) currentDialog++, changePanBackorDialog(panBackorDialogy[currentDialog])
    // if (currentDialog > 0 && direction == -1) currentDialog--, changePanBackorDialog(panBackorDialogy[currentDialog])
    if (currentDialog + direction < panBackorDialogy[currentActiveLevel].length && currentDialog + direction >= 0) {
        currentDialog += direction;
        changePanBackorDialog(panBackorDialogy[currentActiveLevel][currentDialog]);
        PanBackor19(); //na 20lvl jde hledat kód :/
        PanBackor20();
        PanBackor23();
        /*make PanBackorPointer visible*/
        if(currentActiveLevel == 0 && currentDialog == 1){
            document.getElementById("PanBackorPointer").style.display = "block";
        }else{
            document.getElementById("PanBackorPointer").style.display = "none";
        }
    } else {
        changePanBackorDialog(panBackorDialogy[currentActiveLevel][direction > 0 ? panBackorDialogy[currentActiveLevel].length - 1 : 0]);
    }
}
// switch dialog on arrows press
document.addEventListener("keydown", function(event) {
    if (!shown) return;
    if (event.key == "ArrowLeft") {
        switchPanBackorDialog(-1);
    } else if (event.key == "ArrowRight") {
        switchPanBackorDialog(1);
    }
});

// move eyes with mouse

$("#contentDisplay").mousemove(function(event) {
    var eye = $(".eye");
    // console.log('eye', eye);
    var x = (eye.offset().left) + (eye.width() / 2);
    var y = (eye.offset().top) + (eye.height() / 2);
    var rad = Math.atan2(event.pageX - x, event.pageY - y);
    var rot = (rad * (180 / Math.PI) * -1) + 180;
    eye.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
    });
});
$("#contentDisplay").mouseleave(function(event) {
    var eye = $(".eye");
    eye.css({
        'display': 'none'
    });
});
$("#contentDisplay").mouseenter(function(event) {
    var eye = $(".eye");
    eye.css({
        'display': 'block'
    });
});
$(".Backor").mouseenter(function(event) {
    var eye = $(".eye");
    eye.css({
        'display': 'none'
    });
});
$(".Backor").mouseleave(function(event) {
    var eye = $(".eye");
    eye.css({
        'display': 'block'
    });
});

let lastText = panBackorDialogy[0][0];
$("#PanBackorDialogText").on('DOMSubtreeModified', function() {
    let backor = $("#PanBackorGUI");
    let text = $("#PanBackorGUI div.text");
    let elemList = [backor, text];
    if (text.text() != lastText) {
        // console.log("changed");
        elemList.forEach(function(elem) {
            elem.css("background-color", "#DDDD");
        });
        setTimeout(function() {
            elemList.forEach(function(elem) {
                elem.css("background-color", "black");
            });
        }, 1000);
    }
    levelHasAnotherDialog();
    lastText = text.text();
});
function levelHasAnotherDialog(){
    let text = $("#PanBackorGUI div.text");
    if (panBackorDialogy[currentActiveLevel][currentDialog+1] != undefined) {
        // add class .canChangeDialog to backor
        text.addClass("canChangeDialog");
        return true;
    }
    else {
        text.removeClass("canChangeDialog");
        return false;
    }
}
levelHasAnotherDialog();

function PanBackor19(){
    if (currentActiveLevel == 19 && currentDialog == 3){
        hidePanBackor();
        setTimeout(()=>{completeLevel(20)}, 5000);
    }
}
function PanBackor20(){
    if (currentActiveLevel == 20){
        document.getElementsByClassName("eyeLid")[0].style.background="gray";
    }
}
function PanBackor23(){
    if (currentActiveLevel == 22 && currentDialog == 1){
        document.getElementById("theend").style.display = "block";
    }
}
