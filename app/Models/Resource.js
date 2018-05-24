'use strict'

const Model = use('Model')

class Resource extends Model {
    tasks() {
        return this.belongsTo('App/Models/Task')
    }
}

module.exports = Resource