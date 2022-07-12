const puppeteer = require('puppeteer');

module.exports = {
  ci: {
    collect: {
      // url: ['https://www.flaconi.de/', 'https://www.flaconi.de/parfum/', 'https://www.flaconi.de/parfum/chanel/bleu-de-chanel/chanel-bleu-de-chanel-eau-de-parfum.html#sku=80004552-50'],
      url: ['https://lite-stage-de.flaconi.de/', 'https://lite-stage-de.flaconi.de/pflege/', 'https://lite-stage-de.flaconi.de/pflege/m2-beaute/eyelash/m2-beaute-eyelash-activating-serum-wimpernserum.html#sku=80045755-5'],
      numberOfRuns: 2,
      puppeteerScript: 'login-puppeteer-script.js',
      chromePath: puppeteer.executablePath(),
      headful: false,
      puppeteerLaunchOptions: {
        slowMo: 50,
        headless: true,
        disableStorageReset: true
      }
    },
    assert: {
      budgetsFile: "./budget.json"
    },
    upload: {
      // target: 'temporary-public-storage'
      target: 'lhci',
      serverBaseUrl: 'https://lighthousearchive.herokuapp.com/',
      token: process.env.LHCI_WIZARD_BUILD_TOKEN
    }
  },
};
