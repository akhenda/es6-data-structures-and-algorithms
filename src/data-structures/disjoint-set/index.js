import DisjointSetItem from './item';

export default class DisjointSet {
  /**
   * initializes the DisjointSet
   */
  constructor() {
    this.items = {};
  }

  /**
   * checks if the two provided keys are valid
   * @param  {string|number} key1
   * @param  {string|number} key2
   * @return {void}     throw an error or return nothing
   */
  _checkKeys(key1, key2) {
    const areKeysValid = !(key1 === null || key2 === null);

    if (!areKeysValid) throw new Error('One or all of the values provided are not in sets');
  }

  /**
   * make a set out of the item value provided
   * @param  {string|number} value
   * @return {DisjointSet}
   */
  makeSet(value) {
    const disjointSetItem = new DisjointSetItem(value);

    if (!this.items[disjointSetItem.getKey()]) {
      this.items[disjointSetItem.getKey()] = disjointSetItem;
    }

    return this;
  }

  /**
   * find set representation node
   * @param  {string|number} value [description]
   * @return {string|number}       the key of the value provided
   */
  find(value) {
    const disjointSetItem = new DisjointSetItem(value);

    if (!this.items[disjointSetItem.getKey()]) return null;

    return this.items[disjointSetItem.getKey()].getRoot().getKey();
  }

  /**
   * do a union on the values provided by rank
   * @param  {DisjointSetItem} valueA
   * @param  {DisjointSetItem} valueB
   * @return {DisjointSet}
   */
  union(valueA, valueB) {
    const rootKeyA = this.find(valueA);
    const rootKeyB = this.find(valueB);
    this._checkKeys(rootKeyA, rootKeyB);

    if (rootKeyA === rootKeyB) {
      // if both keys are already in the same set just return the caller object's key
      return this;
    }

    const rootA = this.items[rootKeyA];
    const rootB = this.items[rootKeyB];

    if (rootA.getRank() < rootB.getRank()) {
      // if rootB's tree is bigger then make rootB to be a new root.
      rootB.addChild(rootA);
    } else {
      // if rootA's tree is bigger then make rootA to be a new root.
      rootA.addChild(rootB);
    }

    return this;
  }

  /**
   * checks whether the provided items are in the same set
   * @param  {DisjointSetItem} valueA
   * @param  {DisjointSetItem} valueB
   * @return {boolean}
   */
  inSameSet(valueA, valueB) {
    const rootKeyA = this.find(valueA);
    const rootKeyB = this.find(valueB);
    this._checkKeys(rootKeyA, rootKeyB);

    return rootKeyA === rootKeyB;
  }
}
