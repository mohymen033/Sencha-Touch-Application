/**
 * Controls the list of committees for a Legislator
 */
Ext.define('MyApp.controller.Poicreatereport', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.MessageBox','MyApp.view.Gmap','MyApp.view.form.Poiforms'],

    config: {
        control: {
            poiexit:{
				tap:'doExit'
			},
			poireset:{
				tap:'doReset'
			},
			poisave:{
				tap:'doSave'
			},
			showcreatereportexit:{
				tap:'doShowcreatereportexit'
				
			},
			showcreateoption:{
				change:'doShowcreateChange'
			}
			
        },
		refs: {
            poiexit: '#poiexit',
			poireset:'#poireset',
			poisave:'#poisave'
			
        }
    },
		
	doExit:function(){
	
	var map=Ext.getCmp('gmap') || new MyApp.view.Gmap();
		console.log(map);
		console.log(map._map.Zb.wa);
		
		var obj=map._map.Zb.wa;
				
			
			var poicurrenttitle;
			var _gmid;
	for (var i in obj) {
	
	 if(obj[i].id==Ext.getCmp('poiforms').getValues().poitempid){
	 
		console.log(Ext.getCmp('poiforms').getValues().poitempid);
		console.log('hello');
		console.log(map._map.Zb.wa[obj[i].__gm_id].id);
		console.log(map._map.Zb.wa[obj[i].__gm_id].title);
		map._map.Zb.wa[obj[i].__gm_id].title="hello";
		poicurrenttitle=map._map.Zb.wa[obj[i].__gm_id].title;
		_gmid= map._map.Zb.wa[obj[i].__gm_id];
		console.log(poicurrenttitle);
		obj[_gmid.__gm_id].title="go";
		console.log(_gmid);
		console.log(i);
		map._map.Zb.wa[obj[i].__gm_id].setMap(null);
		break;
		//map._map.Zb.wa[obj[i].__gm_id].setMap(null);
	} 
	
}

		Ext.getCmp('poiforms').reset();
		Ext.getCmp('poiforms').hide();
	},
	doReset:function(){
		Ext.getCmp('poiforms').setValues({poiname:''});
	},
	doSave:function(){
	
	//for get the id and title of the poi
		
		console.log(Ext.getCmp('poiforms'));
		var map=Ext.getCmp('gmap') || new MyApp.view.Gmap();
		console.log(map);
		console.log(map._map.Zb.wa);
		
		var obj=map._map.Zb.wa;
				
			
			var poicurrenttitle;
			var _gmid;
	for (var i in obj) {
	
	 if(obj[i].id==Ext.getCmp('poiforms').getValues().poitempid){
	 
		console.log(Ext.getCmp('poiforms').getValues().poitempid);
		console.log('hello');
		console.log(map._map.Zb.wa[obj[i].__gm_id].id);
		console.log(map._map.Zb.wa[obj[i].__gm_id].title);
		map._map.Zb.wa[obj[i].__gm_id].title="hello";
		poicurrenttitle=map._map.Zb.wa[obj[i].__gm_id].title;
		_gmid= map._map.Zb.wa[obj[i].__gm_id];
		console.log(poicurrenttitle);
		obj[_gmid.__gm_id].title="go";
		console.log(_gmid);
		console.log(i);
		//map._map.Zb.wa[obj[i].__gm_id].setMap(null);
		break;
		//map._map.Zb.wa[obj[i].__gm_id].setMap(null);
	} 
	
}
	
	
	
		//This alert make save button tapped position so run two times
		/* alert('fdfdf'); */
		var form=Ext.getCmp('poiforms');
			
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
	    console.log(map);					
		var x=form.getValues();
		console.log(x);
			console.log(poicurrenttitle);							
		try{
		Ext.Ajax.request({
		url:'http://192.168.86.33/WebApplicationNormal/CreatePoiData.ashx',
		params: {Name:form.getValues().poinamegiver,Email:form.getValues().poiEmailgiver,Poitypename:form.getValues().Poitypename,Poilatitude:form.getValues().latitude,
		Poilongitude:form.getValues().longitude,Poiplace:form.getValues().poiplace,Poiname:form.getValues().poiname,Loginname:localStorage.getItem("Loginname")},
		success: function(response, opts) {
		console.log(response.responseText);
		console.log('server-side success with status code hello success'+response.responseText);
		console.log(_gmid.title);
		_gmid.title="goooooooooooooo1";
		//obj[_gmid.__gm_id].title="goooo1";
		var obj = Ext.decode(response.responseText);
		console.dir(obj);
		console.log('dsdsdsd');
		if(obj[0].responsetype=='Success'){
		alert('dsdsd');
		alert("Error Point Created with id: "+obj[0].Message);
		
		//for title add to get latter when report create
		if(form.getValues().Poitypename=='Hundlatriner')
			_gmid.title="H";
		else if(form.getValues().Poitypename=='Papperskorgar')
			_gmid.title="P";
		else if(form.getValues().Poitypename=='Parkeringsautomater')
			_gmid.title="BA";
		else if(form.getValues().Poitypename=='Gatubelysningsstolpar')
		_gmid.title="B";
		
		Ext.getCmp('poiforms').reset();
		Ext.getCmp('poiforms').hide();
		}
		else if (obj[0].responsetype=='Error')
		{
		alert('dfdfd');
		alert(obj[0].Message);
		_gmid.setMap(null);						
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
		_gmid.draggable=false;
		
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
