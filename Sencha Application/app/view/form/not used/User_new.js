Ext.define('MyApp.view.form.User', {
    extend: 'Ext.form.Panel',
	
    xtype:'userpasswordchangeform',
	id:'userpasswordchangeform',
	
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
	//layout:'fit',
	//hight:'100%',
	//width:'100%',
	fullscreen:true,
	type: 'vbox',
	dockedItems:[
		
	
			{
			xtype: 'toolbar',
			title: 'Login Form',
			ui: 'light',
			scroll: 'vertical'
			
			}],
			 items: [
		
			
			{
			xtype: 'fieldset',
			id: 'loginfieldset',
			title: 'Login Form', 
				
				items: [
						
					 
					 	{
                            xtype: 'emailfield',
                            name : 'Email',
                            label: 'Email Address:',
                            useClearIcon: true,
                            autoCapitalize : false,
							placeHolder: 'me@sencha.com',
							allowBlank:false
                        },
						{
                            xtype: 'passwordfield',
                            name : 'OldPassword',
                            label: 'Old Password:'
                        },
							
						{
                            xtype: 'passwordfield',
                            name : 'NewPassword',
                            label: 'New Password:'
                        }
						,
						{
                            xtype: 'passwordfield',
                            name : 'ConfirmPassword',
                            label: 'Confirm Password:'
                        },
						{
							
							html:'<form><div id="recaptcha_div_change_password"></div></form>',
							id:'recaptcha'
							  
						},
						
						
					 
					 
						/* {
						xtype: 'emailfield', 
						placeHolder: 'Username@mail.com',
						name: 'Username',
						label:'Email: ',					
						labelWidth: '40%',
						id: 'Username',
						required: true
						},
						{
						xtype: 'passwordfield',
						placeHolder: 'Password',
						name: 'Password',
						id:'Password',
						label:'Password: ',
						labelWidth: '40%',
						required: true
						} ,
						{
							
							html:'</br><form><div id="recaptcha_div_change_password"></div></form>'
							  
						} ,						
						{
						xtype: 'checkboxfield',
						id: 'RememberMe',
						name: 'RememberMe',
						label: 'Save login?',
						labelWidth: '40%',
						value:true,//This is the value by which checked and unchecked occured
						checked:true
						}, */
				{
				 xtype:'toolbar',
				 id:'toolbar',
				 layout:'vbox', //VERY IMPORTANT FOR RIGHT ALIGNMENT
				 defaults : {
					flex : 2
					},
					height:'100%',
				items:[
						{xtype: 'button',
						text: 'Login',
						name:'login',				
						id:'changepasswordExit',
						ui: 'confirm'
					},
					//{xtype:'spacer'},
					{xtype: 'button',
						text: 'Register',
						id:'changepasswordReset',
						ui: 'confirm'
					},
					//{xtype:'spacer'},
					{xtype: 'button',
						text: 'Report As Annonymous',
						id:'changepasswordChange',
						ui: 'confirm'
					}
					]
				}
				
			]
			
		 }],
		listeners: {
						//at the time of show event recaptcha will be add 
						'show': function (thisComponent) {			
						Recaptcha.create("6LcHOc4SAAAAAAXtRGMPMJN3Ue_oYqthfY31tIHR", "recaptcha_div_change_password", {
											theme: "red",
											callback: Recaptcha.focus_response_field});
						}
					}  
					
  }
	
});



			
															
	
	
	