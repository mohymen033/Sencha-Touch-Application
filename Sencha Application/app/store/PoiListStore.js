Ext.define('MyApp.store.PoiListStore', {
    extend  : 'Ext.data.Store',
	 storeId:'PoiListStore',
    requires:['MyApp.model.PoiListStore'],
    config: {
        model: 'MyApp.model.PoiListStore',
      

       sorters: 'PoitypeName',
   /*  grouper: function(record) {
        return record.get('PoitypeName')[0];
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