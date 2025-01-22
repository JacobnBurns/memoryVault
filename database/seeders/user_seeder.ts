import { BaseSeeder } from '@adonisjs/lucid/seeders'
import User from '#models/user'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    const users = [
      {
        fullName: 'Jacob Burns',
        email: 'jacobnburns@gmail.com',
        password: 'jburns123',
      },
    ]
    // loop through the array and create a user for each object
    for (let user of users) {
      await User.create(user)
    }
  }
}