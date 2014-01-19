Ext.define('MyApp.store.Poitype', {
    extend  : 'Ext.data.Store',
	 storeId:'PoitypeListStore',
    requires:['MyApp.model.Poitype'],
    config: {
        model: 'MyApp.model.Poitype',
      

       sorters: 'Poitypename',
   /*  grouper: function(record) {
        return record.get('UserRoleName1')[0];
    } ,*/
	
    proxy: {
        type: 'ajax',
        url :'rolelist1.json', //'http://192.168.86.33/WebApplicationNormal/RoleList.ashx',
		
              
        reader: {
            type: 'json',
            rootProperty: ''
        }
    },
    autoLoad: true
    }
});