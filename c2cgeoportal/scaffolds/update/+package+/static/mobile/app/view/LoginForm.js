Ext.define('App.view.LoginForm', {
    extend: 'Ext.form.Panel',
    xtype: 'loginformview',
    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.field.Password',
        'Ext.Button'
    ],
    fullscreen: true,
    config: {
        url: App.loginUrl,
        method: 'POST',
        standardSubmit: true,
        items: [{
            xtype: 'fieldset',
            defaults: {
                // labelWidth default is 35% and is too
                // small on small devices (e.g.g iPhone)
                labelWidth: '50%'
            },
            items: [{
                xtype: 'textfield',
                name: 'login',
                label: OpenLayers.i18n('loginLabel')
            }, {
                xtype: 'passwordfield',
                name: 'password',
                label: OpenLayers.i18n('passwordLabel')
            }]
        }, {
            xtype: 'button',
            text: OpenLayers.i18n('loginSubmitButtonText'),
            ui: 'confirm',
            action: 'login'
        }]
    }
});
