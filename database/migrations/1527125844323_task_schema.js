'use strict'

const Schema = use('Schema')

class TaskSchema extends Schema {
    up() {
        this.create('tasks', (table) => {
            table.increments()
            table.integer('class_id').unsigned()
            table.foreign('class_id').references('classes.id').onDelete('CASCADE')
            table.string('title', 240).notNullable()
            table.string('description', 1020)
            table.dateTime('limitDate').notNullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('tasks')
    }
}

module.exports = TaskSchema