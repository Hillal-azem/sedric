const express = require('express')
const article = require('./routes/api/articles')

const app = express()

app.use(express.json())

app.use('/articles', article)

app.listen(5000, () => {
    console.log(`Server listening on port 5000`)
})
