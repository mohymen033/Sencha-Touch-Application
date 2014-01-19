Ext.define('MyApp.model.Reporttype', {
    extend: 'Ext.data.Model',
    config: {
        fields: [
            {name: 'ReportPoiTypeId', type: 'string'},
			{name: 'ReportPoiTypeName', type: 'string'}
        ]
    }
});