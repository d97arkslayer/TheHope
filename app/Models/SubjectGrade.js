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
}

module.exports = SubjectGrade