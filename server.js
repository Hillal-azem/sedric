const express = require('express')

// Route qui gère les articles
const article = require('./routes/api/articles')

// Initialisation de l application
const app = express()

// Middleware json parse ( c'est pour parser la requête de façon a pouvoir extraire les Json envoyés via les requêtes POST)
app.use(express.json())

// Middleware route interception de l URL '/article'
app.use('/articles', article)

// Lancement du server sur le port 5000
app.listen(5000, () => {
    console.log(`Server listening on port 5000`)
})


