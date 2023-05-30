
Ext.define('MyApp.view.hr.user.grid.UserGrid',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.user-grid',
    requires: [
        'MyApp.view.hr.user.grid.UserGridController',
    ],

    controller: 'user-grid',
    html: 'Hello, World!!'
});
