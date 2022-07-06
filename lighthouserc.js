module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://lighthousearchive.herokuapp.com/',
      token: process.env.LHCI_WIZARD_BUILD_TOKEN
    }
  },
};
