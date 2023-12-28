const express = require('express');
const auth = require('../../middlewares/auth');
const eventController = require('../../controllers/event.controller');

const router = express.Router();

router.get('/closest', eventController.getClosest);
router
  .route('/')
  .post(auth('manageUsers'), eventController.createEvent)
  .get(eventController.getEvents);

router
  .route('/:eventId')
  .get(eventController.getEvent)
  .patch(auth('manageUsers'), eventController.updateEvent)
  .delete(auth('manageUsers'), eventController.deleteEvent);

module.exports = router;