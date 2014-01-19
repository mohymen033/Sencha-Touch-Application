
Ext.define('MyApp.view.form.Poiforms', {
    extend: 'Ext.form.Panel',
    xtype:'poiforms',
	id:'poiforms',
	
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
					id:'poifieldset',
					title: 'Poi Create Information Form',
                    instructions: 'Please enter the information above.',
                    defaults: {
                        required  : true,//,
                        labelAlign: 'center',
                        labelWidth: '35%'
						
                    },
					
					items: [
					{
					xtype: 'hiddenfield',
                    name: 'poitempid',
					id:'poitempid',
                    value:''
					},
					{
					xtype: 'hiddenfield',
                    name: 'latitude',
					id:'poilatitude',
                    value:''
					},
					{
					xtype: 'hiddenfield',
                    name: 'longitude',
					id:'poilongitude',
                    value:''
					},
					{
					xtype: 'hiddenfield',
                    name: 'poiplace',
					id:'poiplace',
                    value:''
					},					
					{
                    xtype: 'textfield',
                    name : 'poinamegiver',
                    label: 'Name:',
					id:'poinamegiver',
                    useClearIcon: true,
                            autoCapitalize : false,
							listeners: {
							change: function(field, newValue, oldValue) {
									 alert('Value changed');
								}
								}
                    },
					{
                    xtype: 'textfield',
                    name : 'poiname',
                    label: 'Error point</br> name :',
					id:'poiname',
					maxLength: 50,
                    useClearIcon: true,
                     autoCapitalize : false,
					 required:true,
							listeners: {
							blur: function(field) {
									 console.log(field._value);
									 if(field._value=="")
										{
										alert('Give Error Point Name');
										field.focus();
										}
								}
								}					 
                    },					
				   {
                            xtype: 'emailfield',
                            name : 'poiEmailgiver',
                            label: 'Email Address:',
                            useClearIcon: true,
                            autoCapitalize : false,
							placeHolder: 'me@sencha.com',
							allowBlank:false
                    },
						
					{
						
                            xtype: 'selectfield',
							
							label: 'Point of Interest </br> Object Type',
							name:'Poitypename',
                            store: 'Poitype',   //this will be for poi type
							displayField: 'ReportTypeName', 		
							valueField: 'ReportTypeName',
							labelWidth:'60%'
							
					   }
					]
					 
					},					
					{
					
                    xtype: 'toolbar',
                    docked: 'bottom',
					id:'poitoolbar',
					
                    items: [
                       
                      
						 {xtype: 'spacer'},
                        {
                            text: 'Exit',
							id:'poiexit'
                        },
						
                        {xtype: 'spacer'},
                        {
                            text: 'Reset',
							id:'poireset'
                        },
						{xtype: 'spacer'},
                        {
                            text: 'Save',
                            ui: 'confirm',
							id:'poisave'							
                      },
					   {xtype: 'spacer'}
                    ]
                }
            ]

  }
	
});