class Model {
  constructor() {
    this.errors = []
  }

  addError(field, msg) {
    this.errors.push({ field, msg })
    return this
  }

  validate(truthy, field, msg) {
    if (!truthy) {
      this.addError(field, msg)
    }
    return this
  }

  one(params) {
    if (!this._model) return this
    return this._model.findOne(params)
      .then(this.onFind.bind(this))
  }

  onFind({dataValues: data}) {
    Object.keys(data).forEach((key) => {
      this[key] = data[key]
    })
    return this
  }

  onSave(data) {
    Object.keys(data).forEach((key) => {
      this[key] = data[key]
    })
    return this
  }

  save() {
    if (this.errors.length) return this
    if (this._model) {
      return this._model.create(this.toJSON())
        .then(this.onSave.bind(this))
    }
    return this
  }

}

module.exports = Model
