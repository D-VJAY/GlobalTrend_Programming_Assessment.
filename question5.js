

//function that takes an Array and returns a new array with all duplicates removed
function MakeUnique(data) {
  let map = {};
  let Output = [];
  for (let i in data) {
    map[data[i]] = (map[data[i]] || 0) + 1;
  }

  for (let k in map) {
    Output.push(JSON.parse(k));
  }
  // console.log(map)
  return console.log(Output);
}

MakeUnique([2,1,5,8,4,7,9,,1,4,7,8,4,7,4,6,3,2,0,4,1,3,1]);