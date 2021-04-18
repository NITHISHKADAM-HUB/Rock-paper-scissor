const express = require('express')
const app = express()
var gameRouter = require('./routes/games')
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.redirect('/games')
})
app.use('/games', gameRouter)

app.listen(3030, () => console.log('sever connected'))