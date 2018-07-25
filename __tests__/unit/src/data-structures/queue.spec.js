import chai from 'chai';
import Queue from 'src/data-structures/queue';


const { expect } = chai;

describe('Queue', () => {
  const queue = new Queue(4);

  beforeEach(() => {});

  it('creates an queue successfully', () => {
    expect(queue).to.be.an('object');
    expect(queue).to.be.an.instanceof(Queue);
  });

  it('the queue has a capacity of 4', () => {
    expect(queue.capacity()).to.equal(4);
  });

  describe('when we enqueue the queue', () => {
    it('it enqueues "a" onto the queue', () => {
      queue.enqueue('a');
      expect(queue.size()).to.equal(1);
    });

    it('it enqueues "b" onto the queue', () => {
      queue.enqueue('b');
      expect(queue.size()).to.equal(2);
    });

    it('it enqueues "c" onto the queue', () => {
      queue.enqueue('c');
      expect(queue.size()).to.equal(3);
    });

    it('it enqueues "d" onto the queue', () => {
      queue.enqueue('d');
      expect(queue.size()).to.equal(4);
    });

    it('it has a size of 4', () => {
      expect(queue.size()).to.equal(4);
    });

    it('it prints all the elements we have just enqueued', () => {
      expect(queue.print()).to.equal('a b c d');
    });

    it('it does not enqueue "e" onto the queue', () => {
      const msg = 'Max capacity reached. Remove element before adding a new one.';
      expect(queue.enqueue('e')).to.equal(msg);
    });
  });

  describe('when we peek, dequeue, enqueue and print elements', () => {
    it('it peeks at the queue', () => {
      expect(queue.peek()).to.equal('a');
    });

    it('it dequeues the queue', () => {
      expect(queue.dequeue()).to.equal('a');
    });

    it('it prints elements in the queue', () => {
      expect(queue.print()).to.equal('b c d');
    });

    it('it dequeues the queue again', () => {
      expect(queue.dequeue()).to.equal('b');
    });

    it('it has a size of 2 now', () => {
      expect(queue.size()).to.equal(2);
    });

    it('it dequeues the queue again', () => {
      expect(queue.dequeue()).to.equal('c');
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
