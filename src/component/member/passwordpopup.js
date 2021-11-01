var btn = document.getElementById('changepw');
var div = document.getElementById('popup-bg');
var submit = document.getElementById('submit-btn');
var cancel = document.getElementById('cancel-btn');


btn.onclick = function show(){
    div.style.display = "block";
}

submit.onclick = function close(){
    div.style.display = "none";
}

cancel.onclick = function close(){
    div.style.display = "none";
}

window.onclick = function close(e){
    if(e.target == div){
        div.style.display = "none";
    }
}