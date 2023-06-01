
Ext.define('MyApp.view.hr.user.grid.UserGrid',{
    extend: 'Ext.grid.Panel',
    alias : 'widget.user-grid',
    requires: [
        'Ext.button.Button',
        'Ext.form.field.Text',
        'Ext.grid.column.RowNumberer',
        'Ext.toolbar.Fill',
        'MyApp.view.hr.user.grid.UserGridController'
    ],

    controller: 'user-grid',
    tbar : [{
        xtype : 'textfield',
        fieldLabel : '검색조건'
    },{
        xtype : 'button',
        text : '조회'
    },{
        xtype : 'tbfill'
    },{
        xtype : 'button',
        text : '삭제'
    }],
    bind : '{userStore}',
    columns : [
        {xtype : 'rownumberer'},
        {text : '아이디', dataIndex:'userId'},
        {text : '성명', dataIndex:'userName'},
        {   text: '생년월일', dataIndex: 'birthDate',
            renderer: function (v) {
                return v.substr(0,4)+'-'+v.substr(4,2)+'-'+v.substr(6);

            }
        },
        {text : '성별', dataIndex:'genderCode',
            renderer : function(v){
                if(v=='MALE'){
                    return '남'
                }
                return '여';


        }},
        {text : '이메일', dataIndex:'email',flex:1},
    ],listeners : {
        select : 'onSelect'
    }
});
