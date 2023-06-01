Ext.define('MyApp.view.hr.user.grid.UserGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user-grid',


    onSelect: function (rowmodel, record, index) {

        var thisView = this.getView();
        var content = thisView.up('user-management');
        var userForm = content.down('user-form');
        var userDetailForm = content.down('user-detail-form');
        userForm.getForm().loadRecord(record);
        userDetailForm.getForm().loadRecord(record);


    }

});
