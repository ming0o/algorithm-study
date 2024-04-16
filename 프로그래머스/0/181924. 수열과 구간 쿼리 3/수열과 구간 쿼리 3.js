function solution(arr, queries) {
    for (let i = 0; i < queries.length; i++) {
        let [index1, index2] = queries[i];
        [arr[index1], arr[index2]] = [arr[index2], arr[index1]]; // 배열의 요소를 서로 교환
    }
    return arr;
}