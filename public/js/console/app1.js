// // // // // // // // // //
//          part 1         //
// // // // // // // // // //

// // // // // // // // // // // // // // //
//          Les Conditions                //
// // // // // // // // // // // // // // //


let numLoto = 20;
// // // // // // // // // //
//    correspond           //
// // // // // // // // // //
if (numLoto == 20) {
  console.log("bravo");

} else {
  console.log("perdu");
}

let gilet = "bleu";
// // // // // // // // // //
//    correspond pas       //
// // // // // // // // // //
if (gilet != "jaune"){
  console.log("c'est bon pour les courses");
} else {
  console.log("ont reste à la maison");
}

// // // // // // // // // //
//   strictement égale     //
// // // // // // // // // //
const yearOfBirth = 1990;

if(yearOfBirth === 1985) {
  console.log("tu est née en 1985");
} else {
  console.log("tu n'est pas de 1985"); 
}

// // // // // // // // // //
//    if, else if, else    //
// // // // // // // // // //*

let departement = 75;

if(departement === 35){
  console.log("tu es de bretagne");
} else if (departement === 85) {
  console.log("tu es de vendée");
} else if (departement === 17 ){
  console.log("tu es de Charente maritime");
} else {
  console.log("tu ne viens pas de l'ouest");
}