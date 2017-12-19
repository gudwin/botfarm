"use strict";

module.exports = {
  build: function (settings, ThemeClass, plugins) {
    let theme = new ThemeClass();
    let botApplication = theme.build(settings);
    botApplication.theme = ThemeClass;
    botApplication.plugins = plugins;
    plugins.forEach((PluginClass) => {
      let plugin = new PluginClass();
      plugin.build(settings, botApplication);
    });
    return botApplication;
  }
}