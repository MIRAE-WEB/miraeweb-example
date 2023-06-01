
Ext.define('MyApp.view.hr.user.tab.education.grid.UserEducationGrid',{
    extend: 'Ext.grid.Panel',
    alias : 'widget.user-education-grid',
    requires: [
        'Ext.grid.column.RowNumberer',
        'MyApp.view.hr.user.tab.education.grid.UserEducationGridController'
    ],
    bind : '{userEducationStore}',
    controller: 'user-education-grid',
    columns : [
        {xtype : 'rownumberer'},
        {text : '학교명', dataIndex:'institution'},
        {text : '전공', dataIndex:'userName'},
        {text: '학위', dataIndex: 'degreeCode'},
        {text : '재학상태', dataIndex:'graduationCode'},
        {text : '졸업년월', dataIndex:'yearOfGraduation',flex:1},
    ],
});
