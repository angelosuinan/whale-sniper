const Model = require('./model')

class User extends Model {
  static create(params) {
    return new User(params)
  }

  constructor({email, password}){
    super(arguments)
    this.email = email
    this.password = password
  }
  toJSON(){
    return {
    }
  }
}
