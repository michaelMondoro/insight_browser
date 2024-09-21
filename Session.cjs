class Session {
    constructor() {
      this.userIP = null;
      this.active = false;
      this.sitesVisited = [];
      this.init();
    }
    async init() {
      try {
          this.userIP = await this.getIP();
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
  
    getSessionData() {
      return {
        userIP: this.userIP,
        active: this.active,
        sitesVisited: this.sitesVisited
      };
    }
}
module.exports = {Session};