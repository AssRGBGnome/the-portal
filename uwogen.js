function generate(){
    var feeling1 = ["u", "U", "o", "O", "q", "^"];
    var base = ["w", "W"];
    var feeling2 = ["u", "U", "o", "O", "q", "^"];
    var expressor = "////";

    var txt = document.getElementById("contenttext");

    var count1 = Math.floor(Math.random() * 6);
    var count2 = Math.floor(Math.random() * 2);
    var count3 = Math.floor(Math.random() * 6);
    var count4 = Math.floor(Math.random() * 2)
    var count5 = Math.floor(Math.random() * 7);
    
    if(count1 == 5 || count3 == 5){
        if(count4 >= 1){
            txt.innerText = "^" + expressor + base[count2] + expressor + "^";
        }
        else{
            txt.innerText = "^" + base[count2] + "^";
        }
    }

    else{
        if(count5 >= 6){
            txt.innerText = feeling1[count1] + expressor + base[count2] + expressor + feeling2[count3];
        }
        else{
            txt.innerText = feeling1[count1] + base[count2] + feeling2[count3];
        }
    }
}