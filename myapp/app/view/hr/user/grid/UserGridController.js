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

    },
    onBtnSearch : function(button){

        var content = this.getView().up('user-management');

        content.down('user-grid').getSelectionModel().deselectAll();
        content.down('user-form').reset();

        //UserTab
        content.down('user-detail-form').reset();
        content.down('user-career-grid').getStore().removeAll();
        content.down('user-education-grid').getStore().removeAll();

        this.getView().getStore().load();
    },
    onBtnDelete : function(button){
        var rec = this.getView().getSelectionModel().getSelection()[0];

        if(!rec){
            Ext.Msg.alert('확인','선택된 데이터가 없습니다.');
            return;
        }

        Ext.Msg.confirm('확인','삭제하시겠습니까?',function(btn){
            if(btn=='yes'){

                Ext.Ajax.request({
                    url : 'userDelete',
                    method : 'DELETE',
                    params : {
                        userIdx : rec.get('userIdx')
                    }
                })
            }

        });


    }

});
