Ext.define('MyApp.view.form.UpdateReportStatus', {
    extend: 'Ext.form.Panel',
    xtype:'updatereportstatus',
	id:'updatereportstatus',
	
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
			
			height:'100%',
			width:'100%',
			//standardSubmit:true,
			method:'post',
            items: [
			{
						xtype:'map',
						name:'updatereportstatusmap',
						id:'updatereportstatusmap',
						
						width:'80%',
						height:'150px',
						style:"margin: 1px 1px 1px 1px"
			},
					
					
					
                { 
                    xtype: 'fieldset',
					id:'fieldset',
					title: 'Report Update Form',
                    instructions: 'Please enter the information above.',
                    defaults: {
                        required  : true,
                        labelAlign: 'center',
                        labelWidth: '35%'
						
                    },
					
					items: [
                     						
						  {
                    xtype: 'textfield',
                    name : 'ReportPointtype',
                    //label: 'Lamppost',
					disabled: true,					
					id:'Reportpointtypeupdatereportstatus',
					labelWidth:'0%',
					required  : false,
					value:''                     
                   },
				   {
                    xtype: 'textfield',
                    name : 'reportpoiname',
                    label: 'Id Number:',
					disabled: true,					
					id:'reportpoinameupdatereportstatus',
					labelWidth:'41%',
					required  : false,
					value:''
                  },
				{						
                            xtype: 'selectfield',							
							label: 'Report Status',
							name:'UserfilterListupdatereportstatus',
                            store: 'ReportStatusList',   //this will be for poi type
							displayField: 'UserName', 		
							valueField: 'UserName',
							labelWidth:'60%'							
			    },
				{
							xtype: 'hiddenfield',
							name: 'reportIdhiddenforUpdatestatus',
							value: ''
				}			
			]					 
				},	
					
			{
					
                    xtype: 'toolbar',
                    docked: 'bottom',
					id:'toolbarupdatereportstatus',
					//layout:'fit',
					//style:"margin: 0px 0px 200px 10px",
					
                    items: [
                       
                       	 {xtype: 'spacer'},
                        {
                            text: 'Exit',
							ui: 'round',
							id:'updatereportstatusexit'
                        },
						                      
                        {
                            text: 'Save',
                            ui: 'confirm',
							id:'updatereportstatussave'	
                      },
					   {xtype: 'spacer'}
                    ]
              }
          ]
  }
	
});



			
															
	
	
	