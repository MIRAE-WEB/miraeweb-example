
Ext.define('MyApp.view.hr.user.UserManagement',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.user-management',
    requires: [
        'Ext.data.Store',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.layout.container.VBox',
        'MyApp.view.hr.user.UserManagementController',
        'MyApp.view.hr.user.form.UserForm',
        'MyApp.view.hr.user.grid.UserGrid',
        'MyApp.view.hr.user.tab.UserTab'
    ],

    controller: 'user-management',
    viewModel: {
        stores : {
            userStore :{
                type : 'store',
                autoLoad : true,
                proxy : {
                    type : 'ajax',
                    url : 'resources/data/users.json',
                    reader : {
                        type : 'json',
                        rootProperty : 'users'
                    }
                },
            },
            userEducationStore : {
                type : 'store'
            },
            userCareerStore : {
                type : 'store'
            }
        }
    },
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
    },{
        xtype : 'user-tab',
        flex : 1
    }]
});
