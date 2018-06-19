'use strict'

const Model = use('Model')

class Course extends Model {
    classes() {
        return this.hasMany('App/Models/Class')
    }
    grade() {
        return this.belongsTo('App/Models/Grade')
    }
    students() {
        return this.hasMany('App/Models/Grade')
    }
}

module.exports = Course