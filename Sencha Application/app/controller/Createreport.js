/**
 * Controls the list of committees for a Legislator
 */
Ext.define('MyApp.controller.Createreport', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.MessageBox','MyApp.view.form.Reportforms','MyApp.view.Gmap','MyApp.view.ReportList'],

    config: {
        control: {
            reportexit:{
				tap:'doExit'
			},
			reportreset:{
				tap:'doReset'
			},
			reportsave:{
				tap:'doSave'
			},
				reportok:{
				tap:'doOk'
			},
				reportcomment:{
				tap:'doComment'
				},
					
			
			
        },
        refs: {
            reportexit: '#reportexit',
			reportreset:'#reportreset',
			reportsave:'#reportsave',
			reportok:'#reportok',
			reportcomment: '#reportcomment'
			
			
        }
    },
	
		
    doExit: function () {
       
        Ext.getCmp('reportform').setValues({Description:""});;
		Ext.getCmp('reportform').hide();
		Ext.getCmp('searchtextfield').show();
	},
	doReset:function(){
			Ext.getCmp('reportform').setValues({Description:""});;
			
		
	},
	doSave:function(){
	
	    alert('enter in save');

		//for get the id and title of the poi
	   
		console.log(Ext.getCmp('reportform').getValues().poiid);

		var map = Ext.getCmp('gmap1') || new MyApp.view.Gmap();
		
		//Very very important findings for marker menupulations
		console.log(map);
		console.log('Marker has been called');
		console.log(markers);
		var markerId = Ext.getCmp('reportform').getValues().poiid;
		console.log(markerId);
		var marker = markers[markerId];
		console.log(marker);
		marker.setIcon('hundlatrin_red.jpg');
		//marker.setMap(null);
		delete markers[markerId];
		console.log(markers);

	    //end Very very important findings for marker menupulations

		//console.log(map._map.$b);
		console.log(map._map.C.bc.xa);;
		//console.log(map._map.Zb.wa);
		
		//var obj=map._map.Zb.wa;
		var obj=map._map.C.bc.xa;
			
			var poicurrenttitle;
			var _gmid;
	for (var i in obj) {
	
	 if(obj[i].id==Ext.getCmp('reportform').getValues().poiid){
	 
	 //map._map.Xb.ta[obj[i].__gm_id].visible=false;
		console.log('gfgfg');
		console.log(map._map.C.bc.xa[obj[i].__gm_id].id);
		console.log(map._map.C.bc.xa[obj[i].__gm_id].title);
		poicurrenttitle=map._map.C.bc.xa[obj[i].__gm_id].title;
		_gmid= map._map.C.bc.xa[obj[i].__gm_id];
		console.log(_gmid.position.$a);
		console.log(_gmid.position.ab);
		//map._map.$b.xa[obj[i].__gm_id].setMap(null);
		//_gmid.setIcon('hundlatrin_red.jpg'); for status change
		break;
		//map._map.Zb.wa[obj[i].__gm_id].setMap(null);
		
	 
	 
		/* //map._map.Xb.ta[obj[i].__gm_id].visible=false;
		console.log('gfgfg');
		console.log(map._map.Zb.wa[obj[i].__gm_id].id);
		console.log(map._map.Zb.wa[obj[i].__gm_id].title);
		poicurrenttitle=map._map.Zb.wa[obj[i].__gm_id].title;
		_gmid= map._map.Zb.wa[obj[i].__gm_id];
		//map._map.Zb.wa[obj[i].__gm_id].setMap(null);
		break;
		//map._map.Zb.wa[obj[i].__gm_id].setMap(null); */
	} 
	
}
		//end 
	
	
	
		//This alert make save button tapped position so run two times
		/* alert('fdfdf'); */
		var form=Ext.getCmp('reportform');
			
		form.submit({
		//just demo
		url:'http://192.168.86.33/WebApplicationNormal/GetErrorData1.ashx',
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
			console.log(poicurrenttitle);	
			
			
			
			
			
			
			var selectedpoitype="";
			
			//alert(localStorage.getItem("UserroleName"));
			
			if (localStorage.getItem("UserroleName")=="SuperAdmin")
			{
			   selectedpoitype=form.getValues().SelectPointType;
									
			}
			else if(localStorage.getItem("UserroleName")=="Admin")
			{
				selectedpoitype=form.getValues().SelectPointType;
			}
			else if(localStorage.getItem("UserroleName")=="Normal")
			{
											
			 selectedpoitype="";
											
			}
			else
			{
			selectedpoitype="";
			
			}
			
		try{
		Ext.Ajax.request({
		url:'http://192.168.86.33/WebApplicationNormal/GetErrorData.ashx',
		params: {SelectPointType:selectedpoitype,Latitude:_gmid.position.$a,Longitude:_gmid.position.ab,Description:form.getValues().Description,Poiname:poicurrenttitle,Loginname:localStorage.getItem("Loginname")},
		success: function(response, opts) {
		console.log(response.responseText);
		console.log('server-side success with status code hello success'+response.responseText);
		var obj = Ext.decode(response.responseText);
		console.dir(obj);
		//alert(obj[0].responsetype);
		if(obj[0].responsetype=='Success'){
		alert("Report Created with id: "+obj[0].Message);
		
		//very important just update poi title id
		//_gmid.title='Test';
		//console.log(_gmid);
		
		if(poicurrenttitle.substring(0,1)	=="H"){
							//formPanel.setValues({Poitype: "Hundlatriner"});
							//alert(markers[poiid].title);
							_gmid.setIcon('hundlatrin_red.jpg');
							}
							else if (poicurrenttitle.substring(0,1)	=="P"){
							//formPanel.setValues({Poitype: "Papperskorgar"});
							//alert(markers[poiid].title);
							_gmid.setIcon('Papperskorgar_red.jpg');
							}
							else if ((poicurrenttitle.substring(0,1)	=="B")&&(poicurrenttitle.substring(1,2)!="A")){
							//formPanel.setValues({Poitype: "Gatubelysningsstolpar"});
							//alert(markers[poiid].title);
							_gmid.setIcon('Lyktstolpar_red.jpg');
							}
							else if ((poicurrenttitle.substring(0,1)	=="B")&&(poicurrenttitle.substring(1,2)=="A")){
							//formPanel.setValues({Poitype: "Parkeringsautomater"});
							//alert(markers[poiid].title);
							_gmid.setIcon('Parkeringsautomater_red.jpg');
							}
							else
							{
								
								_gmid.setIcon('synpunkt.jpg');
							}
							
		
		Ext.getCmp('reportform').setValues({Description:""});;
		Ext.getCmp('reportform').hide();
		}
		else if (obj[0].responsetype=='Error')
		{
		//alert('dfdfd');
		alert(obj[0].Message);
		
		//_gmid.setMap(null);						
		//Ext.getCmp('reportform').reset();
		//Ext.getCmp('reportform').hide();
		
		}
		else{
			alert('Error');
		}
										
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
	
	doOk:function(){
			Ext.getCmp('reportform').setValues({Description:""});;
		Ext.getCmp('reportform').hide();
		Ext.getCmp('searchtextfield').show();
		
	},
	doComment:function(){
	
	//for get the id and title of the poi
		
		/* console.log(Ext.getCmp('reportform').getValues().poiid);
		var map=Ext.getCmp('gmap1') || new MyApp.view.Gmap();
		console.log(map);
		console.log(map._map.C.bc.xa);
		console.log('asasas');
		console.log(map._map.$b);
		console.log(map._map.$b.xa); */
		//console.log(map._map.Zb.wa);
		
		//var obj=map._map.Zb.wa;
		/* var obj=map._map.$b.xa		
			
			var poicurrenttitle;
			var _gmid;
	for (var i in obj) {
	
	 if(obj[i].id==Ext.getCmp('reportform').getValues().poiid){ */
	 
	 //map._map.Xb.ta[obj[i].__gm_id].visible=false;
		/* console.log('gfgfg');
		console.log(map._map.$b.xa[obj[i].__gm_id].id);
		console.log(map._map.$b.xa[obj[i].__gm_id].title);
		poicurrenttitle=map._map.$b.xa[obj[i].__gm_id].title;
		_gmid= map._map.$b.xa[obj[i].__gm_id];
		console.log(_gmid.position.$a);
		console.log(_gmid.position.ab);
		//map._map.$b.xa[obj[i].__gm_id].setMap(null);
		//_gmid.setIcon('hundlatrin_red.jpg'); for status change
		break; */
		//map._map.Zb.wa[obj[i].__gm_id].setMap(null);
		
	 
	 
		/* //map._map.Xb.ta[obj[i].__gm_id].visible=false;
		console.log('gfgfg');
		console.log(map._map.Zb.wa[obj[i].__gm_id].id);
		console.log(map._map.Zb.wa[obj[i].__gm_id].title);
		poicurrenttitle=map._map.Zb.wa[obj[i].__gm_id].title;
		_gmid= map._map.Zb.wa[obj[i].__gm_id];
		//map._map.Zb.wa[obj[i].__gm_id].setMap(null);
		break;
		//map._map.Zb.wa[obj[i].__gm_id].setMap(null); */
	/* } 
	
} */
		//end 
	
	
	
	
	//for get the id and title of the poi
		
		console.log(Ext.getCmp('reportform').getValues().poiid);
		var map = Ext.getCmp('gmap1') || new MyApp.view.Gmap();
		
		
		console.log(map._map.C.bc.xa);
		console.log('asasas');
		//console.log(map._map.$b);
		//console.log(map._map.$b.xa);
		//console.log(map._map.Zb.wa);
		
		//var obj=map._map.Zb.wa;
		var obj=map._map.C.bc.xa;		
			
			var poicurrenttitle;
			var _gmid;
	for (var i in obj) {
	
	 if(obj[i].id==Ext.getCmp('reportform').getValues().poiid){
	 
	 //map._map.Xb.ta[obj[i].__gm_id].visible=false;
		console.log('gfgfg');
		console.log(map._map.C.bc.xa[obj[i].__gm_id].id);
		console.log(map._map.C.bc.xa[obj[i].__gm_id].title);
		poicurrenttitle=map._map.C.bc.xa[obj[i].__gm_id].title;
		_gmid= map._map.C.bc.xa[obj[i].__gm_id];
		console.log(_gmid.position.$a);
		console.log(_gmid.position.ab);
		//map._map.$b.xa[obj[i].__gm_id].setMap(null);
		//_gmid.setIcon('hundlatrin_red.jpg'); for status change
		break;
		//map._map.Zb.wa[obj[i].__gm_id].setMap(null);
		
	 
	 
		/* //map._map.Xb.ta[obj[i].__gm_id].visible=false;
		console.log('gfgfg');
		console.log(map._map.Zb.wa[obj[i].__gm_id].id);
		console.log(map._map.Zb.wa[obj[i].__gm_id].title);
		poicurrenttitle=map._map.Zb.wa[obj[i].__gm_id].title;
		_gmid= map._map.Zb.wa[obj[i].__gm_id];
		//map._map.Zb.wa[obj[i].__gm_id].setMap(null);
		break;
		//map._map.Zb.wa[obj[i].__gm_id].setMap(null); */
	} 
	
}
		//end 
		
  //For Hacking to remove block option of new link 
  Ext.util.openLink = function(href) {
  var link = document.createElement('a');
  link.setAttribute('href', href);
  link.setAttribute('target','_blank');
  var clickevent = document.createEvent('Event');
  clickevent.initEvent('click', true, false);
  link.dispatchEvent(clickevent);
  return false;
}

	Ext.Ajax.request({
				  
			url:'http://192.168.86.33/WebApplicationNormal/ReportComment.ashx',
			params: {Poiname:poicurrenttitle,Poilatitude:_gmid.position.$a,Poilongitude:_gmid.position.ab},
			method:'POST',
			type:'ajax',  
			success: function(response, opts) {
			try{
			var count=0;
			
			
			
			console.log('dsdsd');
			console.log('server-side success with status code hello success',+response.responseText);
			var obj = Ext.decode(response.responseText);
			
			console.log(obj);
			if(obj[0].responsetype=='Success'){
				//Ext.getCmp('reportform').setValues({Description:""});;
				//Ext.getCmp('reportform').hide();
				//alert('ghghgh');
				Ext.util.openLink('http://192.168.86.33/sencha/examples/mvctest/disqus.html?Id='+obj[0].reportpoiid+'&Latitude='+obj[0].latitude+'&Longitude='+obj[0].longitude+'&Poiname='+obj[0].poiname+'&Status='+obj[0].status+'');
				//window.open('http://192.168.86.33/sencha/examples/mvctest/disqus.html?Id='+obj[0].reportpoiid+'&Latitude='+obj[0].latitude+'&Longitude='+obj[0].longitude+'&Poiname='+obj[0].poiname+'&Status='+obj[0].status+'');
			
		}
		else if (obj[0].responsetype=='Error')
		{
		  alert('Error');		
		}
		else{
			alert('Error');
		}
			
	
		}
		catch(ex){
			Ext.Msg.alert('Data Server Error ', ex);
			
		}
    },
    failure: function(response, opts) {
		var obj = Ext.decode(response.responseText);
		console.dir(obj);
        console.log('server-side failure with status code ' + response.status);
		Ext.Msg.alert('Error', 'Resonse error');
    }
}); 


	
		//window.open('http://192.168.86.33/sencha_myapp/app/disqus.html?Id=1&Latitude=56.1445545450&Longitude=14.0');
	}
		
});
