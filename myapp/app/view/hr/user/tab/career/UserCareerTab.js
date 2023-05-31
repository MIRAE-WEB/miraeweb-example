
Ext.define('MyApp.view.hr.user.tab.career.UserCareerTab',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.user-career-tab',
    requires: [
        'MyApp.view.hr.user.tab.career.UserCareerTabController',
    ],

    controller: 'user-career-tab',


    html: 'Hello, World!!'
});
