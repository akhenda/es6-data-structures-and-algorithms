class MyArray {
  constructor() {
    this.array = [];
  }

  add(item) {
    this.array.push(item);
  }

  remove(item) {
    this.array = this.array.filter(data => data !== item);
  }

  search(item) {
    const foundIndex = this.array.indexOf(item);

    return foundIndex || null;
  }

  getAtIndex(index) {
    return this.array[index];
  }

  length() {
    return this.array.length;
  }

  print() {
    // console.log(this.array.join(' '));

    return this.array.join(' ');
  }
}

export { MyArray };
