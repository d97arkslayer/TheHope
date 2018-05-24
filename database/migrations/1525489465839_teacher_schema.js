'use strict'

const Schema = use('Schema')

class TeacherSchema extends Schema {
    up() {
        this.create('teachers', (table) => {
            table.increments()
            table.integer('person_id').unsigned()
            table.foreign('person_id').references('persons.id').onDelete('CASCADE')
            table.timestamps()
        })
    }

    down() {
        this.drop('teachers')
    }
}

module.exports = TeacherSchema