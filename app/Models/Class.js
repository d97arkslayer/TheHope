'use strict'

const Model = use('Model')

class Class extends Model {
    teacher() {
        return this.belongsTo('App/Models/Teacher')
    }

    tasks() {
        return this.hasMany('App/Models/Task')
    }

    course() {
        return this.belongsTo('App/Models/Course')
    }

    subjectGrade() {
        return this.belongsTo('App/Models/SubjectGrade')
    }
}

module.exports = Class