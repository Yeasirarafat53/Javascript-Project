const display = document.querySelector("input"),
button = document.querySelector("button"),
copyBtn = document.querySelector("span.far"),
copyActive = document.querySelector("span.fas");

let chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ013456789!@#$%^&*()"
button.onclick = ()=>{
    let i,
    randomPassword = "";

    copyBtn.style.display = "none";
    copyActive.style.display = "block";

    for(i=0; i < 16; i++){
        randomPassword = randomPassword + chars.charAt(
            Math.floor(Math.random() * chars.length)
        );
    }
    display.value = randomPassword;
}

function copy(){
    copyBtn.style.display = "none";
    copyActive.style.display = "block";
    display.select();
    document.execCommand('copy');
}
