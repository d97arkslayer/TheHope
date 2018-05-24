'use strict'

const Schema = use('Schema')

class GradeSchema extends Schema {
    up() {
        this.create('grades', (table) => {
            table.increments()
            table.string('name', 40).notNullable().unique()
            table.timestamps()
        })
    }

    down() {
        this.drop('grades')
    }
}

module.exports = GradeSchema