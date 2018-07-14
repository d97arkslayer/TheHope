'use strict'

const Model = use('Model')

class Question extends Model {
    SubjectGrade() {
        return this.belongsTo('App/Models/SubjectGrade')
    }
}

module.exports = Question