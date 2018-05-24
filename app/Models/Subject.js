'use strict'

const Model = use('Model')

class Subject extends Model {
    subjectGrades() {
        return this.hasMany('App/Models/SubjectGrade')
    }

}

module.exports = Subject