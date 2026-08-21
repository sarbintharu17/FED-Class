// console.log('first')

// const today = new Date()
// console.log (today)
// console.log(today.getDate())
// console.log(today.getDay())
// console.log(today.getHours())

// const myArray = [1,2,3, "CSIT", "BCA"]
// console.log(myArray)
// console.log(myArray.reverse())

// filter

// const age = [ 12, 13, 20, 18, 1, 30]
// const voteEligible = ages.filter((age)=>{
//     return age >= 18   
// })
// console.log(voteEligible)
// console.log(voteEligible.length)

const bikeShowroom = [
{
    "name" : "NS 200",
    "price" : 10000
},
{
   "name" : "Domminar",
   "price" : 600000
},

{
    "name" : "220",
    "price" : 1500
}
]
const fruits = ["apple", "banana", "pineapple", "mango"]
// const expensiveBikes = bikeShowroom.filter((bike)=>{})

// console.log(expensiveBike)

bikeShowroom.forEach((value, index)=>{
    console.log(index + " : "+value)
})
console.log("\n")

const listofFruit = fruits.map((value, index)=>{
    return(index + " : "+value)
})
console.log(listofFruit)
console.log(fruits.sort())
