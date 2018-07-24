import chai from 'chai';
import hello from '../../index';


const { expect } = chai;

describe('hello', () => {
  it('should return a greeting to the parameter', () => {
    const greeting = hello('world');
    expect(greeting).to.be.equal('Hello world!');
  });
});
