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