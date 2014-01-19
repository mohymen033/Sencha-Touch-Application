/*  Ext.define('Ext.textara.override', {
                    override: 'Ext.field.TextArea',
                    doSetHeight: function(newHeight) {
                        this.callParent(arguments);
                        var component = this.getComponent();
                        component.input.setHeight(newHeight);
                    }
                }); 
  */
Ext.define('MyApp.view.form.Reportforms', {
    extend: 'Ext.form.Panel',
    xtype:'reportform',
	id:'reportform',
	
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
					title: 'Report Information Form',
                    instructions: 'Please enter the information above.',
                    defaults: {
                        required  : true,//,
                        labelAlign: 'center',
                        labelWidth: '35%'
						
                    },
					
					items: [
					{
					xtype: 'hiddenfield',
                    name: 'poiid',
					id:'poiid',
                    value:''
					}
					,
					{xtype: 'hiddenfield',
                    name: 'userId',
                    value:'test1'
					},
					{
                    xtype: 'textfield',
                    name : 'name',
                    label: 'Name:',
					id:'name',
                    useClearIcon: true,
                            autoCapitalize : false,
							listeners: {
							change: function(field, newValue, oldValue) {
									 alert('Value changed');
									 
								},
								
							
 
								}
                        },								
						{
                            xtype: 'emailfield',
                            name : 'Email',
                            label: 'Email Address:',
                            useClearIcon: true,
                            autoCapitalize : false,
							placeHolder: 'me@sencha.com',
							allowBlank:false
                        },	
						{
                            xtype: 'textareafield',
                            name : 'Description',
							id:'reportid',
							
							//scroll: 'vertical',
							inline: { wrap: true },
							
							label: 'Report <br> Description'
							/* ,
							useMask:false,
							maxRows:3 */
							//,
							//labelWidth:'41%'						
                        },
						
						{
						
                            xtype: 'selectfield',
							
							label: 'Point of Interest </br> Object Type',
							name:'Poitype',
                            store: 'Poitype',   //this will be for poi type
							displayField: 'ReportTypeName', 		
							valueField: 'ReportTypeName',
							labelWidth:'60%'
							
					    },
						{
                            xtype: 'selectfield',
							label: 'Report Type',
							name:'Reporttype',
                            store: 'Reporttype',   //this will be for poi type
							displayField: 'ReportPoiTypeName', 		
							valueField: 'ReportPoiTypeId',
							labelWidth:'60%'
							
					    }/* , 
						
						{
							
							html:'<form><div id="recaptcha_div_report"></div></form>',
							id:'recaptcha'
							  
						},
						{
							html:'<div id="disqus_thread"></div>'
						} */
					]
					 
					},					
					{
					
                    xtype: 'toolbar',
                    docked: 'bottom',
					id:'toolbar1',
					
                    items: [
                       
                        {
                            text: 'Load',
                            handler: function() {
						
							  var form= Ext.getCmp('formtest');
							  console.log(form);
							  form.setValues({name:'dfdfdf'});
							 
                            }
                        },
						 {xtype: 'spacer'},
                        {
                            text: 'Exit',
							id:'reportexit'
                        },
						
                        {xtype: 'spacer'},
                        {
                            text: 'Reset',
							id:'reportreset'
                        },
						{xtype: 'spacer'},
                        {
                            text: 'Save',
                            ui: 'confirm',
							id:'reportsave'							
                      }
                    ]
                }
            ]/* ,
			listeners: {
						//at the time of show event recaptcha will be add 
						'show': function (thisComponent) {			
						Recaptcha.create("6LdC9c0SAAAAAERjCrgFsaf2Jv_gfhkHsCq3TZ1x", "recaptcha_div_report", {
											theme: "red",
											callback: Recaptcha.focus_response_field});
						}
					} */

  


  }
	
}); 




