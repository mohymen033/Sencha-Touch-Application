Ext.define('MyApp.view.form.AssignedReportforms', {
    extend: 'Ext.form.Panel',
    xtype:'assignedreportforms',
	id:'assignedreportforms',
	
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
			
			
			//standardSubmit:true,
			method:'post',
            items: [
			{
						xtype:'map',
						name:'assignedmap',
						id:'assignedmap',
						
						width:'100%',
						height:'150px',
						style:"margin: 1px 1px 1px 1px"
					},
					
					
					
                { 
                    xtype: 'fieldset',
					id:'fieldset',
					title: 'Report Assigned Form',
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
					id:'Reportpointtype',
					labelWidth:'0%',
					required  : false,
					value:''                     
                   },
				   {
                    xtype: 'textfield',
                    name : 'reportpoiname',
                    label: 'Id Number:',
					disabled: true,					
					id:'reportpoiname',
					labelWidth:'41%',
					required  : false,
					value:''
                  },
				{						
                            xtype: 'selectfield',							
							label: 'User List',
							name:'UserfilterList',
                            store: 'UserListStore',   //this will be for poi type
							displayField: 'UserName', 		
							valueField: 'UserName',
							labelWidth:'60%'							
			    },
				{
							xtype: 'hiddenfield',
							name: 'reportIdhidden',
							value: ''
						}				
			]					 
				},				
			{
					
                    xtype: 'toolbar',
                    docked: 'bottom',
					id:'toolbar',
					//layout:'fit',
					//style:"margin: 0px 0px 200px 10px",
					
                    items: [
                       
                       	 {xtype: 'spacer'},
                        {
                            text: 'Exit',
							ui: 'round',
							id:'assignedreportexit'
                        },
						                      
                        {
                            text: 'Save',
                            ui: 'confirm',
							id:'assignedreportsave'	
                      },
					   {xtype: 'spacer'}
                    ]
              }
          ]
  }
	
});



			
															
	
	
	