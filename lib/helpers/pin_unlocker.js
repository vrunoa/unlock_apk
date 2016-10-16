import Unlocker from './unlocker';
import { sleep } from 'asyncbox';

export default class PinUnlocker extends Unlocker {

  async unlock (keys) {
    await super.unlock();
    this.logger.info(`Trying to unlock device using PIN ${keys}`);
    await this.adb.shell(`input text ${keys}`);
    await this.adb.shell("input keyevent KEYCODE_ENTER");
  }
}
