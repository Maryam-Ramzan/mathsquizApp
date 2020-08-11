var score = 0;
var ques = 0;
 document.getElementById( 'gameover' ).innerHTML = 'Game over. Your score is:' + score;


 function del(e)
{
   
    e.parentNode.remove();
    document.getElementById("Container").style.display="block";


}


var num1 = 0;
var num2 = 0;
var operator = 0;

// if(ques == 6){
//     if(score==5)
//     {
//         document.getElementById('gameover').innerHTML = "Yay! You won Champ ;)"       
//     }
//  document.getElementById('gameover').innerHTML = "Game over! Your score is " + score +  " :)"
// //  document.getElementById("Container").style.display="none";
// }

getQuestion();

document.getElementById( 'score' ).innerHTML = '<h3>Score : 0</h3>';
// document.getElementById('ques').innerHTML = '<h3>Question : 1</h3>';
document.getElementById( 'answer' ).value='';
document.getElementById( 'gameover' ).innerHTML = ''



function getQuestion() {
var operators = [ '+', '-'];
num1 = Math.round( Math.random() * 10 );
num2 = Math.round( Math.random() * 10 );

// console.log(Math.round( Math.random() * (operators.length-1) ));
operator = operators[ Math.round( Math.random() * (operators.length-1) ) ];
document.getElementById('question').innerHTML = (num1 + ' ' + operator + ' ' + num2);
document.getElementById('answer').value= ''
}


function checkAnswer() 
{
if(ques == 5){
    document.getElementById('endgame').style.display="block";
    if(score==5)
    {
        document.getElementById( 'gameover' ).innerHTML = "Yay! You won Champ ;)";       
    }
 document.getElementById( 'gameover' ).innerHTML = "Game over! Your score is " + score +  " :)";
 document.getElementById("Container").style.display="none";
}
    
var answer = document.getElementById('answer').value;
    

if( eval(num1 + operator + num2 ) == answer) 
{
    Container.style.backgroundColor = '#7CFC00';
    score++;
    document.getElementById( 'score' ).innerHTML = "Score:" + score;
    ques++;
    document.getElementById( 'ques' ).innerHTML = "Question:" + ques;
    setTimeout(() => {
        getQuestion();
},1000)}
 else{
    Container.style.backgroundColor = 'red';
    // score--;
    document.getElementById( 'score' ).innerHTML = "Score:" + score;
    ques++;
    document.getElementById( 'ques' ).innerHTML = "Question:" + ques;
    getQuestion();
}

}

function fire() {


checkAnswer();

}
