Ext.define('MyApp.store.UserListStore', {
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
        url : 'http://192.168.86.33/WebApplicationNormal/UserList.ashx',
		
               
        reader: {
            type: 'json',
            rootProperty: ''
        }
    },
    autoLoad: false
    }
});