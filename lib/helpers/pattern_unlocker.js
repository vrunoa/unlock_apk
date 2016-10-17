import Unlocker from './unlocker';
import { sleep } from 'asyncbox';
import AndroidBootstrap from 'appium-android-bootstrap';

export default class PasswordUnlocker extends Unlocker {

  async unlock (keys) {
    await super.unlock();
    let bootstrap = new AndroidBootstrap(this.adb);
    await bootstrap.start();
    await bootstrap.sendAction('touchDown', { x: 168, y: 557});
    await bootstrap.sendAction('touchMove', { x: 168, y: 725});
    await bootstrap.sendAction('touchMove', { x: 168, y: 893});
    await bootstrap.sendAction('touchMove', { x: 336, y: 893});
    await bootstrap.sendAction('touchMove', { x: 504, y: 893});
    await bootstrap.sendAction('touchMove', { x: 504, y: 725});
    await bootstrap.sendAction('touchMove', { x: 504, y: 557});
    await bootstrap.sendAction('touchMove', { x: 336, y: 557});
    await bootstrap.sendAction('touchMove', { x: 336, y: 725});
    await bootstrap.sendAction('touchUp');
    await sleep(1500);
  }
}
