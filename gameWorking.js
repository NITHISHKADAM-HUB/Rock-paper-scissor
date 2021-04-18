var { game, getChoice } = require('./gameFunction')

module.exports.gameScore = (players, player1Score, player2Score, player3Score, player4Score, playerNum) => {
    var i = 0
    for (var x = 0; x < 4; x++) {
        players[x] = getChoice()
    }
    while (i < 4) {
        switch (playerNum[i]) {
            case "player1":
                for (var j = 0; j < 4; j++) {
                    if (i == j) {
                        player1Score[j] = '-'
                    } else {
                        player1Score[j] = player1Score[j] + game(players[0], players[j])
                    }
                }
                break;
            case "player2":
                for (var j = 0; j < 4; j++) {
                    if (i == j) {
                        player2Score[j] = '-'
                    } else {
                        player2Score[j] = player2Score[j] + game(players[1], players[j])
                    }
                }
                break;
            case "player3":
                for (var j = 0; j < 4; j++) {
                    if (i == j) {
                        player3Score[j] = '-'
                    } else {
                        player3Score[j] = player3Score[j] + game(players[2], players[j])
                    }
                }
                break;
            case "player4":
                for (var j = 0; j < 4; j++) {
                    if (i == j) {
                        player4Score[j] = '-'
                    } else {
                        player4Score[j] = player4Score[j] + game(players[3], players[j])
                    }
                }
                break;
        }
        i += 1
    }
}