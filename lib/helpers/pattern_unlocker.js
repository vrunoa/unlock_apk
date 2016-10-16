import Unlocker from './unlocker';
import { sleep } from 'asyncbox';

export default class PasswordUnlocker extends Unlocker {

  async unlock (keys) {
    await super.unlock();
    this.logger.info(`Trying to unlock device using Pattern`);
    // TODO - unlock a device using pattern
  }
}
