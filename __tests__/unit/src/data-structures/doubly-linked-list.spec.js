import chai from 'chai';
import Node from 'src/data-structures/doubly-linked-list/node';
import DoublyLinkedList from 'src/data-structures/doubly-linked-list';


const { expect } = chai;

/* eslint-disable no-restricted-syntax */
describe('DoublyLinkedListNode', () => {
  it('is a class', () => {
    expect(typeof Node.prototype.constructor).to.equal('function');
  });

  it('has properties "data" and "next"', () => {
    const node = new Node('a', 'b');

    expect(node.data).to.equal('a');
    expect(node.next).to.equal('b');
  });
});

describe('DoublyLinkedList', () => {
  it('is a class', () => {
    expect(typeof DoublyLinkedList.prototype.constructor).to.equal('function');
  });

  describe('Insert First', () => {
    it('appends a node to the start of the list', () => {
      const dll = new DoublyLinkedList();

      expect(dll.removeFirst()).to.be.an('undefined');
      expect(dll.print()).to.equal('');

      dll.insertAt(1, 0);
      dll.insertFirst(1);

      expect(dll.head.data).to.equal(1);
      expect(dll.head.prev).to.equal(null);
      expect(dll.head.data).to.equal(1);

      dll.insertFirst(2);

      expect(dll.head.data).to.equal(2);
      expect(dll.head.next.prev.data).to.equal(2);
      expect(dll.head.next.data).to.equal(1);
      expect(dll.print()).to.equal('2 1 0');
    });
  });

  describe('Size', () => {
    it('returns the number of items in the linked list', () => {
      const dll = new DoublyLinkedList();
      expect(dll.size()).to.equal(0);
      dll.insertFirst(1);
      dll.insertFirst(1);
      dll.insertFirst(1);
      dll.insertFirst(1);
      expect(dll.size()).to.equal(4);
    });
  });

  describe('GetFirst', () => {
    it('returns the first element', () => {
      const dll = new DoublyLinkedList();
      dll.insertFirst(1);
      expect(dll.getFirst().data).to.equal(1);
      dll.insertFirst(2);
      expect(dll.getFirst().data).to.equal(2);
    });
  });

  describe('GetLast', () => {
    it('returns the last element', () => {
      const dll = new DoublyLinkedList();
      dll.insertFirst(2);
      expect(dll.getLast()).to.deep.equal({ data: 2, next: null, prev: null });
      dll.insertFirst(1);
      expect(dll.getLast().data).to.equal(2);
    });
  });

  describe('Clear', () => {
    it('empties out the list', () => {
      const dll = new DoublyLinkedList();
      expect(dll.size()).to.equal(0);
      dll.insertFirst(1);
      dll.insertFirst(1);
      dll.insertFirst(1);
      dll.insertFirst(1);
      expect(dll.size()).to.equal(4);
      dll.clear();
      expect(dll.size()).to.equal(0);
    });
  });

  describe('RemoveFirst', () => {
    it('removes the first node when the list has a size of one', () => {
      const dll = new DoublyLinkedList();
      dll.insertFirst('a');
      dll.removeFirst();
      expect(dll.size()).to.equal(0);
      expect(dll.getFirst()).to.equal(null);
    });

    it('removes the first node when the list has a size of three', () => {
      const dll = new DoublyLinkedList();
      dll.insertFirst('c');
      dll.insertFirst('b');
      dll.insertFirst('a');
      dll.removeFirst();
      expect(dll.size()).to.equal(2);
      expect(dll.getFirst().data).to.equal('b');
      dll.removeFirst();
      expect(dll.size()).to.equal(1);
      expect(dll.getFirst().data).to.equal('c');
    });
  });

  describe('RemoveLast', () => {
    it('RemoveLast removes the last node when list is empty', () => {
      const dll = new DoublyLinkedList();
      expect(() => {
        dll.removeLast();
      }).not.to.throw();
    });

    it('RemoveLast removes the last node when list is length 1', () => {
      const dll = new DoublyLinkedList();
      dll.insertFirst('a');
      dll.removeLast();
      expect(dll.head).to.equal(null);
    });

    it('RemoveLast removes the last node when list is length 2', () => {
      const dll = new DoublyLinkedList();
      dll.insertFirst('b');
      dll.insertFirst('a');

      dll.removeLast();

      expect(dll.size()).to.equal(1);
      expect(dll.head.data).to.equal('a');
    });

    it('RemoveLast removes the last node when list is length 3', () => {
      const dll = new DoublyLinkedList();
      dll.insertFirst('c');
      dll.insertFirst('b');
      dll.insertFirst('a');
      dll.removeLast();

      expect(dll.size()).to.equal(2);
      expect(dll.getLast().data).to.equal('b');
      expect(dll.getLast().prev.data).to.equal('a');
      expect(dll.getFirst().prev).to.equal(null);
      expect(dll.getFirst().next.data).to.equal('b');
    });
  });

  describe('InsertLast', () => {
    it('adds to the end of the list', () => {
      const dll = new DoublyLinkedList();
      dll.insertFirst('a');

      dll.insertLast('b');

      expect(dll.size()).to.equal(2);
      expect(dll.getLast().data).to.equal('b');

      expect(dll.getLast().prev.data).to.equal('a');
      expect(dll.getFirst().prev).to.equal(null);
      expect(dll.getFirst().next.prev.data).to.equal('a');
    });
  });

  describe('GetAt', () => {
    it('returns the node at given index', () => {
      const dll = new DoublyLinkedList();
      expect(dll.getAt(10)).to.equal(null);

      dll.insertLast(1);
      dll.insertLast(2);
      dll.insertLast(3);
      dll.insertLast(4);

      expect(dll.getAt(0).data).to.equal(1);
      expect(dll.getAt(1).data).to.equal(2);
      expect(dll.getAt(2).data).to.equal(3);
      expect(dll.getAt(3).data).to.equal(4);

      expect(dll.getLast().prev.data).to.equal(3);
      expect(dll.getFirst().next.next.prev.data).to.equal(2);
      expect(dll.getFirst().next.data).to.equal(2);
    });
  });

  describe('RemoveAt', () => {
    it('removeAt doesnt crash on an empty list', () => {
      const dll = new DoublyLinkedList();
      expect(() => {
        dll.removeAt(0);
        dll.removeAt(1);
        dll.removeAt(2);
      }).not.to.throw();
    });

    it('removeAt doesnt crash on an index out of bounds', () => {
      expect(() => {
        const dll = new DoublyLinkedList();
        dll.insertFirst('a');
        dll.removeAt(1);
      }).not.to.throw();
    });

    it('removeAt deletes the first node', () => {
      const dll = new DoublyLinkedList();
      dll.insertLast(1);
      dll.insertLast(2);
      dll.insertLast(3);
      dll.insertLast(4);
      expect(dll.getAt(0).data).to.equal(1);
      dll.removeAt(0);
      expect(dll.getAt(0).data).to.equal(2);

      expect(dll.getLast().data).to.equal(4);
      expect(dll.getLast().prev.data).to.equal(3);
      expect(dll.getLast().prev.prev.data).to.equal(2);
      expect(dll.getFirst().prev).to.equal(null);
      expect(dll.getFirst().next.data).to.equal(3);
    });

    it('removeAt deletes the node at the given index', () => {
      const dll = new DoublyLinkedList();
      dll.insertLast(1);
      dll.insertLast(2);
      dll.insertLast(3);
      dll.insertLast(4);
      expect(dll.getAt(1).data).to.equal(2);
      dll.removeAt(1);
      expect(dll.getAt(1).data).to.equal(3);
    });

    it('removeAt works on the last node', () => {
      const dll = new DoublyLinkedList();
      dll.insertLast(1);
      dll.insertLast(2);
      dll.insertLast(3);
      dll.insertLast(4);
      expect(dll.getAt(3).data).to.equal(4);
      dll.removeAt(3);
      expect(dll.getAt(3)).to.equal(null);

      expect(dll.getLast().data).to.equal(3);
      expect(dll.getLast().prev.data).to.equal(2);
      expect(dll.getLast().prev.prev.data).to.equal(1);
      expect(dll.getFirst().prev).to.equal(null);
      expect(dll.getFirst().next.data).to.equal(2);
    });
  });

  describe('InsertAt', () => {
    it('inserts a new node with data at the 0 index when the list is empty', () => {
      const dll = new DoublyLinkedList();
      dll.insertAt(0, 'hi');
      expect(dll.getFirst().data).to.equal('hi');
    });

    it('inserts a new node with data at the 0 index when the list has elements', () => {
      const dll = new DoublyLinkedList();
      dll.insertLast('a');
      dll.insertLast('b');
      dll.insertLast('c');
      dll.insertAt(0, 'hi');
      expect(dll.getAt(0).data).to.equal('hi');
      expect(dll.getAt(1).data).to.equal('a');
      expect(dll.getAt(2).data).to.equal('b');
      expect(dll.getAt(3).data).to.equal('c');
    });

    it('inserts a new node with data at a middle index', () => {
      const dll = new DoublyLinkedList();
      dll.insertLast('a');
      dll.insertLast('b');
      dll.insertLast('c');
      dll.insertLast('d');
      dll.insertAt(2, 'hi');
      expect(dll.getAt(0).data).to.equal('a');
      expect(dll.getAt(1).data).to.equal('b');
      expect(dll.getAt(2).data).to.equal('hi');
      expect(dll.getAt(3).data).to.equal('c');
      expect(dll.getAt(4).data).to.equal('d');
    });

    it('inserts a new node with data at a last index', () => {
      const dll = new DoublyLinkedList();
      dll.insertLast('a');
      dll.insertLast('b');
      dll.insertAt(2, 'hi');
      expect(dll.getAt(0).data).to.equal('a');
      expect(dll.getAt(1).data).to.equal('b');
      expect(dll.getAt(2).data).to.equal('hi');
    });

    it('insert a new node when index is out of bounds', () => {
      const dll = new DoublyLinkedList();
      dll.insertLast('a');
      dll.insertLast('b');
      dll.insertAt(30, 'hi');

      expect(dll.getAt(0).data).to.equal('a');
      expect(dll.getAt(1).data).to.equal('b');
      expect(dll.getAt(2).data).to.equal('hi');
    });
  });

  describe('ForEach', () => {
    it('applies a transform to each node', () => {
      const dll = new DoublyLinkedList();

      dll.insertLast(1);
      dll.insertLast(2);
      dll.insertLast(3);
      dll.insertLast(4);

      dll.forEach((node) => {
        node.data += 10;
      });

      expect(dll.getAt(0).data).to.equal(11);
      expect(dll.getAt(1).data).to.equal(12);
      expect(dll.getAt(2).data).to.equal(13);
      expect(dll.getAt(3).data).to.equal(14);
    });
  });

  describe('for...of loops', () => {
    it('works with the linked list', () => {
      const dll = new DoublyLinkedList();

      dll.insertLast(1);
      dll.insertLast(2);
      dll.insertLast(3);
      dll.insertLast(4);

      for (const node of dll) {
        node.data += 10;
      }

      expect(dll.getAt(0).data).to.equal(11);
      expect(dll.getAt(1).data).to.equal(12);
      expect(dll.getAt(2).data).to.equal(13);
      expect(dll.getAt(3).data).to.equal(14);
    });

    it('for...of works on an empty list', () => {
      const dll = new DoublyLinkedList();
      /* eslint-disable no-empty */
      /* eslint-disable no-unused-vars */
      expect(() => {
        for (const node of dll) {
        }
      }).not.to.throw();
    });
  });
});
