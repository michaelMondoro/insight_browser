const geo = require("./utils/geo.cjs")

class Session {
    constructor() {
      this.userIP = null;
      this.location = null;
      this.active = false;
      this.hosts = [];
      this.sitesVisited = {};
      this.time = 0;
      this.stats = {
        totalRequests: 0,
        statusCodes: {},
        resources: {}
      };
      this.init();
    }
    async init() {
      try {
          this.userIP = await this.getIP();
          this.location = geo.getIP(this.userIP);
      } catch (error) {
          console.error('Failed to get IP:', error);
      }
    }

    async getIP() {
      const res = await fetch('http://api.ipify.org/');
      console.log('successfully got IP');
      return await res.text();
    }
    
    startSession() {
      this.active = true;
      this.time = Date.now();
      console.log(`Session started for IP: ${this.userIP}`);      
    }
  
    endSession() {
      this.active = false;
      this.time = (Date.now()-this.time) / 1000
      console.log(`Session ended for IP: ${this.userIP}`);
    }
    
    addSite(site) {
      let hostname = new URL(site).hostname;

      if (!this.sitesVisited.hasOwnProperty(hostname)) {
        this.sitesVisited[hostname] = {
          requests: [],
          externalRequests: {}
        }
      } 
    }

    updateStatusCode(request) {
      if (this.stats.statusCodes.hasOwnProperty(request.statusCode)) {
        this.stats.statusCodes[request.statusCode] += 1;
      } else {
        this.stats.statusCodes[request.statusCode] = 1; 
      }
    }

    updateResources(request) {
      if (this.stats.resources.hasOwnProperty(request.resourceType)) {
        this.stats.resources[request.resourceType] += 1;
      } else {
        this.stats.resources[request.resourceType] = 1; 
      }
    }

    addRequest(data) {
      // update session data
      var hostname = data.host.hostname;
      var request = data.request;
      var host = data.host;
      
      this.updateResources(request);
      this.updateStatusCode(request);
      this.stats.totalRequests += 1;
      if (!this.hosts.includes(hostname)) {
        this.hosts.push(hostname);
      }

      // update sites data
      let requestHostname = new URL(request.url).hostname;
      let referrerHostname;
      if (request.referrer) {
         referrerHostname = new URL(request.referrer).hostname;
      }

      if (this.sitesVisited[requestHostname]) {
        if (!this.sitesVisited[requestHostname].geo) {
          this.sitesVisited[requestHostname].geo = host.geo;
          this.sitesVisited[requestHostname].asn = host.asn;
          this.sitesVisited[requestHostname].ip = host.ip;
        }
        this.sitesVisited[requestHostname].requests.push(request);
      
      } else if (this.sitesVisited[referrerHostname]) {

        if (this.sitesVisited[referrerHostname].externalRequests[requestHostname]) {
          this.sitesVisited[referrerHostname].externalRequests[requestHostname].requests.push(request);
        } else {
          this.sitesVisited[referrerHostname].externalRequests[requestHostname] = {
            geo: host.geo,
            asn: host.asn,
            ip: host.ip,
            requests: [request]
          }
        }

      }
    }
  
}
module.exports = {Session};