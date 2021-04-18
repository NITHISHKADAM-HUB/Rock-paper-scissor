module.exports.getChoice = () => {
    const choice = ['rock', 'paper', 'scissor'];
    const randomNum = Math.floor(Math.random() * 3)
    return choice[randomNum]
}

module.exports.game = (playerA, playerB) => {
    switch (playerA + playerB) {
        case "rockscissor":
        case "paperrock":
        case "scissorpaper":
            return 1;

        case "scissorrock":
        case "rockpaper":
        case "paperscissor":
            return 0;

        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            return 0;
    }
}


