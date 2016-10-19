export default class Unlocker {
  constructor(driver, logger) {
    this.driver = driver
    this.adb = driver.adb;
    this.logger = logger;
  }
  async unlock () {
    
  }
}
