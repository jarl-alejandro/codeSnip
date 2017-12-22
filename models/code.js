import mongoose from 'mongoose'

const Schema = mongoose.Schema

const codeSchema = new Schema({
  username: String,
  code: String,
  language: String,
  start: { type: Number, default: 0 }
})

const Code = mongoose.model('Code', codeSchema)

export default Code