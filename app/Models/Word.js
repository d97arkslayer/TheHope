'use strict'

const Model = use('Model')

class Word extends Model {
    task() {
        return this.belongsTo('App/Models/Task')
    }
}

module.exports = Word