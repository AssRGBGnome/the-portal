function generate(){
    let key_text = document.getElementById("key-result");
    let keyarray = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
    let keynum = Math.floor(Math.random(0,1) * keyarray.length);
    key_text.innerText = keyarray[keynum];

    let quality_text = document.getElementById("quality-result");
    let qualityarray = ["major", "minor"];
    let qualitynum = Math.floor(Math.random(0,1) * qualityarray.length);
    quality_text.innerText = qualityarray[qualitynum];

    let min = 60;
    let max = 241;

    let time_signiture_text = document.getElementById("time-signiture-result");
    let numerator = ["3", "4", "5", "6", "7", "8", "9", "10", "11"];
    let denomenator = ["4", "8"];
    let numeratornum = Math.floor(Math.random(0,1) * numerator.length);
    let denomenatornum = Math.floor(Math.random(0,1) * denomenator.length);
    time_signiture_text.innerText = numerator[numeratornum] + "/" + denomenator[denomenatornum];

    let bpm_text = document.getElementById("bpm-result");
    let bpmnum = Math.floor(Math.random() * (max - min)) + min;
    if(bpmnum > 160) 
    {
        time_signiture_text.innerText = numerator[numeratornum] + "/" +  "4";
    }
    bpm_text.innerText = bpmnum;
}