const btn = document.querySelectorAll('.btns');
const res = document.querySelector(".screen")
let currentnum=""
let previosnum=""
let operation;
let result=0;


btn.forEach(btn =>{
  btn.addEventListener('click', function(e){
    if(e.target.value==1){
       
       currentnum +=1
       res.textContent=currentnum
    }
    else if(e.target.value==2){
      
       currentnum+=2
       res.textContent = currentnum
    }
    else if(e.target.value==3){
       
        currentnum+=3
        res.textContent = currentnum
     }
     else if(e.target.value==4){
        currentnum+=4
        res.textContent = currentnum
     }
     else if(e.target.value==5){
        currentnum+=5
        res.textContent = currentnum
     }
     else if(e.target.value==6){
        currentnum+=6
        res.textContent = currentnum
     }
     else if(e.target.value==7){
        currentnum+=7
        res.textContent = currentnum
     }
     else if(e.target.value==8){
        currentnum+=8
        res.textContent = currentnum
     }
     else if(e.target.value==9){
        currentnum+=9
        res.textContent = currentnum
     }
     else if(e.target.value=="+"){
         currentnum+="+"
         res.textContent = currentnum
         operator("+")
     }
     else if(e.target.value=="-"){
        currentnum+="-"
        res.textContent = currentnum
        operator("-")
    }
    else if(e.target.value=="x"){
        currentnum+="x"
        res.textContent = currentnum
        operator("x")
    }
    else if(e.target.value=="/"){
        currentnum+="/"
        res.textContent = currentnum
        operator("/")
    }
     else if(e.target.value=="="){
          operator("=")
     }
     else if(e.target.value=="clr"){
        res.textContent =""
        currentnum=""
   }


  });
});
function operator(op){
    if (operation==null) {
        operation=op;
        result =parseInt(res.textContent)
        console.log(result)
        currentnum=""
        res.textContent=""
       
    }else{
        switch (operation) {
            case "+":
                result+=parseInt(res.textContent);
                console.log(result)
                break;
              case "-":
                  result-=parseInt(res.textContent);
                  break;
              case "x":
                  result*=parseInt(res.textContent);
                  break;
              case "/":
                      result/=parseInt(res.textContent);
                  break;
                
              default:
                  break;
            
         }
        if(op=="="){
            res.textContent = `${result}`;
            result=0;
            operation=null;
            
        }else{
            operation=op;
            res.textContent=""
            currentnum=""
   }
    }
 }
