const p = 3.14;

function squareRound(userNumber) {
    let s = p * Math.pow(userNumber, 2);

    console.log(`площадь круга : ${s}`);
}


function perimeterRound(userNumber) {
    let perimetr = 2 * p * userNumber;
    console.log(`периметр круга: ${perimetr}`);

}

function calc(x, y, action) {
    let resultCalc = null;
    if (action === "+") {
        resultCalc = x + y;

    }
    if (action === "*") {
        resultCalc = x * y;

    }
    if (action === "/") {
        resultCalc = x / y;

    }
    if (action === "-") {
        resultCalc = x - y;

    }
    if (action === "%") {
        resultCalc = x % y;

    }
    if (action === "^") {
        resultCalc = Math.pow(x,y)

    }
    console.log(`${x}` + `${action}` + `${y}`+ ` = ` +`${resultCalc}`);
}


squareRound(takeNumberPrompt());
perimeterRound(takeNumberPrompt());
calc(takeNumberPrompt(), takeNumberPrompt(), takeSimbol())