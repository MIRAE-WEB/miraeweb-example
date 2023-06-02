
Ext.define('MyApp.view.hr.user.UserManagement',{
    extend: 'MyApp.view.global.content.GlobalContent',
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
        data :{
            userIdx : null
        },
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
        frame : true,
        margin : '0 0 10 0',
        height : 300
    },{
        xtype : 'user-form',
        title : '사용자 정보',
        margin : '0 0 10 0',
        frame : true
    },{
        xtype : 'user-tab',
        minHeight : 300,
        frame : true
    }],
    listeners : {
        'insert-mode' : 'onInsertMode',
        'update-mode' : 'onUpdateMode'
    }
});
