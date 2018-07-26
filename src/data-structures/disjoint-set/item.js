export default class Item {
  /**
   * initializes the Disjoint Set Item
   * @param {number|string} value
   */
  constructor(value) {
    this.value = value;
    this.parent = null;
    this.children = {};
  }

  /**
   * get Disjoint Set item's key which is the value by default here
   * @return {string|number} [description]
   */
  getKey() {
    return this.value;
  }

  /**
   * return a Disjoint Set Item
   * @return {DisjointSetItem}
   */
  getRoot() {
    return this.isRoot() ? this : this.parent.getRoot();
  }

  /**
   * check whether the item is the root
   * @return {boolean}
   */
  isRoot() {
    return this.parent === null;
  }

  /**
   * get the number of all ancestors an item has
   * @return {number}
   */
  getRank() {
    if (this.getChildren().length === 0) {
      return 0;
    }

    let rank = 0;

    this.getChildren().forEach((child) => {
      rank += 1;
      rank += child.getRank();
    });

    return rank;
  }

  /**
   * get this item's children
   * @return {array} arrray of Disjoint Set Items
   */
  getChildren() {
    return Object.values(this.children);
  }

  /**
   * set a parent for the current DisjointSetItem
   * @param {DisjointSetItem} parentItem
   * @return {DisjointSetItem}       the current DisjointSetItem
   */
  setParent(parentItem, forceSettingParentChild = true) {
    this.parent = parentItem;
    if (forceSettingParentChild) parentItem.addChild(this);

    return this;
  }

  /**
   * add a child DisjointSetItem to the current DisjointSetItem
   * @param {DisjointSetItem} childItem
   * @return {DisjointSetItem}        the current DisjointSetItem
   */
  addChild(childItem) {
    this.children[childItem.getKey()] = childItem;
    childItem.setParent(this, false);

    return this;
  }
}
