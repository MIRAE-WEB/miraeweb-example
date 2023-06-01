
Ext.define('MyApp.view.hr.user.tab.career.grid.UserCareerGrid',{
    extend: 'Ext.grid.Panel',
    alias : 'widget.user-career-grid',
    requires: [
        'Ext.grid.column.RowNumberer',
        'MyApp.view.hr.user.tab.career.grid.UserCareerGridController'
    ],
    bind : '{userCareerStore}',
    controller: 'user-career-grid',
    columns : [
        {xtype : 'rownumberer'},
        {text : '회사명', dataIndex:'company'},
        {text : '재직상태', dataIndex:'employeeStateCode'},
        {   text: '직급', dataIndex: 'rank'},
        {text : '입사일', dataIndex:'careerStartDate'},

        {text : '퇴사일', dataIndex:'careerEndDate',flex:1},
    ],
});
