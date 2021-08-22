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
      target:
        "http://locations-service-env.eba-asrdwhad.us-east-2.elasticbeanstalk.com/",
      changeOrigin: true,
    })
  );
  app.use(
    "/api/v1/product",
    createProxyMiddleware({
      target:
        "http://products-service-env.eba-k3zcgd4i.us-east-2.elasticbeanstalk.com/",
      changeOrigin: true,
    })
  );
};
