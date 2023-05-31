
Ext.define('MyApp.view.widget.CodeCombo',{
    extend: 'Ext.form.field.ComboBox',
    alias : 'widget.code-combo',

    requires: [
        'Ext.data.Store',
        'Ext.data.proxy.Ajax',
        'Ext.data.reader.Json'
    ],
    config : {
        codeGroup : null
    },
    initComponent : function(){
        var me = this;

        var codeGroup = me.codeGroup;
        var  store = Ext.create('Ext.data.Store',{
            autoLoad : true,
            proxy : {
                type : 'ajax',
                url : 'resources/data/system/code/group/'+codeGroup+'.json',

                reader : {
                    type : 'json',
                    rootProperty : codeGroup
                }
            },
        });
        Ext.apply(me,{
            queryMode : 'local',
            valueField: 'code',
            displayField : 'codeName',
            store : store
        })


        me.callParent(arguments);

    }
});
