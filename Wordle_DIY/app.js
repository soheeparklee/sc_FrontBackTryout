let index=0;
let row= 0;
const answer= "APPLE";




function startWordle(){

//Backspace
const pressBackspace= (event) => {
    if(index>0){
    const deleteAnswer= document.querySelector(`#box[data-index="${row}${index-1}"]`);
    deleteAnswer.innerHTML = ""
    index -= 1;
    } 
}
    //Go onto next line
    const nextLine= () => {
        row +=1;
        index= 0;
        if(row ===6) {gameOver(); gameLOSTDisplay()};
    }

    //GameOver
    const gameOver= () =>{
        window.removeEventListener("keydown", writeKey);
        clearInterval(timerStop);
        return;
    }
    //GameOver Display When WON
    const gameWinDisplay= () =>{
        const gameOverWinDiv= document.createElement("div");
        gameOverWinDiv.id = "gameOverDiv";
        gameOverWinDiv.innerText= " 오늘의 워들 문제 성공! "
        document.body.appendChild(gameOverWinDiv);
    }

    //GameOver Display When LOST
    const gameLOSTDisplay= () =>{
        const gameOverLOSTDiv= document.createElement("div");
        gameOverLOSTDiv.id = "gameOverLOSTDiv";
        gameOverLOSTDiv.innerText= " 오늘의 워들 문제 실패ㅠㅠ! "
        document.body.appendChild(gameOverLOSTDiv);
    }
 
    //Enter and check answer
    const pressEnter = () =>{
        let rightAnswer=0;
        for (let i= 0; i<5; i++){
            
            const boxAnswer= document.querySelector(`#box[data-index="${row}${i}"]`);
            const answerUser= boxAnswer.innerHTML
            const answerCheck= answer[i]

            if (answerUser === answerCheck){
                boxAnswer.style.background= "#6aaa64";
                rightAnswer +=1;
            } else if(answer.includes(answerUser)){
                boxAnswer.style.background= "#c9b458"
            }
            else {boxAnswer.style.background= "#787c7e"}
            boxAnswer.style.color="white"
        }
        
        if (rightAnswer === 5) {gameOver(); gameWinDisplay()};
        nextLine();
    }

        //letter input
    const writeKey= (event) =>{
        const alphabetKey= event.key
        const keyCode= event.keyCode;
        console.log(alphabetKey)
        const box= document.querySelector(`#box[data-index="${row}${index}"]`);

        if (index === 5){ 
            if(alphabetKey === "Enter")  pressEnter();
            else return;
        } else if(65<= keyCode &&  keyCode<= 90){
            
            box.innerHTML= alphabetKey.toUpperCase();
            index += 1;
            
        } else if(alphabetKey === "Backspace"){
            pressBackspace();
            console.log(index);
        }
    }
            window.addEventListener("keydown", writeKey );


            //timer
            const start = new Date();
            const time= document.querySelector("#timer");
            const timer= () =>{
                const now= new Date(); 
                const passedTime= new Date(now-start);

                const min= passedTime.getMinutes().toString().padStart(2, "0");
                const sec= passedTime.getSeconds().toString().padStart(2, "0");
                
            
                time.innerHTML= `${min}:${sec}`;
                
            }
            const timerStop= setInterval(timer, 1000);
}
startWordle();

