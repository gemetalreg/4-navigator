let positionLat = 11;
let positionLong = 12;
let addressLong = 13;
let addressLat = 14;

const R = 6371;
const toRadians = (degrees) => degrees * (Math.PI / 180);

const dLat = toRadians(positionLat - addressLat);
const dLon = toRadians(positionLong - addressLong);

lat1 = toRadians(addressLat);
lat2 = toRadians(positionLat);

const a =
  Math.sin(dLat / 2) * Math.sin(dLat / 2) +
  Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

dist = R * c;
