
Ext.define('MyApp.view.hr.user.form.UserForm',{
    extend: 'Ext.form.Panel',
    alias : 'widget.user-form',
    requires: [
        'Ext.data.Store',
        'Ext.form.FieldContainer',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.form.field.Radio',
        'Ext.form.field.Text',
        'Ext.layout.container.Column',
        'Ext.layout.container.HBox',
        'MyApp.view.hr.user.form.UserFormController'
    ],
    layout : 'column',
    controller: 'user-form',
    bodyPadding : '20 0 10 10',
    defaults : {
        columnWidth : 0.333,
        labelWidth : 80,
        allowBlank : false,
        margin : '0 20 10 10'
    },
    items : [{
        xtype : 'textfield',
        blankText : '아이디를 입력해 주세요',
        fieldLabel : '아이디'
    },{
        xtype : 'textfield',
        fieldLabel : '성명'
    },{
        xtype : 'fieldcontainer',
        fieldLabel : '성별',
        layout : {
            type : 'hbox'
        },
        items : [{
            xtype : 'radio',
            boxLabel : '남',
            flex : 1,
            name : 'genderCode',
            inputValue : 'MALE'
        },{
            xtype : 'radio',
            boxLabel : '여',
            flex : 1,
            name : 'genderCode',
            inputValue : 'FEMALE'
        },]
    },{
        xtype : 'datefield',
        format : 'Y-m-d',
        altFormats: 'Y-m-d|Ymd|Y.m.d',
        submitFormat : 'Ymd',
        fieldLabel : '생년월일'
    },{
        xtype : 'textfield',
        fieldLabel : '핸드폰'
    },{
        xtype : 'textfield',
        fieldLabel : '이메일',
        blankText : '이메일을 입력해 주세요',
        vtype :'email',
        vtypeText : '이메일 양식이 잘못되었습니다'
    },{
        xtype : 'combobox',
        fieldLabel : '부서',
        queryMode : 'local',
        store : Ext.create('Ext.data.Store',{
            data :[
                {code:'deptCode', codeName : '부서'}
            ]
        }),
        valueField: 'code',
        displayField : 'codeName',
    },{
        xtype : 'combobox',
        fieldLabel : '직급',
        queryMode : 'local',
        store : Ext.create('Ext.data.Store',{
            data :[
                {code:'rankCode', codeName : '직급'}
            ]
        }),
        valueField: 'code',
        displayField : 'codeName',

    },{
        xtype : 'textfield',
        allowBlank : true,
        fieldLabel : '사번'
    }]
});
