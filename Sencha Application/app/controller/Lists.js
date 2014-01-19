/**
 * Controls the list of committees for a Legislator
 */
Ext.define('MyApp.controller.Lists', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.MessageBox'],

    config: {
        control: {
            '#nestedlist': {
                leafitemtap: 'onLeafTap'
            }
        }
    },

    onLeafTap: function(me, list, index, item) {
                 	console.log(item);
					console.log(list.getStore().getAt(index));
					alert('dfdfcvcvcv');
                }
});
