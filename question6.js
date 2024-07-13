//function that takes a string and capitalizes the first letter of each word in the string

function CapString(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (i == 0) {
      result = result + string[i].toUpperCase();
    } else if (string[i - 1] == " ") {
      result = result + string[i].toUpperCase();
    } else {
      result = result + string[i];
    }
  }
  return console.log(result);
}

CapString("hello world myself digvijay");
