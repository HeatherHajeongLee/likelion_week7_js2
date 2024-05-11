var number = Number(document.getElementById('noCount').innerText);
var numberElement = document.getElementById('noCount');

document.getElementById('dec').addEventListener('click',function(){
    number--;
    numberElement.innerText = number;
});
document.getElementById('inc').addEventListener('click',function(){
    number++;
    numberElement.innerText = number;
});
document.getElementById('reset').addEventListener('click', function(){
    number = 0;
    numberElement.innerText = number;
});