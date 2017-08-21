Ext.namespace('Zarafa.plugins.randomtheme');

/**
 * @class Zarafa.plugins.randomtheme.RandomThemePlugin
 * @extends Zarafa.core.Plugin
 *
 */
Zarafa.plugins.randomtheme.RandomThemePlugin  = Ext.extend(Zarafa.core.Plugin, {

    initPlugin : function() {

        var array = container.getPlugins().filter(function(plugin) {
          return plugin instanceof Zarafa.core.ThemePlugin
        });

        var plugin = array[Math.floor(Math.random()*array.length)];
        container.getSettingsModel().set('zarafa/v1/main/active_theme', plugin.getName());
    }
});

Zarafa.onReady(function() {
	container.registerPlugin(new Zarafa.core.PluginMetaData({
		name : 'randomtheme',
		displayName : _('Random Theme'),
		allowUserDisable : true,
		allowUserVisible : true,
		pluginConstructor : Zarafa.plugins.randomtheme.RandomThemePlugin
	}));
});
