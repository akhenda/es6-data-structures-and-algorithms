import chai from 'chai';
import Stack from 'src/data-structures/stack';


const { expect } = chai;

describe('Stack', () => {
  const stack = new Stack(4);

  beforeEach(() => {});

  it('creates an stack successfully', () => {
    expect(stack).to.be.an('object');
    expect(stack).to.be.an.instanceof(Stack);
  });

  describe('when we push to the stack', () => {
    it('it pushes "1" onto the stack', () => {
      stack.push(1);
      expect(stack.size()).to.equal(1);
    });

    it('it pushes "2" onto the stack', () => {
      stack.push(2);
      expect(stack.size()).to.equal(2);
    });

    it('it pushes "3" onto the stack', () => {
      stack.push(3);
      expect(stack.size()).to.equal(3);
    });

    it('it pushes "4" onto the stack', () => {
      stack.push(4);
      expect(stack.size()).to.equal(4);
    });

    it('it has a size of 4', () => {
      expect(stack.size()).to.equal(4);
    });

    it('it prints all the elements we have just pushed onto the stack', () => {
      expect(stack.print()).to.equal('1 2 3 4');
    });

    it('it does not add "5" onto the Stack', () => {
      const msg = 'Max capacity already reached. Remove element before adding a new one.';
      expect(stack.push(5)).to.equal(msg);
    });
  });

  describe('when we peek, pop, push and print elements', () => {
    it('it peeks at the stack', () => {
      expect(stack.peek()).to.equal(4);
    });

    it('it pops the stack', () => {
      expect(stack.pop()).to.equal(4);
    });

    it('it prints elements in the stack', () => {
      expect(stack.print()).to.equal('1 2 3');
    });

    it('it pops the stack again', () => {
      expect(stack.pop()).to.equal(3);
    });

    it('it has a size of 2 now', () => {
      expect(stack.size()).to.equal(2);
    });

    it('it pops the stack again', () => {
      expect(stack.pop()).to.equal(2);
    });

    it('it has a size of 1 now', () => {
      expect(stack.size()).to.equal(1);
    });

    it('it pops the stack again', () => {
      expect(stack.pop()).to.equal(1);
    });

    it('it prints again elements in the stack', () => {
      expect(stack.print()).to.equal('');
    });

    it('it peeks at the stack again', () => {
      expect(stack.peek()).to.equal(undefined);
    });

    it('it pops the stack again', () => {
      const msg = 'No element inside the stack. Add element before poping.';
      expect(stack.pop()).to.equal(msg);
    });
  });
});
