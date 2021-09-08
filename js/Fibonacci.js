function fibonacci(num){
    let result = [0,1];

    for(let i=2; i<=num; i++){

        let prevNum1 = result[i-1];
        let prevNum2 = result[i-2];
        result.push(prevNum1 + prevNum2);

    }
    return result[num];
}
console.log(fibonacci(5));