//a simple HashMap class with put, get, and remove methods.


class HashMap {
  constructor(key, value) {
    this.map = {};
    this.map[key] = value;
  }

  //put function helps us to insert data in the map

  put(key, value) {
    this.map[key] = value;
  }

  //get function helps us to get data in the map
  get() {
    console.log(this.map);
  }

  //remove function helps us to delete data from the map
  remove(key) {
    delete this.map[key];
  }
}

const map = new HashMap("name", "digvijay");
map.put("email", "dbangari45@gmail.com");
map.put("roll_no", 21);
map.get();
map.remove("roll_no");
map.get();
