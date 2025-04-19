// fibonacсi iteration

function fibonacci(n) {
    let a = 0;
    let b = 1;
    let arr = [a, b]
    for(let i = 2; i < n; i++) {
        let result = a + b
        a = b
        b = result
        arr.push(b)
    }
    return arr
}

// fibb recursion

function fibbsRec(n) {
    if(n === 0) {
        return []
    } else if(n === 1) {
        return [0]
    } else if(n === 2) {
        return [0, 1]
    } else {
        let arr = fibbsRec(n - 1)
        let next = arr[arr.length - 1] + arr[arr.length - 2]
        arr.push(next)
        return arr
    }
}



// sort func

function mergeSort(arr) {
if(arr.length <= 1) return arr

let middle = Math.floor(arr.length / 2)
let left = mergeSort(arr.slice(0, middle))
let right = mergeSort(arr.slice(middle))

left = mergeSort(left);
right = mergeSort(right);

let i = 0
let j = 0
let result = []
while(i < left.length && j < right.length) {
    if(left[i] < right[j]) {
        result.push(left[i])
        i++
    } else {
        result.push(right[j])
        j++
    } 
}

while(i < left.length) {
    result.push(left[i])
    i++
} 

while(j < right.length) {
    result.push(right[j])
    j++
}

return result
}


console.log(mergeSort([5, 6, 3, 2, 8, 9, 1]))
