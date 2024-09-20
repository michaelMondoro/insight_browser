class Session {
    constructor() {
      this.userIP = null;
      this.active = false;
      this.sitesVisited = [];
    }

    async startSession() {
      const res = await fetch('http://api.ipify.org/');
      this.userIP = await res.text();
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
module.exports = Session;