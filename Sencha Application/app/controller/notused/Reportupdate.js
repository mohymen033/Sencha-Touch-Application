/**
 * Controls the list of committees for a Legislator
 */
Ext.define('MyApp.controller.Login', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.MessageBox','MyApp.view.Registerform'],

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
			}
        }
    } ,

    onChange: function(field, value){
		
		var formLogin=Ext.getCmp('loginforms');
								  var regex=/^[0-9a-zA-Z_.]+$/;
								  var regexfornumber=/^[0-9]+$/;
								  var regexforother=/^[a-zA-Z_.]+$/;
				
					
		if(value=="") field.focus();
		
		
	}, 
	
	  onUserNameBlur: function(field, value){
		
		var formLogin=Ext.getCmp('loginforms');
								  var regex=/^[0-9a-zA-Z_.]+$/;
								  var regexfornumber=/^[0-9]+$/;
								  var regexforother=/^[a-zA-Z_.]+$/;
				
				
		if(formLogin.getValues().Username=="") field.focus();
		
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
		},
		
		onPasswordBlur:function(field,value){
						
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
									
							
		
		},
		
		onLoginSubmit:function(){
		
			 var formLogin=Ext.getCmp('loginforms');
			 if((formLogin.getValues().Username.length>5 && formLogin.getValues().Username.length<15) && formLogin.getValues().Username!="" 
						   && (formLogin.getValues().Password.length>5 && formLogin.getValues().Username.length<15) &&
						 formLogin.getValues().Password!=""){
						 alert('dfdf');
						
						 formLogin.submit({
								//url: 'http://localhost/WebApplicationNormal/WebApplicationNormal/GetDatafromWCF.ashx',
									//just demo
									url:'http://192.168.86.33/WebApplicationNormal/WebApplicationNormal/GetDatafromWCF.ashx',
                                    waitMsg : {message:'Submitting', cls : 'demos-loading'},
									success: function(e) {
										alert('elgfgfg');
										
									},
									failure:function(e)
									{
										try{
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
										
										url:'http://192.168.86.33/WebApplicationNormal/WebApplicationNormal/GetDatafromWCF.ashx',
										params: {Recaptcha_challenge_field:recaptcha_challenge_field,Recaptcha_response_field:recaptcha_response_field,Password:formLogin.getValues().Password,Name:formLogin.getValues().Username},
										success: function(response, opts) {
										
										//console.log('server-side success with status code hello success'+response.responseText);
										var obj = Ext.decode(response.responseText);
										console.dir(obj);
										
										if(obj[0].responsetype=='Error'){
										 alert(obj[0].Message);
										
										  Recaptcha.create("6LdC9c0SAAAAAERjCrgFsaf2Jv_gfhkHsCq3TZ1x", "recaptcha_div", {
											theme: "red",
											callback: null}); 
										
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
										

										Recaptcha.create("6LdC9c0SAAAAAERjCrgFsaf2Jv_gfhkHsCq3TZ1x", "recaptcha_div", {
											theme: "red",
											callback: null});
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
									alert('fail');
									}
								}); 
									}
								catch(e){
										
											 Recaptcha.create("6LdC9c0SAAAAAERjCrgFsaf2Jv_gfhkHsCq3TZ1x", "recaptcha_div", {
											theme: "red",
											callback: Recaptcha.focus_response_field}); 
											formLogin.setValues({Username:'',Password:''});
											Ext.getCmp('loginforms').reset();
											alert(e);
										}								
									
																	

									formLogin.setValues({Username:'',Password:''});
									Ext.getCmp('loginforms').reset();
							}
						});
						
					
							}
							
							else
						{
							
							alert('Give user name and password in correct format and length');
							 Recaptcha.create("6LdC9c0SAAAAAERjCrgFsaf2Jv_gfhkHsCq3TZ1x", "recaptcha_div", {
											theme: "red",
											callback: null}); 
							formLogin.setValues({Username:'',Password:''});
							Ext.getCmp('loginforms').reset();
							
						} 
							
		},
		onRegisterSubmit:function(){
			
					 var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
					 alert(width);
						 var formLogin=Ext.getCmp('loginforms');
						if((formLogin.getValues().Username.length>5 && formLogin.getValues().Username.length<15) && formLogin.getValues().Username!="" && (formLogin.getValues().Password.length>5 && formLogin.getValues().Username.length<15) &&
						 formLogin.getValues().Password!=""){
								alert('You given correct');	
						var formLogin=Ext.getCmp('loginforms');								
						 formLogin.submit({
								//url: 'http://localhost/WebApplicationNormal/WebApplicationNormal/GetDatafromWCF.ashx',
									//just demo
									//url:'http://192.168.86.33/WebApplicationNormal/WebApplicationNormal/GetDatafromWCF.ashx',
									url:'http://192.168.86.33/WebApplication1/userRegister.ashx',
                                   waitMsg : {message:'Submitting', cls : 'demos-loading'},
									success: function(e) {
										alert('elgfgfg');
										
									},
									failure:function(e)
									{
										alert('gfgfgf');
										console.log('full form');
										console.log(formLogin);
										
										
										Recaptcha.create("6LdC9c0SAAAAAERjCrgFsaf2Jv_gfhkHsCq3TZ1x", "recaptcha_div", {
											theme: "red",
											callback: null});
											
										 //console.log(formLogin.items.items[0].items.items[3].innerHtmlElement.dom.childNodes[1]['recaptcha_challenge_field'].value);
										//console.log(formLogin.items.items[0].items.items[3].innerHtmlElement.dom.childNodes[1]['recaptcha_response_field'].value);
																	
										//var recaptcha_response_field=formLogin.items.items[0].items.items[3].innerHtmlElement.dom.childNodes[1]['recaptcha_response_field'].value;
										//formLogin.items.items[0].items.items[3].innerHtmlElement.dom.childNodes[1]['recaptcha_response_field'].value=null;
										//var recaptcha_challenge_field=formLogin.items.items[0].items.items[3].innerHtmlElement.dom.childNodes[1]['recaptcha_challenge_field'].value;
								
										//var x=formLogin.getValues();
										//console.log(x);
										
										/* Ext.Ajax.request({
										//url: 'http://localhost/WebApplicationNormal/WebApplicationNormal/GetDatafromWCF.ashx',
										url:'http://192.168.86.33/WebApplication1/userRegister.ashx',
										params: {Recaptcha_challenge_field:null,Recaptcha_response_field:null,Password:formLogin.getValues().Password,Name:formLogin.getValues().Username},
										success: function(response, opts) {
										alert('fdfdf');
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
								});  */
								

							
							formLogin.reset();
							}
						}); 
						}
						else
						{
							
							console.log(Ext.getCmp('toolbar'));
							//window.location.reload();
							alert('Give user name and password in correct format and length');
							//formLogin.setValues({Username:'',Password:''});
							//	Ext.getCmp('loginfieldset').reset();
							formLogin.reset();
							
							
						} 
		
		},
		onAnnonymousLoginSubmit:function(){
			
			
						var abc = Ext.Msg.confirm('Confirm logout', 'Are you sure you want to Logged in as Annonymous?', function(e)
				{
					if(e == 'yes')
					{
						alert('You are Logging as Annonymous user!!!' );
						Ext.getCmp('loginforms').reset();
						Ext.getCmp('loginforms').hide();
						
					}
					else{
					
					var form=Ext.getCmp('registerform')|| new MyApp.view.Registerform();
					Ext.getCmp('loginforms').reset();
						Ext.getCmp('loginforms').hide();
					form.show();
					}
					
					
				}
				);
					
						
						
		}
});
