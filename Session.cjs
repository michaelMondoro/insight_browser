const geo = require("./utils/geo.cjs")

class Session {
    constructor() {
      this.userIP = null;
      this.location = null;
      this.active = false;
      this.hosts = {};
      this.count = 0;
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
      console.log(`Session started for IP: ${this.userIP}`);      
    }
  
    endSession() {
      this.active = false;
      console.log("Session ended for IP:", this.userIP);
    }
    
    addRequest(request) {
      var hostname = request.hostname;
      if (this.hosts[hostname]) {
        this.hosts[hostname].push(request);
      } else {
        this.hosts[hostname] = [request];
      }
      this.count += 1;
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