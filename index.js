// const exercisetimemins = 40

// let message1 = ""

// if (exercisetimemins < 30) {
//      message1 = "you need to try harder"
// }
// else if(exercisetimemins < 60){
//     message1 = "doing good"
// }
// else{
//     message1 = "Excellent"
// }

// const message2 = exercisetimemins < 30 ? "You need to try harder"
// : exercisetimemins <60 ? "doing good"
//  : "Excellent"
// console.log(message2)

// const playerGuess = 3
// const correctAnswer = 6

// const message3 = playerGuess === correctAnswer ? "correct"
// : playerGuess > correctAnswer ? "your guess is to high"
// :"your guess is to low"
// console.log(message3)

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

// const correctAnswerInfo = {
//     capital: "lima",
//     points: 10 + " points"
// }
// const{capital,points} = correctAnswerInfo

// console.log("what is the capital of peru")

// setTimeout(logAnswer,3000,capital)


// function logAnswer(ans){
//     console.log(`the answer is ${ans} of course! If you got that right, give yourself ${points}`)
// }

// const dateSnapshot = new Date()
// console.log(dateSnapshot.toString())
// console.log(dateSnapshot.getFullYear())

// function checkusername (userName){
//    if(userName){
//     console.log(userName)
//    }
//    else{
//     //throw new Error("not username")
//    }
// }

// checkusername()

// String()
// Number()
// Array()
// Object()
// Boolean()

// const person = {}
// person.name = "Tom"
// console.log(person)

// let currentTicketnumber = 0
// function getNextTicketnumber(){
//     return ++currentTicketnumber
// }
// console.log(`guest 1, your ticket number is : ${getNextTicketnumber()}`)
// console.log(`guest 2, your ticket number is: ${getNextTicketnumber()}`)
// console.log(`guest 3, your ticket number is: ${getNextTicketnumber()}`)

// const tomsBankBalanceGBP = 900_719_925_474_099_31231321321312312321321399999n
// console.log(tomsBankBalanceGBP.toString())

// Challenge:
// 1. Predict what will be logged to the console.

function getWeather() {
  return "Today's weather is warm and sunny"
}

console.log(getWeather()) // What will this log?
//todays weather is warm and sunny
console.log(getNews()) // What will this log?
//a new swimming pool has opened in the town centre...
function getNews() {
  return "A new swimming pool has opened in the town centre..."
}

console.log(trafficInfo) // What will this log?
//all roads are busy right now
let trafficInfo = 'All roads are busy right now'