module.exports = function (api) {
    api.cache(true);
  
   // const presets = ["@babel/preset-react", "@babel/preset-env],;
    const plugins = ["emotion"];
  
    return {
      presets,
      plugins
    };
  }
  art