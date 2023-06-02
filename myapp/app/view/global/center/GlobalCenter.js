
Ext.define('MyApp.view.global.center.GlobalCenter',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.global-center',
    requires: [
        'Ext.layout.container.Fit',
        'MyApp.view.global.center.GlobalCenterController',
        'MyApp.view.global.center.tab.GlobalCenterTab'
    ],
    controller: 'global-center',
    layout : 'fit',
    items : [{
        xtype : 'global-center-tab'
    }]
});
