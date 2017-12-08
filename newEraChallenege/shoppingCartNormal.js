/*

1.  Vous construisez un système de shopping cart qui ne vend que des pommes et des oranges.
2.  Les pommes coûtent 0.60$ et les oranges coûtent 1.25$.
3.  Construire un système de caisse qui prend une liste d'articles scannés à la caisse et produit le coût total.
4.  Par exemple: [Pomme, Pomme, Orange, Pomme] => 3.05$
5.  Faites des hypothèses raisonnables sur les entrées de votre solution, par exemple, de nombreux candidats prennent une liste de chaînes comme entrée


===================

1. You build a shopping cart system that sells only apples and oranges.
2. Apples cost $ 0.60 and oranges cost $ 1.25.
3. Build a cashier system that takes a list of scanned items at the checkout and produces the total cost.
4. For example: [Apple, Apple, Orange, Apple] => 3.05 $
5. Make reasonable assumptions about the inputs of your solution, for example, many candidates take a list of strings as input
*/


//METHOD#1



 

function addToshoppingCart(...fruitArray)

{

	  let bill=[];
        //converting array to lower case toa avoid any case confusions
	  let fruitcart =fruitArray.map(el=>{return el.toLowerCase()});
        // prices defined
	  let fruits ={

	  orange:1.25,

	  apple:0.60

	}

	 
      // checking the array input by user  if we have that item in stock otherwise charged zero
		for(let i=0;i<fruitcart.length;i++)

		{
            //checking for the item
		    if(fruits.hasOwnProperty(fruitcart[i]))

		    {   
		    	
                //if item exists then adding the price of that item to an array bill[]
		      bill.push((fruits[fruitcart[i]]));

		    }
              //if not then zero because item does not exists
		   else{bill.push(0)};

		 

		 }
		 //now we have added the prices of items so bill [] is ready 

	
}

 

addToshoppingCart('Apple','apple','orange','apple');

 