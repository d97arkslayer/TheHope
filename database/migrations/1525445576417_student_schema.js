'use strict'

const Schema = use('Schema')

class StudentSchema extends Schema {
    up() {
        this.create('students', (table) => {
            table.increments()
            table.timestamps()
            table.string('name')
            table.string('document').unique()
            table.integer('age')
            table.string('email')
        })
    }

    down() {
        this.drop('students')
    }
}

module.exports = StudentSchema