const mongoose = require('../../../config/database')
const checklistSchema = mongoose.Schema({
  name: { type: String, required: true },
  done: { type: Boolean, default: false},
  tasks: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  }]
})

module.exports = mongoose.model('Checklist', checklistSchema)