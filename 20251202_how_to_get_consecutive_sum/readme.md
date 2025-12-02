Math:
```
function getConsecutiveSum(N) {
    if (N <= 0) {
        return { count: 0, sequences: [] };
    }
    
    let result = 0;
    
    let L = 1; 
    let R = 1;
    let currentSum = 0;

    while (L <= Math.ceil(N / 2)) { 
        
        if (currentSum < N) {
            currentSum += R;
            R++;
        } 
        else if (currentSum > N) {
            currentSum -= L;
            L++;
        } 
        else {
            
            result++;
            
            let sequence = [];
            for (let k = L; k < R; k++) {
                sequence.push(k);
            }

            currentSum -= L;
            L++;
        }
    }
    
    return result;
}
```

My result:
```
function getConsecutiveSum2(num) {
    let result = 0;

    for (let i = 1; i <= Math.ceil(num / 2); i++) { 
        
        let currentSum = 0;

        for (let j = i; j < num; j++) { 
            currentSum += j;
            if (currentSum === num) {
                result += 1;
                break; 
            }
            
            if (currentSum > num) {
                break; 
            }
        }
    }
    return result;
}
```
