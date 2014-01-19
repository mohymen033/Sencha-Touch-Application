Ext.require('Ext.data.TreeStore', function(TreeStore) {

Ext.define('MyApp.view.NestedList1', {
    requires: ['MyApp.model.Cars1'],
    extend: 'Ext.Panel',
	xtype:'nestedlist2',
	id:'nestedlist2',
    config: {
        layout: 'fit',
		modal:true,
        items: [{
            xtype: 'nestedlist',
            store: {
                type: 'tree',
                id: 'NestedListStore',
                model: 'MyApp.model.Cars1',
                root: {},
                proxy: {
                    type: 'rest',
			
         	url:'http://localhost/WebApplicationNormal/WebApplicationNormal/GetDatafromWCF.ashx',
						
			reader: {
                type: 'json',
                //root: 'Employees'
            }
                }
            },
            displayField: 'poiId',
            listeners: {
                itemtap: function(me, list, index, item) {
                 	console.log(item);
					console.log(list.getStore().getAt(index));
					alert('dfdfsdsd');
                }
            }
        }
		]
    }
});

});
