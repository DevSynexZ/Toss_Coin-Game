let heads=0;
let tails=0;

function tossCoin() {
    let coinImg = document.querySelector("#coin img");
    let resultText= document.getElementById("result");
    let randomNumber = Math.floor(Math.random()*2);

    coinImg.style.transform ="rotateY(720deg)";

setTimeout(() => {
    if (randomNumber === 0) {
        coinImg.src ="pictures/head.jpg";
        resultText.innerHTML = "Heads!!!";
        heads++;
        document.getElementById("headsCount").textContent = heads;
    }
    else { (randomNumber ===1)
        coinImg.src = "pictures/tail.jpg";
        resultText.innerHTML ="Tails!!!";
        tails++;
        document.getElementById("tailsCount").textContent= tails;
    }

    coinImg.style.transform = "rotateY(360deg)";
},1000);
}

function resetGame() {
    heads = 0;
    tails = 0;

    document.getElementById("headsCount").textContent=heads;
    document.getElementById("tailsCount").textContent=tails;
    document.getElementById("result").innerHTML="";
    document.querySelector("#coin img").src="pictures/head.jpg";
}