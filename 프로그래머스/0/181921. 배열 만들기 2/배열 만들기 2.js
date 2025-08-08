function solution(l, r) {
    let answer = [];

    for (let i = l; i <= r; i++) {
        let str = i.toString();
        let isValid = true;

        for (let j of str) {
            if (j !== '0' && j !== '5') {
                isValid = false;
                break;
            }
        }

        if (isValid) answer.push(i);
    }

    return answer.length > 0 ? answer : [-1];
}