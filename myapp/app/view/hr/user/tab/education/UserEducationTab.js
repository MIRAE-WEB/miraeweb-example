
Ext.define('MyApp.view.hr.user.tab.education.UserEducationTab',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.user-education-tab',
    requires: [
        'MyApp.view.hr.user.tab.education.UserEducationTabController',
    ],

    controller: 'user-education-tab',
    layout : 'fit',
    items : [{
        xtype : 'user-education-grid'
    }]
});
