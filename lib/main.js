#!/usr/bin/env node
import logger from './logger';
import appiumAdb from 'appium-adb';
import Unlocker from './helpers/unlocker';
import PinUnlocker from './helpers/pin_unlocker';

async function main(params, adb) {
  try {
    let unlocker;
    if(adb == undefined) {
      logger.info("Creating adb instance");
      adb = await appiumAdb.createADB();
    }
    if(!params.unlockType) {
      unlocker = new Unlocker(adb, logger);
    }else if(params.unlockType == 'pin') {
      unlocker = new PinUnlocker(adb, logger);
    } else if(params.unlockType == 'password') {
      unlocker = new PasswordUnlocker(adb, logger);
    } else if(params.unlockType == 'patter') {
      unlocker = new PatternUnlocker(adb, logger);
    }
    await unlocker.unlock(params.unlockKeys);
  }catch(err){
    logger.error(err.message);
    process.exit(1);
  }
}

export default main
