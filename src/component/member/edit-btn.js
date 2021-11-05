var click = document.getElementById('click-btn');

click.addEventListener("click", function(e){
    
    document.getElementById('member-name').disabled = false;
    document.getElementById('member-birth').disabled = false;
    document.getElementById('member-phone').disabled = false;
    document.getElementById('member-address').disabled = false;
    document.getElementById('firstpart-btn').setAttribute("style", "display: block");

});

var submit_btn = document.getElementById('firstpart-submit-btn');

submit_btn.addEventListener("click", function(e){
    document.getElementById('member-name').disabled = true;
    document.getElementById('member-birth').disabled = true;
    document.getElementById('member-phone').disabled = true;
    document.getElementById('member-address').disabled = true;
    document.getElementById('firstpart-btn').setAttribute("style", "display: none");
});

var cancel_btn = document.getElementById('firstpart-cancel-btn');

cancel_btn.addEventListener("click", function(e){
    
    document.getElementById('member-name').disabled = true;
    document.getElementById('member-birth').disabled = true;
    document.getElementById('member-phone').disabled = true;
    document.getElementById('member-address').disabled = true;
    document.getElementById('firstpart-btn').setAttribute("style", "display: none");

})