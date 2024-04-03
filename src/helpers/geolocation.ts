export const haversineDistance = (
  longitude1: number,
  latitude1: number,
  longitude2: number,
  latitude2: number,
) => {
  function toRad(x: number) {
    return (x * Math.PI) / 180;
  }

  var lon1 = longitude1;
  var lat1 = latitude1;

  var lon2 = longitude2;
  var lat2 = latitude2;

  var R = 6371; // km

  var x1 = lat2 - lat1;
  var dLat = toRad(x1);
  var x2 = lon2 - lon1;
  var dLon = toRad(x2);
  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) *
      Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;

  return d;
};

export const Geolocation = {
  haversineDistance,
};
