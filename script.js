let arr = [4,5,6,7,8,9];
function binarySearch(arr,target){
    let len = arr.length;
    let start = 0;
    let end = len-1;

    for(let i = 0; i < len; i++){
        let middle = Math.floor(((start + end) / 2));
      if(arr[middle] === target) return target;
     if(target < arr[middle]){
        end = middle-1;
     }else{
        start = middle + 1
     }
    }

    return -1;
};


let res = binarySearch(arr,9);

console.log(res)