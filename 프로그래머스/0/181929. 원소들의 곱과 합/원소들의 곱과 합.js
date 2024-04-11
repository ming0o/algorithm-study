function solution(num_list) {
    var answer = 1;
    var sum = 0;
    for (var i of num_list) {
        answer *= i;
        sum += i;
    }
    return answer > sum**2 ? 0 : 1;
}