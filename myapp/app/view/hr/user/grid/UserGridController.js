Ext.define('MyApp.view.hr.user.grid.UserGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user-grid',


    onSelect: function (rowmodel, record, index) {

        var userIdx = record.get('userIdx');
        var thisView = this.getView();
        var content = thisView.up('user-management');
        var userForm = content.down('user-form');
        var userDetailForm = content.down('user-detail-form');
        userForm.getForm().loadRecord(record);
        userDetailForm.getForm().loadRecord(record);

        var userCareerGrid = content.down('user-career-grid');
        var userEducationGrid = content.down('user-education-grid');

        Ext.Ajax.request({
            url : 'resources/data/users/'+userIdx+'/careers.json',
            method : 'GET',
            success : function(response){

                var resObj = Ext.decode(response.responseText)
                userCareerGrid.getStore().loadRawData(resObj.careers);
            }
        });

        Ext.Ajax.request({
            url : 'resources/data/users/'+userIdx+'/educations.json',
            method : 'GET',
            success : function(response){
                var resObj = Ext.decode(response.responseText);
                userEducationGrid.getStore().loadRawData(resObj.educations);
            }
        });

    }

});
