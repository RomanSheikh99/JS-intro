
// default parametter
function myFunc(num1=0,num2=0){
    const sum = num1 + num2;
    return sum;
}

const output = myFunc(45);
console.log(output);



// arguments

function multiNumber(num){
    let multi = 1;
    for(let number of arguments){
        multi = multi * number;
    }
    return multi;
}

const multiput = multiNumber(45,4,6,3,2,2,7,8);
console.log(multiput);