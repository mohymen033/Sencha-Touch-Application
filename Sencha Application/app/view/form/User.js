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
        'Ext.field.Search',
		
        
    ],

    config: {
	fullscreen:true,
	//layout:'fit',
	//height:'600px',
	//width:'500px',
	//style:"margin: 1px 10px 10px 300px",
   // modal:true,
			
			url:'http://localhost/WebApplicationNormal/WebApplicationNormal/GetDataErrorPOI.ashx',
			//standardSubmit:true,
			method:'post',
            items: [
                {
                    xtype: 'fieldset',
					id:'fieldset',
					title: 'Change Password',
                    instructions: 'Please enter the information above.',
                    defaults: {
                        required  : true,
                        labelAlign: 'center',
                        labelWidth: '35%'
						
                    },
					
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
                            label: 'New Password:',
							listeners: {
							  'blur':function(field,value){
						
								var formLogin=Ext.getCmp('userpasswordchangeform');//|| new MyApp.view.form.User();
								  var regex=/^[0-9a-zA-Z_.]+$/;
								   var regexfornumber=/^[0-9]+$/;
								  //var regexforother=/^[a-zA-Z_.]+$/;
								
								if(formLogin.getValues().NewPassword==null) field.focus();
								
								 if (formLogin.getValues().NewPassword.length < 6 || formLogin.getValues().NewPassword.length>30) {
								// alert('The Password is too short or big. It must be 5 characters or more but not more than 15 character.');
									formLogin.setValues({NewPassword:''});
									field.focus();
								 }
								else
								{
								
								if(regexfornumber.test(formLogin.getValues().NewPassword)) 
								{
								//alert('need minimum 1 alphabetic charater for password');
									formLogin.setValues({NewPassword:''});
									field.focus();
								}
								else{
								
							
								if(regex.test(formLogin.getValues().NewPassword)) {
								//alert('Ok');
								}
								else
								{
									//alert('Error in input');
									formLogin.setValues({NewPassword:''});
									field.focus();
								}
								
							}
						}
									
							
		
		}
                    }   

					}
						,
						{
                            xtype: 'passwordfield',
                            name : 'ConfirmPassword',
                            label: 'Confirm Password:',
							listeners: {
							  'blur':function(field,value){
						
								var formLogin=Ext.getCmp('userpasswordchangeform');//|| new MyApp.view.form.User();
								  var regex=/^[0-9a-zA-Z_.]+$/;
								   var regexfornumber=/^[0-9]+$/;
								  //var regexforother=/^[a-zA-Z_.]+$/;
								
								if(formLogin.getValues().ConfirmPassword==null) field.focus();
								
								 if (formLogin.getValues().ConfirmPassword.length < 6 || formLogin.getValues().ConfirmPassword.length>30) {
								// alert('The Password is too short or big. It must be 5 characters or more but not more than 15 character.');
									formLogin.setValues({ConfirmPassword:''});
									field.focus();
								 }
								else
								{
								
								if(regexfornumber.test(formLogin.getValues().ConfirmPassword)) 
								{
								//alert('need minimum 1 alphabetic charater for password');
									formLogin.setValues({ConfirmPassword:''});
									field.focus();
								}
								else{
								
							
								if(regex.test(formLogin.getValues().ConfirmPassword)) {
								//alert('Ok');
								}
								else
								{
									//alert('Error in input');
									formLogin.setValues({ConfirmPassword:''});
									field.focus();
								}
								
							}
						}
									
							
		
		}
                    } 
                        }
						,
						{
							
							html:'<form><div id="recaptcha_div_change_password"></div></form>',
							id:'recaptcha'
							  
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
							id:'changepasswordExit'/* ,
                            handler: function() {
								Ext.getCmp('userpasswordchangeform').reset();
								Ext.getCmp('userpasswordchangeform').hide();
								//Ext.getCmp('loginforms').show();
								
                            } */
                        },
						
                        {xtype: 'spacer'},
                        {
                            text: 'Reset',
							id:'changepasswordReset'/* ,
                            handler: function() {
							
							    Ext.getCmp('registerform').reset();
                            } */
                        },
                        {
                            text: 'Change',
                            ui: 'confirm',
							id:'changepasswordChange'						
                      }
                    ]
                }
            ],
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



			
															
	
	
	