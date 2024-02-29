
const num = 10;

const iterativeSum = (num) => {
    let sum = 0;
    for(let i = 1; i <= num; i ++){
        sum += i;
        // console.log(sum);
    }
    return sum;
}

console.log(iterativeSum(num));

const recursiveSum = (num) => {
    if(num === 1){
        return num;
    }
    return recursiveSum(num - 1) + num;
}

console.log(recursiveSum(num));