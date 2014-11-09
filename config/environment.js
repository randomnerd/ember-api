/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    'simple-auth': {
      authorizer: 'simple-auth-authorizer:oauth2-bearer',
      crossOriginWhitelist: ['https://rails-api-c9-randomnerd.c9.io']
    },
    'simple-auth-oauth2': { serverTokenEndpoint: 'https://rails-api-c9-randomnerd.c9.io/oauth/token' },
    contentSecurityPolicy: {
      'style-src': "'unsafe-inline' 'self' fonts.googleapis.com",
      'font-src': "'unsafe-inline' 'self' 'unsafe-eval' fonts.gstatic.com",
      'connect-src': "'self' rails-api-c9-randomnerd.c9.io"
    },
    modulePrefix: 'starter',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
