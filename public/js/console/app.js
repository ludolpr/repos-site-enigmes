// Creer un bouton qui ferme chaque item
var myNodelist = document.getElementsByTagName("li");
var i;
for (i = 0;i <myNodelist.length; i++){
    var i; 
    var span =  document.createElement("span");
    span.className ="close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);   
}

// click sur le boutton pour retirer l'element courent
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
        var diiii = this.parentElement;
        div.style.display = "none";
    }
}

// ajoute un control quand on  click sur une list objet
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Creer une nouvelle list objet quand on click sur le bouton ajouter
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }