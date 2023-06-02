Ext.define('MyApp.store.Navigation',{
    extend : 'Ext.data.TreeStore',
    storeId : 'Navigation',
    root: {
        expanded: true,
        children: [
            { text: 'detention', leaf: true },
            { text: 'homework', expanded: true, children: [
                    { text: 'book report', leaf: true },
                    { text: 'algebra', leaf: true}
                ] },
            { text: 'buy lottery tickets', leaf: true }
        ]
    },
    dataLoad : function(){

        var me = this;

        Ext.Ajax.request({
            url : 'resources/data/system/menu.json',
            method : 'GET',
            async : false,
            success : function(response){
                var resObj = Ext.decode(response.responseText);
                me.setRoot(resObj.menu)

            }
        })

    }
});