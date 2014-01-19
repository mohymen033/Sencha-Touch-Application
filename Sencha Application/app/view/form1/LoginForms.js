Ext.define('MyApp.view.form.LoginForms', {
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
	layout:'fit',
	
	
	dockedItems:[
			
	
			{
			xtype: 'toolbar',
			title: 'Login Form',
			ui: 'light'
			}],
			items: [
			
			{
			xtype: 'fieldset',
			id: 'loginfieldset',
			title: '',
				items: [
						
						{	xtype: 'image',
						src: 'phone-startup-screen.png',
						//left:50,
						width:500,
						height:300,
						style: 'font-size: 20px;margin-top: 0px; margin-right: 0px; margin-bottom: 15px; margin-left: 550px;',
						//flex:1,
						
						//left:100,
						html: [
                       
                        '<h1>Welcome to E-Reporting Service</h1>'
                        ].join("")
				},
						{
						xtype: 'emailfield',
						placeHolder: 'Username',
						name: 'Username',
						label:'User Name',
						labelWidth: '40%',
						id: 'Username',
						required: true,
						listeners:{
								change: function(field, value){
								
								
											
								  var formLogin=Ext.getCmp('loginforms');
								  var regex=/^[0-9a-zA-Z_.]+$/;
								  var regexfornumber=/^[0-9]+$/;
								  var regexforother=/^[a-zA-Z_.]+$/;
								
								if(formLogin.getValues().Username==null) field.focus();
								
								 if (formLogin.getValues().Username.length < 6 || formLogin.getValues().Username.length>15) {
								 alert('The Username is too short or big. It must be 5 characters or more but not more than 15 character.');
									formLogin.setValues({Username:''});
									field.focus();
								 }
								else
								{
								
								if(regexfornumber.test(formLogin.getValues().Username.substring(0, 1))) 
								{
								alert('Can not put number in first position or only number');
									formLogin.setValues({Username:''});
									field.focus();
								}
								else{
								
							
								if(regex.test(formLogin.getValues().Username)) {
								alert('Ok');
								}
								else
								{
									alert('Error in input');
									formLogin.setValues({Username:''});
									field.focus();
								}
								
							}
						}
								}
							}
						},
						{
						xtype: 'passwordfield',
						placeHolder: 'Password',
						name: 'Password',
						label:'Password',
						labelWidth: '40%',
						required: true,
							listeners:{
								change: function(field, value){
								
								var formLogin=Ext.getCmp('loginforms');
								  var regex=/^[0-9a-zA-Z_.]+$/;
								   var regexfornumber=/^[0-9]+$/;
								  //var regexforother=/^[a-zA-Z_.]+$/;
								
								if(formLogin.getValues().Password==null) field.focus();
								
								 if (formLogin.getValues().Password.length < 6 || formLogin.getValues().Password.length>15) {
								 alert('The Password is too short or big. It must be 5 characters or more but not more than 15 character.');
									formLogin.setValues({Password:''});
									field.focus();
								 }
								else
								{
								
								if(regexfornumber.test(formLogin.getValues().Password)) 
								{
								alert('need minimum 1 alphabetic charater for password');
									formLogin.setValues({Password:''});
									field.focus();
								}
								else{
								
							
								if(regex.test(formLogin.getValues().Password)) {
								alert('Ok');
								}
								else
								{
									alert('Error in input');
									formLogin.setValues({Password:''});
									field.focus();
								}
								
							}
						}
									
								}
							}
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
				 hight:'500px',
				 id: 'logintoolbar',
				 items:[{xtype:'spacer'},
						{xtype: 'button',
						text: 'Login',
						name:'login',
						id:'Loginbutton',
						ui: 'confirm',
						//style: 'display: inline; font-size: 20px; margin-top: 0px; margin-right: 0px; margin-bottom: 5px; margin-left: 10px; width: 100px;',
						handler: function() {
										 
                         var formLogin=Ext.getCmp('loginforms');
						 					 
                           if((formLogin.getValues().Username.length>5 && formLogin.getValues().Username.length<15) && formLogin.getValues().Username!="" && (formLogin.getValues().Password.length>5 && formLogin.getValues().Username.length<15) &&
						 formLogin.getValues().Password!=""){
						 
						 formLogin.submit({
								//url: 'http://localhost/WebApplicationNormal/WebApplicationNormal/GetDatafromWCF.ashx',
									//just demo
									url:'http://localhost/WebApplication1/abc.ashx',
                                    waitMsg : {message:'Submitting', cls : 'demos-loading'},
									success: function(e) {
										alert('elgfgfg');
										
									},
									failure:function(e)
									{
										
										console.log('full form');
										console.log(formLogin);
										
										console.log(formLogin.items.items[0].items.items[3].innerHtmlElement.dom.childNodes[1]['recaptcha_challenge_field'].value);
										console.log(formLogin.items.items[0].items.items[3].innerHtmlElement.dom.childNodes[1]['recaptcha_response_field'].value);
										//Recaptcha response and challange field							
										var recaptcha_response_field=formLogin.items.items[0].items.items[3].innerHtmlElement.dom.childNodes[1]['recaptcha_response_field'].value;
										
										formLogin.items.items[0].items.items[3].innerHtmlElement.dom.childNodes[1]['recaptcha_response_field'].value=null;
										var recaptcha_challenge_field=formLogin.items.items[0].items.items[3].innerHtmlElement.dom.childNodes[1]['recaptcha_challenge_field'].value; 
										
										
								
										var x=formLogin.getValues();
										console.log(x);
										
										Ext.Ajax.request({
										//url: 'http://localhost/WebApplicationNormal/WebApplicationNormal/GetDatafromWCF.ashx',
										url:'http://localhost/WebApplication1/CheckLogin.ashx',
										params: {Recaptcha_challenge_field:recaptcha_challenge_field,Recaptcha_response_field:recaptcha_response_field,Password:formLogin.getValues().Password,Name:formLogin.getValues().Username},
										success: function(response, opts) {
										
										console.log('server-side success with status code hello success'+response.responseText);
										var obj = Ext.decode(response.responseText);
										console.dir(obj);
										
										if(obj[0].responsetype=='Error'){
										
										alert(obj[0].Message);
										
										 Recaptcha.create("6LfJJ80SAAAAABAG_wlOpASosUo_OGyw2iSswys5", "recaptcha_div", {
											theme: "red",
											callback: Recaptcha.null});
										
											formLogin.setValues({Username:'',Password:''});
											Ext.getCmp('loginforms').reset();
										}
										else if(obj[0].responsetype=='Success')
										{
										//Here will implement send user name and password if possible to email address or just show information in pop up
										//alert('Succeed by passing to Ajax Request');
										alert(obj[0].Message);
										
										//var x=formLogin.getValues();
										//console.log(x.Password);
										

										Recaptcha.create("6LfJJ80SAAAAABAG_wlOpASosUo_OGyw2iSswys5", "recaptcha_div", {
											theme: "red",
											callback: Recaptcha.focus_response_field});
											formLogin.setValues({Username:'',Password:''});
											Ext.getCmp('loginforms').reset();
											Ext.getCmp('loginforms').hide();
											Ext.Msg.alert('You are Logged-In');
																	
											
											//Just save login status to login directly
											/* localStorage.setItem("loginstatus", true);
											console.log(localStorage); */
										}
									},
									failure: function(response, opts) {
									console.log('server-side failure with status code ' + response.status);
									alert('server-side failure with status code ' + response.status);
									formLogin.setValues({Username:'',Password:''});
									Ext.getCmp('loginforms').reset();
									}
								});
								

									formLogin.setValues({Username:'',Password:''});
									Ext.getCmp('loginforms').reset();
							}
						});
							}
							
							else
						{
							alert('Give user name and password in correct format and length');
							formLogin.setValues({Username:'',Password:''});
							Ext.getCmp('loginforms').reset();
							}
						
						}
					},
					{xtype:'spacer'},
					{xtype: 'button',
						text: 'Register',
						id:'registerbutton',
						ui: 'confirm',
						//style: 'display: inline; font-size: 18px; margin-top: 0px; margin-right: 0px; margin-bottom: 5px; margin-left: 10px; width: 100px;',
						handler: function() {
					 
						var formLogin=Ext.getCmp('loginforms');
						if((formLogin.getValues().Username.length>5 && formLogin.getValues().Username.length<15) && formLogin.getValues().Username!="" && (formLogin.getValues().Password.length>5 && formLogin.getValues().Username.length<15) &&
						 formLogin.getValues().Password!=""){
										
						formLogin.submit({
								//url: 'http://localhost/WebApplicationNormal/WebApplicationNormal/GetDatafromWCF.ashx',
									//just demo
									url:'http://localhost/WebApplication1/abc.ashx',
                                    waitMsg : {message:'Submitting', cls : 'demos-loading'},
									success: function(e) {
										alert('elgfgfg');
										
									},
									failure:function(e)
									{
									
										console.log('full form');
										console.log(formLogin);
										
										console.log(formLogin.items.items[0].items.items[3].innerHtmlElement.dom.childNodes[1]['recaptcha_challenge_field'].value);
										console.log(formLogin.items.items[0].items.items[3].innerHtmlElement.dom.childNodes[1]['recaptcha_response_field'].value);
																	
										var recaptcha_response_field=formLogin.items.items[0].items.items[3].innerHtmlElement.dom.childNodes[1]['recaptcha_response_field'].value;
										formLogin.items.items[0].items.items[3].innerHtmlElement.dom.childNodes[1]['recaptcha_response_field'].value=null;
										var recaptcha_challenge_field=formLogin.items.items[0].items.items[3].innerHtmlElement.dom.childNodes[1]['recaptcha_challenge_field'].value;
								
										var x=formLogin.getValues();
										console.log(x);
										
										Ext.Ajax.request({
										//url: 'http://localhost/WebApplicationNormal/WebApplicationNormal/GetDatafromWCF.ashx',
										url:'http://localhost/WebApplication1/userRegister.ashx',
										params: {Recaptcha_challenge_field:recaptcha_challenge_field,Recaptcha_response_field:recaptcha_response_field,Password:formLogin.getValues().Password,Name:formLogin.getValues().Username},
										success: function(response, opts) {
										
										console.log('server-side success with status code hello success'+response.responseText);
										var obj = Ext.decode(response.responseText);
										console.dir(obj);
										
										if(obj[0].responsetype=='Error'){
										alert(obj[0].Message);
										
										 Recaptcha.create("6LfJJ80SAAAAABAG_wlOpASosUo_OGyw2iSswys5", "recaptcha_div", {
											theme: "red",
											callback: Recaptcha.null});
										formLogin.setValues({Username:'',Password:''});
										}
										else if(obj[0].responsetype=='Success')
										{
										
										alert(obj[0].Message);
										//Success so do other functionality
										var x=formLogin.getValues();
										//console.log(x.Password);
										

										Recaptcha.create("6LfJJ80SAAAAABAG_wlOpASosUo_OGyw2iSswys5", "recaptcha_div", {
											theme: "red",
											callback: Recaptcha.focus_response_field});
											
											formLogin.setValues({Username:'',Password:''});
											Ext.getCmp('loginforms').reset();
										}
									},
									failure: function(response, opts) {
									console.log('server-side failure with status code ' + response.status);
									alert('server-side failure with status code ' + response.status);
									
									}
								});
								

							formLogin.setValues({Username:'',Password:''});
							Ext.getCmp('loginforms').reset();
							}
						});
						}
						else
						{
							alert('Give user name and password in correct format and length');
							formLogin.setValues({Username:'',Password:''});
							Ext.getCmp('loginforms').reset();
						}
					}
					},
					{xtype:'spacer'},
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
						/* Ext.Viewport.remove(Ext.getCmp('loginforms'));
						Ext.Viewport.add(Ext.getCmp('formtest')); */
					}
					},
					{xtype:'spacer'}
					]
				}
				
			]
			
		}],
		listeners: {
						//at the time of show event recaptcha will be add 
						'show': function (thisComponent) {			
						Recaptcha.create("6LfJJ80SAAAAABAG_wlOpASosUo_OGyw2iSswys5", "recaptcha_div", {
											theme: "red",
											callback: Recaptcha.focus_response_field});
						}
					}
					
  }
	
});



			
															
	
	
	