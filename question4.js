//checking strings are anagram ofeach other or not

function CheckAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  } else {
    let map = {};
    for (let k of str1) {
      map[k] = (map[k] || 0) + 1;
    }
    console.log(map);
    for (let i of str2) {
      if (!map[i]) {
        // console.log(map[i])
        return false;
      }

      map[i] = -1;
      return true;
    }
  }
}

const result = CheckAnagram("hello", "hlleo");
console.log(result);
