let boxes= document.querySelectorAll(".box");
let resetbtn= document.getElementById("reset");
let winner=document.querySelector("#winner");
let newgame=document.querySelector("#new");
let msg=document.querySelector(".msg");
let turno =true;
const winpattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

newgame.addEventListener("click",()=>{
    enableboxes();
    turno=true;
    msg.classList.add("hide");
})

resetbtn.addEventListener("click",()=>{
    enableboxes();
    turno=true;
    msg.classList.add("hide");
})

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        box.innerText="AB";
        if(turno){
            box.innerText="O";
            box.style.color="blue"
            turno=false;
        }else{
            box.innerText="X";
            turno=true;
        }
        box.disabled=true;
        checkWinner();
    })
})

const disableboxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableboxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showresult=(winner)=>{
    this.winner.innerText=`Winner is ${winner}`;
    msg.classList.remove("hide");
    disableboxes();
}

const checkWinner=()=>{
    for(pattern of winpattern){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 &&pos2===pos3){
                console.log("Winner",pos1);
                showresult(pos1);
            }
        }
    }
}