Ext.define('MyApp.store.RoleListStore', {
    extend  : 'Ext.data.Store',
	 storeId:'RoleListStore',
    requires:['MyApp.model.RoleListStore'],
    config: {
        model: 'MyApp.model.RoleListStore',
      

       sorters: 'UserRoleName',
   /*  grouper: function(record) {
        return record.get('UserRoleName')[0];
    } ,*/
	
    proxy: {
        type: 'ajax',
        url :'http://192.168.86.33/WebApplicationNormal/RoleList.ashx',
		
              
        reader: {
            type: 'json',
            rootProperty: ''
        }
    },
    autoLoad: true
    }
});