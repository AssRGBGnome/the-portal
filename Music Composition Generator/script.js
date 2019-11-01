
function generate(){
    let key_text = document.getElementById("key-result");
    let keyarray = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
    let keynum = Math.floor(Math.random(0,1) * keyarray.length);
    key_text.innerText = keyarray[keynum];

    let quality_text = document.getElementById("quality-result");
    let qualityarray = ["major", "minor"];
    let qualitynum = Math.floor(Math.random(0,1) * qualityarray.length);
    quality_text.innerText = qualityarray[qualitynum];

    let min = 40;
    let max = 231;

    let bpm_text = document.getElementById("bpm-result");
    let bpmnum = Math.floor(Math.random() * (max - min)) + min;
    bpm_text.innerText = bpmnum;
}