function solution(a, b) {
    var num1 = parseInt(a.toString() + b.toString());
    var num2 = parseInt( b.toString() + a.toString());
    
    if (num1 < num2) {
        return num2;
    } else {
        return num1;
    }
}