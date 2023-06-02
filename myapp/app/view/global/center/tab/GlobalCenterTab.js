
Ext.define('MyApp.view.global.center.tab.GlobalCenterTab',{
    extend: 'Ext.tab.Panel',
    alias : 'widget.global-center-tab',
    requires: [
        'MyApp.view.global.center.tab.GlobalCenterTabController'
    ],

    controller: 'global-center-tab'
});
