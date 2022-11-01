class FancyLogger {
  constructor() {
    if (FancyLogger.instance == null) {
      // if not created, create
      this.logs = [];
      FancyLogger.instance = this; // "this" is our first and only instance"
    }
    return FancyLogger.instance; //returns "this" single instance every time
  }

  log(message) {
    this.logs.push(message);
    console.log(`FANCY: ${message}`);
  }

  printLogCount() {
    console.log(`${this.logs.length} Logs`);
  }
}

const logger = new FancyLogger(); // single instance of this class;
Object.freeze(logger); // makes sure no one can change this class in any way
export default logger;
