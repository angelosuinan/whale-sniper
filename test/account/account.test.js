const Accounts = require('../../model/index')


const build = {
  user: () =>({
    email: 'test@test.com',
    password: 'password',
  }),
}

describe('Account Test', () => {
  describe ('createUser', () => {
    it ('returns a user', () => {
      return expect(
        Accounts.createUser(build.user)
      ).resolves.toBeTruthy()
    })
  })
})
