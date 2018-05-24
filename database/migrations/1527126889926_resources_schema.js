'use strict'

const Schema = use('Schema')

class ResourcesSchema extends Schema {
    up() {
        this.create('resources', (table) => {
            table.increments()
            table.string('name').notNullable()
            table.integer('task_id').unsigned()
            table.foreign('task_id').references('tasks.id').onDelete('CASCADE')
            table.timestamps()
        })
    }

    down() {
        this.drop('resources')
    }
}

module.exports = ResourcesSchema