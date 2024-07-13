//function that takes a string input representing a simple arithmetic expression
//(only addition and subtraction) and returns the result.


console.log("question2")

function simpleMath(str) {
  let result = 0;
  let i = 0;
  while (i < str.length) {
    if (str[i] !== "+" && str[i] !== "-") {
      result = result + +str[i];
    //   console.log(result);
      i++;
    } else if (str[i] == "+") {
      result = result + +str[i + 1];
      i = i + 2;
    } else if (str[i] == "-") {
      result = result + -str[i + 1];
      i = i + 2;
    }
  }
  return console.log(result);
}

const str = "2+4+5-1-4-10+9+3+4";
simpleMath(str);
