let n1 = 1
let n2
let fibo = 1

for (i = 0; i <= 50; i++) {
    
    if (i === 0){
        console.log(0)
    } else if (i === 1) {
        console.log(1)
    } else {
        console.log(fibo)
        n2 = n1
        n1 = fibo
        fibo = n1 + n2
    }
}