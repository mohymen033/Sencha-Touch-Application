var markers = [];
var markersobj = {};

Ext.define('MyApp.view.Gmap', {
			extend:'Ext.Map',
			xtype:'gmap',
			alias:'widget.mymap',
			id:'gmap1',
			requires:['MyApp.view.form.Reportforms'],
			
			config:{		
			fullscreen:true,
			useCurrentLocation:false,
			getLocation: true,		
            mapOptions : {
                center : new google.maps.LatLng(56.1770509, 14.842081),
				zoom :17,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
				zoomControlOptions: {style: google.maps.ZoomControlStyle.LARGE},
				panControl: true,
				zoomControl: true,
				mapTypeControl: true,
				scaleControl: true,
				streetViewControl: true,
				overviewMapControl: true
					
            },
			
			listeners : {
               maprender : function initialize(comp, map) {
			  
			  
			  var  geocoder = new google.maps.Geocoder();
			  var address;
			   //FOR BOUND THE MAP FOR REPORTING
			    var strictBounds = new google.maps.LatLngBounds(
							new google.maps.LatLng(56.144218,14.667755), 
							new google.maps.LatLng(56.335539,15.055034)
					);
				
				
			 /*  var t = setTimeout("window.location.reload(true)",300000);
			   var marker = new google.maps.Marker({
                        position: new google.maps.LatLng(56.1770509, 14.842081),
						 map: map,
						 
						draggable:true,
						visible: true
						
						}); */	
			 //comp._allowHighAccuracy=true;
				//console.log(comp._geo._latitude,comp._geo._latitude);

  /*  if (navigator.geolocation) { 
  alert('sdsd');
     navigator.geolocation.getCurrentPosition(function(position) { 
           
	
	 var pos = new google.maps.LatLng(position.coords.latitude,
                                             position.coords.longitude);
			alert('fdfdf');
            var infowindow = new google.maps.InfoWindow({
              map: map,
              position: pos,
              content: 'Location found using HTML5.'
            });

            map.setCenter(pos);
    }, function(error) {
      alert("Error occurred dffd. Error code: " + error.code);
      // error.code can be:
      //   0: unknown error
      //   1: permission denied
      //   2: position unavailable (error response from locaton provider)
      //   3: timed out
    },{timeout:1000});  
  } ; */
   
			   //
			 //  alert('dsdsd');
			   	
			   //var markers=[];
			   //var markersobj={};
			   var markerid=0;
			  // var x;
			   var latitude;
			  
			           //console.log('heresdsds');
					  if (navigator.geolocation) {
				
				/* var pos=new google.maps.LatLng(56.1770509, 14.842081);
					 
					  
					  var marker=addMarker(pos,map); */
				//Use current location enabled/disabled with respect to geo location enabled
				
				/* if(Ext.getCmp('gmap')._geo==false)
					{
					Ext.getCmp('gmap')._useCurrentLocation=false;
					alert('current location not enabled');
					}
				else if(Ext.getCmp('gmap')._geo==true)
					{
					Ext.getCmp('gmap')._useCurrentLocation=true;
					alert('current location enabled');
					} */
				//End logic Use current location enabled/disabled with respect to geo location enabled	
				
				navigator.geolocation.getCurrentPosition(function (position) {
				
					 //alert('get the position');
				  latitude= position.coords.latitude;
				  longitude= position.coords.longitude;
				 	
					var pos=new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
					 map.setCenter(pos);
					var i=1;
						
					
					
					
					
				  Ext.Ajax.request({
				  
			url:'http://192.168.86.33/WebApplicationNormal/GetDatafromWCF.ashx',
			
			method:'POST',
			type:'ajax',  
			success: function(response, opts) {
			try{
			var count=0;
			//alert('ajax success to load the poi data information');
			console.log('dsdsd');
			console.log('server-side success with status code hello success',+response.responseText);
			var obj = Ext.decode(response.responseText);
			
			//console.log(obj);
			//count total element
			//console.log(obj.Employees.length);
			//console.log(obj.Employees[0].Id);
			console.dir(pos);
			//var i=0;
			for(i=0;i<obj.length;i++){
			//console.dir(obj.Employees[i].Latitude);
			//var latitude1=latitude;
			//console.dir(latitude+0.5)
			//if(latitude+1.5>=(obj[i].poiLatitude)){
			var newposition=new google.maps.LatLng(obj[i].poiLatitude, obj[i].poiLongitude);
		
			//var p1 = new google.maps.LatLng(position, 14.848572);
			//var p2 = new google.maps.LatLng(56.195374, 14.848626);
			var x=(google.maps.geometry.spherical.computeDistanceBetween(pos, newposition));//.toFixed(5);
		
			if(x<50){
			var marker=addMarker(newposition,map);
			markers.push(marker);
					marker.id=markerid;
					  markers[markerid].title=obj[i].poiName;
					  
					  
					//  poiTypeShortName,poiReportStatus
					  //Here will be logic to autoselect point of interest type
							if(obj[i].poiTypeShortName=="H" && obj[i].poiReportStatus==null){
							
							marker.setIcon('hundlatrin.jpg');
							
							}
							else if(obj[i].poiTypeShortName=="H" && obj[i].poiReportStatus!=null){
							
							marker.setIcon('hundlatrin_red.jpg');
							
							}
							
							else if (obj[i].poiTypeShortName=="P" && obj[i].poiReportStatus==null){
							
							marker.setIcon('Papperskorgar.jpg');
							
							}
							else if (obj[i].poiTypeShortName=="P" && obj[i].poiReportStatus!=null){
							
							marker.setIcon('Papperskorgar_red.jpg');
							
							}
							else if (obj[i].poiTypeShortName	=="B" && obj[i].poiReportStatus==null){
							
							marker.setIcon('Lyktstolpar.jpg');
							
							}
							else if (obj[i].poiTypeShortName	=="B" && obj[i].poiReportStatus!=null){
							
							marker.setIcon('Lyktstolpar_red.jpg');
							
							}
							else if (obj[i].poiTypeShortName=="BA" && obj[i].poiReportStatus==null){
							
							marker.setIcon('Parkeringsautomater.jpg');
							
							}
							else if (obj[i].poiTypeShortName=="BA" && obj[i].poiReportStatus!=null){
							
							marker.setIcon('Parkeringsautomater_red.jpg');
							
							}
							else if (obj[i].poiTypeShortName=="T" && obj[i].poiReportStatus==null){
							
							marker.setIcon('spanare.jpg');
							
							}
							else if (obj[i].poiTypeShortName=="T" && obj[i].poiReportStatus!=null){
							
							marker.setIcon('synpunkt.jpg');
							
							}
						
							
					  markerid++;
					  //marker.id=obj.Employees[i].Id;
					  //markers[i].title='POI-'+obj.Employees[i].Id;
					  count++;
				}
			//markers.push(marker);
			//map.setCenter(new google.maps.LatLng(56.207509, 14.842081));
		//}
		
	}
	console.log(count);	
	//console.log(markers[0]);
		}
		catch(ex){
			//Ext.Msg.alert('Data Server Error poi data Can not  load  ', ex);
			
		}
    },
    failure: function(response, opts) {
		var obj = Ext.decode(response.responseText);
		console.dir(obj);
        console.log('server-side failure with status code ' + response.status);
		//Ext.Msg.alert('Error', 'Resonse Get Poi Data error');
    }
}); 

  },function (error){
	alert("Position error occurred . Error code: " + error.code);
	
  });
	
	} 
	else {
		alert('geo location is not supported by Browser');
		var pos=new google.maps.LatLng(56.1770509, 14.842081);
        var marker=addMarker(pos,map);
					
	}
	

				
					  
				       //round number
					  Number.prototype.round = function (places) {
					      places = Math.pow(10, places);
					      return Math.round(this * places) / places;
					  }

					  function getMarkerUniqueId(markerlatitude,markerlongitude){
					  
					      return markerlatitude.round(7) + "," + markerlongitude.round(7);

					  }
				
				
			 
					var maplistener=google.maps.event.addListener(map,'click',function(event)
					{
										
				
					  //  var markers={};
			  
			    var markerid=0;
			   
			 console.log(map);
			
			 var count = 0;
					    // this is added to add and remove test by id
			 
			 var marker = addMarker(event.latLng, map);
			 var markerid = marker.__gm_id;
			 alert('sdsds');

			// var num = roundToTwo(event.latLng);
			 var number = event.latLng.nb;
			 //console.log(number.nb);
			 var num = getMarkerUniqueId(event.latLng.nb, event.latLng.ob);

			 markers[num] = marker;
			 
			 var marker1 = markers[num];
		    
			// marker1.setMap(null);
			// delete markers[num];
		    console.log(markers);
// this is end 
				/*
				var obj1=map.C.bc.xa;
			console.log(obj1);
			
			for (var i in obj1) {
	
	
	 
	
		map.C.bc.xa[obj1[i].__gm_id].setMap(null);
		
		
		
		count++;
	 
	
	
} */
//alert(count);

				console.log(event.latLng);			
						try{
							  Ext.Ajax.request({
				  
			url:'http://192.168.86.33/WebApplicationNormal/GetDatafromWCF.ashx',
		
			method:'POST',
			type:'ajax',  
			success: function(response, opts) {
			try{
			 count=0;
			//alert('ajax success to load the poi data information');
			console.log('dsdsd');
			console.log('server-side success with status code hello success',+response.responseText);
			
		
			
			var obj = Ext.decode(response.responseText);
			
			//console.log(obj);
			console.log('dsdsd1');
			console.log(event.latLng);
			//count total element
			//console.log(obj.length);
			//console.log(obj[0].Id);
			//console.dir(pos);
			//var i=0;
			
				
			
			for(i=0;i<obj.length;i++){
			
			var newposition=new google.maps.LatLng(obj[i].poiLatitude, obj[i].poiLongitude);
		
			
			var x=(google.maps.geometry.spherical.computeDistanceBetween(event.latLng, newposition));//.toFixed(5);
		
			if(x<50){
			var marker=addMarker(newposition,map);
			markers.push(marker);
					marker.id=markerid;
					  markers[markerid].title=obj[i].poiName;
					 
				
					  
					  //Here will be logic to autoselect point of interest type
							if(obj[i].poiTypeShortName=="H" && obj[i].poiReportStatus==null){
							
							marker.setIcon('hundlatrin.jpg');
							
							}
							else if(obj[i].poiTypeShortName=="H" && obj[i].poiReportStatus!=null){
							
							marker.setIcon('hundlatrin_red.jpg');
							
							}
							
							else if (obj[i].poiTypeShortName=="P" && obj[i].poiReportStatus==null){
							
							marker.setIcon('Papperskorgar.jpg');
							
							}
							else if (obj[i].poiTypeShortName=="P" && obj[i].poiReportStatus!=null){
							
							marker.setIcon('Papperskorgar_red.jpg');
							
							}
							else if (obj[i].poiTypeShortName	=="B" && obj[i].poiReportStatus==null){
							
							marker.setIcon('Lyktstolpar.jpg');
							
							}
							else if (obj[i].poiTypeShortName	=="B" && obj[i].poiReportStatus!=null){
							
							marker.setIcon('Lyktstolpar_red.jpg');
							
							}
							else if (obj[i].poiTypeShortName=="BA" && obj[i].poiReportStatus==null){
							
							marker.setIcon('Parkeringsautomater.jpg');
							
							}
							else if (obj[i].poiTypeShortName=="BA" && obj[i].poiReportStatus!=null){
							
							marker.setIcon('Parkeringsautomater_red.jpg');
							
							}
							else if (obj[i].poiTypeShortName=="T" && obj[i].poiReportStatus==null){
							
							marker.setIcon('spanare.jpg');
							
							}
							else if (obj[i].poiTypeShortName=="T" && obj[i].poiReportStatus!=null){
							
							marker.setIcon('synpunkt.jpg');
							
							}
							
							
							
					   markerid++;
					  //marker.id=obj[i].Id;
					  //markers[i].title='POI-'+obj[i].Id;
					  count++;
				}
				
			//markers.push(marker);
			//map.setCenter(new google.maps.LatLng(56.207509, 14.842081));
		//}
		
	}
	//console.log(count);	
	//console.log(markers[0]);
		}
		catch(ex){
			Ext.Msg.alert('Data Server Error click map Can not load correctly ', ex);
			
		}
    },
    failure: function(response, opts) {
		//var obj = Ext.decode(response.responseText);
		//console.dir(obj);
		marker.setMap(null);
		//console.dir(response.responseText);
        console.log('server-side failure with status code ' + response.status);
		//Ext.Msg.alert('Error', 'Resonse error map click and failure ajax');
    }
}); 

		}
catch(ex ){return;}		
				
				
						// Out of bounds of the predefined map logic start here

						var c = event.latLng
						console.log(c);
						x = c.lng();
						y = c.lat();
						maxX = strictBounds.getNorthEast().lng();
						console.log(maxX);
						maxY = strictBounds.getNorthEast().lat();
						minX = strictBounds.getSouthWest().lng();
						minY = strictBounds.getSouthWest().lat();

						if (x < minX) {//x = minX;
						alert('You are out side the bound area');return;}
						if (x > maxX) {//x = maxX;
						alert('You are out side the bound area');return;}
						if (y < minY) {//y = minY;
						alert('You are out side the bound area');return;}
						if (y > maxY) {//y = maxY;
						alert('You are out side the bound area');return;}

					/////End logic of Out side area calculation
	 
						
						//Start logic for poi insert
						
						
						
						//alert(event.latLng);
						var marker=addMarker(event.latLng,map);
						
						alert('marker added in boundary area');
						console.log(event);
						marker.id=markerid;
						console.log(event.latLng);
						console.log(markerid);
						
						//map.setCenter(event.latLng);
						markers.push(marker);
						marker.title="Temp";
						//markers[markerid].title='Temp';
					
						marker.setIcon('spanare.JPG');
						markerid++;
						
				
					
						var poiid=marker.get("id");
						//alert(poiid);
						//alert(markers[poiid].title);
						
						/* var poiformPanel=Ext.getCmp('poiforms') || new MyApp.view.form.Poiforms();
						poiformPanel.setValues({poitempid:""+poiid+""});
						poiformPanel.setValues({latitude:""+y+""});
						poiformPanel.setValues({longitude:""+x+""});
						
						
							//Get the address of the point
					geocoder.geocode({'latLng': event.latLng}, function(results, status) {
					if (status == google.maps.GeocoderStatus.OK) {
					if (results[0]) {
					console.log(results);
					console.log(results[0].formatted_address);
					address=results[0].formatted_address;
					console.log(address);
					poiformPanel.setValues({poiplace:""+address+""});
					 }
					}
					}); */
					
					
						//poiformPanel.show();
						
							//
							
				
					});
					
				
					
					/* var image = new google.maps.MarkerImage("hundlatrin.jpg",
					// This marker is 20 pixels wide by 32 pixels tall.
						new google.maps.Size(20, 62),
						// The origin for this image is 0,0.
						new google.maps.Point(0,0),
						// The anchor for this image is the base of the flagpole at 0,32.
						new google.maps.Point(0, 32)); */
						
					
			function addMarker(location,map){
			
	
						
				var marker = new google.maps.Marker({
                        position: location,
						 map: map,
						 
						//draggable:true,
						visible: true
						
						});	
						
					 
					 								
				var x = google.maps.event.addListener(marker, 'click', function (event) {
                    //marker remove by id option
				    console.log(marker);
				    alert('marker clicked');
				    var markerId = getMarkerUniqueId(event.latLng.nb, event.latLng.ob);
				    var marker = markers[markerId];
				    console.log(marker);

				   // marker.setMap(null); // set markers setMap to null to remove it from map
				   // delete markers[markerId]; // delete marker instance from markers object
				    console.log(markers);

				    // end marker remove by id option

					var formPanel=Ext.getCmp('reportform') || new MyApp.view.form.Reportforms();
					
					formPanel.setValues({ poiid: markerId });
					formPanel.show();
					return;
					//alert(localStorage.getItem("UserroleName"));
			 Ext.getCmp('hidereportfield').hide();
			
			if (localStorage.getItem("UserroleName")=="SuperAdmin")
			{
				Ext.getCmp('hidereportfield').show();
											
			}
			else if(localStorage.getItem("UserroleName")=="Admin")
			{
			Ext.getCmp('hidereportfield').show();
			}
			else if(localStorage.getItem("UserroleName")=="Normal")
			{
											
			 Ext.getCmp('hidereportfield').hide();
											
			}
			else
			{
			 Ext.getCmp('hidereportfield').hide();
			}
			
					
					 var c = event.latLng
						console.log(c);
						x = c.lng();
						y = c.lat();
						
							//For Checking of poi and report exist
			
					     try {

					         Ext.Viewport.add(formPanel);
                             
					         formPanel.setValues({ poiid: "" + c + "" });
					         formPanel.show();
 Ext.Ajax.request({
				  
			url:'http://192.168.86.33/WebApplicationNormal/PoiandErrorDataisExist.ashx',
			params: {Poiname:marker.get("title"),Poilatitude:y,Poilongitude:x},
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
			
			
			
			//alert(localStorage.getItem("UserroleName"));
			
			
			if (localStorage.getItem("UserroleName")=="SuperAdmin")
			{
				Ext.getCmp('hidereportfield').show();
											
			}
			else if(localStorage.getItem("UserroleName")=="Admin")
			{
			Ext.getCmp('hidereportfield').show();
			}
			else if(localStorage.getItem("UserroleName")=="Normal")
			{
											
			 Ext.getCmp('hidereportfield').hide();
											
			}
			else
			{
			 Ext.getCmp('hidereportfield').hide();
			}
										
				var poiid=marker.get("id");
			var poititle=marker.get("title");
			
			if(poititle.substring(0,1)	=="H"){
								formPanel.setValues({Pointtype:"Hundlatriner"});
							}
							else if (poititle.substring(0,1)	=="P"){
							formPanel.setValues({Pointtype:"Papperskorgar"});
							}
							else if ((poititle.substring(0,1)	=="B")&&(poititle.substring(1,2)!="A")){
							formPanel.setValues({Pointtype:"Gatubelysningsstolpar"});
							}
							else if ((poititle.substring(0,1)	=="B")&&(poititle.substring(1,2)=="A")){
							formPanel.setValues({Pointtype:"Parkeringsautomater"});
							}
							else
							{
								formPanel.setValues({Pointtype:"Temporary Point"});
								formPanel.setValues({poiname:""});
							}
							

			if (obj[0].Message=='POI NOT EXIST') //dynamic point
				{
				if (localStorage.getItem("UserroleName")=="SuperAdmin")
			{
				Ext.getCmp('hidereportfield').show();
											
			}
			else if(localStorage.getItem("UserroleName")=="Admin")
			{
			Ext.getCmp('hidereportfield').show();
			}
			else{
			Ext.getCmp('hidereportfield').hide();
			}
				 
					//alert('poi not exist');
					//dynamic point form
					
					//var formPanel=Ext.getCmp('reportform') || new MyApp.view.form.Reportforms();
							//alert(marker.get("title"));
							Ext.Viewport.add(formPanel);
							
									
							var poiid=marker.get("id");
							formPanel.setValues({poiid:""+poiid+""});
							formPanel.setValues({poistatus:"Operational"});
							formPanel.setDisabled(false);
							formPanel.show();
							
							Ext.getCmp('reportcomment').hide();
							Ext.getCmp('reportok').hide();
							
								Ext.getCmp('reportexit').show();
							Ext.getCmp('reportreset').show();
							Ext.getCmp('reportsave').show();
							Ext.getCmp('searchtextfield').hide();
						
				}
			if(obj[0].Message=='REPORT NOT EXIST') //static point report not exist
				{
						 Ext.getCmp('hidereportfield').hide();
				//alert('REPORT not exist');				
				//static point form
				
				//var formPanel=Ext.getCmp('reportform') || new MyApp.view.form.Reportforms();
							
							
							

							Ext.Viewport.add(formPanel);
						
									formPanel.show();
							//var poiid=marker.get("id");
							//var poititle=marker.get("title");
							
							formPanel.setValues({poiid:""+poiid+""});
							formPanel.setValues({poiname:""+poititle+""});
							formPanel.setValues({poistatus:"Operational"});
							formPanel.show();	
							formPanel.setDisabled(false);
							Ext.getCmp('reportcomment').hide();
							Ext.getCmp('reportok').hide();
							
							Ext.getCmp('reportexit').show();
							Ext.getCmp('reportreset').show();
							Ext.getCmp('reportsave').show();
							
							//marker.setMap(null);
							
							Ext.getCmp('searchtextfield').hide();
				}
			if (obj[0].Message=='REPORT EXIST') //report exist all type
				{
					 Ext.getCmp('hidereportfield').hide();
								
					Ext.getCmp('searchtextfield').hide();
					//alert('REPORT exist');
					
					//Get description
					
					Ext.Ajax.request({
				  
			url:'http://192.168.86.33/WebApplicationNormal/ReportComment.ashx',
			params: {Poiname:marker.get("title"),Poilatitude:y,Poilongitude:x},
			
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
			
		
				//var poiid=marker.get("id");
					//alert(poiid);
				//	var formPanel=Ext.getCmp('reportform') || new MyApp.view.form.Reportforms();
					formPanel.setValues({poiid:""+poiid+""});
					formPanel.setValues({poiname:""+poititle+""});
					formPanel.setValues({Description:""+obj[0].Description+""});
					formPanel.setValues({poistatus:""+obj[0].status+""});
					formPanel.setDisabled(true);
					formPanel.show();
					Ext.getCmp('reportexit').hide();
					Ext.getCmp('reportreset').hide();
					Ext.getCmp('reportsave').hide();
					
					Ext.getCmp('reportcomment').show();
							Ext.getCmp('reportok').show();
			
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
			Ext.Msg.alert('Data Server Error Report Comment', ex);
			
		}
    },
    failure: function(response, opts) {
		var obj = Ext.decode(response.responseText);
		console.dir(obj);
        console.log('server-side failure with status code ' + response.status);
		Ext.Msg.alert('Error', 'Resonse ReportComment error');
    }
}); 
					
					//End get Description
					
				
					

					
						
				}
			
		}
		else if (obj[0].responsetype=='Error')
		{
		
		alert(obj[0].Message);
		
				
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
	alert(response);
	//marker.setMap(null);
		//var obj = Ext.decode(response.responseText);
		//console.dir(obj);
        console.log('server-side failure with status code ' + response.status);
		Ext.Msg.alert('Error', 'Resonse PoiandErrorDataisExist error');
    }
}); 
							
	}
catch(ex){
alert('fgfg');

}	
			
		
		//End poi and report exist
										
							
			
	
							//var formshowcreatereportPanel=Ext.getCmp('showcreatereportforms') || new MyApp.view.form.ShowCreateReportforms();
							//formshowcreatereportPanel.show();
							
							//console.log(marker);
							
							//console.log(marker.get("id"));
							
							//var poiid=marker.get("id");
							
							//var formPanel=Ext.getCmp('reportform') || new MyApp.view.form.Reportforms();
							
							//Ext.Viewport.add(formPanel);
							
									
							
							//formPanel.setValues({poiid:""+poiid+""});
							//console.log('title chnage');
							//console.log(marker.get("title"));
							//alert(poiid);
							//alert(marker.get("title"));
							
							/* if(marker.get("title")=='T')
								{this.setMap(null);} */
							
							//for title add to get latter when report create
							
						
							/* //Here will be logic to autoselect point of interest type
							if(markers[poiid].title.substring(0,1)	=="H"){
							formPanel.setValues({Poitype: "Hundlatriner"});
							alert(markers[poiid].title);
							marker.setIcon('hundlatrin_red.jpg');
							}
							else if (markers[poiid].title.substring(0,1)	=="P"){
							formPanel.setValues({Poitype: "Papperskorgar"});
							alert(markers[poiid].title);
							marker.setIcon('Papperskorgar_red.jpg');
							}
							else if ((markers[poiid].title.substring(0,1)	=="B")&&(markers[poiid].title.substring(1,2)!="A")){
							formPanel.setValues({Poitype: "Gatubelysningsstolpar"});
							alert(markers[poiid].title);
							marker.setIcon('Lyktstolpar_red.jpg');
							}
							else if ((markers[poiid].title.substring(0,1)	=="B")&&(markers[poiid].title.substring(1,2)=="A")){
							formPanel.setValues({Poitype: "Parkeringsautomater"});
							alert(markers[poiid].title);
							marker.setIcon('Parkeringsautomater_red.jpg');
							}
							else
							{
								
								//marker.setIcon('formal.jpg');
							}
							
								if(markers[poiid].title=="H"){
							formPanel.setValues({Poitype: "Hundlatriner"});
							alert(markers[poiid].title);
							marker.setIcon('hundlatrin_red.jpg');
							}
							else if (markers[poiid].title=="P"){
							formPanel.setValues({Poitype: "Papperskorgar"});
							alert(markers[poiid].title);
							marker.setIcon('Papperskorgar_red.jpg');
							}
							else if ((markers[poiid].title=="B")){
							formPanel.setValues({Poitype: "Gatubelysningsstolpar"});
							alert(markers[poiid].title);
							marker.setIcon('Lyktstolpar_red.jpg');
							}
							else if ((markers[poiid].title.substring(0,1)	=="BA")){
							formPanel.setValues({Poitype: "Parkeringsautomater"});
							alert(markers[poiid].title);
							marker.setIcon('Parkeringsautomater_red.jpg');
							} */
							
							
							//var fromvalue= formPanel.getValues();
							//console.log(fromvalue);	
							

						
						});	 
				
						
						return marker;
								
			
				}
				
			
  
					/* function loadMarker() {
						new google.maps.Marker({position: new google.maps.LatLng(56.1770509, 14.842081), map: map, title:"Jouw locatie!",draggable:true});
						alert('sdsdsd');
						}; */
						
				//setInterval(function() { loadMarker(); }, 5000);
				//for clear all the 
				  function clearOverlays() {
					for (var i = 0; i < markers.length; i++ ) {
					markers[i].setMap(null);
						}
					
				}  
				
				
				function clearall(){
					//var count=0;
					var obj1=map.C.bc.xa;
					//console.log(obj1);
					for (var i in obj1) {
					map.C.bc.xa[obj1[i].__gm_id].setMap(null);
					//count++;
				} 
			}
				//var mc = new MarkerClusterer(map, markers);
				
				setInterval(function() { clearall(); markers = []; initialize(comp, map); }, 600000);
				//setTimeout("window.location.reload(true)",160000);
				

				//setTimeout(function() { loadMarker(); },5000);
				
			  // var t = setTimeout("window.location.reload(true)",1160000);
				
             },
			 scope: this,
			 async : false
				
				
            }
		}
    });