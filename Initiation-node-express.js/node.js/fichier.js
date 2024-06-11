const fs = require('fs')


/*************    LIRE UN FICHIER     *************/
fs.readFile('./utilisateurs.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
})


/*************    ECRIRE DANS UN FICHIER     *************/
let content = "Salut et bienvenue sur grenierdudev.com"

fs.writeFile('test.txt', content, (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log("Fait!")
})

