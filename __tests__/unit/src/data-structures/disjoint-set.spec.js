import chai from 'chai';
import DisjointSet from 'src/data-structures/disjoint-set';
import DisjointSetItem from 'src/data-structures/disjoint-set/item';


const { expect } = chai;

describe('DisjointSetItem', () => {
  it('should do basic manipulation with disjoint set item', () => {
    const itemA = new DisjointSetItem('A');
    const itemB = new DisjointSetItem('B');
    const itemC = new DisjointSetItem('C');
    const itemD = new DisjointSetItem('D');

    expect(itemA.getRank()).to.equal(0);
    expect(itemA.getChildren()).to.deep.equal([]);
    expect(itemA.getKey()).to.equal('A');
    expect(itemA.getRoot()).to.equal(itemA);
    expect(itemA.isRoot()).to.equal(true);
    expect(itemB.isRoot()).to.equal(true);

    itemA.addChild(itemB);
    itemD.setParent(itemC);

    expect(itemA.getRank()).to.equal(1);
    expect(itemC.getRank()).to.equal(1);

    expect(itemB.getRank()).to.equal(0);
    expect(itemD.getRank()).to.equal(0);

    expect(itemA.getChildren().length).to.equal(1);
    expect(itemC.getChildren().length).to.equal(1);

    expect(itemA.getChildren()[0]).to.equal(itemB);
    expect(itemC.getChildren()[0]).to.equal(itemD);

    expect(itemB.getChildren().length).to.equal(0);
    expect(itemD.getChildren().length).to.equal(0);

    expect(itemA.getRoot()).to.equal(itemA);
    expect(itemB.getRoot()).to.equal(itemA);

    expect(itemC.getRoot()).to.equal(itemC);
    expect(itemD.getRoot()).to.equal(itemC);

    expect(itemA.isRoot()).to.equal(true);
    expect(itemB.isRoot()).to.equal(false);
    expect(itemC.isRoot()).to.equal(true);
    expect(itemD.isRoot()).to.equal(false);

    itemA.addChild(itemC);

    expect(itemA.isRoot()).to.equal(true);
    expect(itemB.isRoot()).to.equal(false);
    expect(itemC.isRoot()).to.equal(false);
    expect(itemD.isRoot()).to.equal(false);

    expect(itemA.getRank()).to.equal(3);
    expect(itemB.getRank()).to.equal(0);
    expect(itemC.getRank()).to.equal(1);
  });
});

describe('DisjointSet', () => {
  it('should throw error when trying to union and check not existing sets', () => {
    function mergeNotExistingSets() {
      const disjointSet = new DisjointSet();

      disjointSet.union('A', 'B');
    }

    function checkNotExistingSets() {
      const disjointSet = new DisjointSet();

      disjointSet.inSameSet('A', 'B');
    }

    expect(mergeNotExistingSets).to.throw(/not in/);
    expect(checkNotExistingSets).to.throw(/not in/);
  });

  it('should do basic manipulations on disjoint set', () => {
    const disjointSet = new DisjointSet();

    expect(disjointSet.find('A')).to.be.a('null');
    expect(disjointSet.find('B')).to.be.a('null');

    disjointSet.makeSet('A');

    expect(disjointSet.find('A')).to.equal('A');
    expect(disjointSet.find('B')).to.be.a('null');

    disjointSet.makeSet('B');

    expect(disjointSet.find('A')).to.equal('A');
    expect(disjointSet.find('B')).to.equal('B');

    disjointSet.makeSet('C');

    expect(disjointSet.inSameSet('A', 'B')).to.equal(false);

    disjointSet.union('A', 'B');

    expect(disjointSet.find('A')).to.equal('A');
    expect(disjointSet.find('B')).to.equal('A');
    expect(disjointSet.inSameSet('A', 'B')).to.equal(true);
    expect(disjointSet.inSameSet('B', 'A')).to.equal(true);
    expect(disjointSet.inSameSet('A', 'C')).to.equal(false);

    disjointSet.union('A', 'A');

    disjointSet.union('B', 'C');

    expect(disjointSet.find('A')).to.equal('A');
    expect(disjointSet.find('B')).to.equal('A');
    expect(disjointSet.find('C')).to.equal('A');

    expect(disjointSet.inSameSet('A', 'B')).to.equal(true);
    expect(disjointSet.inSameSet('B', 'C')).to.equal(true);
    expect(disjointSet.inSameSet('A', 'C')).to.equal(true);

    disjointSet
      .makeSet('E')
      .makeSet('F')
      .makeSet('G')
      .makeSet('H')
      .makeSet('I');

    disjointSet
      .union('E', 'F')
      .union('F', 'G')
      .union('G', 'H')
      .union('H', 'I');

    expect(disjointSet.inSameSet('A', 'I')).to.equal(false);
    expect(disjointSet.inSameSet('E', 'I')).to.equal(true);

    disjointSet.union('I', 'C');

    expect(disjointSet.find('I')).to.equal('E');
    expect(disjointSet.inSameSet('A', 'I')).to.equal(true);
  });

  it('should union smaller set with bigger one making bigger one to be new root', () => {
    const disjointSet = new DisjointSet();

    disjointSet
      .makeSet('A')
      .makeSet('B')
      .makeSet('C')
      .union('B', 'C')
      .union('A', 'C');

    expect(disjointSet.find('A')).to.equal('B');
  });
});
