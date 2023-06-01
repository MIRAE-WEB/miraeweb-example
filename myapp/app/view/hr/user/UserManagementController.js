Ext.define('MyApp.view.hr.user.UserManagementController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user-management',

    onInsertMode : function(){

        var content = this.getView();
        content.down('user-form').reset();

        content.lookupViewModel().set('userIdx',null);
        //UserTab
        content.down('user-tab').fireEvent('insert-mode');

    },
    onUpdateMode : function(){

        var content = this.getView();

        var userStore = content.lookupViewModel().get('userStore');
        var userIdx = content.lookupViewModel().get('userIdx');
        var record = userStore.findRecord('userIdx',userIdx);

        //userForm
        var userForm = content.down('user-form');
        userForm.getForm().loadRecord(record);


        //UserTab
        content.down('user-tab').fireEvent('update-mode');





    }
});
