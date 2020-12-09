const colorSwith = document.getElementById('input-color-swith');

colorSwith.addEventListener('click', checkMode);

function checkMode(){
    console.log("ffgfgdgdfg");
    if(colorSwith.checked){
        console.log("dark on");
        darkModeOn();
    }else{
        console.log("dark off");
        darkModeOff();
    }
}

function darkModeOn(){
    document.body.classList.add("dark-mode");
}

function darkModeOff(){
    document.body.classList.remove("dark-mode");
} 