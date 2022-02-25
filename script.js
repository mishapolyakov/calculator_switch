function Calc(num1, num2, operator) {
    if ( typeof num1 !== "number" || typeof num2 !== "number") {
        return "this is not a number"
    }
    if( num2 === 0 && operator === 'div') {
        return "fatal Error"
    }
    if ( operator !== "sum" && operator !== 'sub' && operator !== 'mult' && operator !== 'div' ) {
        return "unknow operator"
    }

    switch (operator) {
        case 'sum':
            return num1 + num2
        case 'sub':
            return num1 - num2
        case 'mult':
            return num1 * num2
        case 'div':
            return num1 / num2
    }
}

console.log(Calc(4,5,"sum"))
console.log(Calc(4,5,"sub"))
console.log(Calc(4,5,"mult"))
console.log(Calc(4,5,"div"))
console.log(Calc(4,0,"div"))
console.log(Calc(4,5,"+"))
console.log(Calc(4,"fff","mult"))
