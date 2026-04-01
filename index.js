// const exercisetimemins = 40

// let message = ""

// if (exercisetimemins < 30) {
//      message = "you need to try harder"
// }
// else if(exercisetimemins < 60){
//     message = "doing good"
// }
// else{
//     message = "Excellent"
// }

// const message = exercisetimemins < 30 ? "You need to try harder"
// : exercisetimemins <60 ? "doing good"
//  : "Excellent"
// console.log(message)

const playerGuess = 3
const correctAnswer = 6


const message = playerGuess === correctAnswer ? "correct"
: playerGuess > correctAnswer ? "your guess is to high"
:"your guess is to low"
// if(playerGuess === correctAnswer){
//     message = "correct"
// }else{
//     message = "wrong"
// }
console.log(message)