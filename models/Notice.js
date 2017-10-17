const
  mongoose = require('mongoose'),
  NoticeSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    noticeType: { type: String, required: true },
    property: { type: mongoose.Schema.Types.ObjectId, ref: 'Property'},
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  }, { timestamps: true})

module.exports = mongoose.model('Notice', NoticeSchema)