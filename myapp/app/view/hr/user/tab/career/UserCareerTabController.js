Ext.define('MyApp.view.hr.user.tab.career.UserCareerTabController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user-career-tab',
    onInsertMode : function(){
        this.getView().down('grid').getStore().removeAll();
    },
    onUpdateMode : function(){

        var grid = this.getView().down('grid');
        var userIdx = this.getView().lookupViewModel().get('userIdx');

        Ext.Ajax.request({
            url : 'resources/data/users/'+userIdx+'/careers.json',
            method : 'GET',
            success : function(response){

                var resObj = Ext.decode(response.responseText)
                grid.getStore().loadRawData(resObj.careers);
            }
        });
    }
});
