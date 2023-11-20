
Describe: createRobotTalk()

Test: "It should create a string of numbers from the user's inputted number"
Code: createRobotTalk(0);
Expected Output: '0'

Test:it should use a for loop to iterate over stringed numbers and push each 'digit' into an array
Code:createRobotTalk(3);
Expected:['0','1','2','3']

Test: It should return an array at the end of the function
Code: createRobotTalk(0);
Expected:['0']

Test: It should iterate over the individual numbers looking for matches And push into array
Code: createRobotTalk(123);
Expected Output:["Boop!", "Beep!","Won't you be my neighbor??" ]


Test: it should account for numbers that contain both target digits
Code: createRobotTalk(15);
Expected: [0,'Beep!','Boop!',"Won't you be my neighbor??",4, 5,6,7,8,9,'Beep!','Beep!','Boop!',"Won't you be my neighbor?",'Beep!','Beep!']



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