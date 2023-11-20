function createRobotTalk(nums) {
  let stringedNumberArray = [];
  let robotArray = [];

  for (let i = 0; i <= nums; i++) {
    stringedNumberArray.push(i.toString());
  }
  for (let i = 0; i < stringedNumberArray.length; i++) {
    let currentNumber = stringedNumberArray[i];
    let robotTalk = "";

    if (currentNumber.includes('1') && currentNumber.includes('2')) {
      robotTalk = "Boop!";
    } else if (currentNumber.includes('3') && currentNumber.includes('1')) {
      robotTalk = "Won't you be my neighbor?";
    } else if (currentNumber.includes('2') && currentNumber.includes('3')) {
      robotTalk = "Won't you be my neighbor??";
    } else if (currentNumber.includes('1')) {
      robotTalk = "Beep!";
    } else if (currentNumber.includes('2')) {
      robotTalk = "Boop!";
    } else if (currentNumber.includes('3')) {
      robotTalk = "Won't you be my neighbor?";
    }
    else {
      robotTalk = i;
    }
    robotArray.push(robotTalk);
  }
  return robotArray.join(' ');
}
window.onload = function () {
  let form = document.querySelector("form");
  form.onsubmit = function (event) {
    let selected = document.querySelector("#numberTalk").value;
    createRobotTalk(selected);
    let resultText = createRobotTalk(selected);
    form.reset();
    document.querySelector(".hiddenText").innerText = resultText;
    event.preventDefault();
  };
};




