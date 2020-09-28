//Ecrivez un programme qui copie le fichier file1.txt vers le fichier file2.txt
//en utilisant les api asynchrones basées sur des promises du module fs de node.js.

import fsPromises from 'fs/promises'

fsPromises
    .copyFile('../file1.txt', '../file2.txt')
    .then(() => console.log('file1.txt was copied to file2.txt'))
    .catch(() => console.log('The file could not be copied'))
