module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '/' : '/',

  devServer: {
    open: true,
    // host: 'localhost',
    // port: 8080,
  },
  lintOnSave: false,
};
