/*  Ext.define('Ext.textara.override', {
                    override: 'Ext.field.TextArea',
                    doSetHeight: function(newHeight) {
                        this.callParent(arguments);
                        var component = this.getComponent();
                        component.input.setHeight(newHeight);
                    }
                }); 
  */
Ext.define('MyApp.view.form.ShowCreateReportforms', {
    extend: 'Ext.form.Panel',
    xtype:'showcreatereportforms',
	id:'showcreatereportforms',
	
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

			
			
			method:'post',
            items: [
                {
                    xtype: 'fieldset',
					id:'fieldset',
					title: 'Choose Create or Show Report </br> Option',
                    //instructions: 'Please enter the information above.',
                    defaults: {
                        required  : true,//,
                        labelAlign: 'center',
                        labelWidth: '45%'
						
                    },
					
					items: [
					
						
						{
						xtype: 'selectfield',
						label: 'Choose <br> one',
						name:'showcreateoption',
						id:'showcreateoption',
						options: [
							{text: 'Chose One Option',  value: 'ChoseOption'},
							{text: 'Create Report',  value: 'Create'},
							{text: 'Show Report', value: 'Show'}
						
                    ]/* ,
					listeners:{
						change:function (field, value1){
						
					
							if(value1){
							  if(value1.data.value == "ChoseOption"){
									console.log('first');
									
									//form.items.items[0].get(0).hide();
								} else if (value1.data.value == "Create"){
									console.log('second');
									var formPanel=Ext.getCmp('reportform') || new MyApp.view.form.Reportforms();
									formPanel.show(),
									console.log(formPanel.getValues());
									var formshowcreatereportPanel=Ext.getCmp('showcreatereportforms') || new MyApp.view.form.ShowCreateReportforms();
										formshowcreatereportPanel.reset();
										formshowcreatereportPanel.hide();
									
								}
								else if (value1.data.value == "Show"){
								
								console.log('third');
								
							}
							else{
								
								console.log('else');
								
							} 
						
						}
						}
						
						} */
							
					    }
						
					]
					 
					},					
					{
					
                    xtype: 'toolbar',
                    docked: 'bottom',
					id:'toolbar1',
					
                    items: [
                       
                        
						 {xtype: 'spacer'},
                        {
                            text: 'Exit',
							id:'showcreatereportexit'
                        },
						 {xtype: 'spacer'}
                    ]
                }
            ]

  


  }
	
});