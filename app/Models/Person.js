'use strict'

const Model = use('Model')

class Person extends Model {
    teacher() {
        return this.hasOne('App/Models/Teacher')
    }
}

module.exports = Person