let positionLat;
let positionLong;
let addressLong;
let addressLat;

const dist =
  ((positionLong - addressLong) ** 2 + (positionLat - addressLat) ** 2) ** 0.5;
