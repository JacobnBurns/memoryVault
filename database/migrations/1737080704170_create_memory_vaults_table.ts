import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'memory_vaults'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id') // Primary key
      table.string('title').nullable() // Nullable title
      table.string('location').nullable() // Nullable location
      table.date('date').notNullable() // Memory date
      table.text('memory').notNullable() // Required memory content
      table.text('tags').nullable() // Tags as JSON (nullable)
      table.text('attachment').nullable() // Attachments as JSON (nullable)

      table.timestamps(true, true) 
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}