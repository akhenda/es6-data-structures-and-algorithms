import chai from 'chai';
import Node from 'src/data-structures/linked-list/node';
import LinkedList from 'src/data-structures/linked-list';


const { expect } = chai;

/* eslint-disable no-restricted-syntax */
describe('LinkedListNode', () => {
  it('is a class', () => {
    expect(typeof Node.prototype.constructor).to.equal('function');
  });

  it('has properties "data" and "next"', () => {
    const node = new Node('a', 'b');

    expect(node.data).to.equal('a');
    expect(node.next).to.equal('b');
  });
});

describe('LinkedList', () => {
  it('is a class', () => {
    expect(typeof LinkedList.prototype.constructor).to.equal('function');
  });

  describe('Insert First', () => {
    it('appends a node to the start of the list', () => {
      const ll = new LinkedList();

      ll.insertFirst(1);

      expect(ll.head.data).to.equal(1);

      ll.insertFirst(2);

      expect(ll.head.data).to.equal(2);
    });
  });

  describe('Size', () => {
    it('returns the number of items in the linked list', () => {
      const ll = new LinkedList();

      expect(ll.size()).to.equal(0);

      ll.insertFirst(1);
      ll.insertFirst(1);
      ll.insertFirst(1);
      ll.insertFirst(1);

      expect(ll.size()).to.equal(4);
    });
  });

  describe('GetFirst', () => {
    it('returns the first element', () => {
      const ll = new LinkedList();

      ll.insertFirst(1);

      expect(ll.getFirst().data).to.equal(1);

      ll.insertFirst(2);

      expect(ll.getFirst().data).to.equal(2);
    });
  });

  describe('GetLast', () => {
    it('returns the last element', () => {
      const ll = new LinkedList();

      ll.insertFirst(2);

      expect(ll.getLast()).to.deep.equal({ data: 2, next: null });

      ll.insertFirst(1);

      expect(ll.getLast()).to.deep.equal({ data: 2, next: null });
    });
  });

  describe('Clear', () => {
    it('empties out the list', () => {
      const ll = new LinkedList();

      expect(ll.size()).to.equal(0);

      ll.insertFirst(1);
      ll.insertFirst(1);
      ll.insertFirst(1);
      ll.insertFirst(1);

      expect(ll.size()).to.equal(4);

      ll.clear();

      expect(ll.size()).to.equal(0);
    });
  });

  describe('RemoveFirst', () => {
    it('removes the first node when the list has a size of one', () => {
      const ll = new LinkedList();

      ll.insertFirst('a');
      ll.removeFirst();

      expect(ll.size()).to.equal(0);
      expect(ll.getFirst()).to.equal(null);
    });

    it('removes the first node when the list has a size of three', () => {
      const ll = new LinkedList();

      ll.insertFirst('c');
      ll.insertFirst('b');
      ll.insertFirst('a');
      ll.removeFirst();

      expect(ll.size()).to.equal(2);
      expect(ll.getFirst().data).to.equal('b');

      ll.removeFirst();

      expect(ll.size()).to.equal(1);
      expect(ll.getFirst().data).to.equal('c');
    });
  });

  describe('RemoveLast', () => {
    it('RemoveLast removes the last node when list is empty', () => {
      const ll = new LinkedList();

      expect(() => {
        ll.removeLast();
      }).not.to.throw();
    });

    it('RemoveLast removes the last node when list is length 1', () => {
      const ll = new LinkedList();

      ll.insertFirst('a');
      ll.removeLast();

      expect(ll.head).to.equal(null);
    });

    it('RemoveLast removes the last node when list is length 2', () => {
      const ll = new LinkedList();

      ll.insertFirst('b');
      ll.insertFirst('a');
      ll.removeLast();

      expect(ll.size()).to.equal(1);
      expect(ll.head.data).to.equal('a');
    });

    it('RemoveLast removes the last node when list is length 3', () => {
      const ll = new LinkedList();

      ll.insertFirst('c');
      ll.insertFirst('b');
      ll.insertFirst('a');
      ll.removeLast();

      expect(ll.size()).to.equal(2);
      expect(ll.getLast().data).to.equal('b');
    });
  });

  describe('InsertLast', () => {
    it('adds to the end of the list', () => {
      const ll = new LinkedList();

      ll.insertFirst('a');
      ll.insertLast('b');

      expect(ll.size()).to.equal(2);
      expect(ll.getLast().data).to.equal('b');
    });
  });

  describe('GetAt', () => {
    it('returns the node at given index', () => {
      const ll = new LinkedList();

      expect(ll.getAt(10)).to.equal(null);

      ll.insertLast(1);
      ll.insertLast(2);
      ll.insertLast(3);
      ll.insertLast(4);

      expect(ll.getAt(0).data).to.equal(1);
      expect(ll.getAt(1).data).to.equal(2);
      expect(ll.getAt(2).data).to.equal(3);
      expect(ll.getAt(3).data).to.equal(4);
    });
  });

  describe('RemoveAt', () => {
    it('removeAt doesnt crash on an empty list', () => {
      const ll = new LinkedList();

      expect(() => {
        ll.removeAt(0);
        ll.removeAt(1);
        ll.removeAt(2);
      }).not.to.throw();
    });

    it('removeAt doesnt crash on an index out of bounds', () => {
      expect(() => {
        const ll = new LinkedList();
        ll.insertFirst('a');
        ll.removeAt(1);
      }).not.to.throw();
    });

    it('removeAt deletes the first node', () => {
      const ll = new LinkedList();

      ll.insertLast(1);
      ll.insertLast(2);
      ll.insertLast(3);
      ll.insertLast(4);

      expect(ll.getAt(0).data).to.equal(1);

      ll.removeAt(0);

      expect(ll.getAt(0).data).to.equal(2);
    });

    it('removeAt deletes the node at the given index', () => {
      const ll = new LinkedList();

      ll.insertLast(1);
      ll.insertLast(2);
      ll.insertLast(3);
      ll.insertLast(4);

      expect(ll.getAt(1).data).to.equal(2);

      ll.removeAt(1);

      expect(ll.getAt(1).data).to.equal(3);
    });

    it('removeAt works on the last node', () => {
      const ll = new LinkedList();

      ll.insertLast(1);
      ll.insertLast(2);
      ll.insertLast(3);
      ll.insertLast(4);

      expect(ll.getAt(3).data).to.equal(4);

      ll.removeAt(3);

      expect(ll.getAt(3)).to.equal(null);
    });
  });

  describe('InsertAt', () => {
    it('inserts a new node with data at the 0 index when the list is empty', () => {
      const ll = new LinkedList();

      ll.insertAt(0, 'hi');

      expect(ll.getFirst().data).to.equal('hi');
    });

    it('inserts a new node with data at the 0 index when the list has elements', () => {
      const ll = new LinkedList();

      ll.insertLast('a');
      ll.insertLast('b');
      ll.insertLast('c');
      ll.insertAt(0, 'hi');

      expect(ll.getAt(0).data).to.equal('hi');
      expect(ll.getAt(1).data).to.equal('a');
      expect(ll.getAt(2).data).to.equal('b');
      expect(ll.getAt(3).data).to.equal('c');
    });

    it('inserts a new node with data at a middle index', () => {
      const ll = new LinkedList();

      ll.insertLast('a');
      ll.insertLast('b');
      ll.insertLast('c');
      ll.insertLast('d');
      ll.insertAt(2, 'hi');
      
      expect(ll.getAt(0).data).to.equal('a');
      expect(ll.getAt(1).data).to.equal('b');
      expect(ll.getAt(2).data).to.equal('hi');
      expect(ll.getAt(3).data).to.equal('c');
      expect(ll.getAt(4).data).to.equal('d');
    });

    it('inserts a new node with data at a last index', () => {
      const ll = new LinkedList();

      ll.insertLast('a');
      ll.insertLast('b');
      ll.insertAt(2, 'hi');

      expect(ll.getAt(0).data).to.equal('a');
      expect(ll.getAt(1).data).to.equal('b');
      expect(ll.getAt(2).data).to.equal('hi');
    });

    it('insert a new node when index is out of bounds', () => {
      const ll = new LinkedList();

      ll.insertLast('a');
      ll.insertLast('b');
      ll.insertAt(30, 'hi');

      expect(ll.getAt(0).data).to.equal('a');
      expect(ll.getAt(1).data).to.equal('b');
      expect(ll.getAt(2).data).to.equal('hi');
    });
  });

  describe('ForEach', () => {
    it('applies a transform to each node', () => {
      const ll = new LinkedList();

      ll.insertLast(1);
      ll.insertLast(2);
      ll.insertLast(3);
      ll.insertLast(4);

      ll.forEach((node) => {
        node.data += 10;
      });

      expect(ll.getAt(0).data).to.equal(11);
      expect(ll.getAt(1).data).to.equal(12);
      expect(ll.getAt(2).data).to.equal(13);
      expect(ll.getAt(3).data).to.equal(14);
    });
  });

  describe('for...of loops', () => {
    it('works with the linked list', () => {
      const ll = new LinkedList();

      ll.insertLast(1);
      ll.insertLast(2);
      ll.insertLast(3);
      ll.insertLast(4);

      for (const node of ll) {
        node.data += 10;
      }

      expect(ll.getAt(0).data).to.equal(11);
      expect(ll.getAt(1).data).to.equal(12);
      expect(ll.getAt(2).data).to.equal(13);
      expect(ll.getAt(3).data).to.equal(14);
    });

    it('for...of works on an empty list', () => {
      const ll = new LinkedList();

      /* eslint-disable no-empty */
      /* eslint-disable no-unused-vars */
      expect(() => {
        for (const node of ll) {
        }
      }).not.to.throw();
    });
  });
});
