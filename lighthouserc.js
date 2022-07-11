module.exports = {
  ci: {
    collect: {
      url: ['https://www.flaconi.de/', 'https://www.flaconi.de/parfum/', 'https://www.flaconi.de/parfum/chanel/bleu-de-chanel/chanel-bleu-de-chanel-eau-de-parfum.html#sku=80004552-50'],
      numberOfRuns: 2,
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
