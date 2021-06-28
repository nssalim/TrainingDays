// Training Days
// A service called Training Days sends a message for the event signed up for and the days left to train.

// With well scoped variables:- 
// the getRandEvent() function should select an event at random. 
// The getTrainingDays() function should return the number of days to train based on the event selected. 
// The logEvent() and logTime() functions should print the athlete name, event, and number of days to the console.

// Problem 7
// The scope of `random` is too loose 
// The events are assigned randomly, but Jane and Peter are running the same events!
// Fix 7
// move the random variable from the global scope to block scope within the getRandEvent function
// Output
// Jane's event is: Marathon
// Jane's time to train is: 50 days
// Peter's event is: Triathlon
// Peter's time to train is: 100 days

const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3);
    if (random === 0) {
      return 'Marathon';
    } else if (random === 1) {
      return 'Triathlon';
    } else if (random === 2) {
      return 'Pentathlon';
    }
  };
  
  // Problem 1
  // The scope of `days` was too tight
  // Output
  // ReferenceError: days is not defined
  //     at getTrainingDays
  // Fix 1
  // declare days to avoid the ReferenceError
  // Problem 2
  // now, no error, but days is undefined
  // Output
  // Jane's event is: Marathon
  // Jane's time to train is: undefined days
  // Fix 2
  // Delete the three let‘s within the if/else if statements.
  // Now the if/else if statements are changing the original days rather than defining a new one.
  // Output
  // Jane's event is: Pentathlon
  // Jane's time to train is: 200 days
  const getTrainingDays = event => {
    let days;
    if (event === 'Marathon') {
      days = 50;
    } else if (event === 'Triathlon') {
      days = 100;
    } else if (event === 'Pentathlon') {
      days = 200;
    }
  
    return days;
  };
  
  // Problem 4
  // SyntaxError: Identifier 'name' has already been declared
  // Fix 4
  // Move the name variable to global scope.
  const name = 'Jane';
  // Problem 3
  // The scope of `name` is too tight
  // The log functions–logEvent() and logTime()–use the same name variable.
  // Fix 3
  // avoid repetition by adding name as the first parameter for each function
  const logEvent = (name, event) => {
    console.log(`${name}'s event is: ${event}`);
  };
  
  const logTime = (name, days) => {
    console.log(`${name}'s time to train is: ${days} days`);
  };
  
  const event = getRandEvent();
  const days = getTrainingDays(event);
  // Define a `name` variable. Use it as an argument after updating logEvent and logTime 
  
  // Problem 5
  // Pass name as the first argument to logEvent() and logTime().
  // Fix 5
  // add name
  // Output
  // Jane's event is: Triathlon
  // Jane's time to train is: 100 days
  logEvent(name, event);
  logTime(name, days);
  
  // Problem 6
  // Try the functions for another competitor.
  // Fix 6
  // Output
  // Jane's event is: Marathon
  // Jane's time to train is: 50 days
  // Peter's event is: Marathon
  // Peter's time to train is: 50 days
  const event2 = getRandEvent();
  const days2 = getTrainingDays(event2);
  const name2 = 'Peter';
   
  logEvent(name2, event2);
  logTime(name2, days2);
  
  
  
  
  
  