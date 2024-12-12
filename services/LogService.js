module.exports = (location) => {
    const _location = location;
  
    return {
      logError: (msg) => {
        console.error(`${msg} in ${_location}`);
      },
      logInfo: (msg) => {
        console.info(`${msg} in ${_location}`);
      },
      logMessage: (msg) => {
        console.log(`${msg} in ${_location}`);
      },
      logWarning: (msg) => {
        console.warn(`${msg} in ${_location}`);
      },
    };
  };
  