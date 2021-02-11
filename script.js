function shake(){
let randomNumber1 = Math.floor((6 * Math.random()) + 1);
let randomNumber2 = Math.floor((6 * Math.random()) + 1);

document.querySelectorAll(".dice img")[0].setAttribute("src", `./images/dice${randomNumber1}.png`);
document.querySelectorAll(".dice img")[1].setAttribute("src", `./images/dice${randomNumber2}.png`);


let h1 = document.querySelector("h1");
if(randomNumber1 == randomNumber2){
    h1.innerText = "DRAW";
} else if (randomNumber1 > randomNumber2){
    h1.innerText = "Player 1 Wins";
} else {
    h1.innerText = "Player 2 Wins";
}
}