let arr = [2,2,4,4,5];
let obj = {
    name : "Asraful islam",
    country :  "Bangladesh"
}

// Type string


function displayNumber(){
    let num = 0;

    let res = setInterval(()=>{
        if(num === 10) return;
        num++
        console.log(num)
    },1000)
  

   if(num === 2){
    clearInterval(res)
   }
   
}


//displayNumber()

let type = document.querySelector('.type')
let names = []
function typeString(res){

        let str = "Asraful";
        let i = 0;
       
        setInterval(()=>{
           if(i === str.length){
              names = [];
              i = 0;
             }
           names.push(str[i]);
           type.innerHTML = names.join('')
         i++;
        },100)
    
    }



typeString(true)


console.log("Hello bangladesh")