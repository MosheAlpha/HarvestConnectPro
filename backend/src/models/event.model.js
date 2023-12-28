const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

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
      default: 'digging',
    },
    difficulty: {
      type: String,
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