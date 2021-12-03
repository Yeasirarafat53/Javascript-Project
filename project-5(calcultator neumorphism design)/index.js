// show the numbers in display

function val(result) {
    form.disp.value = form.disp.value + result;
}


// calculate the result show the display

function calculate(){
    if(form.disp.value == ""){
        alert("Please enter numbers");
    }
    else{
        form.disp.value = eval(form.disp.value);
    }
}

// clear the result

var btn = form.veql;
btn.addEventListener("dblclick", function(){
    form.disp.value = ""; // when we click on double time equal button the result will be clear
});