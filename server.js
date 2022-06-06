// message du console log
console.log('ludolpr console log');


// import module global

const express = require('express');
const {
    engine
} = require('express-Handlebars');
const app = express();
res.send('ludolpr projet');

// config handlebars
app.engine('.hbs', engine({
    extname: '.hbs'
}));
app.set('views engine', '.hbs');
app.set('views', './views');

// route fichier static
app.use('/assets', express.static('public'))

// router
app.get('/', function (req,res) {
    res.render('home')
})
app.get('/contact', function (req,res) {
    res.render('contact')
});


// run server
app.listen(3000);



// En === Fr
// breaking change ====	changement incompatible
// bringing ES6 to the Node Community! === ES6 pour la communauté Node!
// bug === bogue
// changelog ===	journal des modifications
// debugging === débogage
// drop-in === replacement	version alternative
// event loop ===	boucle événementielle
// handler ===	gestionnaire
// icu ===	icu
// memory footprint	=== occupation mémoire
// open governance model ===	modèle de gouvernance ouvert
// package ===	paquets
// patch === correctif
// roadmap === feuille de route
// slide decks ===	présentations
// standards === normes
// streams	flux (streams) *(ajouter le mot anglais également)
// socket ===	connecteur
// tracing ===	traçage
// working group ===	groupe de travail
// assertion failure ===	échec d'affirmation

