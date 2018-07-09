'use strict'

const Model = use('Model')

class Task extends Model {
    class() {
            return this.belongsTo('App/Models/Class')
        }
        /*resources() {
            return this.hasMany('App/Models/Resource')
        }*/
    words() {
        return this.hasMany('App/Models/Words')
    }
}

module.exports = Task