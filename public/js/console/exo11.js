const date = new Date();
let dateNow = Date.now()

let day = new Array () ;
day [0] = "Dimanche";
day [1] = "Lundi";
day [2] = "mardi";
day [3] = "mercredi";
day [4] = "jeudi";
day [5] = "vendredi";
day [6] = "samedi";

// let nombre = Date.prototype.getDate();

let month = new Array ();
month [0] = "janvier";
month [1] = "fevrier";
month [2] = "mars";
month [3] = "avril";
month [4] = "mai";
month [5] = "juin";
month [6] = "juillet";
month [7] = "aout";
month [8] = "septembre";
month [9] = "octobre";
month [10] = "novembre";
month [11] = "decembre";


 

let mois = month[date.getMonth()];
let jour = day[date.getDay()];
console.log(dateNow);
let nombre = date.getDate(dateNow);
let heure = date.getHours(dateNow);
let min = date.getMinutes(dateNow)
let year = date.getFullYear(dateNow)

console.log(`Aujourd'hui nous sommes le ${jour} ${nombre} ${mois} ${year} il est ${heure}h${min}min`);

