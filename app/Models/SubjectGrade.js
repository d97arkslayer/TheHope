'use strict'

const Model = use('Model')

class SubjectGrade extends Model {
    subject() {
        return this.belongsTo('App/Models/Subject')
    }
    classes() {
        return this.hasMany('App/Models/Class')
    }
    lessons() {
        return this.hasMany('App/Models/Lesson')
    }
    grades() {
        return this.belongsTo('App/Models/Grades')
    }
    static get table() {
        return 'subject_grades'
    }
}

module.exports = SubjectGrade