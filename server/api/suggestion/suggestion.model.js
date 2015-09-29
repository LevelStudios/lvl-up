'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SuggestionSchema = new Schema({
  title: String,
  content: String,
  likes: Number,
  registered: { type: Date, default: Date.now },
  tags: [String],
  geometry: { type: { type: String, default:'Point' }, coordinates: [Number] },
  status: Number
});

module.exports = mongoose.model('Suggestion', SuggestionSchema);