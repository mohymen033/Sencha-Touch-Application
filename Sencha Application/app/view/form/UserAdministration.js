Ext.define('MyApp.view.form.UserAdministration', {
    extend: 'Ext.form.Panel',
    xtype:'useradministration',
	id:'useradministration',
	
    requires: [
        'Ext.form.Panel',
        'Ext.form.FieldSet',
        'Ext.field.Number',
        'Ext.field.Spinner',
        'Ext.field.Password',
        'Ext.field.Email',
        'Ext.field.Url',
        'Ext.field.DatePicker',
        'Ext.field.Select',
        'Ext.field.Hidden',
        'Ext.field.Radio',
        'Ext.field.Slider',
        'Ext.field.Toggle',
        'Ext.field.Search'
        
    ],

    config: {
	fullscreen:true,
	//layout:'fit',
	//height:'600px',
	//width:'500px',
	//style:"margin: 1px 10px 10px 300px",
   // modal:true,
			
			
			//standardSubmit:true,
			method:'post',
            items: [
                {
                    xtype: 'fieldset',
					id:'fieldset',
					title: 'User Administration Form',
                    instructions: 'Please enter the information above.',
                    defaults: {
                        required  : true,
                        labelAlign: 'center',
                        labelWidth: '35%'
						
                    },
					
					items: [
                     
						{
						
                            xtype: 'selectfield',
							
							label: 'User List',
							name:'UserList',
                            store: 'UserListStore',   //this will be for poi type
							displayField: 'UserName', 		
							valueField: 'UserName',
							labelWidth:'60%'
							
					   },
					   {
						
                            xtype: 'selectfield',
							label: 'Role List',
							name:'RoleList',
                            store: 'RoleListStore',   //this will be for poi type
							displayField: 'UserRoleName', 		
							valueField: 'UserRoleName',
							labelWidth:'60%'
							
					   },
					    {
						
                            xtype: 'selectfield',
							name:'ActiveDeactive',
							label: 'Activate/Deactivate',
							options: [
								{text: 'Activate',  value: 'ACTIVATED'},
								{text: 'Deactivate', value: 'DEACTIVATED'}
								
							]
							
					   }
					
					]
					 
					},					
					{
					
                    xtype: 'toolbar',
                    docked: 'bottom',
					id:'toolbar',
					//layout:'fit',
					//style:"margin: 0px 0px 200px 10px",
					
                    items: [
                       
                       	 {xtype: 'spacer'},
                        {
                            text: 'Exit',
							ui: 'round',
							id:'adminexit'
                        },
						                      
                        {
                            text: 'Save',
                            ui: 'confirm',
							id:'adminsave'	
                      },
					   {xtype: 'spacer'}
                    ]
                }
            ]

  


  }
	
});



			
															
	
	
	