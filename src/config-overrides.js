module.exports = function override(config, env) {
    // add .mjs files to be resolved as JS
    config.resolve.extensions.push('.mjs');
  
    // allow .mjs files from node_modules
    config.module.rules.push({
      test: /\.mjs$/,
      include: /node_modules/,
      type: 'javascript/auto',
    });
  
    return config;
  };
  