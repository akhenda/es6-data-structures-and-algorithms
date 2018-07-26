export default class Set {
  /**
   * initializes the set
   */
  constructor() {
    this._data = [];
    this._count = 0;
  }

  /**
   * returns data in the set
   * @return {array} set data
   */
  data() {
    return this._data;
  }

  /**
   * adds an element into the set
   * @param {string|number} element
   */
  add(element) {
    if (this._data.indexOf(element) < 0) {
      this._data.push(element);
      this._count++;
    }
  }

  /**
   * removes an element from the set
   * @param  {string|number} element - the element to be removed
   * @return {void}
   */
  remove(element) {
    const index = this._data.indexOf(element);
    if (index >= 0) {
      this._data.splice(index, 1);
      this._count--;
    }
  }

  /**
   * checks whether an element exists in the set
   * @param  {number|string} element - the element to be searched
   * @return {boolean}
   */
  contains(element) {
    return this._data.indexOf(element) !== -1;
  }

  /**
   * check the union between this set and the provided set
   * i.e. return elements in Set1 and Set2 without the duplicates
   * @param  {array} set - the set to union with
   * @return {array}     the new set that is a union of the 2 sets
   */
  union(set) {
    const newSet = new Set();

    set.data().forEach((element) => {
      newSet.add(element);
    });

    this._data.forEach((element) => {
      newSet.add(element);
    });

    return newSet;
  }

  /**
   * check the intersect between this set and the provided set
   * i.e. return elements in Set1 that are also in Set2
   * @param  {array} set - the set to union with
   * @return {array}     the new set that is a intersect of the 2 sets
   */
  intersect(set) {
    const newSet = new Set();

    this._data.forEach((element) => {
      if (set.contains(element)) {
        newSet.add(element);
      }
    });

    return newSet;
  }

  /**
   * performs difference operation between called set and otherSet
   * i.e. a Set is said to be a difference of Set A and B if it contains
   * set of element e which are present in Set A but not in Set B.
   * @param  {array} set - the set to difference with
   * @return {array}     the new set that is the difference between this set and provided set
   */
  difference(set) {
    const newSet = new Set();

    this._data.forEach((element) => {
      if (!set.contains(element)) {
        newSet.add(element);
      }
    });

    return newSet;
  }

  /**
   * check whether the set on which the method is invoked is the
   * subset of otherset or not
   * @param {array} set - the set to check if this is a subset of
   * @return {boolean}
   */
  isSubset(set) {
    return set.data().every((element) => {
      return this.contains(element);
    }, this);
  }

  /**
   * returns the size/length of the set
   * @return {number}
   */
  length() {
    return this._count;
  }

  /**
   * displays the set
   */
  print() {
    return this._data.join(' ');
  }
}
