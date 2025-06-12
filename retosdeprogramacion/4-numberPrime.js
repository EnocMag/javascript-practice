let until
let prime = false

function isPrime (number) {
    until = Math.sqrt(number)
    until = Math.ceil(until)

    if (number === 2){
        prime = true
    } else {

        for (let i = 2; i <= until; i++) {
            if (number % i === 0) {
                prime = false
                break
            } else {
                prime = true
            }
        }
    }
    return prime
}

for (let i = 1; i <= 100; i++) {
    if (isPrime(i)){
        console.log(i)
    }
}