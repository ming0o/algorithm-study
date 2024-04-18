function solution(arr, queries) {
    var answer = [];
    
    // 각 쿼리에 대해 반복
    for (var i = 0; i < queries.length; i++) {
        var query = queries[i];
        var s = query[0];
        var e = query[1];
        var k = query[2];

        var min = -1; // 답이 없을 경우를 위해 -1로 초기화

        // s부터 e까지의 범위에서 k보다 크면서 가장 작은 값을 찾음
        for (var j = s; j <= e; j++) {
            if (arr[j] > k && (min === -1 || arr[j] < min)) {
                min = arr[j];
            }
        }

        // 각 쿼리에 대한 결과를 answer 배열에 저장
        answer.push(min);
    }
    return answer;
}