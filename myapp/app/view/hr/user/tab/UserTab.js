
Ext.define('MyApp.view.hr.user.tab.UserTab',{
    extend: 'Ext.tab.Panel',
    alias : 'widget.user-tab',
    requires: [
        'MyApp.view.hr.user.tab.UserTabController',
        'MyApp.view.hr.user.tab.career.UserCareerTab',
        'MyApp.view.hr.user.tab.detail.UserDetailTab',
        'MyApp.view.hr.user.tab.education.UserEducationTab'
    ],
    deferredRender : false,
    controller: 'user-tab',
    items : [{
        title : '상세정보',
        xtype : 'user-detail-tab'
    },{
        title : '경력정보',
        xtype : 'user-career-tab'
    },{
        title : '학력정보',
        xtype : 'user-education-tab'
    }]
});
