
Ext.define('MyApp.view.global.west.GlobalWest',{
    extend: 'Ext.tree.Panel',
    alias : 'widget.global-west',
    requires: [
        'MyApp.store.Navigation',
        'MyApp.view.global.west.GlobalWestController'
    ],
    store : 'Navigation',
    rootVisible : false,
    controller: 'global-west',
    title : '인사정보',
});
