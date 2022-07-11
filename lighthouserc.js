module.exports = {
  ci: {
    collect: {
      url: ['https://www.flaconi.de/'],
      numberOfRuns: 3,
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
