let arr = [4,3,88,5,3,3,6,,4,2,,56,8,4,3,9];


function bubbleSort(arr){
    let len = arr.length-1;
    for(let i = 0; i < len; i++){
        for(let j = 0; j <= len; j++){
            if(arr[i] < arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}


let res = bubbleSort(arr);

console.log(res)