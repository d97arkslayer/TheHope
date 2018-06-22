'use strict'

const Model = use('Model')

class TaskStudent extends Model {
    student() {
        return this.belongsTo('App/Models/Student')
    }
}

module.exports = TaskStudent