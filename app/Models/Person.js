'use strict'

const Model = use('Model')

class Person extends Model {
    teacher() {
        return this.hasOne('App/Models/Teacher')
    }
    student() {
        return this.hasOne('App/Models/Student')
    }
    static get table() {
        return 'persons'
    }

}

module.exports = Person