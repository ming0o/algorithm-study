function solution(my_string, overwrite_string, s) {
    let stringArray = my_string.split('');

    for (let i = 0; i < overwrite_string.length; i++) {
        stringArray[s + i] = overwrite_string[i];
        
        }
    
    return stringArray.join('');
}

