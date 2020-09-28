//Ecrivez un programme qui copie le fichier file1.txt vers le fichier file2.txt
//en utilisant les api synchrones du module fs de node.js

import fs from 'fs'

fs.copyFileSync('../file1.txt', '../file3.txt')
console.log('file.txt est copié a la bonne destinattion ')
