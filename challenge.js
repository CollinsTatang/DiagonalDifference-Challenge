/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    let n = arr.length;
    let dia1 = 0;
    let dia2 = 0;
    
    for(let i=0; i < n; i++){
        
        for(let j=0; j <n; j++){
            
            if(i === j){
                dia1 += arr[i][j];
            }
            
            if(i + j === n - 1){
                dia2 += arr[i][j]
            }
            
        }
    }
    
    return Math.abs(dia1 - dia2);
}