const geo = require('./geo.cjs');

module.exports = {
    processRequest: (details) => {
        if (!details.url.startsWith("file") && !details.url.startsWith("devtools")) {
            geoData = geo.getIP(details.ip);
            asnData = geo.getASN(details.ip);
            hostname = new URL(details.url).hostname;
            hostData = {
                hostname: hostname,
                ip: details.ip,
                asn: asnData,
                geo : geoData
            }
            requestData = {
                url: details.url,
                method: details.method,
                statusCode: details.statusCode,
                resourceType: details.resourceType,
                referrer: details.referrer
            }
            return {host: hostData, request: requestData};
        }
    }
}