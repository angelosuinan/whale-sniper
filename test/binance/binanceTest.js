const assert = require('chai').assert;
//const sayHello = require('../../binance/index').sayHello;
//const addNumber = require('../../binance/index').addNumbers;

const binance = require('../../binance/index');

// result
sayHelloResult = binance.sayHello();
addNumberResult = binance.addNumbers(5,5); 
describe('Binance', function(){
    describe("sayHello", function(){
        it("app should return hello", function(){
            assert.equal(sayHelloResult, 'hello');
        });
        
    
        it(" say hello should return type string", function(){
           
            assert.typeOf(sayHelloResult, 'string');
        });
    })
    
    describe('addnumbers', function(){
        it("addnumber should be above 5", function(){

            assert.isAbove(addNumberResult, 5);
        })
    })
    
  
});