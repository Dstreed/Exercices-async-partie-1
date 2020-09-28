//Réecrivez le programme promiseCopy.js afin qu'il puisse accepter 2 arguments de la ligne de commande:
// . un fichier source, qui est le fichier à copier
// . un fichier dest, qui sera la destination de la copie
//Comme pour l'exercice précedent utiliser les api asynchrones basées sur des promises du module fs de node.js.

import fsPromises from 'fs/promises'

fsPromises
    .copyFile('../file1.txt', process.argv[2])
    .then(() => console.log('file1.txt was copied to file2.txt'))
    .catch(() => console.log('The file could not be copied'))
