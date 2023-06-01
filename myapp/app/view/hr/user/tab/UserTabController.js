Ext.define('MyApp.view.hr.user.tab.UserTabController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user-tab',
    onInsertMode : function(){

        var tabItems = this.getView().items.items;

        for(var tabItem of tabItems){
            tabItem.fireEvent('insert-mode');
        }
    },

    onUpdateMode : function(){

        var tabItems = this.getView().items.items;

        for(var tabItem of tabItems){
            tabItem.fireEvent('update-mode');
        }
    }
});
