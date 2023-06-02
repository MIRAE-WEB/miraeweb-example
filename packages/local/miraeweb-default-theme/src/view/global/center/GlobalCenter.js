
Ext.define('MiraewebTheme.view.global.center.GlobalCenter',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.global-center',
    requires: [
        'Ext.layout.container.Fit',
        'MiraewebTheme.view.global.center.GlobalCenterController',
        'MiraewebTheme.view.global.center.tab.GlobalCenterTab'
    ],
    controller: 'global-center',
    layout : 'fit',
    items : [{
        xtype : 'global-center-tab'
    }]
});
