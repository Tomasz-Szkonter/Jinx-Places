const { uuid } = require('uuidv4');
const HttpError = require('../models/http-error');

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Emp State Building',
    description: 'Greatest biggest finest building ever uwu',
    location: {
      lat: 40.7484474,
      lng: -73.9871516,
    },
    address: '20 W 34th St, New York, NY 10001',
    creator: 'u1',
  },
];

const getPlaceById = (req, res, next) => {
  const placeId = req.params.pid;

  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  }); // {pid: 'p1'}

  if (!place) {
    throw new HttpError('could not find a place for the provided id.', 404);
  }
  res.json({ place }); // => { place } => { place: place }
};

const getPlaceByUserId = (req, res, next) => {
  const userId = req.params.uid;

  const place = DUMMY_PLACES.find((p) => {
    return p.creator === userId;
  });
  if (!place) {
    return next(
      new HttpError('Could not find place for provided user id.', 404)
    );
  }
  res.json({ place });
};

const createPlace = (req, res, next) => {
  const { title, description, coordinates, address, creator } = req.body; // ---> const title = req.body.title, const description = req.body.description ect
  const createdPlace = {
    id: uuid(),
    title, // --> title: title, shorthand way if property name === value
    description,
    location: coordinates,
    address,
    creator,
  };

  DUMMY_PLACES.push(createPlace); //push - as a last element , unshift as a first element
  res.status(201).json({ place: createdPlace });
};

exports.getPlaceById = getPlaceById;
exports.getPlaceByUserId = getPlaceByUserId;
exports.createPlace = createPlace;
