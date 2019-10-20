var striked1 = false;
var striked2 = false;
var striked3 = false;
var striketag = "<s>";

function checkboxtext_check(element_number){
    var checkboxtext = document.getElementById("checkboxtext"+element_number);
    var originaltext = checkboxtext.innerText;

    if(element_number == 1){
        if(striked1 == false){
            checkboxtext.innerHTML = striketag + originaltext + striketag;
        }
    
        if(striked1 == true){
            checkboxtext.innerHTML = originaltext;
        }
        striked1 = !striked1;
    }

    else if(element_number == 2){
        if(striked2 == false){
            checkboxtext.innerHTML = striketag + originaltext + striketag;
        }
    
        if(striked2 == true){
            checkboxtext.innerHTML = originaltext;
        }
        striked2 = !striked2;
    }

    else if(element_number == 3){
        if(striked3 == false){
            checkboxtext.innerHTML = striketag + originaltext + striketag;
        }
    
        if(striked3 == true){
            checkboxtext.innerHTML = originaltext;
        }
        striked3 = !striked3;
    }

}