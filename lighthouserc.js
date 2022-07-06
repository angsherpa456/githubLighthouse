module.exports = {
  ci: {
    collect: {
      numberOfRuns: 4,
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://lighthousearchive.herokuapp.com/',
      token: '30038a30-2d6e-4239-b881-34de94746a16'
    }
  },
};
