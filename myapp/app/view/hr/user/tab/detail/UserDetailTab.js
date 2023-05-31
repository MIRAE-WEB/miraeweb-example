
Ext.define('MyApp.view.hr.user.tab.detail.UserDetailTab',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.user-detail-tab',
    requires: [
        'Ext.layout.container.Fit',
        'MyApp.view.hr.user.tab.detail.UserDetailTabController',
        'MyApp.view.hr.user.tab.detail.form.UserDetailForm'
    ],

    controller: 'user-detail-tab',
    layout : 'fit',
    items : [{
        xtype : 'user-detail-form'
    }]
});
