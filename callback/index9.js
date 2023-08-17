try {
    let age = prompt("enter your age")
    age = Number.parseInt(age)
    if (age > 150) {
        throw new ReferenceError("invalid age")
    }
} catch (error) {
     console.log(error.name)
     console.log(error.message)
     console.log(error.stack)
}
console.log("the script is still running")



