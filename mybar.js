const age = 25
const isFemale = false
const driverStatus = 'bob'
const name = "Tommy"
const totalAmount = 80


if (age >= 18) {
    console.log("Welkome to Finnegan Spirits, we hope you enjoy your stay")
}
else {
    console.log("Im sorry but you are still under 18 therefore you cannot come in")
}
if (age >= 18 && age <= 25) {
    console.log("You get a 50% discount on your beer")
} else {
    console.log("Sorry pops but you gotta pay full price")
}
if (isFemale) {
    console.log("Thank you for making your reservation for the anual ladies night at the Finnegans Spirits Bar")
} else {
    console.log("Unfortunately this party is for ladies only, feel free to join our Gentelmens Club")
}
if (driverStatus == 'bob') {
    console.log("Thank you Bob, please make sure our guets return home safely")
} else {
    console.log("Im sorry Sr but i cannot allow you to drive, give me a minute and ill ask Bob to take you home")
}
if (name === "Abraham" || name === "Sarah") {
    console.log("Congrats you get a free beer")
} else {
    console.log("Sorry bro you are not on the list")
}
if (totalAmount >= 25 && totalAmount < 50) {
    console.log("You spent more then 25 euros, therefore you get a portion of free Bitterballen")
}
if (totalAmount >= 50 && totalAmount < 100) {
    console.log("You spent more then 50 euros, therefore you get a portion of free Nachos")
}
if (totalAmount >= 100) {
    console.log("You spent more then 100 euros, therefore you get a free bottle of Champagne")
}