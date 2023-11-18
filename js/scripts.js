/*
Create a web application that takes a number from the user and 
returns a list of values from 0 to the user's inputted number with 
the following substitutions made within the returned list:


For numbers that contain a 1, all digits are replaced with 
"Beep!"
For example, all digits of the number 109, 11, or 1 would be 
replaced with "Beep!"
For numbers that contain a 2, all digits are replaced with 
"Boop!"
For example, all digits of the number 2, 24, or 2099 would be 
replaced with "Boop!"
For numbers that contain a 3, all digits are replaced 
with "Won't you be my neighbor?"
For example, all digits of the number 39, 3, or 8763 would 
be replaced with "Won't you be my neighbor?"

These substitutions are written from least to most important. 
The first substitution should apply unless the second does, and
 the same with the second and third. In other words, the 
 substitution for the number 1 should apply unless there's a 
 2 present in the number. Then, the substitution for the number 2 
 should apply unless there's a 3 present in the number.
 */

function createRobotTalk(nums) {
  let robotArray = [];

  let stringNums = nums.toString();
  let numberArray = Array.from(stringNums);
  console.log(numberArray);
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] === '1') {
      numberArray[i] = 'Beep!'
    } else if (numberArray[i] === '2') {
      numberArray[i] = "Boop!"
    } else if (number[i] === '3') {
      numberArray[i] === "Won't you be my neighbor?"
    }
    robotArray.push(numberArray[i]);
  }

  return robotArray;
}

let test1 = createRobotTalk(1234562232);
console.log(test1);