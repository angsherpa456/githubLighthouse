module.exports = {
  ci: {
    collect: {
      numberOfRuns: 4,
    },
    assert: {
      preset: 'lighthouse:recommended',
    },
    upload: {
      target: 'temporary-public-storage'
    }
  },
};
