/**
 * Controls the list of committees for a Legislator
 */
Ext.define('MyApp.controller.Login', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.MessageBox','MyApp.view.TabpanelList','MyApp.view.form.Reportforms'],

    config: {
        control: {
            '#Username':{ 
			change:'onChange',// function(field, value){alert('fgf');}
			blur:'onUserNameBlur'
			},
			'#Password':{
			blur:'onPasswordBlur'
			},
			'#Loginbutton':{
				tap:'onLoginSubmit'
			},
			'#registerbutton':{
				tap:'onRegisterSubmit'
			},
			'#annonymousbutton':{
				tap:'onAnnonymousLoginSubmit'
			},
			'#forgotpasswordbutton':{
				tap:'onForgotpassworSubmit'
			},
			
			'#searchpoint':{
			keyup:'ontest'
			
			}
        }
    } ,
ontest:function (field){var value = field.getValue(); 
},

    onChange: function(field, value){
		
				
		var formLogin=Ext.getCmp('loginforms');
								  var regex=/^[0-9a-zA-Z_.]+$/;
								  var regexfornumber=/^[0-9]+$/;
								  var regexforother=/^[a-zA-Z_.]+$/;
				
					
		if(value=="") field.focus();
		
		
	}, 
	
	  onUserNameBlur: function(field, value){
		
		
		//function is_email(email){      
		var emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		//return emailReg.test(email); } 

		
		
		
		var formLogin=Ext.getCmp('loginforms');
								  var regex=/^[0-9a-zA-Z_.]+$/;
								  var regexfornumber=/^[0-9]+$/;
								  var regexforother=/^[a-zA-Z_.]+$/;
				
		
		
		if(formLogin.getValues().Username=="") field.focus();
		
		if(formLogin.getValues().Username==null) field.focus();
								
								 if (formLogin.getValues().Username.length < 6 || formLogin.getValues().Username.length>30) {
								 //alert('The Username is too short or big. It must be 5 characters or more but not more than 15 character.');
									formLogin.setValues({Username:''});
									field.focus();
								 }
								else
								{
								
										
						if(!emailReg.test(formLogin.getValues().Username))
							{
							//alert('Not correct Email Field');
							formLogin.setValues({Username:''});
							field.focus();
			
							}
						else{
							//alert('Ok mail');
							//formLogin.setValues({Username:'Error in UserName'});
							}
					}
		},
		
		onPasswordBlur:function(field,value){
						
								var formLogin=Ext.getCmp('loginforms');
								  var regex=/^[0-9a-zA-Z_.]+$/;
								   var regexfornumber=/^[0-9]+$/;
								  //var regexforother=/^[a-zA-Z_.]+$/;
								
								if(formLogin.getValues().Password==null) field.focus();
								
								 if (formLogin.getValues().Password.length < 6 || formLogin.getValues().Password.length>30) {
								// alert('The Password is too short or big. It must be 5 characters or more but not more than 15 character.');
									formLogin.setValues({Password:''});
									field.focus();
								 }
								else
								{
								
								if(regexfornumber.test(formLogin.getValues().Password)) 
								{
								//alert('need minimum 1 alphabetic charater for password');
									formLogin.setValues({Password:''});
									field.focus();
								}
								else{
								
							
								if(regex.test(formLogin.getValues().Password)) {
								//alert('Ok');
								}
								else
								{
									//alert('Error in input');
									formLogin.setValues({Password:''});
									field.focus();
								}
								
							}
						}
									
							
		
		},
		
		onLoginSubmit:function(){
				var reportform=Ext.getCmp('reportform')||new MyApp.view.form.Reportforms();
			 var formLogin=Ext.getCmp('loginforms');
			 if((formLogin.getValues().Username.length>5 && formLogin.getValues().Username.length<30) 
			 && (formLogin.getValues().Password.length>5 && formLogin.getValues().Username.length<30)){
						
						
						 formLogin.submit({
								
									//just demo
									url:'http://192.168.86.33/WebApplicationNormal/WebApplicationNormal/checkUserLogin1.ashx',
                                    waitMsg : {message:'Submitting', cls : 'demos-loading'},
									success: function(e) {
										alert('elgfgfg');
										
									},
									failure:function(e)
									{
										try{
										console.log('full form');
										console.log(formLogin);
										
										
										
										/* console.log(formLogin.items.items[0].items.items[2].innerHtmlElement.dom.childNodes[1]['recaptcha_challenge_field'].value);
										console.log(formLogin.items.items[0].items.items[2].innerHtmlElement.dom.childNodes[1]['recaptcha_response_field'].value);
										
										
										
										//Recaptcha response and challange field							
										var recaptcha_response_field=formLogin.items.items[0].items.items[2].innerHtmlElement.dom.childNodes[1]['recaptcha_response_field'].value;
										
										formLogin.items.items[0].items.items[2].innerHtmlElement.dom.childNodes[1]['recaptcha_response_field'].value=null;
										var recaptcha_challenge_field=formLogin.items.items[0].items.items[2].innerHtmlElement.dom.childNodes[1]['recaptcha_challenge_field'].value; 
										 */
										
										var recaptcha_challenge_field=null;
										var recaptcha_response_field=null;
										var x=formLogin.getValues();
										console.log(x);
										
										
									 Ext.Ajax.request({
										
										url:'http://192.168.86.33/WebApplicationNormal/WebApplicationNormal/checkUserLogin.ashx',
										params: {Recaptcha_challenge_field:recaptcha_challenge_field,Recaptcha_response_field:recaptcha_response_field,Password:formLogin.getValues().Password,Name:formLogin.getValues().Username},
										success: function(response, opts) {
										
										
										
										//console.log('server-side success with status code hello success'+response.responseText);
										var obj = Ext.decode(response.responseText);
										console.dir(obj);
										
										if(obj[0].responsetype=='Error'){
										 //alert(obj[0].Message);
										
										  Recaptcha.create("6LcHOc4SAAAAAAXtRGMPMJN3Ue_oYqthfY31tIHR", "recaptcha_div_login", {
											theme: "red",
											callback: null}); 
										
											formLogin.setValues({Username:'',Password:''});
											Ext.getCmp('loginforms').reset(); 
											
											formLogin.setValues({lblMessage:""+obj[0].Message+""});
										}
										else if(obj[0].responsetype=='Success')
										{
										
										//alert(formLogin.getValues().Username);
										localStorage.setItem("UserroleName", ""+obj[0].RoleName+"")
										localStorage.setItem("Loginname",""+x.Username+"");
										//alert(localStorage.getItem("Loginname"));
										if (obj[0].RoleName=="SuperAdmin")
										{
										    Ext.getCmp('tabpanellist')._tabBar._items.items[2].show();
											Ext.getCmp('tabpanellist')._tabBar._items.items[4].show();
											Ext.getCmp('usermenupulation').show();
											Ext.getCmp('tabpanellist')._tabBar._items.items[5].show();
											Ext.getCmp('hidereportfield').show();
											
										}
										else if(obj[0].RoleName=="Admin"){
											Ext.getCmp('tabpanellist')._tabBar._items.items[2].hide();
											Ext.getCmp('tabpanellist')._tabBar._items.items[4].show();
											Ext.getCmp('usermenupulation').hide();
											Ext.getCmp('tabpanellist')._tabBar._items.items[5].show();
											Ext.getCmp('hidereportfield').show();
										}
										else if(obj[0].RoleName=="Normal")
										{
											Ext.getCmp('tabpanellist')._tabBar._items.items[2].hide();
											Ext.getCmp('tabpanellist')._tabBar._items.items[4].hide();
											
											Ext.getCmp('tabpanellist')._tabBar._items.items[5].show();
											Ext.getCmp('hidereportfield').hide();
											
										}
										//Here will implement send user name and password if possible to email address or just show information in pop up
										//alert('Succeed by passing to Ajax Request');
										//alert(obj[0].Message);
										
										//var x=formLogin.getValues();
										//console.log(x.Password);
										
										//Just save login status to login directly
											localStorage.setItem("hidelogin", "true");
											console.log(localStorage); 

											formLogin.setValues({Username:'',Password:''});
											//Ext.getCmp('loginforms').reset();
											Ext.getCmp('loginforms').hide();
											
										Recaptcha.create("6LcHOc4SAAAAAAXtRGMPMJN3Ue_oYqthfY31tIHR", "recaptcha_div_login", {
											theme: "red",
											callback: null});
											
											Ext.Msg.alert('You are Logged-In');
																	
											
											
								 		}
										
										
									},
									failure: function(response, opts) {
									
									formLogin.setValues({lblMessage:'Server Faillure...'});
									}
								}); 
									}
								catch(e){
										formLogin.setValues({Username:'',Password:''});
											 Recaptcha.create("6LcHOc4SAAAAAAXtRGMPMJN3Ue_oYqthfY31tIHR", "recaptcha_div_login", {
											theme: "red",
											callback: Recaptcha.focus_response_field}); 
											
											//Ext.getCmp('loginforms').reset();
											//alert(e);
										}								
									
																	

									formLogin.setValues({Username:'',Password:''});
									//Ext.getCmp('loginforms').reset();
							}
						});
						
					
							}
							
							else
						{
							formLogin.setValues({lblMessage:'Give Email and Password in correct format and length...'});
							//alert('Give Email and Password in correct format and length');
							 Recaptcha.create("6LcHOc4SAAAAAAXtRGMPMJN3Ue_oYqthfY31tIHR", "recaptcha_div_login", {
											theme: "red",
											callback: null}); 
							formLogin.setValues({Username:'',Password:''});
							//Ext.getCmp('loginforms').reset();
							
						} 
							
		},
		onRegisterSubmit:function(){
			
			 var formLogin=Ext.getCmp('loginforms');
			 if((formLogin.getValues().Username.length>5 && formLogin.getValues().Username.length<30) && formLogin.getValues().Username!="" 
						   && (formLogin.getValues().Password.length>5 && formLogin.getValues().Username.length<30) &&
						 formLogin.getValues().Password!=""){
						
						
						 formLogin.submit({
								
									//just demo
									url:'http://192.168.86.33/WebApplicationNormal/WebApplicationNormal/userRegister1.ashx',
                                    waitMsg : {message:'Submitting', cls : 'demos-loading'},
									success: function(e) {
										alert('elgfgfg');
										
									},
									failure:function(e)
									{
										try{
										console.log('full form');
										console.log(formLogin);
										
										
										console.log(formLogin.items.items[0].items.items[2].innerHtmlElement.dom.childNodes[1]['recaptcha_challenge_field'].value);
										console.log(formLogin.items.items[0].items.items[2].innerHtmlElement.dom.childNodes[1]['recaptcha_response_field'].value);
										//Recaptcha response and challange field							
										var recaptcha_response_field=formLogin.items.items[0].items.items[2].innerHtmlElement.dom.childNodes[1]['recaptcha_response_field'].value;
										
										formLogin.items.items[0].items.items[2].innerHtmlElement.dom.childNodes[1]['recaptcha_response_field'].value=null;
										var recaptcha_challenge_field=formLogin.items.items[0].items.items[2].innerHtmlElement.dom.childNodes[1]['recaptcha_challenge_field'].value; 
										
										
										
								
										var x=formLogin.getValues();
										console.log(x);
										
										
									 Ext.Ajax.request({
										
										url:'http://192.168.86.33/WebApplicationNormal/WebApplicationNormal/userRegister.ashx',
										params: {Recaptcha_challenge_field:recaptcha_challenge_field,Recaptcha_response_field:recaptcha_response_field,Password:formLogin.getValues().Password,Name:formLogin.getValues().Username},
										success: function(response, opts) {
										
										//console.log('server-side success with status code hello success'+response.responseText);
										var obj = Ext.decode(response.responseText);
										console.dir(obj);
										
										if(obj[0].responsetype=='Error'){
										//alert(obj[0].Message);
										formLogin.setValues({Username:'',Password:''});
										Recaptcha.create("6LcHOc4SAAAAAAXtRGMPMJN3Ue_oYqthfY31tIHR", "recaptcha_div_login", {
											theme: "red",
											callback: null}); 
										
											formLogin.setValues({lblMessage:""+obj[0].Message+""});
											//Ext.getCmp('loginforms').reset(); 
										}
										else if(obj[0].responsetype=='Success')
										{
										
										localStorage.setItem("UserroleName", ""+obj[0].RoleName+"")
										
										if (obj[0].RoleName=="SuperAdmin")
										{
										   Ext.getCmp('tabpanellist')._tabBar._items.items[2].show();
											Ext.getCmp('tabpanellist')._tabBar._items.items[4].show();
											Ext.getCmp('usermenupulation').show();
											Ext.getCmp('tabpanellist')._tabBar._items.items[5].show();
										}
										else if(obj[0].RoleName=="Admin"){
											Ext.getCmp('tabpanellist')._tabBar._items.items[2].hide();
											Ext.getCmp('tabpanellist')._tabBar._items.items[4].show();
											Ext.getCmp('usermenupulation').hide();
											Ext.getCmp('tabpanellist')._tabBar._items.items[5].show();
										}
										else if(obj[0].RoleName=="Normal")
										{
											Ext.getCmp('tabpanellist')._tabBar._items.items[5].show();
										}
										formLogin.setValues({Username:'',Password:''});
										Recaptcha.create("6LcHOc4SAAAAAAXtRGMPMJN3Ue_oYqthfY31tIHR", "recaptcha_div_login", {
											theme: "red",
											callback: null});
											
											//Ext.getCmp('loginforms').reset();
											
											//Ext.Msg.alert('User Created');
											formLogin.setValues({lblMessage:'User Created'});						
											
											
								 		}
										
										
									},
									failure: function(response, opts) {
									//alert('Server Failure...');
									formLogin.setValues({lblMessage:'Server Failure...'});
									}
								}); 
									}
								catch(e){
										
										formLogin.setValues({Username:'',Password:''});
											 Recaptcha.create("6LcHOc4SAAAAAAXtRGMPMJN3Ue_oYqthfY31tIHR", "recaptcha_div_login", {
											theme: "red",
											callback: Recaptcha.focus_response_field}); 
											
											//Ext.getCmp('loginforms').reset();
											//alert(e);
										}								
									
																	

									formLogin.setValues({Username:'',Password:''});
									//Ext.getCmp('loginforms').reset();
							}
						});
						
					
							}
							
							else
						{
							formLogin.setValues({lblMessage:'Give Email and Password in correct format and length..'});
							formLogin.setValues({Username:'',Password:''});
							//alert('Give Email and Password in correct format and length');
							 Recaptcha.create("6LcHOc4SAAAAAAXtRGMPMJN3Ue_oYqthfY31tIHR", "recaptcha_div_login", {
											theme: "red",
											callback: null}); 
							
							//Ext.getCmp('loginforms').reset();
							
						} 
		
		},
		onAnnonymousLoginSubmit:function(){
			var reportform=Ext.getCmp('reportform')||new MyApp.view.form.Reportforms();
			
			localStorage.setItem("hidelogin", "true");//for hide login panel again
			//localStorage.setItem("Loginname","mohymen033@gmail.com");//Need change just for test
			//alert('Need change just for test');
			 
						var abc = 
						Ext.Msg.confirm('Confirm login', 'Are you sure to Logged in as Annonymous?', function(e)
				{
					if(e == 'yes')
					{
						Ext.getCmp('hidereportfield').hide();
						localStorage.setItem("UserroleName", "");
						localStorage.setItem("Loginname","Annonymous");
						
						alert('You are Logging as Annonymous user!!!' );
						Ext.getCmp('loginforms').reset();
						Ext.getCmp('loginforms').hide();
						
						console.log(Ext.getCmp('tabpanellist'));
						Ext.getCmp('tabpanellist')._tabBar._items.items[2].hide();
						Ext.getCmp('tabpanellist')._tabBar._items.items[4].hide();
						Ext.getCmp('tabpanellist')._tabBar._items.items[5].hide();
						
					}
					else{
					
					//var form=Ext.getCmp('registerform')|| new MyApp.view.form.Registerform();
					//Ext.getCmp('loginforms').reset();
					//Ext.getCmp('loginforms').hide();
					//form.show();
					}
					
					
				}
				);
					
						
						
		},
		onForgotpassworSubmit:function(){
			
					 
						 var formLogin=Ext.getCmp('loginforms');
						if((formLogin.getValues().Username.length>5 && formLogin.getValues().Username.length<30) )
						{
								//alert('You given correct');	
								
								console.log(formLogin.getValues().Username);
							
																
						//var formLogin=Ext.getCmp('loginforms');								
						 formLogin.submit({
								
									url:'http://192.168.86.33/WebApplication/Mailpassword1.ashx',
                                   waitMsg : {message:'Submitting', cls : 'demos-loading'},
									success: function(e) {
										alert('elgfgfg');
										
									},
									failure:function(e)
									{
										//alert('gfgfgf');
										console.log('full form');
										console.log(formLogin);
										
									
											
																		
										
										
										 Ext.Ajax.request({
										
										url:'http://192.168.86.33/WebApplicationNormal/Mailpassword.ashx',
										params: {UserName:formLogin.getValues().Username},
										success: function(response, opts) {
										
										console.log('server-side success with status code hello success'+response.responseText);
										var obj = Ext.decode(response.responseText);
										//console.dir(obj);
										//alert(obj);
										formLogin.setValues({lblMessage:""+obj+""});
										formLogin.setValues({Username:'',Password:''});
										
									},
									failure: function(response, opts) {
									console.log('server-side failure with status code ' + response.status);
									alert('server-side failure with status code ' + response.status);
									
									}
								});  
								

							
							formLogin.reset();
							}
						}); 
						}
						else
						{
							
							
							alert('Give Email: ');
							
							formLogin.reset();
							
							
						} 
		
		}
});
