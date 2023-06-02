
Ext.define('MyApp.view.global.center.tab.GlobalCenterTab',{
    extend: 'Ext.tab.Panel',
    alias : 'widget.global-center-tab',
    requires: [
        'MyApp.view.global.center.tab.GlobalCenterTabController',
        'MyApp.view.hr.user.UserManagement'
    ],

    controller: 'global-center-tab',
    items : [{
        xtype : 'user-management',
        title : '인사정보'
    }]
});
