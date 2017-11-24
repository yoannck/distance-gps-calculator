/**
 * Polymathee
 * Author : Yoann Chane Kive
 */
module.exports = {
  getRadian: function(x) {
    return Math.PI * x / 180;
  },
  /**
   * Calculate the distance between two gps coordinates by latitude and longitude
   */
  getDistanceMiles: function(lat1, lon1, lat2, lon2) {
    var R = 6371e3; // earth radius meters
    var φ1 = this.getRadian(lat1);
    var φ2 = this.getRadian(lat2);
    var Δφ = this.getRadian(lat2-lat1);
    var Δλ = this.getRadian(lon2-lon1);
    var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ/2) * Math.sin(Δλ/2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // meters
    var m = d * 0.000621371; //miles
    return m;
  }
};
