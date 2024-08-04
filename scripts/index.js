const jsInputNodeA = document.querySelector('.js-number-one');
const jsInputNodeB = document.querySelector('.js-number-two');
const jsSelectOperation = document.querySelector('.select-operation');
const jsBtnNode = document.querySelector('.btn');
const jsOutputNode = document.querySelector('.js-output');
/*FloydKSK9a*/



jsBtnNode.addEventListener('click', function() {
    const a = Number(jsInputNodeA.value);
    const b = Number(jsInputNodeB.value);
    const operation = jsSelectOperation.value;

    const result = calculate({a, b, operation});
      
    console.log(minus); 
    console.log(result);
    //jsOutputNode.innerHTML = result;
    jsOutputNode.innerHTML = result + " " +"Ваше число";
});
