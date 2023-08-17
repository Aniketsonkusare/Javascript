async function aniket() {

    let Ahmedabadwhether = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("42 deg")
        }, 2000);
    })

    let Suratwhether = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("40 deg")
        }, 5000);
    })
    // Ahmedabadwhether.then(alert)
    // Suratwhether.then(alert)

    console.log("Fethching ahmedabad whether please wait...")
    let Ahmedabadw = await Ahmedabadwhether
    console.log("Fetch Ahmedabad whether is " + Ahmedabadw)

    console.log("Fethching surat whether please wait...")
    let Suratw = await Suratwhether
    console.log("Fetch surat whether is " + Suratw)
    return [Ahmedabadw, Suratw]
}

const abc = async () => {
    console.log("hey i am abc and i am waiting")
}
const main1 = async () => {
    console.log("welcome to whether control room")
    let a = await aniket()
    let b = await abc() 
}
main1()