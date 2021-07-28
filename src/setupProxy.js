const createProxyMiddleware = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api/v1/inventory",
    createProxyMiddleware({
      target: "http://cdltest-env.eba-jzjajyqg.us-east-2.elasticbeanstalk.com",
      changeOrigin: true,
    })
  );
  app.use(
    "/api/v1/locations",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
    })
  );
};
