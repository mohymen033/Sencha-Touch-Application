Ext.define('MyApp.store.Reporttype', {
    extend  : 'Ext.data.Store',
    requires:['MyApp.model.Reporttype'],
    config: {
        model: 'MyApp.model.Reporttype',
       

        proxy: {
            type: 'ajax',
            url:'reporttype.json',
			
            reader: {
                type: 'json'
            }
        },
		 autoLoad: true
    }
});
