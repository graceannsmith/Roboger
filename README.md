Create a web application that takes a number from the user and returns a list of values from 0 to the user's inputted number with the following substitutions made within the returned list:




For numbers that contain a 1, all digits are replaced with "Beep!"
For example, all digits of the number 109, 11, or 1 would be replaced with "Beep!"
For numbers that contain a 2, all digits are replaced with "Boop!"
For example, all digits of the number 2, 24, or 2099 would be replaced with "Boop!"
For numbers that contain a 3, all digits are replaced with "Won't you be my neighbor?"
For example, all digits of the number 39, 3, or 8763 would be replaced with "Won't you be my neighbor?"

These substitutions are written from least to most important. The first substitution should apply unless the second does, and the same with the second and third. In other words, the substitution for the number 1 should apply unless there's a 2 present in the number. Then, the substitution for the number 2 should apply unless there's a 3 present in the number.

Describe: createRobotTalk()

Test: "It should create a string of numbers from the user's inputted number"
Code: createRobotTalk(0);
Expected Output: '0'

Test: It should return an array at the end of the function
Code: createRobotTalk(0);
Expected:['0']

Test: It should iterate over the individual numbers looking for matches And push into array
Code: createRobotTalk(123);
Expected Output:["Boop!", "Beep!","Won't you be my neighbor??" ]

Test: it should
Code:
Expected:

Test: "if target number identified it should it should implement forEach loop and convert 
      every digit to matching words"
Code:
Expected:

Test:
Code:
Expected:

Test:
Code:
Expected:

Test:
Code:
Expected:

Test:
Code:
Expected:

Test:
Code:
Expected:

Test:
Code:
Expected:

Test: "It should create an array out of string of number(s) from the user's inputted number"
Code: createRobotTalk(0);
Expected Output:['0']