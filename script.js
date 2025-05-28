let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let result= document.querySelector(".res");
let newgame= document.querySelector(".new");
let userX=true;
 newgame.classList.add("hide");
let win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
    box.onclick=()=>{
      if(userX){
          box.innerHTML="X";
          userX=false;
          box.disabled=true;
      }else{
          box.innerHTML="O";
          userX=true;
          box.disabled=true;
      }checkwinner();
    }
});

const disableboxes=()=>{
     
      boxes.forEach((box)=>{
            box.disabled=true;
      });
}

const enableboxes=()=>{
      boxes.forEach((box)=>{
            box.disabled=false;
            box.innerText="";
      });
}

function checkwinner(){
    for(let ptn of win){
        let box1=boxes[ptn[0]].innerText;
        let box2=boxes[ptn[1]].innerText;
        let box3=boxes[ptn[2]].innerText;
        
      if(box1!=="" && box2!=="" && box3!==""  ){
        if(box1===box2 && box2===box3){
           reset.classList.add("hide");
           disableboxes();
          result.innerHTML=`Congratulations...! The Winner is ${box1}`;
          newgame.classList.remove("hide");
        }
      }
      
    }
}

reset.onclick=()=>{
      let userX=true;
      enableboxes();
       result.innerHTML="";
        reset.classList.remove("hide");
          newgame.classList.add("hide");
      
};

newgame.onclick=()=>{
   let userX=true;
     enableboxes();
      result.innerHTML="";
       reset.classList.remove("hide");
       newgame.classList.add("hide");
}