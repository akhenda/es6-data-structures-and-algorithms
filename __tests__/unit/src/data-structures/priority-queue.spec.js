import chai from 'chai';
import PriorityQueue from 'src/data-structures/priority-queue';


const { expect } = chai;

describe('PriorityQueue', () => {
  const queue = new PriorityQueue(4);

  beforeEach(() => {});

  it('creates a queue successfully', () => {
    expect(queue).to.be.an('object');
    expect(queue).to.be.an.instanceof(PriorityQueue);
  });

  it('the queue has a capacity of 4', () => {
    expect(queue.capacity()).to.equal(4);
  });

  describe('when we enqueue the queue', () => {
    it('it enqueues "a" onto the queue', () => {
      queue.enqueue('a', 2);
      expect(queue.size()).to.equal(1);
    });

    it('it enqueues "b" onto the queue', () => {
      queue.enqueue('b', 1);
      expect(queue.size()).to.equal(2);
    });

    it('it enqueues "c" onto the queue', () => {
      queue.enqueue('c', 1);
      expect(queue.size()).to.equal(3);
    });

    it('it enqueues "d" onto the queue', () => {
      queue.enqueue('d', 5);
      expect(queue.size()).to.equal(4);
    });

    it('it has a size of 4', () => {
      expect(queue.size()).to.equal(4);
    });

    it('it prints all the elements we have just enqueued', () => {
      expect(queue.print()).to.equal('b c a d');
    });

    it('it does not enqueue "e" onto the queue', () => {
      const msg = 'Max capacity reached. Remove element before adding a new one.';
      expect(queue.enqueue('e', 3)).to.equal(msg);
    });
  });

  describe('when we peek, dequeue, enqueue and print elements', () => {
    it('it peeks at the queue', () => {
      expect(queue.peek()).to.equal('b');
    });

    it('it dequeues the queue', () => {
      expect(queue.dequeue()).to.equal('b');
    });

    it('it prints elements in the queue', () => {
      expect(queue.print()).to.equal('c a d');
    });

    it('it dequeues the queue again', () => {
      expect(queue.dequeue()).to.equal('c');
    });

    it('it has a size of 2 now', () => {
      expect(queue.size()).to.equal(2);
    });

    it('it dequeues the queue again', () => {
      expect(queue.dequeue()).to.equal('a');
    });

    it('it has a size of 1 now', () => {
      expect(queue.size()).to.equal(1);
    });

    it('it dequeues the queue again', () => {
      expect(queue.dequeue()).to.equal('d');
    });

    it('it prints again elements in the queue', () => {
      expect(queue.print()).to.equal('');
    });

    it('it peeks at the queue again', () => {
      expect(queue.peek()).to.equal(undefined);
    });

    it('it dequeues the queue again', () => {
      const msg = 'No element inside the queue. Add element before dequeuing.';
      expect(queue.dequeue()).to.equal(msg);
    });
  });

  describe('when we search for an element', () => {
    it('it enqueues "f" onto the queue', () => {
      queue.enqueue('f');
      expect(queue.size()).to.equal(1);
    });

    it('it does not contain "a"', () => {
      expect(queue.contains('a')).to.equal(false);
    });

    it('it does not contain "c"', () => {
      expect(queue.contains('c')).to.equal(false);
    });

    it('it contains "f"', () => {
      expect(queue.contains('f')).to.equal(true);
    });
  });
});
