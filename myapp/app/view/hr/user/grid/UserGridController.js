Ext.define('MyApp.view.hr.user.grid.UserGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.user-grid',


    onSelect: function (rowmodel, record, index) {

        var userIdx = record.get('userIdx');
        var thisView = this.getView();

        var content = thisView.up('user-management');
        content.lookupViewModel().set('userIdx',record.get('userIdx'));
        content.fireEvent('update-mode');


    },
    onBtnSearch : function(button){

        var content = this.getView().up('user-management');
        content.fireEvent('insert-mode');

        this.getView().getStore().load();
    },
    onBtnDelete : function(button){

        var userIdx = this.getView().lookupViewModel().get('userIdx');

        if(!userIdx){
            Ext.Msg.alert('확인','선택된 데이터가 없습니다.');
            return;
        }

        Ext.Msg.confirm('확인','삭제하시겠습니까?',function(btn){
            if(btn=='yes'){

                Ext.Ajax.request({
                    url : 'userDelete',
                    method : 'DELETE',
                    params : {
                        userIdx : userIdx
                    }
                })
            }

        });


    }

});
