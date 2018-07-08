const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let testCases = 0
let caseCounter = 0
let cases = []
let oddMan = []
let countline = true

const calcOddManOut = () => {
    cases.forEach(x => {
        x.forEach(y => {
            let counter = 0
            x.forEach(z => {
                if(z === y)
                    counter++
            })
            if(counter != 2)
                oddMan.push(y)
        })
    })
}

const print = () => {
    oddMan.forEach((man,i) => {
        console.log(`Case #${i + 1}: ${man}`)
    })
}

rl.on('line', input => {
    if(!testCases)
        testCases = parseInt(input,10)
    else{
        if(countline){
            countline = false
        }else{
            cases.push(input.split(' '))
            countline = true
            caseCounter++
            if(caseCounter === testCases){
                calcOddManOut()
                print()
                rl.close()
            }
        }
    }
})