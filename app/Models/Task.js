'use strict'

const Model = use('Model')

class Task extends Model {
    class() {
            return this.belongsTo('App/Models/Class')
        }
        /*resources() {
            return this.hasMany('App/Models/Resource')
        }*/
}

module.exports = Task