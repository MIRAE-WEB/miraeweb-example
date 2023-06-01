Ext.define('MyApp.view.hr.user.tab.detail.UserDetailTabController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user-detail-tab',
    onInsertMode : function(){
        this.getView().down('form').reset();
    },
    onUpdateMode : function(){
        var content = this.getView().up('user-management');


        var userStore = content.lookupViewModel().get('userStore');
        var userIdx = content.lookupViewModel().get('userIdx');
        var record = userStore.findRecord('userIdx',userIdx);

        var userDetailForm = content.down('user-detail-form');
        userDetailForm.getForm().loadRecord(record);
    }
});
