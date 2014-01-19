Ext.define('MyApp.view.Video', {
    extend: 'Ext.Container',
	xtype:'videos',
	id:'videos',
    requires: [
        'Ext.Video'
    ],
    config: {
       // layout: 'fit',
		//width:'150px',
		//height:'150px',
		//fullscreen:true,
        items: [{
            xtype: 'video',
            url: ['../video/BigBuck.m4v', '../video/BigBuck.webm'],
            loop: false,
			posterUrl: '../video/cover.jpg'
        }]
    }
});
