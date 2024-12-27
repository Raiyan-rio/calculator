function ageindays(){
 var birthyear = prompt('enter your birth year');
 var ageindays=( 2024 - birthyear) * 365;
 document.getElementById('flex-box-result');
 var h1= document.createElement('h1');
 var textanswer = document.createTextNode('youare'+' '+ageindays+' '+'dayold');
 h1.setAttribute('id','ageindays');
 h1.appendChild(textanswer);
 document.getElementById('flex-box-result').appendChild(h1);
}
ageindays();
function reset(){
    document.getElementById('ageindays').remove();
}
reset();
