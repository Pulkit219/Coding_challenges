<p>
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


</p>
