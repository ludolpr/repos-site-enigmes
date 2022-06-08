#! /bin/bash

echo "lancement de sass !! "
echo "ouvre le terminal "
x-terminal-emulator --noclose

echo "aller dans le dossier"
cd dev/gh/repos-site-enigmes/public/css/

echo "lancer la commande de sass"
sass --watch sass/index.scss:./style.css

echo "lancement de nodejs !! "
echo "ouvre le terminal "
x-terminal-emulator --noclose

echo "aller dans le dossier"
cd /dev/gh/repos-site-enigmes

echo "lancer la commande de sass"
npm run dev






