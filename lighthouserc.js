const puppeteer = require('puppeteer');

module.exports = {
  ci: {
    collect: {
      url: ['https://lite-stage-de.flaconi.de/', 'https://lite-stage-de.flaconi.de/pflege/', 'https://lite-stage-de.flaconi.de/pflege/m2-beaute/eyelash/m2-beaute-eyelash-activating-serum-wimpernserum.html#sku=80045755-5'],
      numberOfRuns: 3,
      puppeteerScript: 'login-puppeteer-script.js',
      chromePath: puppeteer.executablePath(),
      puppeteerLaunchOptions: {
        slowMo: 50,
        disableStorageReset: true
      }
    },
    assert: {
      assertions: {
        "categories:performance": ["warn", {"minScore": 0.9}],
        "categories:accessibility": ["warn", {"minScore": 1}]
      }
    },
    upload: {
      target: 'temporary-public-storage'
    },
  },
};
