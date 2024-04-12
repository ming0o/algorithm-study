function solution(num_list) {
    var last, num1, answer = 0;
    last = num_list[num_list.length - 1];
    num1 = num_list[num_list.length - 2];
    if (last > num1) {
        answer = last - num1;
        num_list.push(answer);
    } else {
        answer = last * 2;
        num_list.push(answer);
    }
    return num_list
}