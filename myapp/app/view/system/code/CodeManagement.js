
Ext.define('MyApp.view.system.code.CodeManagement',{
    extend: 'MiraewebTheme.view.global.content.GlobalContent',
    alias : 'widget.code-management',
    requires: [
        'MyApp.view.system.code.CodeManagementController'
    ],

    controller: 'code-management',
    html: '코드 관리'
});
