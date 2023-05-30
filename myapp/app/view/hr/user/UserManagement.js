
Ext.define('MyApp.view.hr.user.UserManagement',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.user-management',
    requires: [
        'Ext.layout.container.VBox',
        'MyApp.view.hr.user.UserManagementController',
        'MyApp.view.hr.user.form.UserForm',
        'MyApp.view.hr.user.grid.UserGrid',
        'MyApp.view.hr.user.tab.UserTab'
    ],

    controller: 'user-management',
    layout : {
        type : 'vbox',
        align : 'stretch'
    },
    items : [{
        xtype : 'user-grid',
        title : '사용자리스트',
        flex : 1
    },{
        xtype : 'user-form',
        title : '사용자 정보',
        flex : 1
    },{
        xtype : 'user-tab',
        flex : 1
    }]
});
