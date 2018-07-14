'use strict'

const Model = use('Model')

class SubjectGrade extends Model {
    subject() {
        return this.belongsTo('App/Models/Subject')
    }
    classes() {
        return this.hasMany('App/Models/Class')
    }
    themes() {
        return this.hasMany('App/Models/Theme')
    }
    grade() {
        return this.belongsTo('App/Models/Grade')
    }
    questions() {
        return this.hasMany('App/Models/Question')
    }
    static get table() {
        return 'subject_grades'
    }
}

module.exports = SubjectGrade