function solution(ineq, eq, n, m) {
    let eqa = (eq === "!") ? '' : "="
    let cal = ineq + eqa;
    if (cal === ">=") {
        let answer = (n >= m) ? 1 : 0
        return answer
    }
    else if (cal === "<=") {
        let answer = (n <= m) ? 1 : 0
        return answer
    } 
    else if (cal === ">") {
         let answer = (n > m) ? 1 : 0
         return answer
    }
    else {
        let answer = (n < m) ? 1 : 0
        return answer
    }
}