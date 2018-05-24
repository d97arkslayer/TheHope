'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
    up() {
        this.create('persons', table => {
            table.increments()
            table.string('name', 80).notNullable()
            table.string('lastName', 120).notNullable()
            table.string('DocumentNumber').notNullable().unique()
            table.string('email', 254).notNullable().unique()
            table.string('password', 60).notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('persons')
    }
}

module.exports = UserSchema