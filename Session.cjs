const geo = require("./utils/geo.cjs")

class Session {
    constructor() {
      this.userIP = null;
      this.location = null;
      this.active = false;
      this.hosts = {};
      this.sitesVisited = [];
      this.time = 0;
      this.stats = {
        totalRequests: 0,
        totalServers: 0,
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
      this.sitesVisited.push(site);
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

    addRequest(request) {
      var hostname = request.hostname;
      if (this.hosts[hostname]) {
        this.hosts[hostname].requests.push(request);
      } else {
        this.hosts[hostname] = { requests: [request] };
      }      
      this.updateResources(request);
      this.updateStatusCode(request);
      this.stats.totalRequests += 1;
    }
    
    getSessionData() {
      return {
        userIP: this.userIP,
        active: this.active,
        hosts: this.hosts
      };
    }
}
module.exports = {Session};