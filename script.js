function Calc ( a, b, operator) {
    const isValid =
        operator !== 'undefined' &&
        typeof(a) === 'number' &&
        typeof(b) === 'number'
    if(isValid) {
            switch (operator) {
                case '+' :
                    return a + b
                case '-' :
                    return a - b
                case '*' :
                    return a * b
                case '/' :
                    return a / b
            }
        }
            return 'Error'
}

console.log(Calc(4,2, '+'))
console.log(Calc('str',5, '-'))
console.log(Calc(1,5, '*'))
console.log(Calc(1,5, '/'))



