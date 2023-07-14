const options = ["rock", "paper", "scissor"];
var userPoint = 0;
var computerPoint =0;

function computerChoice(){
    var random = Math.floor(Math.random()*3);

    var computerChoice = options[random];

    console.log(computerChoice);
    return computerChoice;
}


function userChoice(){
    const buttons = document.querySelectorAll(".btn");
console.log(buttons);

Array.from(buttons).forEach(button => {
    button.addEventListener("click", () => {
        var user = button.id;
        console.log(user);
        var comp = computerChoice();
        
        var userimg = "./images/user/"+user+".png";
        var compimg = "./images/comp/"+comp+".png";
        document.querySelectorAll("img")[3].setAttribute("src", userimg);
        document.querySelectorAll("img")[4].setAttribute("src", compimg);

        if (user === comp){
            console.log("tie");
        }
        else if((user === "scissor" && comp === "paper")||(user === "paper" && comp ==="rock")||(user === "rock" && comp === "scissor")){
            userPoint++;
            document.getElementById("user-score").innerText = userPoint;
            console.log("user");
        }
        else {
            computerPoint++;
            document.getElementById("computer-score").innerText = computerPoint;
            console.log("computer");
        }
        console.log()
        if(userPoint ===5 && userPoint > computerPoint){
    console.log("user wins");
    document.getElementById("content").innerHTML = '<div class="final"><h1>User Wins</h1></div>';
    return;
}
else if( computerPoint === 5 && computerPoint > userPoint){
    console.log("coputer wins");
    document.getElementById("content").innerHTML = '<div class="final"><h1>Computer Wins</h1></div>';
    
    return;
}
if (computerPoint == 5 && userPoint == 5 ){
    console.log("draw");
    document.getElementById("content").innerHTML = '<div class="final"><h1>Draw</h1></div>';
    return;
}
    });
});

}


userChoice();
// console.log(buttons);