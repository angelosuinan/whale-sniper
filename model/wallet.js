const Model = require('./model')

const CURRENCIES = [
  'BTC',
  'ETH',
]


class Wallet extends Model {
  static create(params) {
    return new Wallet(params)
  }

  constructor({password, currency}){
    super(arguments)
    let pwd = password
    let cur = currency

    // create wallet here
    const result = {
      address: 'address',
      xpriv: 'xpriv',
      passphrase: 'passphrase',
    }
    const {address, xpriv, passphrase} = result

    this.address = address
    this.xpriv = xpriv
    this.passphrase = passphrase

  }
}
