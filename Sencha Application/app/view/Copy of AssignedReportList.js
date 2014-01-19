Ext.define('Contact1', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['Id']
    }
});



Ext.create('Ext.data.Store', {
   
      id: 'ListStore1',
    model: 'Contact1',
   grouper: function(record) {
        return record.get('Id')[0];
    },
	
    proxy: {
        type: 'ajax',
        url : 'http://192.168.86.33/WebApplicationNormal/GetAssignedReportData.ashx',
		
                extraParams: {
				loginName:localStorage.getItem("Loginname"),
                start:localStorage.getItem("start")
                },
        reader: {
            type: 'json',
            rootProperty: ''
        }
    },
    autoLoad: false
});



Ext.define('MyApp.view.AssignedReportList', {
id:'assignedreportlist',
xtype:'assignedreportlist',
    extend: 'Ext.tab.Panel',
	
    config: {
        activeItem: 0,
        tabBar: {
            docked: 'top',
            layout: {
                pack: 'center'
            },
			
			scrollable: {
                direction: 'vertical',
                indicators: false
            },
        },
		
        items: [
		 {
					
                    xtype: 'toolbar',
                    docked: 'top',
					id:'toolbarassignedcomment',
					//layout: 'hbox',
					//height:'90px',	
			scrollable: {
                direction: 'horizontal',
                indicators: false
					},					
                    items: [
					{xtype:'spacer'},
                       { xtype:'button',buttonAlign: 'left',id:'assingedreportlistclosebutton',name:'assingedreportlistclosebutton',text:'Close',ui:'round'},
					   
						
                        {
                            text: 'Previous<<',
                            handler: function() {
							 
							// alert(localStorage.getItem("Loginname"));
							var start=parseInt(localStorage.getItem("start"));
							console.log(start);
							//start=parseInt(start)+parseInt(50);
							//console.log(start);
							//var test=parseInt(localStorage.setItem("start",40));
							//console.log(test);
							if(start>=5)
							 {							
							var x=Ext.getCmp('assignedreportlist') || new MyApp.view.AssignedReportList();
						
							console.log(x);
							//console.log(x._items.items[1]._items.items[0]._store._proxy._extraParams.name);
							//console.log(x._items.items[0]._items.items[1]._store._proxy._extraParams.name);
							console.log(x._items.items[1]._items.items[0]._store._proxy._extraParams.start);
							//x._items.items[1]._items.items[0]._store._proxy._extraParams.name="B2603";
							//console.log(x._items.items[1]._items.items[0]._store._proxy._extraParams.name);
							
							
							x._items.items[1]._items.items[0]._store._proxy._extraParams.start=start-parseInt(5);
							console.log(x._items.items[1]._items.items[0]._store._proxy._extraParams.start);
							
							//localStorage.setItem("name","B2603");
							localStorage.setItem("start",start-parseInt(5));
							x._items.items[1]._items.items[0]._store._proxy._extraParams.loginName=localStorage.getItem("Loginname");
							x._items.items[1]._items.items[0]._store.load();
							x.show();
							// location.reload();
							
                            }
							
                            }
                        },
						
						 {
                            text: 'Next>>',
                            handler: function() {
						
												
							
							
							var start=parseInt(localStorage.getItem("start"));
							console.log(start);
							//start=parseInt(start)+parseInt(50);
							//console.log(start);
							//var test=parseInt(localStorage.setItem("start",40));
							//console.log(test);
							
							 							
							var x=Ext.getCmp('assignedreportlist') || new MyApp.view.AssignedReportList();
						
							console.log(x);
							//console.log(x._items.items[1]._items.items[0]._store._proxy._extraParams.name);
							//console.log(x._items.items[0]._items.items[1]._store._proxy._extraParams.name);
							console.log(x._items.items[1]._items.items[0]._store._proxy._extraParams.start);
							//x._items.items[1]._items.items[0]._store._proxy._extraParams.name="B2603";
							//console.log(x._items.items[1]._items.items[0]._store._proxy._extraParams.name);
							
							
							x._items.items[1]._items.items[0]._store._proxy._extraParams.start=start+parseInt(5);
							console.log(x._items.items[1]._items.items[0]._store._proxy._extraParams.start);
							
							//localStorage.setItem("name","B2603");
							localStorage.setItem("start",start+parseInt(5));
							x._items.items[1]._items.items[0]._store._proxy._extraParams.loginName=localStorage.getItem("Loginname");
							x._items.items[1]._items.items[0]._store.load();
							x.show();
							// location.reload();
							}
                        },
						{xtype:'spacer'}
						                       
                       					
                         
                    ]
                },

				
		{
		
            title: 'Report ID',
            layout: Ext.os.deviceType == 'Phone' ? 'fit' : {
                type: 'vbox',
                align: 'center',
                pack: 'center'
            },
			
            cls: 'demo-list',
			//height:'300px',
            items: [			
			{
                width: Ext.os.deviceType == 'Phone' ? null : 300,
                height: Ext.os.deviceType == 'Phone' ? null : 300,
                xtype: 'list',
				//id:'reportlistall',
				/*  listeners:{
				itemtap: function(record, btn, index){
				
				
				console.log(record);
                    Ext.Msg.alert('Tap', 'Disclose more info for ' + record.get('Id'), Ext.emptyFn);
					var x=Ext.getCmp('assignedreportforms') || new MyApp.view.form.AssignedReportforms();
					x.show();
					//Ext.getCmp('reportlist').hide();
					//window.open('http://192.168.86.33/sencha_myapp/app/disqus.html?Id=1&Latitude=56.0&Longitude=14.0');
                },
				 
				}  */
				
				onItemDisclosure: function(record, btn, index) {
				
				
				
				var x=Ext.getCmp('updatereportstatus') || new MyApp.view.form.UpdateReportStatus();
				
				Ext.Ajax.request({
		url:'http://192.168.86.33/WebApplicationNormal/GetAssignedReportInfromation.ashx',
		params: {Reportid:record.get('Id')},
		success: function(response, opts) {
		console.log(response.responseText);
		console.log('server-side success with status code hello success'+response.responseText);
		var obj = Ext.decode(response.responseText);
		console.dir(obj);
			console.dir(obj[0].poiName);
			x.setValues({ReportPointtype:""+obj[0].poiTypeName+""});
			x.setValues({reportpoiname:""+obj[0].poiName+""});
			console.log(Ext.getCmp('updatereportstatusmap'));
			var map=Ext.getCmp('updatereportstatusmap');
			
			var map2=map._map;
			
			console.log(map2.C.bc.xa);
			
			var obj1=map2.C.bc.xa
			
			for (var i in obj1) {
	
	
	 
	
		map2.C.bc.xa[obj1[i].__gm_id].setMap(null);
		
		
		
		
	 
	
	
}

			
			var poiLatitude=obj[0].poiLatitude;
			var poiLongitude=obj[0].poiLongitude;
			
			//console.log(place.geometry.location);
			  // Why 17? Because it looks good.
			
				var marker = new google.maps.Marker({
				position: new google.maps.LatLng(poiLatitude,poiLongitude),
				map: map2
				
				});
				
			map2.setCenter(new google.maps.LatLng(poiLatitude,poiLongitude));
			map2.setZoom(17);
			
			Ext.getCmp('assignedreportlist').hide();
			console.log(x);
			console.log(x._items.items[1]._items.items[2]._store._proxy._extraParams.status);
			x._items.items[1]._items.items[2]._store._proxy._extraParams.status=""+obj[0].poiReportStatus+"";
			x._items.items[1]._items.items[2]._store.load();
			
			x.setValues({reportIdhiddenforUpdatestatus:""+obj[0].poiReportId+""});
			x.show();
			console.log(x);
			console.log(x._items.items[1]._items.items[2]._store);
			
			
			
				
		},
		failure: function(response, opts) {
		console.log('server-side failure with status code ' + response.status);
		alert('Server-side failure code'+response.status);
		}
		}); 
		
				
				
				
					
				
					
                    Ext.Msg.alert('Tap', 'Disclose more info for ' + record.get('Id'), Ext.emptyFn);
                } 
				,
                store: 'ListStore1', 
				itemSelector: 'div.contact',
                itemTpl: '<div class="contact"><strong>{Id}</strong></div>'//,
               // grouped: false,
                //indexBar: false,
				
            }]
        }]
    }
});
