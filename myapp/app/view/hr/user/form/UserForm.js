
Ext.define('MyApp.view.hr.user.form.UserForm',{
    extend: 'Ext.panel.Panel',
    alias : 'widget.user-form',
    requires: [
        'MyApp.view.hr.user.form.UserFormController',
    ],

    controller: 'user-form',
    html: 'Hello, World!!'
});
