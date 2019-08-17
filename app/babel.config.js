module.exports = function (api) {
    api.cache(true);
  
   // const presets = [ ... ];
    const plugins = ["emotion"];
  
    return {
      presets,
      plugins
    };
  }
  