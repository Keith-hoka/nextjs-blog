const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "Keith-Next",
        mongodb_password: "M8xdkQ6VJtgAhowt",
        mongodb_clustername: "keithcluster",
        mongodb_database: "My-Site-Dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "Keith-Next",
      mongodb_password: "M8xdkQ6VJtgAhowt",
      mongodb_clustername: "keithcluster",
      mongodb_database: "My-Site",
    },
  };
};
