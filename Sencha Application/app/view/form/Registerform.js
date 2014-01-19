Ext.define('MyApp.view.form.Registerform', {
    extend: 'Ext.form.Panel',
    xtype:'registerform',
	id:'registerform',
	
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
			
			url:'http://localhost/WebApplicationNormal/WebApplicationNormal/GetDataErrorPOI.ashx',
			//standardSubmit:true,
			method:'post',
            items: [
                {
                    xtype: 'fieldset',
					id:'fieldset',
					title: 'Registration form',
                    instructions: 'Please enter the information above.',
                    defaults: {
                        required  : true,
                        labelAlign: 'center',
                        labelWidth: '35%'
						
                    },
					
					items: [
                        {
                            xtype: 'textfield',
                            name : 'name',
                            label: 'Name:',
							id:'name',
							placeHolder:'User Name',
                            useClearIcon: true,
                            autoCapitalize : false,
							listeners: {
							change: function(field, newValue, oldValue) {
									 alert('Value changed');
								}
								}
                        },
						
								
						{
                            xtype: 'emailfield',
                            name : 'Email',
							id:'email',
                            label: 'Email Address:',
                            useClearIcon: true,
                            autoCapitalize : false,
							placeHolder: 'me@sencha.com',
							allowBlank:false
                        },
						{
                            xtype: 'passwordfield',
                            name : 'Password',
                            label: 'Password:',
							id:'password',
							placeHolder:'Password'
                        },
						{
                            xtype: 'passwordfield',
                            name : 'RePassword',
                            label: 'Retype Password:',
							id:'repassword',
							placeHolder:'Password'
                        },	
						{
								xtype: 'datepickerfield',
								label: 'Birth Date',
								name: 'birthday',
								value:new Date('12/12/2050')
						},								
						{
							
							html:'<form><div id="recaptcha_div_register"></div></form>'//,
							//id:'recaptcha'
							  
						},
						{
							html:'<div id="disqus_thread"></div>'
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
                            handler: function() {
								Ext.getCmp('registerform').reset();
								Ext.getCmp('registerform').hide();
								Ext.getCmp('loginforms').show();
								
                            }
                        },
						
                        {xtype: 'spacer'},
                        {
                            text: 'Reset',
                            handler: function() {
							
							    Ext.getCmp('registerform').reset();
								 
                            }
                        },
                        {
                            text: 'Save',
                            ui: 'confirm',
							
							
							handler: function() {
							alert('fdfd');
							var form=Ext.getCmp('registerform');
							//form1.hide();
						
											
							console.log(form);
							form.submit({
									//just demo
									url:'http://localhost/WebApplication1/abc.ashx',
                                    waitMsg : {message:'Submitting', cls : 'demos-loading'},
									success: function(e) {
										alert('elgfgfg');
									
									},
									failure:function(e)
									{
									alert('rgfg');
									console.log('full form');
									console.log(form);
								
								console.log(form._items.items[0].items.items[7].innerHtmlElement.dom.firstElementChild['recaptcha_response_field'].value);
								console.log(form._items.items[0].items.items[7].innerHtmlElement.dom.firstElementChild['recaptcha_challenge_field'].value);	
								var recaptcha_response_field=form._items.items[0].items.items[7].innerHtmlElement.dom.firstElementChild['recaptcha_response_field'].value;
								form._items.items[0].items.items[7].innerHtmlElement.dom.firstElementChild['recaptcha_response_field'].value=null;
								var recaptcha_challenge_field=form._items.items[0].items.items[7].innerHtmlElement.dom.firstElementChild['recaptcha_challenge_field'].value;
								
										var x=form.getValues();
										console.log(x);
										
										//console.log(x.Password);
										//console.log(x.Description);
										Ext.Ajax.request({
										url:'http://localhost/WebApplication1/GetErrorData.ashx',
										params: {Recaptcha_challenge_field:recaptcha_challenge_field,Recaptcha_response_field:recaptcha_response_field,Password:form.getValues().Password,Name:form.getValues().name,Url:form.getValues().url,Description:form.getValues().Description,Reportclassified:null},
										success: function(response, opts) {
										alert('fgfg');
										console.log('server-side success with status code hello success'+response.responseText);
										var obj = Ext.decode(response.responseText);
										console.dir(obj);
										if(obj=='false'){
										alert('Error in Captcha input');
										//Recaptcha.destroy();
										 Recaptcha.create("6LdC9c0SAAAAAERjCrgFsaf2Jv_gfhkHsCq3TZ1x", "recaptcha_div", {
											theme: "red",
											callback: Recaptcha.focus_response_field});
											//Ext.get('ext-tab-2').hide();
											 Ext.getCmp('registerform').reset();
										}
										else
										{
										alert('Succeed by passing to Ajax Request');
										//feedback or error form
										//var x=form.getValues();
										//console.log(x.Password);
										//Report Selection form
										//var y=formReportSelection.getValues();
										//console.log(y);
										//Report Classification form
										//var z=formRptClsType.getValues();
										//console.log(z.null);
										Recaptcha.create("6LdC9c0SAAAAAERjCrgFsaf2Jv_gfhkHsCq3TZ1x", "recaptcha_div", {
											theme: "red",
											callback: Recaptcha.focus_response_field});
											
											 Ext.getCmp('registerform').reset();
										}
										
									},
									failure: function(response, opts) {
									console.log('server-side failure with status code ' + response.status);
									alert('sdsdfailure');
									}
								}); 
														
							}
								
						});
							
						}							
                      }
                    ]
                }
            ],
			listeners: {
						//at the time of show event recaptcha will be add 
						'show': function (thisComponent) {			
						Recaptcha.create("6LdC9c0SAAAAAERjCrgFsaf2Jv_gfhkHsCq3TZ1x", "recaptcha_div_register", {
											theme: "red",
											callback: Recaptcha.focus_response_field});
						}
					}

  


  }
	
});



			
															
	
	
	