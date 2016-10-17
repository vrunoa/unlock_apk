import Unlocker from './unlocker';
import { sleep } from 'asyncbox';

export default class PinUnlocker extends Unlocker {

  async unlock (keys) {
    await super.unlock();
    // TODO - change it to use appium-android-driver since this method is buggy on different devices
    this.logger.info(`Trying to unlock device using PIN ${keys}`);
    await this.adb.shell(`input text ${keys}`);
    await this.adb.shell("input keyevent KEYCODE_ENTER");
  }
}
