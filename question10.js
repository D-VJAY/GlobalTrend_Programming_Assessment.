//Capitalizing the first letter and rest to smallcase
//function that converts a given string to title case (capitalizing the first letter of each word).
function ModifyString(string) {
  let result = "";
  for (let i = 0; i < string.length; i++) {
    if (i == 0) {
      result = result + string[i].toUpperCase();
    } else if (string[i - 1] == " ") {
      result = result + string[i].toUpperCase();
    } else {
      result = result + string[i].toLowerCase();
    }
  }
  return console.log(result);
}

ModifyString("heLLo gLOBALtrenD , mySELF digvijaY");
