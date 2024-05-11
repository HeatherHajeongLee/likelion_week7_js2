var submission = function(event){
    event.preventDefault();
    var name = document.getElementById('name').value;
    var sentence = 'Hello, '+name;
    document.getElementById('greeting').innerText = sentence;
    document.getElementById('form').style.display = 'none';
}

document.getElementById('form').addEventListener('submit', submission);