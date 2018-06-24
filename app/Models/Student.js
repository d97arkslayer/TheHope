'use strict'
const Model = use('Model')

class Student extends Model {
    person() {
        return this.hasOne('App/Models/Person')
    }
    course() {
        return this.belongsTo('App/Models/Course')
    }
    taskStudent() {
        return this.hasMany('App/Models/TaskStudent')
    }
}
module.exports = Student