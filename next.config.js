const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
    webpack5: true,
    pwa: {
        dest: "public",
        runtimeCaching,
    },
});
