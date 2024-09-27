const jGeoIP = require('jgeoip');
const { app } = require('electron');
const path = require('path');

var geoip = new jGeoIP(path.join(app.getAppPath(), 'data', 'dbip-city.mmdb'));
var asnip = new jGeoIP(path.join(app.getAppPath(), 'data', 'dbip-asn.mmdb'));

module.exports = {
    getIP: function(ip) {
        record = geoip.getRecord(ip);
        data = {}
        if (record !== null) {
            data = {
                'city': record['city']['names']['en'],
                'country': record['country']['names']['en'],
                'country_code': record['country']['iso_code'],
                'coordinates': record['location']
            }
        }
        return data;
    },
    getASN: function(ip) {
        record = asnip.getRecord(ip);
        data = {}
        if (record !== null) {
            data = {
                'number': record['autonomous_system_number'],
                'org': record['autonomous_system_organization']
            }
        }
        return data
    }
}


