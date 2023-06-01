Ext.define('MyApp.view.hr.user.form.UserFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user-form',

    onBtnNew: function (button) {

        var content = this.getView().up('user-management');

        content.down('user-grid').getSelectionModel().deselectAll();
        content.down('user-form').reset();

        //UserTab
        content.down('user-detail-form').reset();
        content.down('user-career-grid').getStore().removeAll();
        content.down('user-education-grid').getStore().removeAll();

    },
    onBtnSave : function(button){
        var content = this.getView().up('user-management');

        var rec = content.down('user-grid').getSelectionModel().getSelection()[0];

        var userIdx = null;

        if(rec){
            userIdx = rec.get('userIdx');
        }

        var userForm = content.down('user-form');
        var userDetailForm = content.down('user-detail-form');

        if(!userForm.isValid()){
            Ext.Msg.alert('확인','입력된 데이터중 오류가 존재합니다.');
            return;
        }
        if(!userDetailForm.isValid()){
            Ext.Msg.alert('확인','입력된 데이터중 오류가 존재합니다.');
            return;
        }
        var data = Ext.apply(userForm.getValues(),userDetailForm.getValues());

        debugger;
        if(userIdx){
            //수정일때로직

            Ext.Msg.confirm('확인','수정하시겠습니까?',function(btn){

                if(btn=='yes'){

                    Ext.Ajax.request({
                        url : 'userUpdate',
                        method : 'PUT',
                        params : data
                    })

                }
            });

        }else{
            Ext.Msg.confirm('확인','추가하시겠습니까?',function(btn){

                if(btn=='yes'){

                    Ext.Ajax.request({
                        url : 'userInsert',
                        method : 'POST',
                        params : data
                    })

                }

            });



        }




    }
});
