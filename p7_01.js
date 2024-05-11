// var color = document.getElementById('mainTitle').style.color;
var choice = document.getElementById('colorChoice');

var myfunc = function(){
    document.getElementById('mainTitle').style.color = choice.value;
};
choice.addEventListener('input', myfunc);