import {expect} from 'chai';
import fizzbuzz from '../src/main'

describe('FizzBuzz Tdd', () => {

    it('should be exist fizzbuzz method', () => {
        expect(fizzbuzz(1)).to.be.exist;
    });

    context('should return, when I call the method with', () => {
        it('number divided by 3, fizz', () => {
            expect(fizzbuzz(3)).to.equal('fizz');
            expect(fizzbuzz(6)).to.equal('fizz');
        });
        
        it('number divided by 5, buzz', () => {
            expect(fizzbuzz(5)).to.equal('buzz');
            expect(fizzbuzz(10)).to.equal('buzz');
            expect(fizzbuzz(20)).to.equal('buzz');
        });

        it('number divided by 5 and 3, fizzbuzz', () => {
            expect(fizzbuzz(15)).to.equal('fizzbuzz');
            expect(fizzbuzz(30)).to.equal('fizzbuzz');
        });

        it('number divided by 0, zero', () => {
            expect(fizzbuzz(0)).to.equal(0);
        });

        it('number is not divided by 3 or by 5, return self number', () => {
            expect(fizzbuzz(7)).to.equal(7);
            expect(fizzbuzz(8)).to.equal(8);
        });
    })

})