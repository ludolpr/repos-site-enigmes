

// Exercice 9 :
    
var num;
let paire = [2,4,6,8,10,12,14,16,18,20]
let impaire = [1,3,5,7,9,11,13,15,17,19]
var check =false;
let arr = [];

function getRandomInt(max) {
    num = Math.floor(Math.random()* max);
    console.log(num)    
}


for(i=0; i<3; i++){
    getRandomInt(20)
    console.log('-------');
    console.log('i', i)
    console.log('arr', arr);

    if(paire.includes(num) && check==true){
        i--
    }
    if (paire.includes(num) && check==false)  {
        check=true
        arr.push(num)
        i--
        console.log("le paire c'est ok !!");

    }else if (impaire.includes(num) && check==true){
        if(arr.length>=3){
            console.log('ok');
        }    
        else if (impaire.includes(num) && !arr.includes(num)) {
            arr.push(num)
            console.log("encore un à avoir");
            i--
          } 
    }
    
}

