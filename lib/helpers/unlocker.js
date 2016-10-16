export default class Unlocker {
  constructor(adb, logger) {
    this.adb = adb;
    this.logger = logger;
  }
  async unlock () {
    await this.adb.shell("input keyevent 82");
    await this.adb.shell("input keyevent KEYCODE_HOME");
  }
}
