import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'

export default class Memory extends BaseModel {
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


  @belongsTo(() => User)
  declare user: BelongsTo<typeof User>

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
