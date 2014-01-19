Ext.define('MyApp.view.LoginForms', {
    extend: 'Ext.form.Panel',
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
						placeHolder: 'Username',
						name: 'Username',
						label:'User Name',					
						labelWidth: '40%',
						id: 'Username',
						required: true
						},
						{
						xtype: 'passwordfield',
						placeHolder: 'Password',
						name: 'Password',
						id:'Password',
						label:'Password',
						labelWidth: '40%',
						required: true
						},
						{
							
							html:'</br><form><div id="recaptcha_div"></div></form>'
							  
						},						
						{
						xtype: 'checkboxfield',
						id: 'RememberMe',
						name: 'RememberMe',
						label: 'Save login?',
						labelWidth: '40%',
						value:true,//This is the value by which checked and unchecked occured
						checked:true
						},
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
						ui: 'confirm',
						//style: 'display: inline; font-size: 18px; margin-top: 0px; margin-right: 0px; margin-bottom: 5px; margin-left: 10px; width: 180px;',
						handler: function() {
							
						alert('You are Logging as Annonymous user!!!' );
						//doLogin();
						
						Ext.getCmp('loginforms').reset();
						Ext.getCmp('loginforms').hide();
					}
					}
					
					]
				}
				
			]
			
		 }],
		listeners: {
						//at the time of show event recaptcha will be add 
						'show': function (thisComponent) {			
						Recaptcha.create("6LdC9c0SAAAAAERjCrgFsaf2Jv_gfhkHsCq3TZ1x", "recaptcha_div", {
											theme: "red",
											callback: Recaptcha.focus_response_field});
						}
					} 
					
  }
	
});



			
															
	
	
	