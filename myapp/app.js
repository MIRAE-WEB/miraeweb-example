/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Ext.app.Application',
    name: 'MyApp',
    quickTips: false,
    platformConfig: {
        desktop: {
            quickTips: true
        }
    },

    requires: [
        // This will automatically load all classes in the MyApp namespace
        // so that application classes do not need to require each other.
        'MyApp.*'
    ],

    // The name of the initial view to create.
    //mainView: 'MyApp.view.hr.user.UserManagement',
    launch : function(){

        //로그인이 되었을때

        Ext.widget('global-main');

    }
});
