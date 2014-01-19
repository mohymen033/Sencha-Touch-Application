Ext.define('MyApp.view.TabpanelList', {
	extend: 'Ext.tab.Panel',
	xtype:'tabpanellist',
	id:'tabpanellist',
	requires:['MyApp.view.Gmap','MyApp.view.form.Reportforms','Ext.Toolbar','MyApp.view.form.User',
	'MyApp.view.Video','MyApp.view.form.UserAdministration','MyApp.view.ReportListComment','MyApp.view.AssignedReportList','MyApp.view.form.UpdateReportStatus','MyApp.view.ReportList'],
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
			docked: 'bottom',
			scrollable: {
				direction: 'horizontal',
				indicators: false
			}
		},
		
		items: [
				  {title:'home', 
				  cls: 'home',
				  iconCls: 'home'  ,
				 
				  items:[
					Ext.create('Ext.TabPanel', {
    fullscreen: false,
    //tabBarPosition: 'top',
	id:'TabHome',
    defaults: {
        styleHtmlContent: true
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
  height:'100%',
 width:'100%',
    items: [
        {
            title: 'Application Over View',
            scrollable: {
				direction: 'vertical',
				indicators: false
			},
            html: '<p>The TabPanel provides a familiar tabbed interface that enables you to switch between different panels. It comes in two distinct flavours. When the tab bar is top-docked, each tab takes on the appearance of a button with a text label. But if you dock the tab bar to the bottom, then each tab button can be assigned an icon, as well as a text label. The icons are styled with an active and inactive state, which has a native look and feel.</p>'
        },
      	{
		title: 'Video Tutorial',
		
	   /* xclass:'MyApp.view.Video',
	   width:'300px',
	   height:'200px' */
		
	
			xtype: 'video',
            
			url: ['../video/BigBuck.m4v', '../video/BigBuck.webm'],
			loop: false,
			posterUrl: '../video/cover.jpg'//,
			
	   
		
	}/* ,
	{
		title:'List',
		
		height:'50%',
		width:'50%',
		 xtype:'list',
		
		//height:'50%',
		//itemTpl: '<div class="contact">{UserRoleName}</div>',
		itemTpl: '<div class="contact2"><strong>{Id}</strong></div>',
		store:Ext.create('Ext.data.Store', {
   
      id: 'ListStore',
    model: Ext.define('Contact', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['Id']
    }
}),
    grouper: function(record) {
        return record.get('Id')[0];
    } ,
	
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
}), //new MyApp.store.RoleListStore(),
		 listeners:{
	 itemtap: function(field,index,target,record){
			alert('fgfg');
			console.log(record);
			console.log(record.get('UserRoleName'));
		}, 
		
		} 
		onItemDisclosure: function(record, btn, index){
		alert('fgfg');
		}
		
		
	} */
    ]
})]
				  },
							 
						
				
				 {
				title    : 'Report',
				Id:'tabHome1',				
				cls      : 'maps',
				iconCls: 'maps',
				items:[{
				xtype: 'toolbar',
				//width:'600px',
				height:'100%',
				layout:'vbox',
				docked: 'top',
				ui: 'gray',
				items: (Ext.os.deviceType === 'Phone') ? [
					 {
					id:'searchtextfield',
					html:' <input id="searchTextField" type="text" style="width: 100%" placeholder="Enter a location" autocomplete="on">'
					
				
					}
				] : [
														
					{
					id:'searchtextfield',
					html:' <input id="searchTextField" type="text" size="100" placeholder="Enter a location" autocomplete="on">',
														
					}	
			 ]
					
				
				
			},			
			{
					xtype:'gmap',
					id:'gmap1',
					height:'100%',
					//height:'300px',
					width:'100%'
					}
			],
			listeners: {
					activate: function(tab){
						//alert('sdsdsdsds');
						
						
							console.log(Ext.getCmp('gmap1'));
								var map=Ext.getCmp('gmap1');
								var map2=map._map;
							
							console.log(map2);
							
							var input = document.getElementById('searchTextField');
		var autocomplete = new google.maps.places.Autocomplete(input);

		autocomplete.bindTo('bounds', map2);

		var infowindow = new google.maps.InfoWindow();
		var marker = new google.maps.Marker({
		  map: map2
		});

		new google.maps.event.addListener(autocomplete, 'place_changed', function() {
		
		//alert('gfgfg');
		  infowindow.close();
		  var place = autocomplete.getPlace();
		  if (place.geometry.viewport) {
		   
		   map2.setCenter(place.geometry.location);
			map2.fitBounds(place.geometry.viewport);
			
			
			/* map2.fitBounds(place.geometry.viewport);
			console.log(place.geometry.viewport); */
			
			/* var marker = new google.maps.Marker({
				position: new google.maps.LatLng(56.5, 14.5),
				map: map2
				
				}); */
				
		  } else {
		 
			map2.setCenter(place.geometry.location);
			console.log(place.geometry.location);
			map2.setZoom(17);  // Why 17? Because it looks good.
			
				/* var marker = new google.maps.Marker({
				position: new google.maps.LatLng(place.geometry.location.$a, place.geometry.location.ab),
				map: map2
				
				}); */
				
		  }});
		 
		 
		
   
		 
					}
					
					}
			},
								
			
			{
				title    : 'Assigned Report',
				//html     : 'Report Assigned',
				iconCls  : 'favorites',
				cls      : 'card card2',
				xtype:'reportlist',id:'reportlist',
				listeners: {
					activate: function(tabbar, tab, card){
					 
					 localStorage.setItem("start_list",0);					 
					 var x=Ext.getCmp('reportlist') || new MyApp.view.ReportList();
					 x._items.items[1]._store.load();
					 x.show();
					 
					}
				}
				
			},
			 {
				title    : 'Report Comment',
				//html     : '<p>Docking tabs to the bottom will automatically change their style. The tabs below are ui="light", though the standard type is dark. Badges (like the 4 below) can be added by setting <code>badgeText</code> when creating a tab/card or by using <code>setBadge()</code> on the tab later.</p>',
				iconCls  : 'info',
				cls      : 'card card1' ,
				
				xtype:'reportlistcomment',id:'reportlistcomment' ,
				listeners: {
					activate: function(tabbar, tab, card){
					 
					// Ext.getCmp('assignedreportlist').hide();
					 //Ext.getCmp('reportstatus').show();
					 //Ext.getCmp('usermenupulation').show();
					 
					 var x=Ext.getCmp('reportlistcomment') || new MyApp.view.ReportListComment();
						x._items.items[1]._store.load();
						x.show();
					 
					}
				} 
					
			},
			{
				title    : ' Administration',
				//html     : 'Settings Card',
				cls      : 'card card4',
				iconCls  : 'settings',
				
				items:[{xtype:'button',buttonAlign: 'center',id:'usermenupulation',name:'usermenupulation',text:'User Administration',ui:'round',
				handler: function() {
				
				var userform=Ext.getCmp('useradministration') || new MyApp.view.form.UserAdministration();
				userform._items.items[0]._items.items[0]._store.load();
				userform._items.items[0]._items.items[1]._store.load();
				userform.show();
				//console.log(userform._items.items[0]._items.items[0]._store.load);
				}
				},
				{xtype:'button',buttonAlign: 'center',id:'reportstatus',name:'reportstatus',text:'Report Status Change',ui:'round',
				handler: function() {
				
				//var userform=Ext.getCmp('useradministration')|| new MyApp.view.form.UserAdministration();
				//userform.show();
				//Ext.getCmp('assignedreportlist').show();
				//localStorage.getItem("Loginname");
			
				Ext.getCmp('reportstatus').hide();
							
				if (localStorage.getItem("UserroleName")=="SuperAdmin")
				{
					Ext.getCmp('usermenupulation').hide();
				}
				var x=Ext.getCmp('assignedreportlist') || new MyApp.view.AssignedReportList();
				console.log(x);
				x._items.items[1]._items.items[0]._store._proxy._extraParams.loginName=localStorage.getItem("Loginname");
				x._items.items[1]._items.items[0]._store._proxy._extraParams.start=0;
			    x._items.items[1]._items.items[0]._store.load();
				x.show();
				}
				},
				{xtype:'assignedreportlist',id:'assignedreportlist',height:'100%'}
				],
				listeners: {
					activate: function(tabbar, tab, card){
					
					Ext.Viewport.add(Ext.getCmp('assignedreportlist')).show();
					 
					 Ext.getCmp('assignedreportlist').hide();
					 Ext.getCmp('reportstatus').show();
					 
					 if (localStorage.getItem("UserroleName")=="SuperAdmin")
				{
					Ext.getCmp('usermenupulation').show();
				}
					 
					 //Ext.getCmp('usermenupulation').hide();
					 
					 //x.show();
					 
					}
				}
				
			},
			
			
			{
				title    : 'User Settings',
				
				cls      : 'card card5',
				iconCls  : 'user',
				items:[{xtype:'button',id:'passwordchnage',name:'passwordchnage',text:'Change Password',ui:'round'},
				{xtype:'button',id:'profilechnage',name:'profilechnage',text:'Change Profile',ui:'round'}],
				listeners: {
					activate: function(tabbar, tab, card){
					Ext.getCmp('profilechnage').hide();
					}
					
					}
			},
				
			{
				title: 'Log Out',
				text:'Log Out',
				iconCls: 'info',
				style:'margin: 0px 10px 20px 100px;',
				listeners: {
					activate: function(tabbar, tab, card){
					  
					  
						localStorage.setItem("Loginname","");
											
						localStorage.setItem("hidelogin", "false");//for show login again
						

											   // Remove the "active" class from all tabs
   var tabsArray = Ext.ComponentQuery.query('.tab');
   console.log(tabsArray);
   for (var i = 0; i < tabsArray.length; i++)
		 tabsArray[i].removeCls('x-tab-active');
 //tab.removeCls('x-tab-active');


 
   // Set the current tab
   tab.addCls('x-tab-active');
   

  location.reload();
  
					
						
						  //}
						  
						  
						
						
					}
				}
			}
			
			
		]
		
		
	}
	
});
