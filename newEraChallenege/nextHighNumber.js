/*
Algorithm
I) Traverse the given number from rightmost digit, keep traversing till you find a digit which is smaller than the previously traversed digit. For example, if the input number is “534976”, we stop at 4 because 4 is smaller than next digit 9. If we do not find such a digit, then output is “Not Possible”.

II) Now search the right side of above found digit ‘d’ for the smallest digit greater than ‘d’. For “534976″, the right side of 4 contains “976”. The smallest digit greater than 4 is 6.

III) Swap the above found two digits, we get 536974 in above example.

IV) Now sort all digits from position next to ‘d’ to the end of number. The number that we get after sorting is the output. For above example, we sort digits in bold 536974. We get “536479” which is the next greater number for input 534976.

*/

function findNext(arr)
{
  let i;
  //breaking down a digit into arrays of string and then converting back that array to number array
  let arr1=arr.toString().split('').map(Number) ;
  //started to loop from the end of array 
  for(i=arr1.length;i>0;i--)
  {
  	//looking for if the current number is greater than the number next to it
    if(arr1[i]>arr1[i-1])
    {// if yes then we break the loop it so that we can swap and sort
      break;}
  }
  
  if(i==0)
  {console.log("Not possible");}

 
  
}


findNext(1234);