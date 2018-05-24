'use strict'

const Schema = use('Schema')

class TeacherSchema extends Schema {
    up() {
        this.create('teachers', (table) => {
            table.increments()
            table.integer('user_id').unsigned()
            table.foreign('user_id').references('users.id').onDelete('CASCADE')
            table.timestamps()
        })
    }

    down() {
        this.drop('teachers')
    }
}

module.exports = TeacherSchema