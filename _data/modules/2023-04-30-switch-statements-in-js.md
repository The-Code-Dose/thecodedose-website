---
template: ModuleTemplate
slug: switch-statements-in-javascript
title: Switch Statements in JavaScript
curriculum: javascript
path: /curriculum/javascript/switch-statements-in-javascript
thumbnail: /assets/switch_in_js.png
---

Now that you're comfortable working with if/else statements, lets learn about another control structure in JavaScript: `switch`.

# What are Switch Statements?

Switch statements are a type of control flow statement that allow you to check for a particular value and execute specific code blocks based on that value.

It accepts a value and compares it against multiple possible cases and executes the code block for the first matching case.
It is an alternative to a series of if/else if statements and is useful when you have multiple conditions to check against a single value.

Here's the basic syntax of a switch statement:

```js
switch (expression) {
  case value1:
    // Code block to execute when expression === value1
    break;
  case value2:
    // Code block to execute when expression === value2
    break;
  default:
    // Code block to execute when none of the cases match
}
```

The expression is the value you want to compare against multiple cases. Each case specifies a value to compare expression against, and if a match is found, the code block following that case will be executed. If no match is found, the default code block will be executed.
Let us look at an example:

```js
let mood = "confused";

if (mood == "happy") {
  console.log("I'm feeling great today!");
} else if (mood == "sad") {
  console.log("I could really use a hug right now.");
} else if (mood == "angry") {
  console.log("Don't mess with me, I'm in a bad mood.");
} else if (mood == "confused") {
  console.log("I don't know whether to laugh or cry!");
} else {
  console.log("I'm not sure how I feel right now.");
}
```

The above code example can be rewritten with `switch` statement as below:

```js
let mood = "confused";

switch (mood) {
  case "happy":
    console.log("I'm feeling great today!");
    break;
  case "sad":
    console.log("I could really use a hug right now.");
    break;
  case "angry":
    console.log("Don't mess with me, I'm in a bad mood.");
    break;
  case "confused":
    console.log("I don't know whether to laugh or cry!");
    break;
  default:
    console.log("I'm not sure how I feel right now.");
}
```

The expression is evaluated once, and the resulting value is compared to each case value in the order they are written.
If a match is found, the code block following that case will be executed, and the switch statement will exit.
If no match is found, the code block following the default case will be executed (if one is provided).
Hence, the above example will print "I don't know whether to laugh or cry!" because `mood` matches the case "confused".

# `break`

Notice the `break` statement at the end of each `case`?
This is because without a `break`, the switch statement will continue executing code blocks for subsequent cases until it reaches a `break` statement or the end of the switch statement.
This is also known as "fallthrough".

```js
let num = 10;

switch(num) {
  case 10:
    console.log("Ten");
  case 5:
    console.log("Five");
  case 1:
    console.log("One");
  default:
    console.log("Default");
}
```

The output of this code will be:

```
Ten
Five
One
Default
```

In this code, we have a switch statement with a `num` variable initialized to 10, which matches the first case.
Once a match is found, the code block following that case will be executed, and the switch statement will continue to execute the code block for all subsequent cases until a `break` statement is encountered.

But, there are no `break` statements after each case, so all the cases are executed one after the other. As a result, when the code is executed, it will print "Ten", "Five", "One", and "Default" in that order. So be careful with switch statements and don't forget those `break` statements!

However, the fallthrough behavior of switch statement might come in handy in some situations, for example:

```js
const day = "Friday";
let schedule = "";

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
    schedule = "Work day";
    break;
  case "Friday":
    schedule = "Half-day at work";
    // fallthrough
  case "Saturday":
  case "Sunday":
    schedule += ", Weekend!";
    break;
  default:
    schedule = "Invalid day";
}

console.log(schedule); // "Half-day at work, Weekend!"
```

If the `day` is a weekday (Monday to Thursday), it sets the schedule variable to "Work day" and breaks out of the switch statement. However, if it's a Friday, it sets schedule to "Half-day at work" and allows the code to "fall through" to the next case, which checks for the weekend days.

Using the fallthrough behavior in this case is useful as we avoid repeating the code for the "Weekend" case or extract it to a separate function, which makes the code more concise and easier to read. By using the fallthrough behavior, we achieve the desired output while avoiding unnecessary repetition.

# When to Use Switch Statements

Switch statements can be pretty helpful when you have a value with several potential cases to compare against.
They can make your code more succinct and easier to comprehend than using a series of if/else if statements.

But before you go wild with switch statements, keep in mind that they should only be used in situations where the number of cases is relatively small and the comparisons are straightforward. If you're dealing with a large number of cases or complex comparisons, it might be better to consider another approach.
