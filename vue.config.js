module.exports = {
  outputDir: 'dist',
  filenameHashing: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://ace.shannonai.com:80/'
      }
    }
  }
};