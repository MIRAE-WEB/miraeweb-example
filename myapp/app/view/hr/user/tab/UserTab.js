
Ext.define('MyApp.view.hr.user.tab.UserTab',{
    extend: 'Ext.tab.Panel',
    alias : 'widget.user-tab',
    requires: [
        'MyApp.view.hr.user.tab.UserTabController',
    ],

    controller: 'user-tab',
    items : [{
        title : '상세정보'
    },{
        title : '경력정보'
    },{
        title : '학력정보'
    }]
});
