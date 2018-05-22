//const sayHello = require('../../binance/index').sayHello;
//const addNumber = require('../../binance/index').addNumbers;

const binance = require('../../binance/index')

// result
const sayHelloResult = binance.sayHello()
const addNumberResult = binance.addNumbers(5, 5)
describe('Binance', () => {
  describe('sayHello', () => {
    it('app should return hello', () => {
      expect(sayHelloResult).toBe('hello')
    })
    it ('two plus two is four', () => {
      expect(2 + 2).toBe(4)
    })
  })
  describe('addnumbers', function(){
    it('addnumber should be above 5', function(){
      expect(addNumberResult).toBeGreaterThan(5)
    })
  })
})
