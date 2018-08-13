import chai from 'chai';
import HashTable from 'src/data-structures/hash-table';


const { expect } = chai;

describe('HashTable', () => {
  it('should create hash table of certain capacity', () => {
    const hashTable = new HashTable();
    expect(hashTable.cells.length).to.equal(32);

    const biggerHashTable = new HashTable(128);
    expect(biggerHashTable.cells.length).to.equal(128);
  });

  it('should generate proper hash for specified keys', () => {
    const hashTable = new HashTable();

    expect(hashTable.hash('a')).to.equal(1);
    expect(hashTable.hash('b')).to.equal(2);
    expect(hashTable.hash('abc')).to.equal(6);
  });

  it('should insert, retrieve and remove data with collisions', () => {
    const hashTable = new HashTable(3, true);

    expect(hashTable.hash('a')).to.equal(1);
    expect(hashTable.hash('b')).to.equal(2);
    expect(hashTable.hash('c')).to.equal(0);
    expect(hashTable.hash('d')).to.equal(1);

    hashTable.insert('a', 'stargate-0');
    hashTable.insert('a', 'stargate-1');
    hashTable.insert('b', 'SG1');
    hashTable.insert('c', 'Atlantis');
    hashTable.insert('d', 'Universe');

    expect(hashTable.has('x')).to.equal(false);
    expect(hashTable.has('b')).to.equal(true);
    expect(hashTable.has('c')).to.equal(true);

    expect(hashTable.cells[0]).to.deep.equal({ c: 'Atlantis' });
    expect(hashTable.cells[1]).to.deep.equal({ a: 'stargate-1', d: 'Universe' });
    expect(hashTable.cells[2]).to.deep.equal({ b: 'SG1' });

    expect(hashTable.retrieve('a')).to.equal('stargate-1');
    expect(hashTable.retrieve('d')).to.equal('Universe');
    expect(hashTable.retrieve('x')).to.be.a('null');
    expect(hashTable.length()).to.be.equal(3);

    hashTable.remove('a');

    expect(hashTable.remove('not-existing')).to.be.a('null');

    expect(hashTable.retrieve('a')).to.be.a('null');
    expect(hashTable.retrieve('d')).to.equal('Universe');
    expect(hashTable.length()).to.be.equal(3);

    hashTable.insert('d', 'Universe-new');
    expect(hashTable.retrieve('d')).to.equal('Universe-new');
  });

  it('should be possible to add objects to hash table', () => {
    const hashTable = new HashTable();

    hashTable.insert('objectKey', { prop1: 'a', prop2: 'b' });

    const object = hashTable.retrieve('objectKey');
    expect(object).to.not.be.an('undefined');
    expect(object.prop1).to.equal('a');
    expect(object.prop2).to.equal('b');
  });

  it('should track actual keys', () => {
    const hashTable = new HashTable(3);

    hashTable.insert('a', 'stargate-0');
    hashTable.insert('a', 'stargate-1');
    hashTable.insert('b', 'SG1');
    hashTable.insert('c', 'Atlantis');
    hashTable.insert('d', 'Universe');

    expect(hashTable.getKeys()).to.deep.equal(['a', 'b', 'c', 'd']);
    expect(hashTable.has('a')).to.equal(true);
    expect(hashTable.has('x')).to.equal(false);

    hashTable.remove('a');

    expect(hashTable.has('a')).to.equal(false);
    expect(hashTable.has('b')).to.equal(true);
    expect(hashTable.has('x')).to.equal(false);
  });

  it('should print the hash table', () => {
    const hashTable = new HashTable(3, false);

    hashTable.insert('a', 'stargate-0');
    hashTable.insert('a', 'stargate-1');
    hashTable.insert('b', 'SG1');
    hashTable.insert('c', 'Atlantis');
    hashTable.insert('d', 'Universe');

    const result = '[{"c":"Atlantis"},{"a":"stargate-1","d":"Universe"},{"b":"SG1"}]';

    expect(hashTable.print()).to.equal(result);

    hashTable.remove('a');

    expect(hashTable.print()).to.equal('[{"c":"Atlantis"},{"d":"Universe"},{"b":"SG1"}]');
  });
});
