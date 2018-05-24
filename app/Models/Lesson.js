'use strict'

const Model = use('Model')

class Lesson extends Model {
    subjectGrade() {
        return this, belongsTo('App/Models/SubjectGrade')
    }
}

module.exports = Lesson