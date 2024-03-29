function solution(a, b) {
    var answer = 0;
    answer = parseInt(a.toString()+b.toString());
    var num = 2 * a * b;
    if (answer < num) {
        return num;
    }
    else
        return answer;
}