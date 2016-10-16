import Unlocker from './unlocker';
import { sleep } from 'asyncbox';
import driver from 'appium-android-driver';

export default class PasswordUnlocker extends Unlocker {

  async unlock (keys) {
    await super.unlock();
    let view = await driver.getPageSource();
    console.log(view);
  }
}
