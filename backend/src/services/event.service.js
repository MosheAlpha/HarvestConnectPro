const httpStatus = require('http-status');
const { Event } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create an event
 * @param {Object} eventBody
 * @returns {Promise<Event>}
 */
const createEvent = async (eventBody) => {
  return Event.create(eventBody);
};

/**
 * Query for events
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryEvents = async (filter, options) => {
  const events = await Event.paginate(filter, options);
  return events;
};

/**
 * Get event by id
 * @param {ObjectId} id
 * @returns {Promise<Event>}
 */
const getEventById = async (id) => {
  return Event.findById(id);
};

/**
 * Update event by id
 * @param {ObjectId} eventId
 * @param {Object} eventBody
 * @returns {Promise<Event>}
 */
const updateEventById = async (eventId, eventBody) => {
  const event = await getEventById(eventId);
  if (!event) {
    throw new ApiError(httpStatus.NOT_FOUND, 'event not found');
  }
  Object.assign(event, eventBody);
  await event.save();
  return event;
};

/**
 * Delete event by id
 * @param {ObjectId} eventId
 * @returns {Promise<Event>}
 */
const deleteEventById = async (eventId) => {
  const event = await getEventById(eventId);
  if (!event) {
    throw new ApiError(httpStatus.NOT_FOUND, 'event not found');
  }
  await event.remove();
  return event;
};

const getClosestEvent = async () => {
  const currentDate = new Date(); // Get the current date
  const closestEvent = await Event.findOne({
    date: { $lte: currentDate }
  }).sort({ date: -1 }).limit(1);
  return closestEvent;
}

module.exports = {
  createEvent,
  queryEvents,
  getEventById,
  updateEventById,
  deleteEventById,
  getClosestEvent
};
