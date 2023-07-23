const mongoose = require('../../../config/database')
const taskSchema = mongoose.Schema({
  name: { type: String, required: true },
  done: { type: Boolean, default: false },
  checklist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Checklist',
    required: true
  }
})

module.export = mongoose.model('Task', taskSchema)