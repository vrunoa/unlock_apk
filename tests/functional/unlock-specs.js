import chai from 'chai';
import chaiAsPromised from 'chai-as-promised';
import unlocker from '../../lib/main.js';
import { sleep } from 'asyncbox';
import appiumAdb from 'appium-adb';

let adb;
chai.should();

describe("Unlock functional tests", _ => {

    before(async () => {
      adb = await appiumAdb.createADB();
    });
    /*
    it("Test device is unlocked using PIN", async () => {
      try {
        await adb.lock();
        await sleep(500);
        await unlocker({"unlockType" : "pin", "unlockKeys" : "1111"}, adb);
        let isUnlock = await adb.isScreenLocked();
        isUnlock.should.equal(false);
      }catch(e) {
        console.log(e);
        process.exit(1);
      }
    });
    */
    it("Test device is unlocked using Password", async () => {
      try {
        await adb.lock();
        await sleep(500);
        await unlocker({"unlockType" : "pin", "unlockKeys" : "desdes"}, adb);
        let isUnlock = await adb.isScreenLocked();
        isUnlock.should.equal(false);
      }catch(e) {
        console.log(e);
        process.exit(1);
      }
    });

});
