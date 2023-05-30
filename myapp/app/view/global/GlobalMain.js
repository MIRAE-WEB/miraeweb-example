
Ext.define('MyApp.view.global.GlobalMain',{
    extend: 'Ext.container.Viewport',
    alias : 'widget.global-main',
    requires: [
        'Ext.layout.container.Fit',
        'MyApp.view.global.GlobalMainController',
        'MyApp.view.hr.user.UserManagement'
    ],

    controller: 'global-main',
    layout : 'fit',
    items : [{
        xtype : 'user-management'
    }]
});
