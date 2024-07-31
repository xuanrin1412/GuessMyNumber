'use strict';
// MISTERY NUMBER
let numberMistery = document.querySelector(".number").textContent
numberMistery = Math.floor(Math.random() * 10) + 1;

console.log({ numberMistery });

//SCORE
let score = Number(document.querySelector(".score").textContent)
let firstHightScore = true;
document.querySelector(".check").addEventListener('click', function () {
    let inputGuessValue = Number(document.querySelector(".guess").value)
    if (!inputGuessValue) {
        document.querySelector(".message").textContent = "No Number 🙅"
    } else {
        if (inputGuessValue === numberMistery) {
            document.querySelector(".message").textContent = "Correct Number 💕😍 "
            document.querySelector(".number").textContent = inputGuessValue
            document.querySelector(".check").disabled = true;
            document.querySelector(".check").style.cursor = "not-allowed";
            document.querySelector("body").style.backgroundColor = "#0be881"
            document.querySelector(".guess").disabled = true
            if (firstHightScore) {
                document.querySelector(".highscore").textContent = score
                firstHightScore = false
            } else {
                if (Number(document.querySelector(".highscore").textContent) < document.querySelector(".score").textContent) {
                    document.querySelector(".highscore").textContent = document.querySelector(".score").textContent
                } else if (Number(document.querySelector(".highscore").textContent) > document.querySelector(".score").textContent) {
                }
            }
        } else {
            if (firstHightScore) {
                score -= 1;
                document.querySelector(".score").textContent = score
            } else {
                // debugger;
                score -= 1;
                document.querySelector(".score").textContent = score
                console.log("secondssd", score);

            }
            (inputGuessValue > numberMistery) ? document.querySelector(".message").textContent = "📈 Too hight"
                : document.querySelector(".message").textContent = "📉 Too low"

        }
    }
})
document.querySelector(".again").addEventListener("click", function () {
    document.querySelector(".message").textContent = "Start guessing..."
    document.querySelector(".check").disabled = false;
    document.querySelector(".guess").disabled = false
    document.querySelector(".score").textContent = 20;
    score = 20
    document.querySelector(".check").style.cursor = "pointer";
    document.querySelector("body").style.backgroundColor = "black"
    document.querySelector(".guess").value = ""
    document.querySelector(".number").textContent = "?"
    numberMistery = Math.floor(Math.random() * 10) + 1;
    console.log("222", { numberMistery });

})



