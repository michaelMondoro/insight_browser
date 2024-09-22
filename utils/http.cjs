const geo = require('./geo.cjs');

module.exports = {
    processRequest: (details) => {
        if (!details.url.startsWith("file") && !details.url.startsWith("devtools")) {
            geoData = geo.getIP(details.ip);
            asnData = geo.getASN(details.ip);
            hostname = new URL(details.url).hostname;
            data = {
            'hostname': hostname,
            'url': details.url,
            'method': details.method,
            'resourceType': details.resourceType,
            'referrer': details.referrer, 
            'ip': details.ip,
            'asn': asnData,
            'statusCode': details.statusCode,
            'geo' : geoData
            }
            return data;
        }
    }
}