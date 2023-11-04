let arr = [4,3,88,5,3,3,6,1,4,2,7,56,8,4,3,9];


function bubbleSort(arr){
    let len = arr.length;
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


function bubbleSort2(arr){
let len = arr.length-1;
for(let i = 0; i < len; i++){
    for(let j = i+1; j < len; j++){
      if(arr[i] > arr[j]){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
}
return arr;
}

res = bubbleSort2(arr);

console.log(res)