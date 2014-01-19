Ext.define('MyApp.view.GmapReport', {
			extend:'Ext.Map',
			xtype:'gmapreport',
			//alias:'widget.mymap',
			id:'gmapreport',
			requires:['MyApp.view.form.Reportforms'],
			
			config:{		
			
			useCurrentLocation:true,
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
			   	
			   var markers=[];
			   var markersobj={};
			   var markerid=0;
			  // var x;
			   var latitude;
			  
			          
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
				
					// alert('get the position');
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
			
			console.log(obj);
			//count total element
			//console.log(obj.Employees.length);
			//console.log(obj.Employees[0].Id);
			console.dir(pos);
			//var i=0;
			for(i=0;i<obj.Employees.length;i++){
			//console.dir(obj.Employees[i].Latitude);
			//var latitude1=latitude;
			//console.dir(latitude+0.5)
			//if(latitude+1.5>=(obj[i].poiLatitude)){
			var newposition=new google.maps.LatLng(obj.Employees[i].Latitude, obj.Employees[i].Longitude);
		
			//var p1 = new google.maps.LatLng(position, 14.848572);
			//var p2 = new google.maps.LatLng(56.195374, 14.848626);
			var x=(google.maps.geometry.spherical.computeDistanceBetween(pos, newposition));//.toFixed(5);
		
			if(x<20){
			var marker=addMarker(newposition,map);
			markers.push(marker);
					marker.id=markerid;
					  markers[markerid].title=obj.Employees[i].Name;
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

  },function (error){
	alert("Position error occurred . Error code: " + error.code);
	
  });
	
	} 
	else {
		alert('geo location is not supported by Browser');
		var pos=new google.maps.LatLng(56.1770509, 14.842081);
        var marker=addMarker(pos,map);
					
	}
	

				
				
				
				
				
			 
					var maplistener=google.maps.event.addListener(map,'click',function(event)
					{
										
				
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
	 
								
						var marker=addMarker(event.latLng,map);
						 marker.id=markerid;
						console.log(event.latLng);
						//map.setCenter(event.latLng);
						markers.push(marker);
						markers[markerid].title=markerid;
						markerid++;
						
							//
							/* var formPanel=Ext.getCmp('reportform') || new MyApp.view.form.Reportforms();
							
							Ext.Viewport.add(formPanel);
							
							formPanel.show();  */							
							//
						
						/* console.log(marker);
						console.log(marker.id);
						console.log(markers);
						markerid++;
						//marker.draggable=true;
						var val = marker.get("id");
						console.log('dfdf');
						console.log(val); */
						
						
						
					/* 	var x=google.maps.event.addListener(marker, 'click', function(event) {
							
							console.log('fdfd');
							console.log(marker.id);
							
							 var formPanel=Ext.getCmp('reportform') || new MyApp.view.form.Reportforms();
							
							Ext.Viewport.add(formPanel);
							
							formPanel.show(); 
							var fromvalue= formPanel.getValues();	
							console.log(fromvalue);							
						});	  */
						
					});
					
				
					
					
			function addMarker(location,map){
			
	var image = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_icon&chld=cafe|996600",
					// This marker is 20 pixels wide by 32 pixels tall.
						new google.maps.Size(20, 62),
						// The origin for this image is 0,0.
						new google.maps.Point(0,0),
						// The anchor for this image is the base of the flagpole at 0,32.
						new google.maps.Point(0, 32));
						
				var marker = new google.maps.Marker({
                        position: location,
						 map: map,
						 
						//draggable:true,
						visible: true,
						 icon:image
						
						});	
						
					 var x=google.maps.event.addListener(marker, 'click', function(event) {
							console.log(marker);
							
							console.log(marker.get("id"));
							//console.log(markers);
							var poiid=marker.get("id");
							 var formPanel=Ext.getCmp('reportform') || new MyApp.view.form.Reportforms();
							
							Ext.Viewport.add(formPanel);
							
							formPanel.show(); 
							
							formPanel.setValues({poiid:""+poiid+""});
							var fromvalue= formPanel.getValues();
							console.log(fromvalue);	
							//marker.setMap(null);
							//marker.setVisible(false);	
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
				
				setInterval(function() { clearOverlays(); markers = [];  initialize(comp,map); }, 60000);
				


				//setTimeout(function() { loadMarker(); },5000);
				
			  // var t = setTimeout("window.location.reload(true)",1160000);
				
             }
				
				
            }
		}
    });