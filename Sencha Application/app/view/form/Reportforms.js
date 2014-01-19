// overrides a class and preserves overridden functions in a new property of the prototype, 'original'
Ext.overrideOriginal = function(obj, overrides) {
	var original = {};


	for(prop in overrides)
		if(overrides.hasOwnProperty(prop) && Ext.isFunction(obj.prototype[prop]))
			original[prop] = obj.prototype[prop];


	Ext.override(obj, Ext.applyIf(overrides, { original: original }));
};


Ext.overrideOriginal(Ext.form.TextArea,  {
	lastY: undefined,


	handleTouch: function(e) { this.lastY = e.pageY; },


	handleMove: function(e) {
		var textArea = e.target;
		var top = textArea.scrollTop <= 0;
		var bottom = textArea.scrollTop + textArea.clientHeight >= textArea.scrollHeight;
		var up = e.pageY > this.lastY;
		var down = e.pageY < this.lastY;


		this.lastY = e.pageY;
		
// default (mobile safari) action when dragging past the top or bottom of a scrollable
// textarea is to scroll the containing div, so prevent that.
		if((top && up) || (bottom && down))
			e.preventDefault();
		
// Sencha disables textarea scrolling on iOS by default,
// so stop propagating the event to delegate to iOS.
		if(!(top && bottom))
			e.stopPropagation();
	},


	initEvents: function() {
		var textArea = this.fieldEl.dom;
// have to add these events directly to the DOM textarea (as opposed to this.fieldEl.on),
// otherwise they're handled after Ext.gesture.Manager and preventDefault will already have been called.


		textArea.addEventListener(
			Ext.supports.Touch ? 'touchstart' : 'mousedown',
			Ext.createDelegate(this.handleTouch, this),
			false);
		
		textArea.addEventListener(
			Ext.supports.Touch ? 'touchmove' : 'mousemove',
			Ext.createDelegate(this.handleMove, this),
			false);
			
		this.original.initEvents.apply(this, arguments);
	},
});



Messages = {
    WELCOME: 'Hello World',
    PERSONAL_INFO: 'Personal Information',
    NAME: 'Name',
    PASSWORD: 'Password',
    RE_PASSWORD: 'Re-enter Password',
    EMAIL: 'E-mail',
    PERSONAL_INST: 'Please enter the information above',
    RESET: 'Reset',
    SAVE: 'Save',
    SAVE_MSG: 'In real implementation, this will be saved!',
    INFO: 'Info'
};



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
	 scrollable: {
						direction: 'vertical',
						indicators: false
							},
						
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
					{
					    xtype: 'hiddenfield',
                       	name: 'userId',
					id:'userId',
                    value:'test1'
					},
					
					{
                    xtype: 'textfield',
                    name : 'Pointtype',
                    //label: 'Lamppost',
					disabled: true,					
					id:'Pointtype',
					labelWidth:'0%',
					required  : false,
					value:''
                 
                     
                   },
					{
                    xtype: 'textfield',
                    name : 'poiname',
                    label: 'Id Number:',
					disabled: true,					
					id:'poiname',
					labelWidth:'41%',
					required  : false,
					value:''
                 
                     
                   },	
			   
						{
                            xtype: 'emailfield',
                            name : 'poistatus',
                            label: 'Status:',
							disabled: true,	
                           labelWidth:'41%',
						   required  : true,
						   value:'Operational'
                        },
						{
						
                            xtype: 'selectfield',
							id:'hidereportfield',
							label: Messages.INFO == "Info" ? 'Point Type' : '2',//'Point Type', //
							name:'SelectPointType',
                            store: 'PoiListStore',   //this will be for poi type
							displayField: 'PoitypeName', 		
							valueField: 'PoitypeName',
							labelWidth:'60%'
							
							
					   },						
						{
                            xtype: 'textareafield',
                            name : 'Description',
							id:'reportid',
							height : 500,
							 scrollable: {
						direction: 'vertical',
						indicators: false
							},
							 //anchor    : '100%',
							//scroll: 'vertical',
							inline: { wrap: true },
							
							label: 'Report <br> Description'//,
							
						
							/* ,
							useMask:false,
							maxRows:3 */
							//,
							//labelWidth:'41%'						
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
                            text: 'OK',
							id:'reportok'
                        },
                       
						{
                            text: 'Comment',
							id:'reportcomment'
                        },
						/* {
                            text: 'status',
							id:'reportstatus'
                        }, */
						{xtype: 'spacer'},
						 {
                            text: 'Exit',
							id:'reportexit'
                        },
							{xtype: 'spacer'},
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
            ]

  


  }
	
});