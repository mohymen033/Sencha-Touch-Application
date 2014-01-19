Ext.require('Ext.data.TreeStore', function(TreeStore) {

Ext.define('MyApp.view.NestedList', {
    requires: ['MyApp.model.Cars'],
    extend: 'Ext.Panel',
	xtype:'nestedlist1',
	id:'nestedlist1',
    config: {
        layout: 'fit',
	   //centered:true,
	   //height:'500px',
	  //width:'500px',
		modal:true,
        items: [{
            xtype: 'nestedlist',
			id:'nestedlist',
			
            store: {
                type: 'tree',
                id: 'NestedListStore',
                model: 'MyApp.model.Cars',
                root: {},
                proxy: {
                    type: 'ajax',
                    url: 'carregions.json'
                },
				autoload:true
            },
            displayField: 'text',
            listeners: {
                leafitemtap: function(me, list, index, item) {
				window.open('http://192.168.86.33/sencha_myapp/app/disqus.html?Id=1&Latitude=56.0&Longitude=14.0');
                 	console.log(item);
					//console.log(list.getStore().getAt(index));
					//alert('dfdf');
					//Ext.getCmp('list1').hide();
                }
            }
        }
		]
    }
});

});
