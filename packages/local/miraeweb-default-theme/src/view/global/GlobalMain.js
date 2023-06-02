
Ext.define('MiraewebTheme.view.global.GlobalMain',{
    extend: 'Ext.container.Viewport',
    alias : 'widget.global-main',
    requires: [
        'Ext.layout.container.Border',
        'MiraewebTheme.view.global.GlobalMainController',
        'MiraewebTheme.view.global.center.GlobalCenter',
        'MiraewebTheme.view.global.west.GlobalWest',
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
