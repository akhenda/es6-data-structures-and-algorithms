export default class MyArray {
  constructor() {
    this.array = [];
  }

  /**
   * adds an item onto the array
   * @param {any} item
   */
  add(item) {
    this.array.push(item);
  }

  /**
   * removes an item from the array
   * @param  {any} item
   */
  remove(item) {
    this.array = this.array.filter(data => data !== item);
  }

  /**
   * look for the given item in the array
   * @param  {any} item
   * @return {number}      the array index position of the item found
   */
  search(item) {
    const foundIndex = this.array.indexOf(item);

    return foundIndex || null;
  }

  /**
   * get an item given its index on the array
   * @param  {number} index index of the item to get
   * @return {any}       the item found at the given index
   */
  getAtIndex(index) {
    return this.array[index];
  }

  /**
   * returns the size/length of the array
   * @return {number} the size of the array
   */
  length() {
    return this.array.length;
  }

  /**
   * prints the contents of the array
   * @return {any}
   */
  print() {
    // console.log(this.array.join(' '));

    return this.array.join(' ');
  }
}
