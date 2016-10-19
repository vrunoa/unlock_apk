#!/usr/bin/env node
import logger from './logger';
import Unlocker from './helpers/unlocker';
import PinUnlocker from './helpers/pin_unlocker';
import PatternUnlocker from './helpers/pattern_unlocker';
import PasswordUnlocker from './helpers/password_unlocker';

async function main(params, driver) {
  try {
    let unlocker;
    if(!params.unlockType) {
      unlocker = new Unlocker(driver, logger);
    }else if(params.unlockType == 'pin') {
      unlocker = new PinUnlocker(driver, logger);
    } else if(params.unlockType == 'password') {
      unlocker = new PasswordUnlocker(driver, logger);
    }else if(params.unlockType == 'pattern') {
      unlocker = new PatternUnlocker(driver, logger);
    }
    await unlocker.unlock(params.unlockKeys);
  }catch(err){
    logger.error(err.message);
    process.exit(1);
  }
}

export default main
