Ext.define('ContactforAssignedreport', {
    extend: 'Ext.data.Model',
    config: {
        fields: [{name: 'Id', type: 'string'},
				 {name: 'poiName',  type: 'string'},
				 {name: 'poiTypeName',       type: 'string'}]
    }
});



Ext.create('Ext.data.Store', {
   
      id: 'ListStoreforAssignedreport',
    model: 'ContactforAssignedreport',
   grouper: function(record) {
        return record.get('poiTypeName')[0];
    },
	
    proxy: {
        type: 'ajax',
        url : 'http://192.168.86.33/WebApplicationNormal/GetReportData.ashx',
		
                extraParams: {
				//loginName:localStorage.getItem("Loginname"),
                start:localStorage.getItem("start_list")
                },
        reader: {
            type: 'json',
            rootProperty: ''
        }
    },
    autoLoad: false
});



Ext.define('MyApp.view.ReportList', {
	extend: 'Ext.tab.Panel',
	xtype:'reportlist',
	id:'reportlist',
	
	config: {
		activeTab: 1,
		//height:'50%',
		//width:'50%',
		layout:// 'fit',
		{
			/* animation: {
				type: 'slide',
				duration: 250
			}, */
			defaults: {
				styleHtmlContent: true
			}
		},
		tabBar: {
			layout: {
				pack : 'center',
				//align: 'center'
			},
			docked: 'top',
			scrollable: {
				direction: 'horizontal',
				indicators: false
			}
		},
		items: [
		
		
					{
                    xtype: 'toolbar',
                    docked: 'top',
					id:'toolbarassigned',
					//layout: 'hbox',
					//height:'90px',	
			scrollable: {
                direction: 'horizontal',
                indicators: false
					},					
                    items: [
					{xtype:'spacer'},
                       
					   
						
                        {
                            text: 'Previous<<',
                            handler: function() {
							 
							 
							var start=parseInt(localStorage.getItem("start_list"));
							console.log(start);
							//start=parseInt(start)+parseInt(50);
							//console.log(start);
							//var test=parseInt(localStorage.setItem("start",40));
							//console.log(test);
							if(start>=5)
							 {							
							var x=Ext.getCmp('reportlist') || new MyApp.view.ReportList();
						
							console.log(x);
							
							console.log(x._items.items[1]._store._proxy._extraParams.start);
						
							
							
							x._items.items[1]._store._proxy._extraParams.start=start-parseInt(5);
							console.log(x._items.items[1]._store._proxy._extraParams.start);
							
						
							localStorage.setItem("start_list",start-parseInt(5));
							x._items.items[1]._store.load();
							x.show();
							
							
                            }
							
                            }
                        },
						
						 {
                            text: 'Next>>',
                            handler: function() {
						
												
							
							
							var start=parseInt(localStorage.getItem("start_list"));
							console.log(start);
							//start=parseInt(start)+parseInt(50);
							//console.log(start);
							//var test=parseInt(localStorage.setItem("start",40));
							//console.log(test);
							
							 							
							var x=Ext.getCmp('reportlist') || new MyApp.view.ReportList();
						
							console.log(x);
							
							console.log(x._items.items[1]._store._proxy._extraParams.start);
					
							
							x._items.items[1]._store._proxy._extraParams.start=start+parseInt(5);
							console.log(x._items.items[1]._store._proxy._extraParams.start);
							
							
							localStorage.setItem("start_list",start+parseInt(5));
							x._items.items[1]._store.load();
							x.show();
							
							}
                        },
						{xtype:'spacer'}
						                       
                       					
                         
                    ]
                },
		{
		title:'Report List',
		xtype:'list',
		itemTpl: '<div class="contactforAssignedreport"><strong>Report Id:{Id}</strong></br><strong>Point Id: {poiName}</strong></br><strong>Point Type: {poiTypeName}</strong></div>',
		grouped: true,
        indexBar: true, 
		store:'ListStoreforAssignedreport', 
		onItemDisclosure: function(record, btn, index) {
				
				
			var x=Ext.getCmp('assignedreportforms') || new MyApp.view.form.AssignedReportforms();
				
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
			console.log(Ext.getCmp('assignedmap'));
			var map=Ext.getCmp('assignedmap');
			
			var map2=map._map;
						
			console.log(map2.C.bc.xa);
			
			var obj1=map2.C.bc.xa
			
			for (var i in obj1) {
	
					map2.C.bc.xa[obj1[i].__gm_id].setMap(null);
	
				}

			
			 
			//console.log(place.geometry.location);
			  // Why 17? Because it looks good.
			  
				var poiLatitude=obj[0].poiLatitude;
				var poiLongitude=obj[0].poiLongitude;
			
			
				var marker = new google.maps.Marker({
				position: new google.maps.LatLng(poiLatitude,poiLongitude),
				map: map2
				
				});
				
			map2.setCenter(new google.maps.LatLng(poiLatitude,poiLongitude));
			map2.setZoom(17);
			x._items.items[1]._items.items[2]._store.load();
			x.setValues({reportIdhidden:""+obj[0].poiReportId+""});
			x.show();
			console.log(x);
			Ext.getCmp('reportlist').hide();
			
			
				
		},
		failure: function(response, opts) {
		console.log('server-side failure with status code ' + response.status);
		alert('Server-side failure code'+response.status);
		}
		});  
						
                    Ext.Msg.alert('Tap', 'Disclose more info for ' + record.get('Id'), Ext.emptyFn);
                }
		
		
		
	}		 
]
		
		
	}
	
});
