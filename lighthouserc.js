module.exports = {
  ci: {
    collect: {
      numberOfRuns: 2,
    },
    assert: {
      preset: 'lighthouse:recommended',
    },
    upload: {
      target: 'temporary-public-storage'
    }
  },
};
