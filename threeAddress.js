// const input = "X= f(2*4 ^C ) D+E^5"
const input = "x= -b(b^2)4-c/2*a"
// const input = "X= f(A*B ^C ) D (E^5)"
const removeSpace = (input) => {
    return input = input.replace(/ /g, '');

}
const inputWithOutSpace = removeSpace(input);
const arrayBySplitingSpace = inputWithOutSpace.split('=')
//console.log(arrayBySplitingSpace[0],arrayBySplitingSpace[1]);
let rightString = arrayBySplitingSpace[1].split("");

let arr = [];
let closure = false;
let T = 0;


//For "^"

let reStructureString = rightString;
const cap = () => {
    for (let eachElement = 0; eachElement < rightString.length; eachElement++) {
        if (rightString[eachElement] === '^') {
            let item = { name: `t${T}`, value: rightString[eachElement - 1] + rightString[eachElement] + rightString[eachElement + 1] }
            arr[T] = item;
            T++
            reStructureString.splice(eachElement - 1, 3, `t${T - 1}`)
        }
    }
}
//For "/"
const devider = () => {
    rightString = reStructureString;
    for (let eachElement = 0; eachElement < rightString.length; eachElement++) {
        if (rightString[eachElement] === '/') {
            let item = { name: `t${T}`, value: rightString[eachElement - 1] + rightString[eachElement] + rightString[eachElement + 1] }
            arr[T] = item;
            T++
            reStructureString.splice(eachElement - 1, 3, `t${T - 1}`)
        }
    }
}

//For "*"
const multiply = () => {
    rightString = reStructureString;
    for (let eachElement = 0; eachElement < rightString.length; eachElement++) {
        if (rightString[eachElement] === '*') {
            let item = { name: `t${T}`, value: rightString[eachElement - 1] + rightString[eachElement] + rightString[eachElement + 1] }
            arr[T] = item;
            T++
            reStructureString.splice(eachElement - 1, 3, `t${T - 1}`)
        }
    }
}


//For "+"
const add = () => {
    rightString = reStructureString;
    for (let eachElement = 0; eachElement < rightString.length; eachElement++) {
        if (rightString[eachElement] === '+') {
            let item = { name: `t${T}`, value: rightString[eachElement - 1] + rightString[eachElement] + rightString[eachElement + 1] }
            arr[T] = item;
            T++
            reStructureString.splice(eachElement - 1, 3, `t${T - 1}`)
        }
    }
}
//For "-"
const minus = () => {
    rightString = reStructureString;
    for (let eachElement = 0; eachElement < rightString.length; eachElement++) {
        if (rightString[eachElement - 1] !== undefined) {
            if (rightString[eachElement] === '-') {
                let item = { name: `t${T}`, value: rightString[eachElement - 1] + rightString[eachElement] + rightString[eachElement + 1] }
                arr[T] = item;
                T++
                reStructureString.splice(eachElement - 1, 3, `t${T - 1}`)
            }
        } else {
            if (rightString[eachElement] === '-') {
                let item = { name: `t${T}`, value: rightString[eachElement] + rightString[eachElement + 1] }
                arr[T] = item;
                T++
                reStructureString.splice(eachElement - 1, 3, `t${T - 1}`)
            }
        }
    }
}

const bEnd = () => {
    rightString = reStructureString;
    for (let eachElement = 0; eachElement < rightString.length; eachElement++) {
        if (rightString[eachElement] === ')') {
            if (rightString[eachElement + 1] !== undefined) {
                let item = { name: `t${T}`, value: rightString[eachElement - 1] + '*' + rightString[eachElement + 1] }
                arr[T] = item;
                T++
                reStructureString.splice(eachElement - 1, 3, `t${T - 1}`)
            }
        }
    }
}

const bStart = () => {
    rightString = reStructureString;
    for (let eachElement = 0; eachElement < rightString.length; eachElement++) {
        if (rightString[eachElement] === '(') {
            if (rightString[eachElement - 1] !== undefined) {
                let item = { name: `t${T}`, value: rightString[eachElement - 1] + '*' + rightString[eachElement + 1] }
                arr[T] = item;
                T++
                reStructureString.splice(eachElement - 1, 3, `t${T - 1}`)
            }


        }
    }
}
//print 
const printThreeAddressCode = () => {
    let item = { name: arrayBySplitingSpace[0], value: `t${T - 1}` }
    arr[T] = item;
    console.log(arr)
    //console.log(reStructureString)
}
//let BracketStart;
//let BracketEnd;


//For "-"
//reStructureString = rightString;
// const bracket = () => {
//     for (let eachElement = 0; eachElement < rightString.length; eachElement++) {
//         if (rightString[eachElement] === '(' && rightString[eachElement-1]!= 'undefined')  {
//             let item = { name: `t${T}`, value: rightString[eachElement - 1] + rightString[eachElement] + rightString[eachElement + 1] }
//             arr[T] = item;
//             T++
//             reStructureString.splice(eachElement - 1, 3, `t${T}`)
//             console.log(reStructureString)
//             continue;
//         }
//         if (rightString[eachElement] === ')' && rightString[eachElement+1]!= 'undefined') {
//             closure = false;
//             let item = { name: `t${T}`, value: rightString[eachElement - 1] + '*' + rightString[eachElement + 1] }
//             arr[T] = item;
//             T++
//             reStructureString.splice(eachElement - 1, 4, `t${T}`)
//             console.log(reStructureString)
//             continue;
//         }
//     }
// }
const bracket = () => {
    for (let eachElement = BracketStart + 1; eachElement < BracketEnd; eachElement++) {
        rightString = reStructureString;
        if (rightString[eachElement + 1] == ')') {
            let item = { name: `t${T}`, value: rightString[eachElement - 2] + '*' + rightString[eachElement + 2] }
            arr[T] = item;
            T++
            reStructureString.splice(eachElement - 1, 3, `t${T}`)
        } else {
            //For "/"
            const devider = () => {
                rightString = reStructureString;
                for (let eachElement = 0; eachElement < rightString.length; eachElement++) {
                    if (rightString[eachElement] === '/') {
                        let item = { name: `t${T}`, value: rightString[eachElement - 1] + rightString[eachElement] + rightString[eachElement + 1] }
                        arr[T] = item;
                        T++
                        reStructureString.splice(eachElement - 1, 3, `t${T}`)
                    } else if (rightString[eachElement] === '(') {
                        closure = true
                        console.log(rightString[eachElement])
                        BracketStart = rightString.lastIndexOf('(');
                        BracketEnd = rightString.indexOf(')');
                        console.log(BracketStart, BracketEnd);
                    }
                }
            }

            //For "*"
            const multiply = () => {
                rightString = reStructureString;
                for (let eachElement = 0; eachElement < rightString.length; eachElement++) {
                    if (rightString[eachElement] === '*') {
                        let item = { name: `t${T}`, value: rightString[eachElement - 1] + rightString[eachElement] + rightString[eachElement + 1] }
                        arr[T] = item;
                        T++
                        reStructureString.splice(eachElement - 1, 3, `t${T}`)
                    } else if (rightString[eachElement] === '(') {
                        closure = true
                        console.log(rightString[eachElement])
                    }
                }
            }


            //For "+"
            const add = () => {
                rightString = reStructureString;
                for (let eachElement = 0; eachElement < rightString.length; eachElement++) {
                    if (rightString[eachElement] === '+') {
                        let item = { name: `t${T}`, value: rightString[eachElement - 1] + rightString[eachElement] + rightString[eachElement + 1] }
                        arr[T] = item;
                        T++
                        reStructureString.splice(eachElement - 1, 3, `t${T}`)
                    } else if (rightString[eachElement] === '(') {
                        closure = true
                        console.log(rightString[eachElement])
                    }
                }
            }
            //For "-"
            const minus = () => {
                rightString = reStructureString;
                for (let eachElement = 0; eachElement < rightString.length; eachElement++) {
                    if (rightString[eachElement] === '-') {
                        let item = { name: `t${T}`, value: rightString[eachElement - 1] + rightString[eachElement] + rightString[eachElement + 1] }
                        arr[T] = item;
                        T++
                        reStructureString.splice(eachElement - 1, 3, `t${T}`)
                    } else if (rightString[eachElement] === '(') {
                        closure = true
                        console.log(rightString[eachElement])
                    }
                }
            }
        }
    }
}

const main = () => {
    cap();
    devider();
    multiply();
    add();
    minus();
    // bracket();
    bEnd();
    bStart();
    printThreeAddressCode();
}

//Call main functions
main();

