import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class MemoryVault extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare title: string | null

  @column()
  declare location: string | null

  @column.date()
  declare date: DateTime

  @column()
  declare memory: string

  @column()
  declare tags: string | null // Stored as JSON text in the database

  @column()
  declare attachment: string | null // Stored as JSON text in the database

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
