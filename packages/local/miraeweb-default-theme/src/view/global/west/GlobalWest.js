
Ext.define('MiraewebTheme.view.global.west.GlobalWest',{
    extend: 'Ext.tree.Panel',
    alias : 'widget.global-west',
    requires: [
        'MiraewebTheme.store.Navigation',
        'MiraewebTheme.view.global.west.GlobalWestController'
    ],
    store : 'Navigation',
    rootVisible : false,
    controller: 'global-west',
    title : '인사정보',
});
