Ext.require('Ext.data.TreeStore', function(TreeStore) {

Ext.define('MyApp.view.NestedList', {
    requires: ['MyApp.model.Cars'],
    extend: 'Ext.Panel',
	xtype:'nestedlist1',
	id:'nestedlist1',
    config: {
        layout: 'fit',
		modal:true,
        items: [{
            xtype: 'nestedlist',
            store: {
                type: 'tree',
                id: 'NestedListStore',
                model: 'MyApp.model.Cars',
                root: {},
                proxy: {
                    type: 'ajax',
                    url: 'carregions.json'
                }
            },
            displayField: 'text',
            listeners: {
                leafitemtap: function(me, list, index, item) {
                 	console.log(item);
					console.log(list.getStore().getAt(index));
					alert('dfdf');
                }
            }
        }
		]
    }
});

});
