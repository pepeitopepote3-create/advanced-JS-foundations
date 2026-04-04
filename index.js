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

// const playerGuess = 3
// const correctAnswer = 6
// console.log("hola")


// const message = playerGuess === correctAnswer ? "correct"
// : playerGuess > correctAnswer ? "your guess is to high"
// :"your guess is to low"
// // if(playerGuess === correctAnswer){
// //     message = "correct"
// // }else{
// //     message = "wrong"
// // }
// console.log(message)

// function selectItem(item){
//     let price = 0
//     switch(item){
//         case "coffee":
//             price = 2
//             break
//         case "sandwich":
//             price = 5
//             break
//         case "salad":
//             price = 4
//             break
//         case "Lemon cake":
//             price = 3
//             break
//         default:
//             return `Sorry, we dont sell ${item}`
//     }
//     return `you've selected ${item} and the price is $${price}`
// }
// // console.log(selectItem("sandwich"))

// const dreamholiday={
//     destination: 'dubay',
//     activity: 'visit the tallest building in the world',
//     accomodation: 'i would get into a luxury hotel',
//     companion: "alone"
// }

// const{destination,activity,accomodation,companion} = dreamholiday

// console.log(`I would love going to ${destination} to ${activity}
// then ${accomodation} and i would go completely ${companion}`
// )

const correctAnswerInfo = {
    capital: "lima",
    points: 10 + " points"
}
const{capital,points} = correctAnswerInfo

console.log("what is the capital of peru")

setTimeout(logAnswer,3000,capital)


function logAnswer(ans){
    console.log(`the answer is ${ans} of course! If you got that right, give yourself ${points}`)
}