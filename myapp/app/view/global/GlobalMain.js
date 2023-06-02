
Ext.define('MyApp.view.global.GlobalMain',{
    extend: 'Ext.container.Viewport',
    alias : 'widget.global-main',
    requires: [
        'Ext.layout.container.Border',
        'MyApp.view.global.GlobalMainController',
        'MyApp.view.global.center.GlobalCenter',
        'MyApp.view.global.west.GlobalWest',
    ],

    controller: 'global-main',
    layout : 'border',
    items : [{
        xtype : 'global-west',
        region : 'west',
        width : 200
    },{
        xtype : 'global-center',
        region: 'center',
        flex : 1

    }]
});
