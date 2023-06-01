
Ext.define('MyApp.view.hr.user.tab.detail.form.UserDetailForm',{
    extend: 'Ext.form.Panel',
    alias : 'widget.user-detail-form',
    requires: [
        'Ext.button.Button',
        'Ext.data.Store',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json',
        'Ext.form.FieldContainer',
        'Ext.form.FieldSet',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Text',
        'Ext.layout.container.HBox',
        'Ext.layout.container.VBox',
        'MyApp.view.hr.user.tab.detail.form.UserDetailFormController',
        'MyApp.view.widget.CodeCombo'
    ],

    controller: 'user-detail-form',
    layout : {
        type : 'vbox',
        align :'stretch'
    },

    bodyPadding : '20 0 10 10',
    defaults : {
        margin : '0 20 10 10'
    },

    items : [{
        xtype : 'fieldset',
        title : '계좌정보',
        layout : {
            type : 'hbox',
            align : 'stretch'
        },
        bodyPadding : '20 0 10 10',
        defaults:{
            flex : 1,
            labelWidth : 80,
            margin : '0 20 10 10'
        },
        items : [{
            xtype : 'code-combo',
            fieldLabel : '은행',
            name : 'bankCode',
            codeGroup : 'BANK_CODE',
        },{
            xtype : 'textfield',
            name : 'bankAccount',
            fieldLabel: '계좌'
        },{
            xtype : 'textfield',
            fieldLabel: '예금주',
            name : 'ownerName'
        }]
    },{
        xtype : 'fieldset',
        title : '주소정보',
        layout : {
            type : 'hbox',
            align : 'stretch'
        },
        bodyPadding : '20 0 10 10',
        defaults:{
            flex : 1,
            labelWidth : 80,
            margin : '0 20 10 10'
        },
        items : [{
            xtype : 'fieldcontainer',
            fieldLabel: '우편번호',
            layout : {
                type : 'hbox',
                align : 'stretch'
            },
            items : [{
                xtype : 'textfield',
                name : 'zipcode',
                flex : 1,
            },{
                xtype : 'button',
                margin : '0 10 0 10',
                text : '우편번호 찾기'
            }]
        },{
            xtype : 'fieldcontainer',
            labelWidth : 80,
            fieldLabel: '주소',
            flex : 2,
            layout : {
                type : 'hbox',
                align : 'stretch'
            },
            items : [{
                xtype : 'textfield',
                margin : '0 10 0 0',
                name : 'address1',
                flex : 1,
            },{
                xtype : 'textfield',
                name : 'address2',
                flex : 1,
            }]
        }]
    }]
});
