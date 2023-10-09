# WellnessWorld: Your Path to Holistic Health

Visit the live site: [WellnessWorld Live](http://wellness-world-28.surge.sh/)

## Key Features:

1. **Event Listings**: 
   - Explore a variety of health and wellness events, including Health Fairs, Yoga and Fitness Retreats, Wellness Expos, and more.

2. **User Profiles**: 
   - Create personalized profiles to see favorite events, track attendance, and join events.

3. **Blog Section**: 
   - Access regularly updated articles on health, wellness, mindfulness, and personal development.

4. **Registration and Login**: 
   - Easily register for events and access protected routes with email, password, or Google login.

5. **Event Details**: 
   - Dive into event details, including descriptions, dates, locations, and pricing.

6. **Responsive Design**: 
   - Enjoy a seamless browsing experience on various devices, including smartphones and tablets.

7. **About Us**:
   - If you want to know about our community, we have given all the information of al facilities in About Us page.

8. **Contact Us**: 
   - You can contact us for any information Without hesitation and can make a appointment for free. 

***

## Questions and Answers:

1. **Question**: let greeting;
   greetign = {};
   console.log(greetign);

   - A: {}
   - B: ReferenceError: greetign is not defined
   - C: undefined

   **Answer**: B: ReferenceError: greetign is not defined.
   - Because: There's a error in the code where you intended to declare and assign a value to the variable greeting, but you mistakenly used greetign instead, which results in a ReferenceError since greetign is not defined.

2. **Question**: function sum(a, b) {
   return a + b;
   }

   sum(1, "2");

   - A: NaN
   - B: TypeError
   - C: "12"
   - D: 3

   **Answer**: B: TypeError.
   - Because: The sum function attempts to add a number and a string, resulting in a TypeError. JavaScript doesn't perform implicit type conversion when using the + operator with different data types.

3. **Question**: const food = ["🍕", "🍫", "🥑", "🍔"];
   const info = { favoriteFood: food[0] };

   info.favoriteFood = "🍝";

   console.log(food);

   - A: ['🍕', '🍫', '🥑', '🍔']
   - B: ['🍝', '🍫', '🥑', '🍔']
   - C: ['🍝', '🍕', '🍫', '🥑', '🍔']
   - D: ReferenceError

   **Answer**: A: ['🍕', '🍫', '🥑', '🍔']. Because: 
   - The info.favoriteFood assignment doesn't affect the food array. It simply changes the value of the favoriteFood property in the info object.

4. **Question**: function sayHi(name) {
   return `Hi there, ${name}`;
   }

   console.log(sayHi());

   - A: Hi there,
   - B: Hi there, undefined
   - C: Hi there, null
   - D: ReferenceError

   **Answer**: B: Hi there, undefined. 
   - Because: The sayHi function expects an argument name, but it's called without an argument, resulting in undefined for name.

5. **Question**: let count = 0;
   const nums = [0, 1, 2, 3];

   nums.forEach((num) => {
   if (num) count += 1;
   });

   console.log(count);

   - A: 1
   - B: 2
   - C: 3
   - D: 4

   **Answer**: C: 3. 
   - Because: The forEach loop iterates through each element in the nums array, and the condition if (num) checks if the element is truthy (i.e., not equal to 0). There are three truthy elements in the array, so count is incremented three times, resulting in a final value of 3.
