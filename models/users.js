import mongoose from 'mongoose'

const Schema = mongoose.Schema

const userSchema = new Schema({
  name: String,
  lastname: String,
  email: String,
  password: String,
  avatar: String,
})

const User = mongoose.model('User', userSchema)

export default User