// next.config.mjs
export default {
    productionBrowserSourceMaps: false, // Disable source maps for production

  
    webpack(config) {
      // Disable performance hints to optimize build
      config.performance = {
        hints: false,
      };
      
      return config;
    },
  
    // Optionally, if you're using environment variables:
    env: {
      CUSTOM_API_URL: process.env.CUSTOM_API_URL,
    },
  
    // Additional Next.js optimizations can go here
  };
  