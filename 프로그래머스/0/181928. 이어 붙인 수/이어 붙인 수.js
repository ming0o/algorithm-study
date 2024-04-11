function solution(num_list) {
    let oddSum = '';
    let evenSum = '';
    
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            evenSum += num_list[i];
        } else {
            oddSum += num_list[i];
        }
    }
    
    const oddSumInt = parseInt(oddSum, 10);
    const evenSumInt = parseInt(evenSum, 10);
    
    return oddSumInt + evenSumInt;
}