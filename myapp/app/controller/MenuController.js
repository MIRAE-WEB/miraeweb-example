Ext.define('MyApp.controller.MenuController',{
    extend : 'Ext.app.Controller',

    routes : {
        ':id' : {
            before  : 'onBeforeRoute',
            action  : 'handleRoute'
        }
    },
    refs: [{
        ref: 'globalWest',
        selector: 'global-west'
    },{
        ref: 'globalCenterTab',
        selector: 'global-center-tab'
    }],

    control: {
        'global-center-tab': {
            tabchange: 'onMenuTabChange'
        },
        'global-west':{
            beforeselect : 'onMenuBeforeSelect',
            select : 'onMenuSelect'
        }
    },
    onMenuTabChange: function(tabpanel,newCard,oldCard){
        var root = Ext.getStore('Navigation').getRoot();
        var findRec = root.findChild('widgetName',newCard.xtype,true);
        this.getGlobalWest().getSelectionModel().select(findRec);
    },
    onMenuBeforeSelect : function(rowModel,record,index){
        return !Ext.isEmpty(record.get('widgetName'));
    },
    onMenuSelect : function(rowmodel, record, index){
        this.redirectTo(record.get('widgetName'));
    },

    onBeforeRoute : function (id, action) {

        var root = Ext.getStore('Navigation').getRoot();

        var findRec = root.findChild('widgetName',id,true);

        if(findRec){
            action.resume();
        }else{
            action.stop();
        }
    },

    handleRoute : function (id) {
        var root = Ext.getStore('Navigation').getRoot();
        var findRec = root.findChild('widgetName',id,true);

        var title = findRec.get('text');
        var widgetName = findRec.get('widgetName');

        var globalCenterTab = this.getGlobalCenterTab();


        var widget = globalCenterTab.down(widgetName);

        if(!widget){
            widget = Ext.widget(widgetName,{
                title : title
            });
            globalCenterTab.add(widget);
        }
        globalCenterTab.setActiveTab(widget);

    }
});