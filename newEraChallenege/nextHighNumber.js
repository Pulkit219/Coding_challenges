/*
Algorithm applied
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

   else
  {
   //saving that big number and smaller number to the left of it
   let smlNum =arr1[i-1];
    let bigNum =i;
   /*now looping again and checking if we have any other greater number if we have to right of big number and smaller number that we found. 
     A greater number that is of course greater than that smaller number but smaller than the first number we found.
     Why are doing this? Because that is an algorithm to find next higher number with same digits. 
   */
    for(let j=i+1;j<arr1.length;j++)
      {//if there are no diigts are those found numbers then of course loop will not be initiated otherwise...
        if(arr1[j]> smlNum && arr1[j]<arr1[i])
        {// we assign that other found number here
          bigNum=j;
          
        }
      } //now we are doing swapping of places the small num and big number , 3rd part of alogorithm
    arr1[i-1]=arr1[bigNum];
          arr1[bigNum]=smlNum;
    //returning array 
    //too many functions applied sounds complicated right but no, here is the  trick
    //return arr first then apply each function one by one to see output and then further another func to that output to match your needs
    // so here after swapping , 4th part of alogorithm is to sort the array right after the 1st small num we found
    // to do that first we simple take part of array, we splice it and then we apply sort fucntion, then check output (to check outputs, pls use chrome dev console)
    //and then  simply the rest concat and join to main one digit again.
     return arr1.concat((arr1.splice(i,arr1.length)).sort(function(a, b){return a-b})).join('');
    

  
    // Sorry to make it too long but its fun explaining things in much easier ways as much as possible!!
  }
  
}


findNext(1234);