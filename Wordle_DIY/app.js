let index=0;
let row= 0;
const answer= "APPLE";

function startWordle(){

    const pressEnter = () =>{
        for (let i= 0; i<5; i++){
            const boxAnswer= document.querySelector(`#box[data-index="${row}${i}"]`);
            const answerUser= boxAnswer.innerHTML
            const answerCheck= answer[i]

            if (answerUser === answerCheck){
                boxAnswer.style.background= "#6aaa64";
            } else if(answer.includes(answerUser)){
                boxAnswer.style.background= "#c9b458"
            }
            else {boxAnswer.style.background= "#787c7e"}
            boxAnswer.style.color="white"

        }
    }
    
    const writeKey= (event) =>{
        const alphabetKey= event.key
        const keyCode= event.keyCode;
        const box= document.querySelector(`#box[data-index="${row}${index}"]`);

        if (index === 5){ 
            if(alphabetKey === "Enter")  pressEnter();
            else return;
        } else if(65<= keyCode &&  keyCode<= 90){
            
            box.innerHTML= alphabetKey.toUpperCase();
            index += 1;
            
        } 
        
    }
    window.addEventListener("keydown", writeKey );

}

startWordle();