'use strict'

const Model = use('Model')

class Teacher extends Model {
    person() {
        return this.hasOne('App/Models/Person')
    }

    classes() {
        return this.hasMany('App/Models/Class')
    }

}

module.exports = Teacher