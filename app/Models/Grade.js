'use strict'

const Model = use('Model')

class Grade extends Model {
    courses() {
        return this.hasMany('App/Models/Course')
    }

    subjectGrades() {
        return this.hasMany('App/Models/SubjectGrade')
    }
}

module.exports = Grade