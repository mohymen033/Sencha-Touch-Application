Ext.define('MyApp.view.Main', {
    extend: 'Ext.Container',
    xtype: 'mainview',
	
    requires: [
        'MyApp.view.TabpanelList' 
	
    ],

    config: {
        fullscreen: false,
        layout: 'fit',
        items: [
            {
                xtype : 'tabpanellist'
				
				
            }     /*  ,
			{
				title:'Loginform',
				xtype:'loginforms'
				}     */
			
        ]
    }
});
