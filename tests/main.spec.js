var expect = require('chai').expect;
var calc = require('../src/main');

describe('Calc', function(){
    // smoke tests
    describe('Smoke tests', () => {
        
        it('should existis the calc lib', () => {
            expect(calc).to.exist;
        })
        
        it('should exist method sum', () => {
            expect(calc.sum).to.exist;
            expect(calc.sum).to.be.a('function');
        });

        it('should exist method sub', () => {
            expect(calc.sub).to.exist;
            expect(calc.sub).to.be.a('function');
        });

        it('should exist method mult', () => {
            expect(calc.mult).to.exist;
            expect(calc.mult).to.be.a('function');
        });

        it('should exist method div', () => {
            expect(calc.div).to.exist;
            expect(calc.div).to.be.a('function');
        });
    });

    describe('Test sum method', () => {
        it('shold return 4 when sum(2,2)', () => {
            expect(calc.sum(2,2)).to.equal(4);
        }) 
        it('shold return 5 when sum(2,3)', () => {
            expect(calc.sum(2,3)).to.equal(5);
        }) 
    })
});