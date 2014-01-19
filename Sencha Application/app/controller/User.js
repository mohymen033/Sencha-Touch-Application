/**
 * Controls the list of committees for a Legislator
 */
Ext.define('MyApp.controller.User', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.MessageBox','MyApp.view.form.User','MyApp.view.TabpanelList'],

    config: {
        control: {
		
		//password chnage option start
            '#passwordchnage':{ 
			
			tap:'onPasswordchange'
			},

			'#changepasswordExit':{ 
			
			tap:'onChangepasswordExit'
			},
			'#changepasswordReset':{ 
			
			tap:'onChangepasswordReset'
			},
			'#changepasswordChange':{ 
			
			tap:'onChangepasswordChange'
			},
			
			//password chnage option end
			'#profilechnage':{ 
			
			tap:'onProfilechnage'
			},
			'#adminexit':{
			tap:'onExitadmin'
			},
			'#adminsave':{
			tap:'onSaveadmin'
			},
			//for assigned report to user
			'#assignedreportexit':{
			tap:'onAssignedreportexit'
			},
			'#assignedreportsave':{
			tap:'onAssignedreportsave'
			},
			//end assigned report to user
			
			//start update status of report
			'#updatereportstatusexit':{
			tap:'onUpdatereportstatusexit'
			},
			'#updatereportstatussave':{
			tap:'onUpdatereportstatussave'
			},
			
			'#assingedreportlistclosebutton':{
			tap:'onAssingedreportlistclosebutton'
			}
			//end update status of report
			
			
        }
    },
	//start password change
		onPasswordchange:function(){
		
			var userform=Ext.getCmp('userpasswordchangeform')|| new MyApp.view.form.User();
			userform.show();
			//alert('Password Change...');
			
		},
		onChangepasswordExit:function(){
			Ext.getCmp('userpasswordchangeform').reset();
			Ext.getCmp('userpasswordchangeform').hide();
			
		},
		onChangepasswordReset:function(){
		
			Ext.getCmp('userpasswordchangeform').reset();
			
		},
		onChangepasswordChange:function(){
		
							//Ext.getCmp('userpasswordchangeform').reset();
			
			
							var passwordchangeform=Ext.getCmp('userpasswordchangeform');//|| new MyApp.view.form.User();
							//console.log(passwordchangeform);
							
							if ((passwordchangeform.getValues().NewPassword==passwordchangeform.getValues().ConfirmPassword) 
							&& (passwordchangeform.getValues().NewPassword!="" && passwordchangeform.getValues().ConfirmPassword!=""))
							{
							passwordchangeform.submit({
								
									//just demo
									url:'http://192.168.86.33/WebApplicationNormal/WebApplicationNormal/ChangeUserPassword1.ashx',
                                    waitMsg : {message:'Submitting', cls : 'demos-loading'},
									success: function(e) {
										alert('elgfgfg');
										
									},
									failure:function(e)
									{
										try{
										//console.log('full form');
										//console.log(passwordchangeform);
										var x=passwordchangeform.getValues();
										console.log(x);
										
										
										//console.log(passwordchangeform.items.items[0].items.items[4].innerHtmlElement.dom.childNodes[0]['recaptcha_challenge_field'].value);
										//console.log(passwordchangeform.items.items[0].items.items[4].innerHtmlElement.dom.childNodes[0]['recaptcha_response_field'].value);
										
										//Recaptcha response and challange field							
										//var recaptcha_response_field=passwordchangeform.items.items[0].items.items[4].innerHtmlElement.dom.childNodes[0]['recaptcha_response_field'].value;
										
										//passwordchangeform.items.items[0].items.items[4].innerHtmlElement.dom.childNodes[0]['recaptcha_response_field'].value=null;
										//var recaptcha_challenge_field=passwordchangeform.items.items[0].items.items[4].innerHtmlElement.dom.childNodes[0]['recaptcha_challenge_field'].value; 
										
										
										var recaptcha_response_field=null;
										var recaptcha_challenge_field=null;
								
										
										
										
									 Ext.Ajax.request({
										
										url:'http://192.168.86.33/WebApplicationNormal/WebApplicationNormal/ChangeUserPassword.ashx',
										params: {Recaptcha_challenge_field:recaptcha_challenge_field,Recaptcha_response_field:recaptcha_response_field,
										OldPassword:passwordchangeform.getValues().OldPassword,NewPassword:passwordchangeform.getValues().NewPassword,
										ConfirmPassword:passwordchangeform.getValues().ConfirmPassword,Email:passwordchangeform.getValues().Email},
										success: function(response, opts) {
										
										//console.log('server-side success with status code hello success'+response.responseText);
										var obj = Ext.decode(response.responseText);
										console.dir(obj);
										
										if(obj[0].responsetype=='Error'){
										 alert(obj[0].Message);
										
										  Recaptcha.create("6LcHOc4SAAAAAAXtRGMPMJN3Ue_oYqthfY31tIHR", "recaptcha_div_change_password", {
											theme: "red",
											callback: null}); 
											Ext.getCmp('userpasswordchangeform').reset();
										}
										else if(obj[0].responsetype=='Success')
										{
										//Here will implement send user name and password if possible to email address or just show information in pop up
										//alert('Succeed by passing to Ajax Request');
										alert(obj[0].Message);
										
										

										Recaptcha.create("6LcHOc4SAAAAAAXtRGMPMJN3Ue_oYqthfY31tIHR", "recaptcha_div_change_password", {
											theme: "red",
											callback: null});
											
											Ext.getCmp('userpasswordchangeform').reset();
																	
											
											
								 		}
										
										
									},
									failure: function(response, opts) {
									alert('Server failure...');
									}
								}); 
									}
								catch(e){
										
											 Recaptcha.create("6LcHOc4SAAAAAAXtRGMPMJN3Ue_oYqthfY31tIHR", "recaptcha_div_change_password", {
											theme: "red",
											callback: Recaptcha.focus_response_field}); 
											//passwordchangeform.setValues({Username:'',Password:''});
											Ext.getCmp('passwordchangeform').reset();
											alert(e);
										}								
									
																	

									//passwordchangeform.setValues({Username:'',Password:''});
									//Ext.getCmp('passwordchangeform').reset();
							}
						});
					}
					else{
							Ext.getCmp('userpasswordchangeform').reset();
					}
					
							
		},
		
		
		//end password option change
		onProfilechnage:function(){
		
			var userProfiledata=Ext.getCmp('Profileform')|| new MyApp.view.form.Profileform();
			userProfiledata.show();
			//alert('Password Change...');
			
		},
		onExitadmin:function(){
				//Administration of application user
				//MyApp.view.form.UserAdministration
				Ext.getCmp('useradministration').hide();
				
				
				
				Ext.getCmp('useradministration')._items.items[0]._items.items[0]._store.load();
				Ext.getCmp('useradministration')._items.items[0]._items.items[1]._store.load();
				
				//var x=Ext.getCmp('reportlist') || new MyApp.view.List();
				//x._items.items[1]._items.items[0]._store._proxy._extraParams.start=0;
				//localStorage.setItem("start",0);		
				//x._items.items[1]._items.items[0]._store.load();
				//x.show();
							
			
		},
		//start assigned report to user
		onAssignedreportexit:function(){
				
				Ext.getCmp('assignedreportforms').hide();
				Ext.getCmp('reportlist').show();
				//Ext.getCmp('reportlistcomment').show();
			
		},
		onAssignedreportsave:function(){
				
				//Ext.getCmp('assignedreportforms').hide();
				console.log(Ext.getCmp('assignedreportforms').getValues());
			//	Ext.getCmp('reportlist').show();
				
				
				var form=Ext.getCmp('assignedreportforms');
			
		form.submit({
		//just demo
		url:'http://192.168.86.33/WebApplicationNormal/AssignReporttoUser1.ashx',
        waitMsg : {message:'Submitting', cls : 'demos-loading'},
		success: function(e) {
		alert('Direct form submit');
		},
		failure:function(e)
		{
		
		console.log('full form');
		console.log(form);
	    					
		var x=form.getValues();
		console.log(x);
									
		try{
		Ext.Ajax.request({
		url:'http://192.168.86.33/WebApplicationNormal/AssignReporttoUser.ashx',
		params: {user:form.getValues().UserfilterList,ReportId:form.getValues().reportIdhidden},
		success: function(response, opts) {
		console.log(response.responseText);
		console.log('server-side success with status code hello success'+response.responseText);
		var obj = Ext.decode(response.responseText);
		console.dir(obj);
		if(obj=='Success')
			alert('Succefully Report assigned');
		else
			alert('Error...Can not assinged Report');
		},
		failure: function(response, opts) {
		console.log('server-side failure with status code ' + response.status);
		alert('Server-side failure code'+response.status);
		}
		}); 
		}
		catch(e){
		alert(e);
		}
														
		}								
		});
		
				
			
		},
		
		//end function assigned report to user
		
		//start update status of report
		onUpdatereportstatusexit:function(){
				console.log(Ext.getCmp('updatereportstatus').getValues());
				Ext.getCmp('updatereportstatus').hide();
				Ext.getCmp('assignedreportlist').show();
			
		},
		onUpdatereportstatussave:function(){
				//console.log(Ext.getCmp('updatereportstatus').getValues().UserfilterListupdatereportstatus);
				//Ext.getCmp('updatereportstatus').hide();
				//Ext.getCmp('assignedreportlist').show();
				var x=Ext.getCmp('assignedreportlist') || new MyApp.view.AssignedReportList();
				var form=Ext.getCmp('updatereportstatus');
			
		form.submit({
		//just demo
		url:'http://192.168.86.33/WebApplicationNormal/AssignReporttoUser1.ashx',
        waitMsg : {message:'Submitting', cls : 'demos-loading'},
		success: function(e) {
		alert('Direct form submit');
		},
		failure:function(e)
		{
		
		console.log('full form');
		console.log(form);
	    					
		var xform=form.getValues();
		console.log(xform);
									
		try{
		Ext.Ajax.request({
		url:'http://192.168.86.33/WebApplicationNormal/UpdateReportStatus.ashx',
		params: {ReportStatus:form.getValues().UserfilterListupdatereportstatus,ReportId:form.getValues().reportIdhiddenforUpdatestatus},
		success: function(response, opts) {
		console.log(response.responseText);
		console.log('server-side success with status code hello success'+response.responseText);
		var obj = Ext.decode(response.responseText);
		console.dir(obj);
		if(obj=='Success')
			{
			alert('Succefully Report Status Updated');
			Ext.getCmp('updatereportstatus').hide();
			x._items.items[1]._items.items[0]._store._proxy._extraParams.start=0;
			x._items.items[1]._items.items[0]._store.load();
			x.show();
			}
			
		else
			alert('Error...Can not Update Report Status');
		},
		failure: function(response, opts) {
		console.log('server-side failure with status code ' + response.status);
		alert('Server-side failure code'+response.status);
		}
		}); 
		}
		catch(e){
		alert(e);
		}
														
		}								
		});
		
				
			
		},
		//end update status of report 
			onAssingedreportlistclosebutton:function(){
				
				//Ext.getCmp('updatereportstatus').hide();
				Ext.getCmp('assignedreportlist').hide();
				Ext.getCmp('reportstatus').show();
				
				if (localStorage.getItem("UserroleName")=="SuperAdmin")
				{
					Ext.getCmp('usermenupulation').show();
				}
				
			
		},
		
		onSaveadmin:function(){
				//Administration of application user
				//MyApp.view.form.UserAdministration
				//Ext.getCmp('useradministration').hide();
				//alert('Saved administration');
				
				
				var form=Ext.getCmp('useradministration');
			
		form.submit({
		//just demo
		url:'http://192.168.86.33/WebApplicationNormal/SaveUserAdministrationData1.ashx',
        waitMsg : {message:'Submitting', cls : 'demos-loading'},
		success: function(e) {
		alert('Direct form submit');
		},
		failure:function(e)
		{
		
		console.log('full form');
		console.log(form);
	    					
		var x=form.getValues();
		console.log(x);
									
		try{
		Ext.Ajax.request({
		url:'http://192.168.86.33/WebApplicationNormal/SaveUserAdministrationData.ashx',
		params: {UserName:form.getValues().UserList,RoleName:form.getValues().RoleList,UserStatus:form.getValues().ActiveDeactive},
		success: function(response, opts) {
		console.log(response.responseText);
		console.log('server-side success with status code hello success'+response.responseText);
		if (response.responseText!=null && response.responseText!=""){
		var obj = Ext.decode(response.responseText);
		console.dir(obj);
		if(obj=='Success')
			alert('Succefully role assigned');
		else
			
			alert(obj);
		}
		else
		{
			alert('Error can not assigned role');
		}
		}
		,
		failure: function(response, opts) {
		console.log('server-side failure with status code ' + response.status);
		alert('Server-side failure code'+response.status);
		}
		}); 
		}
		catch(e){
		alert(e);
		}
														
		}								
		});
		
			
		}
		
});
