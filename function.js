function takeNumberPrompt(){
    let prom = Number(prompt("введите число"));
    if(!Number.isNaN(prom)){
        return prom;
    }else{
        alert("вы ввели не число");
        return false;
    }
}

function takeSimbol(){
    let simbol = prompt("введите + - * / % ^");
    if(simbol === "+"||"-"||"*"||"/"||"%"||"^"){
        return simbol;
    }else {
        console.log("вы ввели не тот символ");
        return false;
    }
}
