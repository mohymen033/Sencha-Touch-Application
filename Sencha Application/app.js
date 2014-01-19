Ext.Loader.setConfig({ enabled: true, 
disableCaching: false
});


Ext.application({
    name: 'MyApp',
	 models: [
	   'MyApp.model.Poitype',
       'MyApp.model.Reporttype',
	   'MyApp.model.UserListStore',
	   'MyApp.model.RoleListStore',
	   'MyApp.model.PoiListStore'
	   
	 
				],
		views: ['Main',
		'MyApp.view.form.LoginForms',
		'MyApp.view.form.User',
		//'MyApp.view.form.Registerform',
		'MyApp.view.form.Reportforms',
		//'MyApp.view.form.Poiforms',
		'MyApp.view.form.UserAdministration',
		'MyApp.view.form.AssignedReportforms'],
	
	controllers:[	'Login',
					'User',
					'Createreport',
					//'Poicreatereport'
					],
	   stores: 	[
					'MyApp.store.Poitype',
					'MyApp.store.Reporttype',
					'MyApp.store.UserListStore',
					'MyApp.store.RoleListStore',
					'MyApp.store.PoiListStore',
					'MyApp.store.ReportStatusList'

					],
    launch: function() {
	
	

	
	
	
	//localStorage.setItem("name","B26");
	localStorage.setItem("start",0);
    localStorage.setItem("start_list",0);
	
		var x=Ext.create('MyApp.view.Main');
         
		//x.show();
		
		//alert(localStorage.getItem("hidelogin"));
		
			var formPanel=Ext.getCmp('loginforms') || new MyApp.view.form.LoginForms();
							
			//Ext.Viewport.add(formPanel);
	if(localStorage.getItem("hidelogin")=="false")
	{
		//alert(localStorage.getItem("hidelogin"));
			formPanel.show();  
			x.show();
			
	}
	else
	{	
  	
		if (localStorage.getItem("UserroleName")=="")
		{
			Ext.getCmp('tabpanellist')._tabBar._items.items[2].hide();
			Ext.getCmp('tabpanellist')._tabBar._items.items[4].hide();
			Ext.getCmp('tabpanellist')._tabBar._items.items[5].hide();
		}
	else if (localStorage.getItem("UserroleName")=="Normal")
	{
	Ext.getCmp('tabpanellist')._tabBar._items.items[2].hide();
	Ext.getCmp('tabpanellist')._tabBar._items.items[4].hide();
	Ext.getCmp('tabpanellist')._tabBar._items.items[5].show();
	
	}
	else if(localStorage.getItem("UserroleName")=="Admin")
	{
	
	Ext.getCmp('tabpanellist')._tabBar._items.items[2].hide();
	Ext.getCmp('tabpanellist')._tabBar._items.items[4].show();
	Ext.getCmp('usermenupulation').hide();
	Ext.getCmp('tabpanellist')._tabBar._items.items[5].show();
	}
	else if(localStorage.getItem("UserroleName")=="SuperAdmin")
	{
		Ext.getCmp('tabpanellist')._tabBar._items.items[2].show();
		Ext.getCmp('tabpanellist')._tabBar._items.items[4].show();
		Ext.getCmp('usermenupulation').show();
		Ext.getCmp('tabpanellist')._tabBar._items.items[5].show();
	}
		
		
		//alert(localStorage.getItem("hidelogin"));
		x.show();
		
		
		
		//for hiding using logic admin/normal/superadmin
		
		//x._items.items[0]._tabBar._items.items[2].hide();
		//x._items.items[0]._tabBar._items.items[4].hide();
		//Ext.getCmp('usermenupulation').hide();
		
		formPanel.hide(); 
		
		
	}
				//var formPanel1=Ext.getCmp('registerform') || new MyApp.view.Registerform();
							
				//Ext.Viewport.add(formPanel);
						//formPanel1.show();  
							
 
				
							//This is for session 
						/* 	if(localStorage.getItem("loginstatus") != undefined) { 
								alert('fgfgf');
								if(localStorage.getItem("loginstatus") == "true") {

								// The variable exists and the value is true --> Skip Login panel    
									alert('dfd');
									formPanel.hide(); 
								}

						}
						else{
							formPanel.show(); 
						} */
						
						//also set timestamp
						/* if(timestamp+1hour is less than NOW) { 
							deny local login and serve login panel 
							} else { 
						continue 
						} */
				
				
							
    }
});