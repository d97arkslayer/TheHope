'use strict'

const Model = use('Model')

class Theme extends Model {
    subjectGrade() {
        return this.belongsTo('App/Models/SubjectGrade')
    }
}

module.exports = Theme