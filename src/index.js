const num = document.querySelectorAll(".num"),
    input = document.querySelector(".numInput"),
    op = document.querySelectorAll(".op"),
    cBtn = document.querySelector(".cBtn"),
    eqBtn = document.querySelector(".equalBtn");

let i, numOne, numTwo, opOne;
let opTmp, numTmp, afterOp=1, initial=1;
let equation="";

function handleNum(i){
   if(initial===1||afterOp === 1){
       input.value=i;
       afterOp=0;
       initial=0;
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
        case "/": equation += `/`;
        opTmp="/";
        break;
    }
    numTmp=parseFloat(input.value);
    if(typeof numOne === "undefined"||numOne==0||initial === 1){
        numOne=numTmp;
        initial=0;
    }
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
    console.log(equation);
    numOne=0;
    numTwo=0;
    opOne="";
    initial=1;
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
    }
    console.log("numOne:"+numOne);
    return parseFloat(numOne);
}

eqBtn.addEventListener("click", function(event){
    handleOp("=");
})