const express = require('express');
const auth = require('../../middlewares/auth');
const eventController = require('../../controllers/event.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageUsers'), eventController.createEvent)
  .get(auth('getUsers'), eventController.getEvents);

router
  .route('/:eventId')
  .get(auth('getUsers'), eventController.getEvent)
  .patch(auth('manageUsers'), eventController.updateEvent)
  .delete(auth('manageUsers'), eventController.deleteEvent);

module.exports = router;