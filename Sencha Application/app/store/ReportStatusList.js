Ext.define('MyApp.store.ReportStatusList', {
    extend  : 'Ext.data.Store',
    requires:['MyApp.model.UserListStore'],
    config: {
        model: 'MyApp.model.UserListStore',
       

       sorters: 'UserName',
    grouper: function(record) {
        return record.get('UserName')[0];
    },
	
    proxy: {
        type: 'ajax',
        url : 'http://192.168.86.33/WebApplicationNormal/GetReportStatusList.ashx',
		extraParams:{
			status:'Closed1'
		},
               
        reader: {
            type: 'json',
            rootProperty: ''
        }
    },
    autoLoad: false
    }
});