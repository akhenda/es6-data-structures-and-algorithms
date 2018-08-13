const DEFAULT_HASH_TABLE_SIZE = 32;

export default class HashTable {
  /**
   * initialize the hash table
   *
   * hash table size/capacity directly affects on the number of collisions
   * the bigger the hash table size/capacity the less collisions we'll get
   * for demonstration purposes our DEFAULT_HASH_TABLE_SIZE constant
   * is small to show how collisions are being handled.
   *
   * @param {number}  [capacity=DEFAULT_HASH_TABLE_SIZE] the capacity of the table
   * @param {Boolean} [simple=true]                      the type of table
   */
  constructor(capacity = DEFAULT_HASH_TABLE_SIZE, simple = true) {
    // set the hash table to simple or complex
    this.simple = simple;

    // let's just have a copy of the capacity of the hash table
    this.capacity = capacity;

    // create hash table of the given or default capacity.
    // to handle collisions well, a linked list could be used to initialize the cells array
    this.cells = new Array(capacity);

    // just to keep track of all actual keys in a fast way.
    this.keys = {};
  }

  /**
   * converts a string key to hash number
   *
   * in this simple hash function, for simplicity's sake we will use
   * character codes sum of all characters of the key to calculate the hash.
   *
   * @param  {string} key
   * @return {number}
   */
  simpleHash(key) {
    const hash = Array
      .from(key)
      .reduce((finalHash, character) => (finalHash + character.charCodeAt(0)), 0);

    // reduce hash number so that it fits the hash table capacity.
    return hash % this.capacity;
  }

  /* eslint-disable no-restricted-properties */
  /**
   * converts key string to hash number
   *
   * in this better hash function, we will use a more sophisticated
   * approach, polynomial string hash to reduce the number of collisions:
   *
   * hash = charCodeAt(0) * PRIME^(n-1) + charCodeAt(1) * PRIME^(n-2) + ... + charCodeAt(n-1)
   *
   * where charCodeAt(i) is the i-th character code of the key, n is the
   * length of the key and PRIME is just any prime number like 17.
   *
   * @param  {string} key
   * @return {number}
   */
  betterHash(key) {
    const PRIME = 73;

    const hash = Array
      .from(key)
      .reduce((finalHash, character, index) => {
        return (finalHash * Math.pow(PRIME, key.length - index) + character.charCodeAt(0));
      }, 0);

    // reduce hash number so that it fits the hash table capacity.
    return hash % this.capacity;
  }

  /**
   * decides which hash function to use based on the simplicity selected
   * @param  {string} key
   * @return {function}
   */
  hash(key) {
    return this.simple ? this.simpleHash(key) : this.betterHash(key);
  }

  /**
   * inserts a value into the hash table using its key
   * @param {string} key
   * @param {any} value
   * @return {void}
   */
  insert(key, value) {
    const keyHash = this.hash(key);

    // to handle collisions well, a linked list node could be used here
    if (!this.cells[keyHash]) this.cells[keyHash] = {};
    if (this.cells[keyHash].key !== key) this.keys[key] = keyHash;

    this.cells[keyHash][key] = value;
  }

  /**
   * delete a key and its value from the table
   * @param  {string} key
   * @return {void}
   */
  remove(key) {
    const keyHash = this.hash(key);

    if (this.cells[keyHash] && this.cells[keyHash][key]) {
      delete this.cells[keyHash][key];
      delete this.keys[key];

      return keyHash;
    }

    return null;
  }

  /**
   * search and retrieve the value of a key given the key
   * @param  {string} key
   * @return {any}
   */
  retrieve(key) {
    const keyHash = this.hash(key);

    if (this.cells[keyHash] && this.cells[keyHash][key]) return this.cells[keyHash][key];

    return null;
  }

  /**
   * check whether the has table has a particular key
   * @param  {string}  key
   * @return {Boolean}
   */
  has(key) {
    return Object.keys(this.keys).includes(key);
  }

  /**
   * get the length pf the table i.e. the spaces currently occupied
   * NOT the capacity
   * @return {nuber}
   */
  length() {
    return this.cells.reduce((sum, cell) => cell !== null ? sum + 1 : sum + 0, 0);
  }

  /**
   * get all the keys currently contained in the hash table
   * @return {array} [description]
   */
  getKeys() {
    console.log(Object.keys(this.keys));
    return Object.keys(this.keys);
  }

  /**
   * print the data in the hash table
   * @return {[type]} [description]
   */
  print() {
    let string = '';

    this.cells.forEach((data, i) => {
      if (data !== undefined) string += `${i}: ${JSON.stringify(data)}\n`;
    });

    console.log(string.trim());
    return JSON.stringify(this.cells);
  }
}
