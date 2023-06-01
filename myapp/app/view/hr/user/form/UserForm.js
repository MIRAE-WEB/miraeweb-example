
Ext.define('MyApp.view.hr.user.form.UserForm',{
    extend: 'Ext.form.Panel',
    alias : 'widget.user-form',
    requires: [
        'Ext.button.Button',
        'Ext.data.Store',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.form.FieldContainer',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.form.field.Radio',
        'Ext.form.field.Text',
        'Ext.layout.container.Column',
        'Ext.layout.container.HBox',
        'Ext.toolbar.Fill',
        'MyApp.view.hr.user.form.UserFormController',
        'MyApp.view.widget.CodeCombo'
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
    tbar : [{
        xtype : 'tbfill'
    },{
        xtype : 'button',
        text : '신규',
        handler : 'onBtnNew'
    },{
        xtype : 'button',
        text : '저장',
        handler : 'onBtnSave'
    }],
    items : [{
        xtype : 'textfield',
        blankText : '아이디를 입력해 주세요',
        name : 'userId',
        fieldLabel : '아이디'
    },{
        xtype : 'textfield',
        name : 'userName',
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
        name : 'birthDate',
        format : 'Y-m-d',
        altFormats: 'Y-m-d|Ymd|Y.m.d',
        submitFormat : 'Ymd',
        fieldLabel : '생년월일'
    },{
        xtype : 'textfield',
        name : 'mobile',
        fieldLabel : '핸드폰'
    },{
        xtype : 'textfield',
        fieldLabel : '이메일',
        name : 'email',
        blankText : '이메일을 입력해 주세요',
        vtype :'email',
        vtypeText : '이메일 양식이 잘못되었습니다'
    },{
        xtype : 'code-combo',
        fieldLabel : '부서',
        name : 'deptCode',
        codeGroup : 'DEPT_CODE',
    },{
        xtype : 'code-combo',
        fieldLabel : '직급',
        name : 'rankCode',
        codeGroup : 'RANK_CODE',
    },{
        xtype : 'textfield',
        allowBlank : true,
        name : 'employeeNumber',
        fieldLabel : '사번'
    }]
});
