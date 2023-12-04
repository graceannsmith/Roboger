# Mr. Roboger


#### By **Graceann Smith**

#### A number interpreter for Mr. Roboger

## Technologies Used

* HTML
* CSS
* JavaScript

## GitHub Page Links

[Language-Chooser Github Page] 
(https://github.com/graceannsmith/roboger.git)

## Setup/Installation Requirements

* Open in any browser by clicking in link
*To clone please go to https://github.com/graceannsmith/roboger.git
*Highest directory in repository is roboger

## Description
The idea of this project is to have a number translated into a string of numbers and words based on the numbers leading up to the input word.
The real purpose is to give me, the maker the chance to use branching statements and loops in that can be expressed on a webpage

## Tests

Describe: createRobotTalk()

Test: "It should create a string of numbers from the user's inputted number"
Code: createRobotTalk(0);
Expected Output: '0'

Test:it should use a for loop to iterate over each stringed number
Code:createRobotTalk(3);
Expected:'0','1','2','3'

Test: It should push all the new stringified elements into an array
Code:createRobotTalk(3);
Expected:['0','1','2','3']

Test: It should use a branching statement to change any number containing a '3' in the to string "Won't you be my neighbor??" 
Code: createRobotTalk(3);
Expected:['0','1','2','Won't you be my neighbor??']

Test: The branching statement should also change any number containing a '2' in the to string "Boop!" 
Code: createRobotTalk(3);
Expected:['0','1','Boop!','Won't you be my neighbor??']

Test: The branching statement statement should also change any number containing a '1' in the to string "Beep!" 
Code: createRobotTalk(3);
Expected:['0','Beep!','Boop!','Won't you be my neighbor??']

Test: The branching statement should leave any stringified number that does not contain a '1', '2' or '3' alone and push that original string value into the new array 
Code: createRobotTalk(4);
Expected:['0','1','2','Won't you be my neighbor??','4']

Test: It should return an array at the end of the function that accurately reflects the branching statement.
Code: createRobotTalk(13);
Expected:['0', 'Beep!', 'Boop!', 'Won't you be my neighbor?', '4', '5', '6', '7', '8', '9', 'Beep!', 'Beep!', 'Boop!', 'Won't you be my neighbor?']

Test: "It should return an array that is joined without commas out of string of number(s) from the user's inputted number"
Code: createRobotTalk(13);
Expected Output: 0 Beep! Boop! Won't you be my neighbor? 4 5 6 7 8 9 Beep! Beep! Boop! Won't you be my neighbor?

## Known Bugs

* No known bugs as of yet
  
## License

MIT License

Copyright (c) [2023] [Graceann Elizabeth Smith]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.