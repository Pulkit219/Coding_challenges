/*
Mr Klowns's Karnival has a new carnival game and wants an algorithm that will allow him to calculate the a player's score. The game plays as follows: A player has 5 balls and throws them at targets. The player's score will be determined by the targets that are hit.

Different Targets:

1) Numeric Targets (i.e. number 0 to 9): The score is 10 times the face value.  I.E if tile 5 is hit, players get 50 points
2) Letter D: This throw's score is equal to double the previous throws score.
3) Letter H: This throw's score is equal to half the previous throws score rounded up; 
4) Letter X: This score counts as Zero; however the user gets two additional balls to throw.

The algorithm signature is as follows:

int Calculate(string data);

Where data is a string that represents all the targets that were hit and it what order. For example if data="4D567", this means that the first target that was hit was a 4, followed by, D, 5 ,6 and 7.  
The algorithm is case-insensitive thus you do not have to worry about it. Parameter validation is also not required, meaning you do not have to check if the string is null or empty before hand.

Here are some examples:

Data = "12340", Score = 100;
Data = "2222D", Score = 120;
Data = "55D55", Score = 300;
Data = "XXH123H45", Score = 165;
Data = "11DD11", Score = 100;

IMPORTANT: The code should be written in javascript. I will be able to replay what you write in real time thus helping me understand what you are thinking will be a great help. So don't worry about being verbose with your comments. 

Good Luck!


*/


//if we get 11DD11 AS SCORE or anything else, we need to first break it down to array, simple straight forward technique
let finalScoreReport=[];
function checkScore(score)
{
    //now we split the score and converted to an array so that we can loop over each one of them
    let scoreCopy =score.split('');
    //for testing purposes I need to console.log
    //one more array variable , I will declare to store the actual number score
    let scoreFinal=[];
    
    for(let i=0;i<scoreCopy.length;i++)
    {
        //now we will check all cases as mentioned above for 0-9, D,H,X
        //checking if current value a number or some char
        if(!isNaN(scoreCopy[i]))
        {scoreFinal.push(scoreCopy[i]*10)}
        //heer we are checking if current score is D and also there is some previous numerical score because otherwise how'd you double it when there is no number is at previous index
        else if(scoreCopy[i]=='D'&& !(isNaN(scoreFinal[i-1])))
        {scoreFinal.push(scoreFinal[i-1]*2)}
        
        else if(scoreCopy[i]=='H'&& !(isNaN(scoreFinal[i-1])))
        {scoreFinal.push(scoreFinal[i-1]/2)}
        //for X we don't need to check previous, it's zero user will get a chance again
        else if(scoreCopy[i]=='X')
        {scoreFinal.push(0)}
        //deafault case if user inputs anything gibberish, it will be counted as zero as well
        else
        {scoreFinal.push(0)}
    }
    //now I think we gonna calculate the total score by using reduce
    /*return scoreFinal.reduce((sum,element)=>
    {return sum+=element},0);*/
    //now let me check into my console
    //all cases are working but two more things came into my mind is what if user hits like DDH123
    //it would not make sense since they are half and double of previous so if previous valid integer score
    //dosen't exist then they will counted as zero, I WISH I COULD ask MR. KLOWN lol, just kidding
    
    //now if user gets another chance so..let me try something in console.. hold on 
    //Alright we are gonna take an array var outside of this method so that we can append and add the score from results user get from new trials from 'X'
     finalScoreReport.push(...scoreFinal);
     
     return finalScoreReport.reduce((sum,element)=>
    {return sum+=element},0);
    
}
checkScore('XXH123H45');
//I am gonna check ..hold on
//cool, so let's say if user try 2 more time according to above scenario
checkScore('12340');
checkScore('11DD11');