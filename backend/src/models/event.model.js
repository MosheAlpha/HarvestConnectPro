const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');
const { harvestTypes } = require('../config/harvest-type');
const { difficultyKeys } = require('../config/difficulty');

const eventSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      enum: harvestTypes,
      default: 'a',
    },
    difficulty: {
      type: String,
      enum: difficultyKeys,
      default: 'קל',
    },
    date: {
      type: String,
      required: true,
    },
    amountPeopleRequired: {
      type: Number,
      required: true,
    },
    amountPeopleLeft: {
      type: Number,
      required: true,
    },
    signedUpPeople: [{
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User'
    }],
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
eventSchema.plugin(toJSON);
eventSchema.plugin(paginate);

/**
 * @typedef Event
 */
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;