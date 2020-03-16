import { expect } from 'chai';
import { sum, sub, div, mult } from '../src/main';

describe('Calc', function(){
    // smoke tests
    describe('Smoke tests', () => {
        
        it('should exist method sum', () => {
            expect(sum).to.exist;
            expect(sum).to.be.a('function');
        });

        it('should exist method sub', () => {
            expect(sub).to.exist;
            expect(sub).to.be.a('function');
        });

        it('should exist method mult', () => {
            expect(mult).to.exist;
            expect(mult).to.be.a('function');
        });

        it('should exist method div', () => {
            expect(div).to.exist;
            expect(div).to.be.a('function');
        });
    });

    describe('Test sum method', () => {
        it('shold return 4 when sum(2,2)', () => {
            expect(sum(2,2)).to.equal(4);
        }) 
        it('shold return 5 when sum(2,3)', () => {
            expect(sum(2,3)).to.equal(5);
        }) 
    });
    
    describe('Test sub method', () => {
        it('shold return 0 when sub(2,2)', () => {
            expect(sub(2,2)).to.equal(0);
        }) 
        it('shold return -1 when sub(2,3)', () => {
            expect(sub(2,3)).to.equal(-1);
        }) 
    });
    
    describe('Test mult method', () => {
        it('shold return 4 when mult(2,2)', () => {
            expect(mult(2,2)).to.equal(4);
        }) 
        it('shold return 6 when mult(2,3)', () => {
            expect(mult(2,3)).to.equal(6);
        }) 
    });

    describe('Test div method', () => {
        it('shold return 4 when div(2,2)', () => {
            expect(div(2,2)).to.equal(1);
        }) 
        it('shold return "Não é possível divisão por zero" when div(2,3)', () => {
            expect(div(2,0)).to.equal('Não é possível divisão por zero');
        }) 
    });
});