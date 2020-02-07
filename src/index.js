const num = document.querySelectorAll(".num"),
    input = document.querySelector(".numInput"),
    op = document.querySelectorAll(".op"),
    cBtn = document.querySelector(".cBtn"),
    eqBtn = document.querySelector(".equalBtn");

let i, equation="", numOne, numTwo, opOne, opTwo;
let opTmp, numTmp, afterOp=1;

function handleNum(i){
   if(afterOp === 1 || parseInt(input.value)===0){
       input.value=i;
       afterOp=0;
   } else{
       input.value+=i;
   }
   equation+=i;
   console.log(equation);
}

num.forEach(e => {
    e.addEventListener("click", function(event){
        handleNum(e.textContent);
    })
})

function handleOp(i){
    switch(i){
        case "+": equation += `+`;
        opTmp="+";
        break;
        case "-": equation += `-`;
        opTmp="-";
        break;
        case "*": equation += `*`;
        opTmp="*";
        break;
        case "*": equation += `/`;
        opTmp="/";
        break;
    }
    numTmp=parseInt(input.value);
    if(typeof numOne === "undefined"||numOne === 0)
        numOne=numTmp;
    else{ 
        numTwo=numTmp;
    }
    console.log(`numOne=${numOne}, numTwo=${numTwo}`);
    if(typeof opOne === "undefined"){
        opOne=opTmp;
    }
    else{
        input.value=getAnswer(opOne);
        console.log(input.value);
        opOne=opTmp;
    }
    afterOp=1;
}

op.forEach(i => {
    i.addEventListener("click", function(event){
        handleOp(i.textContent);
    })
})

cBtn.addEventListener("click", function(event){
    input.value=0;
    equation="";
    numOne=0;
    numTwo=0;
    opOne="";
    opTwo="";
})

function getAnswer(op){
    switch(op){
            case "+": numOne=parseInt(numOne)+parseInt(numTwo);
            break;
            case "-": numOne=parseInt(numOne)-parseInt(numTwo);
            break;
            case "*": numOne=parseInt(numOne)*parseInt(numTwo);
            break;
            case "/": numOne=parseInt(numOne)/parseInt(numTwo);
            break;
            case "=": getAnswer(opOne);
            break; 
    }
    console.log("numOne:"+numOne);
    return parseInt(numOne);
}

eqBtn.addEventListener("click", function(event){
    input.value=getAnswer("=");
})