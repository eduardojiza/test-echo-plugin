cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "pluginId": "cordova-plugin-whitelist",
        "runs": true
    },
    {
        "file": "plugins/com.inffinix.plugin/www/echo.js",
        "id": "com.inffinix.plugin.Echo",
        "pluginId": "com.inffinix.plugin",
        "clobbers": [
            "echo"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.2.1",
    "com.inffinix.plugin": "2.0.0"
}
// BOTTOM OF METADATA
});