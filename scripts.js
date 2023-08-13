/***************************************************************
 * ### Task 1: Set Up
 * Create an HTML file and a JS file and connect them together using a `<script>` element.
 */

/***************************************************************
 *  * ### Task 2: Data Storage
 * Create 4 variables to hold the data of our app
 * One for the **customer's balance** - how many dollars the customer has put in the machine. Set it to something like `2` for testing purposes.
 * One for the **name of the product**. Set it to something like `"Cheetos"` for testing purposes.
 * One for the **price of the product** in dollars. Set it to something like `1.15` for testing purposes.
 * One for the **quantity of the product** in the machine. Set it to something like `5` for testing purposes.
 */

let customerBalance = 2;
let productName = 'Cheetos';
let productPrice = 1.15;
let productQuantity = 5;

/***************************************************************
 * ### Task 3: Calculating Change
 * Calculate how much **change** the customer will get back after buying this product.
 * Save the **change** in a variable, we're going to use it later.
 */
let change = 0;

/***************************************************************
 * ### Task 4: Vending the Product
 * Log a message to the console telling the user the **name of the product** they got from the vending machine, and their **change**.
 * The **change** might have too many numbers after the decimal point. Don't worry about that right now, we'll fix it next week.
 * The message could look something like this:
 * `Enjoy your Cheetos! Here's your change: 0.8500000000000001`
 * Add a line of code that sets the **customer balance** to `0`, since they got their change. Add another line that decreases the **product quantity** by 1, since one product was just sold. Log a message to the console that shows the **product quantity** and the **customer balance**.
 * The message could look something like this:
 * `Number left in machine: 4  Customer balance: 0`
 */
console.log('TASK 4');

/**
 * ### Testing Tasks 1-4

Test the code you've written so far by setting your 4 variables to different test amounts and checking the results. Here's some example results you could compare your results to:
*/
/*
---
Customer balance: `2`  
Product name: `"Cheetos"`  
Product price: `1.15`  
Product quantity: `5`  
Logged to console:  
`Enjoy your Cheetos! Here's your change: 0.8500000000000001`  
`Number left in machine: 4  Customer balance: 0`  
*/
customerBalance = 2;
productName = 'Cheetos';
productPrice = 1.15;
productQuantity = 5;
change = customerBalance - productPrice;
customerBalance = customerBalance - (productPrice + change);
console.log(`Enjoy your ${productName}! Here's your change: ${change}`);
console.log(
   `Number left in machine: ${productQuantity - 1}  Customer balance: ${customerBalance}`
);
console.log('-----------\n\n');
/*
---
Customer balance: `2`  
Product name: `"Popcorn"`  
Product price: `2`  
Product quantity: `10`  
Logged to console:  
`Enjoy your Popcorn! Here's your change: 0`  
`Number left in machine: 9 Customer balance: 0`  
*/
customerBalance = 2;
productName = 'Popcorn';
productPrice = 2;
productQuantity = 10;
change = customerBalance - productPrice;
customerBalance = customerBalance - (productPrice + change);
console.log(`Enjoy your ${productName}! Here's your change: ${change}`);
console.log(
   `Number left in machine: ${productQuantity - 1} Customer balance: ${customerBalance}`
);
console.log('-----------\n\n');
/*
---

If any of your results are off, you'll need to debug and figure out where your code is making a mistake. 

If your results are good, then let's keep going!
 */

/***************************************************************
 * ### Task 5: Fixing a Bug
What would happen if we set our variables to these values?

---

Customer balance: `1` 
Product name: `"Fritos"`  
Product price: `3.5`  
Product quantity: `4`   
*/
console.log('TASK 5 - fixing a bug');
customerBalance = 1;
productName = 'Fritos';
productPrice = 3.5;
productQuantity = 4;
change = customerBalance - productPrice;
customerBalance = customerBalance - (productPrice + change);
console.log(`Enjoy your ${productName}! Here's your change: ${change}`);
console.log(
   `Number left in machine: ${productQuantity - 1} Customer balance: ${customerBalance}`
);
console.log('-----------\n\n');
/*
---

Uh oh! The customer didn't put in enough money! But with our current code, we get something like this:

`Enjoy your Fritos! Here's your change: -2.5`  
`Number left in machine: 3  Customer balance: 0`

How could we fix this?

We only want the user to be able to buy the product if they've put in enough money. If they haven't put in enough money, we want to let them know with a message and we don't want to give them the product. Maybe something like this:

`You haven't added enough money for that product. You need to add 2.5 more.`

An `if`-`else` could be really helpful to us here. Write an `if`-`else` to handle this situation.

>**Feeling stuck? Here's a hint!**
>
> What comparison could we do to check if the customer has put in less money than the product's price? Put that comparison in as the if condition. The code you've already written can go inside the else block. Maybe something like this:
>
> ```javascript
> if(customer added less money than product price) {
>     // Show "not enough money" message
> } else {
>     // Show "enjoy your product" message
>     // Update customer balance and product quantity
> }
> // Show "left in machine and customer balance" message
> ```
> That's not real code, it's pseudo-code - just the general idea of how you could write the code.
>
>Also, that's definitely not the only way you could handle this! It's just one good way. If yours looks a bit different, that's not a problem.
 */

/***************************************************************
 * ### Testing Task 5
Let's make sure our fix worked:

---
Customer balance: `1`  
Product name: `"Fritos"`  
Product price: `3.5`  
Product quantity: `4`    
Logged to console:  
`You haven't added enough money for that product. You need to add 2.5 more.`  
`Number left in machine: 4 Customer balance: 1`  
*/
console.log('TESTING TASK 5 FIX');
customerBalance = 1;
productName = 'Fritos';
productPrice = 3.5;
productQuantity = 4;
change = customerBalance - productPrice;
if (customerBalance < productPrice) {
   console.log(
      `You haven't added enough money for that product. You need to add ${
         productPrice - customerBalance
      } more.`
   );
   console.log(
      `Number left in machine: ${productQuantity} Customer balance: ${customerBalance}`
   );
} else {
   customerBalance = customerBalance - (productPrice + change);
   console.log(`Enjoy your ${productName}! Here's your change: ${change}`);
   console.log(
      `Number left in machine: ${
         productQuantity - 1
      } Customer balance: ${customerBalance}`
   );
}
console.log('-----------\n\n');

/*
---
Customer balance: `0`   
Product name: `"Water Bottle"`  
Product price: `1`  
Product quantity: `2`  
Logged to console:  
`You haven't added enough money for that product. You need to add 1 more.`  
`Number left in machine: 2 Customer balance: 0`  
*/
customerBalance = 0;
productName = 'Water Bottle';
productPrice = 1;
productQuantity = 2;
change = customerBalance - productPrice;
if (customerBalance < productPrice) {
   console.log(
      `You haven't added enough money for that product. You need to add ${
         productPrice - customerBalance
      } more.`
   );
   console.log(
      `Number left in machine: ${productQuantity} Customer balance: ${customerBalance}`
   );
} else {
   customerBalance = customerBalance - (productPrice + change);
   console.log(`Enjoy your ${productName}! Here's your change: ${change}`);
   console.log(
      `Number left in machine: ${
         productQuantity - 1
      } Customer balance: ${customerBalance}`
   );
}
console.log('-----------\n\n');
/*
---

And that we didn't break anything that was working before:

---

Customer balance: `2`  
Product name: `"Cheetos"`  
Product price: `1.15`  
Product quantity: `5`    
Logged to console:  
`Enjoy your Cheetos! Here's your change: 0.8500000000000001`  
`Number left in machine: 4  Customer balance: 0`  
*/
customerBalance = 2;
productName = 'Cheetos';
productPrice = 1.15;
productQuantity = 5;
change = customerBalance - productPrice;
if (customerBalance < productPrice) {
   console.log(
      `You haven't added enough money for that product. You need to add ${
         productPrice - customerBalance
      } more.`
   );
   console.log(
      `Number left in machine: ${productQuantity} Customer balance: ${customerBalance}`
   );
} else {
   customerBalance = customerBalance - (productPrice + change);
   console.log(`Enjoy your ${productName}! Here's your change: ${change}`);
   console.log(
      `Number left in machine: ${
         productQuantity - 1
      } Customer balance: ${customerBalance}`
   );
}
console.log('-----------\n\n');

/*
---
Customer balance: `2`  
Product name: `"Popcorn"`  
Product price: `2`  
Product quantity: `10`  
Logged to console:  
`Enjoy your Popcorn! Here's your change: 0`  
`Number left in machine: 9 Customer balance: 0` 
 */
customerBalance = 2;
productName = 'Popcorn';
productPrice = 2;
productQuantity = 10;
change = customerBalance - productPrice;
if (customerBalance < productPrice) {
   console.log(
      `You haven't added enough money for that product. You need to add ${
         productPrice - customerBalance
      } more.`
   );
   console.log(
      `Number left in machine: ${productQuantity} Customer balance: ${customerBalance}`
   );
} else {
   customerBalance = customerBalance - (productPrice + change);
   console.log(`Enjoy your ${productName}! Here's your change: ${change}`);
   console.log(
      `Number left in machine: ${
         productQuantity - 1
      } Customer balance: ${customerBalance}`
   );
}
console.log('-----------\n\n');
/***************************************************************
 * ### Task 6: Fixing Another Bug
Alright, one issue handled.

Can you think of any other issues we could have with our vending machine?

What would happen if we set our variables to these values?

---

Customer balance: `2`  
Product name: `"Sun Chips"`    
Product price: `2`  
Product quantity: `0`  

---

Oh dear. The machine is out of Sun Chips. This is a catastrophe. And even worse, the machine will respond with:

`Enjoy your Sun Chips! Here's your change: 0`  
`Number left in machine: -1  Customer balance: 0`  

It mocks us in our grief and takes all our money. I'm never coming back to this vending machine again.

Let's fix it before it ruins anyone else's life. How could we prevent the machine from dispensing a product if there isn't any left? 

We'll also want it to return the customer's money (set the **customer balance** to zero). So it should log out something like this:

`Sorry, we're out of Sun Chips. Returned: 2`  
`Number left in machine: 0  Customer balance: 0` 

Write code that will ensure that the vending machine won't vend an item that it's out of, and instead show an appropriate message and return the user's money (set the **customer balance** to zero).

>**Note**
>
>What if the user doesn't add enough money and there isn't any left of the product?
>
>It feels like the best thing to do in that scenario is to give them "We're out of that" message and return their money, rather than the "You haven't added enough money" message. We don't want them to add more money only to be disappointed. Better to tell them sooner than later.
 */

/***************************************************************
 * ### Testing Task 6
As always, let's test that the new functionality works:
*/
console.log('TESTING TASK 6 FIX');
/*
---
Customer balance: `2`  
Product name: `"Sun Chips"`  
Product price: `2`  
Product quantity: `0`   
Logged to console:  
`Sorry, we're out of Sun Chips. Returned: 2`  
`Number left in machine: 0  Customer balance: 0`  
*/
customerBalance = 2;
productName = 'Sun Chips';
productPrice = 2;
productQuantity = 0;
change = customerBalance - productPrice;
if (productQuantity === 0) {
   console.log(`Sorry, we're out of ${productName}. Returned: ${customerBalance}`);
   customerBalance = 0;
   console.log(
      `Number left in machine: ${productQuantity} Customer balance: ${customerBalance}`
   );
} else if (customerBalance < productPrice) {
   console.log(
      `You haven't added enough money for that product. You need to add ${
         productPrice - customerBalance
      } more.`
   );
   console.log(
      `Number left in machine: ${productQuantity} Customer balance: ${customerBalance}`
   );
} else {
   customerBalance = customerBalance - (productPrice + change);
   console.log(`Enjoy your ${productName}! Here's your change: ${change}`);
   console.log(
      `Number left in machine: ${
         productQuantity - 1
      } Customer balance: ${customerBalance}`
   );
}
console.log('-----------\n\n');
/*
---
Customer balance: `2`  
Product name: `"Doritos"`  
Product price: `4`  
Product quantity: `0`  
Logged to console:  
`Sorry, we're out of Doritos. Returned: 2`  
`Number left in machine: 0  Customer balance: 0`  
*/
customerBalance = 2;
productName = 'Doritos';
productPrice = 4;
productQuantity = 0;
change = customerBalance - productPrice;
if (productQuantity === 0) {
   console.log(`Sorry, we're out of ${productName}. Returned: ${customerBalance}`);
   customerBalance = 0;
   console.log(
      `Number left in machine: ${productQuantity} Customer balance: ${customerBalance}`
   );
} else if (customerBalance < productPrice) {
   console.log(
      `You haven't added enough money for that product. You need to add ${
         productPrice - customerBalance
      } more.`
   );
   console.log(
      `Number left in machine: ${productQuantity} Customer balance: ${customerBalance}`
   );
} else {
   customerBalance = customerBalance - (productPrice + change);
   console.log(`Enjoy your ${productName}! Here's your change: ${change}`);
   console.log(
      `Number left in machine: ${
         productQuantity - 1
      } Customer balance: ${customerBalance}`
   );
}
console.log('-----------\n\n');
/*
---

And that we didn't break anything that was working before:

---
Customer balance: `2`  
Product name: `"Cheetos"`  
Product price: `1.15`  
Product quantity: `5`   
Logged to console:    
`Enjoy your Cheetos! Here's your change: 0.8500000000000001`  
`Number left in machine: 4  Customer balance: 0`  
*/
customerBalance = 2;
productName = 'Cheetos';
productPrice = 1.15;
productQuantity = 5;
change = customerBalance - productPrice;
if (productQuantity === 0) {
   console.log(`Sorry, we're out of ${productName}. Returned: ${customerBalance}`);
   customerBalance = 0;
   console.log(
      `Number left in machine: ${productQuantity} Customer balance: ${customerBalance}`
   );
} else if (customerBalance < productPrice) {
   console.log(
      `You haven't added enough money for that product. You need to add ${
         productPrice - customerBalance
      } more.`
   );
   console.log(
      `Number left in machine: ${productQuantity} Customer balance: ${customerBalance}`
   );
} else {
   customerBalance = customerBalance - (productPrice + change);
   console.log(`Enjoy your ${productName}! Here's your change: ${change}`);
   console.log(
      `Number left in machine: ${
         productQuantity - 1
      } Customer balance: ${customerBalance}`
   );
}
console.log('-----------\n\n');
/*
---
Customer balance: `2`  
Product name: `"Popcorn"`  
Product price: `2`  
Product quantity: `10`   
Logged to console:  
`Enjoy your Popcorn! Here's your change: 0`  
`Number left in machine: 9 Customer balance: 0`  
*/
customerBalance = 2;
productName = 'Popcorn';
productPrice = 2;
productQuantity = 10;
change = customerBalance - productPrice;
if (productQuantity === 0) {
   console.log(`Sorry, we're out of ${productName}. Returned: ${customerBalance}`);
   customerBalance = 0;
   console.log(
      `Number left in machine: ${productQuantity} Customer balance: ${customerBalance}`
   );
} else if (customerBalance < productPrice) {
   console.log(
      `You haven't added enough money for that product. You need to add ${
         productPrice - customerBalance
      } more.`
   );
   console.log(
      `Number left in machine: ${productQuantity} Customer balance: ${customerBalance}`
   );
} else {
   customerBalance = customerBalance - (productPrice + change);
   console.log(`Enjoy your ${productName}! Here's your change: ${change}`);
   console.log(
      `Number left in machine: ${
         productQuantity - 1
      } Customer balance: ${customerBalance}`
   );
}
console.log('-----------\n\n');
/*
---
Customer balance: `1`  
Product name: `"Fritos"`  
Product price: `3.5`  
Product quantity: `4`   
Logged to console:  
`You haven't added enough money for that product. You need to add 2.5 more.`  
`Number left in machine: 4 Customer balance: 1`  
*/
customerBalance = 1;
productName = 'Fritos';
productPrice = 3.5;
productQuantity = 4;
change = customerBalance - productPrice;
if (productQuantity === 0) {
   console.log(`Sorry, we're out of ${productName}. Returned: ${customerBalance}`);
   customerBalance = 0;
   console.log(
      `Number left in machine: ${productQuantity} Customer balance: ${customerBalance}`
   );
} else if (customerBalance < productPrice) {
   console.log(
      `You haven't added enough money for that product. You need to add ${
         productPrice - customerBalance
      } more.`
   );
   console.log(
      `Number left in machine: ${productQuantity} Customer balance: ${customerBalance}`
   );
} else {
   customerBalance = customerBalance - (productPrice + change);
   console.log(`Enjoy your ${productName}! Here's your change: ${change}`);
   console.log(
      `Number left in machine: ${
         productQuantity - 1
      } Customer balance: ${customerBalance}`
   );
}
console.log('-----------\n\n');
/*
---
Customer balance: `0`  
Product name: `"Water Bottle"`  
Product price: `1`  
Product quantity: `2`   
Logged to console:  
`You haven't added enough money for that product. You need to add 1 more.`  
`Number left in machine: 2 Customer balance: 0`  
*/
customerBalance = 0;
productName = 'Water Bottle';
productPrice = 1;
productQuantity = 2;
change = customerBalance - productPrice;
if (productQuantity === 0) {
   console.log(`Sorry, we're out of ${productName}. Returned: ${customerBalance}`);
   customerBalance = 0;
   console.log(
      `Number left in machine: ${productQuantity} Customer balance: ${customerBalance}`
   );
} else if (customerBalance < productPrice) {
   console.log(
      `You haven't added enough money for that product. You need to add ${
         productPrice - customerBalance
      } more.`
   );
   console.log(
      `Number left in machine: ${productQuantity} Customer balance: ${customerBalance}`
   );
} else {
   customerBalance = customerBalance - (productPrice + change);
   console.log(`Enjoy your ${productName}! Here's your change: ${change}`);
   console.log(
      `Number left in machine: ${
         productQuantity - 1
      } Customer balance: ${customerBalance}`
   );
}
console.log('-----------\n\n');

/***************************************************************
 * ### Finished
Yeah baby! We've written the core logic of our vending machine using variables, operators, and `if`-`else`.
*/
console.log('We did it!');
