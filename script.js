let arr = [2,2,4,4,5];
let obj = {
    name : "Asraful islam",
    country :  "Bangladesh"
}

// Type string


function displayNumber(){
    let num = 0;

    setInterval(()=>{
        if(num === 10) return;
        num++
        console.log(num)
    },1000)
  

   
}


displayNumber()