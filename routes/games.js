const express = require('express')
const router = express.Router()
var { game, getChoice } = require('../gameFunction')
var { gameScore } = require('../gameWorking')




router.get('/', (req, res) => {
    // res.redirect('/games/start')
    res.render('../index')
})

router.get('/start', (req, res) => {
    var result = []
    var players = [0, 0, 0, 0]
    var player1Score = [0, 0, 0, 0]
    var player2Score = [0, 0, 0, 0]
    var player3Score = [0, 0, 0, 0]
    var player4Score = [0, 0, 0, 0]
    var playerNum = ['player1', 'player2', 'player3', 'player4']
    for (var i = 1; i <= 50; i++) {
        gameScore(players, player1Score, player2Score, player3Score, player4Score, playerNum)
        var display = {
            "iteration": i,
            "player1Choice": players[0],
            "player2Choice": players[1],
            "player3Choice": players[2],
            "player4Choice": players[3],
            "Player1ScoreVsPlayer1": player1Score[0],
            "Player1ScoreVsPlayer2": player1Score[1],
            "Player1ScoreVsPlayer3": player1Score[2],
            "Player1ScoreVsPlayer4": player1Score[3],
            "Player2ScoreVsPlayer1": player2Score[0],
            "Player2ScoreVsPlayer2": player2Score[1],
            "Player2ScoreVsPlayer3": player2Score[2],
            "Player2ScoreVsPlayer4": player2Score[3],
            "Player3ScoreVsPlayer1": player3Score[0],
            "Player3ScoreVsPlayer2": player3Score[1],
            "Player3ScoreVsPlayer3": player3Score[2],
            "Player3ScoreVsPlayer4": player3Score[3],
            "Player4ScoreVsPlayer1": player4Score[0],
            "Player4ScoreVsPlayer2": player4Score[1],
            "Player4ScoreVsPlayer3": player4Score[2],
            "Player4ScoreVsPlayer4": player4Score[3]
        };
        result.push(display)
    }
    res.json(result)

})

module.exports = router;


