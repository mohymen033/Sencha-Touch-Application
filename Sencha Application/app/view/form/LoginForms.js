Ext.define('MyApp.view.form.LoginForms', {
    extend: 'Ext.form.Panel',
	//requires:['MyApp.view.form.Registerform'],
    xtype:'loginforms',
	id:'loginforms',
	
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
		dockedItems:[{
			xtype: 'toolbar',
			title: 'Login Form',
			ui: 'light',
			scroll: 'vertical'
		}],
	items: [{
		xtype: 'fieldset',
		id: 'loginfieldset',
		title: 'Login Form', 
		items: [{
			xtype: 'emailfield', 
			placeHolder: 'Username@mail.com',
			name: 'Username',
			label:'Email: ',					
			labelWidth: '40%',
			id: 'Username',
			required: true}
		,{
			xtype: 'passwordfield',
			placeHolder: 'Password',
			name: 'Password',
			id:'Password',
			label:'Password: ',
			labelWidth: '40%',
			required: true
		},
		{
			html:'</br><form><div id="recaptcha_div_login"></div></form>'
		},
		{
			
			xtype: 'emailfield', 
			name: 'lblMessage',
			label:'',					
			labelWidth: '0%',
			id: 'lblMessage',
			disabled:true,
			value:''
			//,style: "background:red;font-size: x-large;color: #666666; "
			
			
		},
		{
			xtype:'toolbar',
			id:'toolbar',
			layout:'vbox', //VERY IMPORTANT FOR RIGHT ALIGNMENT
			defaults : {
			flex : 2,
			},
			height:'100%',
			style: "background:white",
			items:[{
				xtype: 'button',
				text: 'Login',
				name:'login',				
				id:'Loginbutton',
				ui: 'confirm'
			},
				//{xtype:'spacer'},
					{xtype: 'button',
						text: 'Register',
						id:'registerbutton',
						ui: 'confirm'
					},
					//{xtype:'spacer'},
					{xtype: 'button',
						text: 'Report As Annonymous',
						id:'annonymousbutton',
						ui: 'confirm'
					},
					{xtype: 'button',
						text: 'Forget Password',
						id:'forgotpasswordbutton',
						ui: 'confirm'
					}
					]
				}
				
			]
			
		 }],
		listeners: {
						//at the time of show event recaptcha will be add 
						'show': function (thisComponent) {			
						Recaptcha.create("6LcHOc4SAAAAAAXtRGMPMJN3Ue_oYqthfY31tIHR", "recaptcha_div_login", {
											theme: "red",
											callback: Recaptcha.focus_response_field});
						}
					}  
					
  }
	
});



			
															
	
	
	