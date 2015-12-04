requirejs.config({
	baseUrl: "../",
	paths: {
		"milletHCS": "Millet/js/millet-hcs",
	}
});

define(['jquery', 'knockout', 'milletHCS'], function($, ko, hcs){

	ko.components.register("mt-icon-btn", {
		viewModel: function(params){
			params = params ? params : {};
			this.type = params.type ? params.type : 'btn-default';
			this.icon = params.icon ? params.icon : '';
			this.label = params.label ? params.label : '';
			this.disabled = ( params.disabled === true || params.disabled === false) ? params.disabled : false;
			this.href = (params.href || params.href === '') ? params.href : undefined;
			this.clickEvent = params.clickEvent ? params.clickEvent : undefined;
			this.newpage = (params.newpage === false) ? "" : "_blank";
		},
		template: 
			"<!-- ko if: href !== undefined -->"
			+"<a class='btn' data-bind='css:type, attr: {disabled: disabled, href: href, target: newpage}, click: clickEvent'>"
				+"<i data-bind='css: icon'></i> "
				+"<span data-bind='text: label'></span>"
			+"</a>"
			+"<!-- /ko -->"
			+"<!-- ko if: href === undefined -->"
			+"<button class='btn' data-bind='css: type, click: clickEvent, attr: {disabled: disabled}'>"
				+"<i data-bind='css: icon'></i> "
				+"<span data-bind='text: label'></span>"
			+"</button>"
			+"<!-- /ko -->"
	});

	ko.components.register("mt-a", {
		viewModel: function(params){
			params = params ? params : {};
			this.label = params.label ? params.label : "";
			this.href = params.href ? params.href : "";
			this.title = params.title ? params.title : "";
			this.alt = params.alt ? params.alt : "";
			this.icon = params.icon ? params.icon : "";
		},
		template: "<a data-bind='attr: {href: href, title: title, alt: alt}'><i data-bind='css: icon'></i> <span data-bind='text: label'></span></a>"
	});

	ko.components.register("mt-img", {
		viewModel: function(params){
			params = params ? params : {};
			this.src = params.src ? params.src : "";
			this.title = params.title ? params.title : "";
			this.alt = params.alt ? params.alt : "";
			this.width = params.width ? params.width : undefined;
			this.height = params.height ? params.height : undefined;
			this.css = params.css ? params.css : "";
		},
		template: "<image data-bind='attr: {src: src, title: title, alt: alt}, css: css, style: {width: width, height: height}' />"
	});

	ko.components.register("mt-table", {
		viewModel: function(params){
			params = params ? params : {};
			this.data = params.data ? params.data : [];
			this.columns = params.columns ? params.columns : [];
			this.colNum = this.columns.length;
			for(var i=0; i<this.colNum; i++){
				this.columns[i].style = this.columns[i].style ? this.columns[i].style : "";
			}
			this.loadingMessage = params.loadingMessage ? params.loadingMessage : hcs.LOADING_STR;
			this.emptyMessage = params.emptyMessage ? params.emptyMessage : hcs.NO_DATA_STR;
		},
		template: 
            "<thead>"
                +"<tr data-bind='foreach: columns'>"
					+"<th data-bind='text: header, attr: {style: style}'></th>"
                +"</tr>"
            +"</thead>"

			+"<!-- ko if: data && data.length > 0 -->"
            +"<tbody data-bind='foreach: data'>"
                +"<tr data-bind='foreach: $parent.columns'>"
                    +"<td data-bind='text: $parent[$data.id], attr: {style: $data.style}'></td>"
                +"</tr>"
            +"</tbody>"
            +"<!-- /ko -->"

            +"<!-- ko if: !data || data.length === 0 -->"
            +"<tbody><tr><td data-bind='text: emptyMessage, attr: {colspan: colNum}' style='text-align: center;'></td></tr></tbody>"
            +"<!-- /ko -->"
	});

	// support [type='text'] [type='email'] [type='password']
	ko.components.register("mt-input", {
		viewModel: function(params){
			params = params ? params : {};
			this.id = params.id ? params.id : "";
			this.data = params.data ? params.data : undefined;
			this.type = params.type ? params.type : "input";
			this.placeholder = params.placeholder ? params.placeholder : "";
			this.label = params.label ? params.label : "";
			this.labelClass = params.labelClass ? params.labelClass : hcs.FORM_ELEMENT_LABEL_DEFAULT_CLASS;
			this.mainClass = params.mainClass ? params.mainClass : hcs.FORM_ELEMENT_MAIN_DEFAULT_CLASS;
			this.showLabel = (params.showLabel === true || params.showLabel === false) ? params.showLabel : true;
			this.disabled = (params.disabled === true || params.disabled === false) ? params.disabled : false;
		},
		template: 
			"<!-- ko if: showLabel -->"
            +"<label class='control-label' data-bind='text: label, css: labelClass, attr: {for: id}'></label>"
            +"<!-- /ko -->"
            +"<div data-bind='css: mainClass'>"
                +"<input class='form-control' data-bind='textInput: data, attr: {type: type, id: id, name:id, placeholder: placeholder, disabled: disabled}' />"
            +"</div>"
	});

	// textarea
	ko.components.register("mt-textarea", {
		viewModel: function(params){
			params = params ? params : {};
			this.id = params.id ? params.id : "";
			this.data = params.data ? params.data : undefined;
			this.placeholder = params.placeholder ? params.placeholder : "";
			this.rowNum = params.rowNum ? params.rowNum : 4;
			this.label = params.label ? params.label : "";
			this.labelClass = params.labelClass ? params.labelClass : hcs.FORM_ELEMENT_LABEL_DEFAULT_CLASS;
			this.mainClass = params.mainClass ? params.mainClass : hcs.FORM_ELEMENT_MAIN_DEFAULT_CLASS;
			this.showLabel = (params.showLabel === true || params.showLabel === false) ? params.showLabel : true;
			this.disabled = (params.disabled === true || params.disabled === false) ? params.disabled : false;
		},
		template: 
			"<!-- ko if: showLabel -->"
            +"<label class='control-label' data-bind='text: label, css: labelClass, attr: {for: id}'></label>"
            +"<!-- /ko -->"
            +"<div data-bind='css: mainClass'>"
                +"<textarea class='form-control' data-bind='textInput: data, attr: {id: id, name:id, placeholder: placeholder, disabled: disabled, rows: rowNum}'></textarea>"
            +"</div>"
	});

	// checkbox group & radio group
	ko.components.register("mt-checkbox", {
		viewModel: function(params){
			params = params ? params : {};
			this.prefix = params.prefix ? params.prefix : "";
			this.data = params.data ? params.data : undefined;   // [{desc: 'Apple', value: appleSelected}, {desc: 'Banana', value: bananaSelected}]
			for(var i=0; i<this.data.length; i++){
				this.data[i].id = this.prefix + "_" + i;
				this.data[i].disabled = (this.data[i].disabled === true || this.data[i].disabled === false) ? this.data[i].disabled : false;
			}
			this.isInline = (params.isInline === true || params.isInline === false) ? params.isInline : true;
			this.type = params.type ? params.type : undefined;
			this.label = params.label ? params.label : "";
			this.labelClass = params.labelClass ? params.labelClass : hcs.FORM_ELEMENT_LABEL_DEFAULT_CLASS;
			this.mainClass = params.mainClass ? params.mainClass : hcs.FORM_ELEMENT_MAIN_DEFAULT_CLASS;
			this.showLabel = (params.showLabel === true || params.showLabel === false) ? params.showLabel : true;
			this.disabled = (params.disabled === true || params.disabled === false) ? params.disabled : false;
		},
		template: 
			"<!-- ko if: showLabel -->"
            +"<label class='control-label' data-bind='text: label, css: labelClass'></label>"
            +"<!-- /ko -->"
            +"<div data-bind='css: mainClass, foreach: data'>"
            	+"<!-- ko if: $parent.isInline -->"
	                +"<!-- ko if: $parent.type == 'checkbox' -->"
	                +"<label class='checkbox-inline mt-checkbox-inline' data-bind='css: disabled ? \"disabled\" : \"\" '>"
	  					+"<input type='checkbox' data-bind='attr: {id: $data.id, name: $data.id, disabled: disabled}, textInput: $data.value' /> <span data-bind='text: $data.desc'><span>"
					+"</label>"
	  				+"<!-- /ko -->" 
	  				+"<!-- ko if: $parent.type == 'radio' -->"
	                +"<label class='radio-inline mt-radio-inline' data-bind='css: disabled ? \"disabled\" : \"\" '>"
	  					+"<input type='radio' data-bind='attr: {id: $data.id, name: $parent.prefix, disabled: disabled}, textInput: $data.value' /> <span data-bind='text: $data.desc'><span>"
					+"</label>"
	  				+"<!-- /ko -->" 
	  			+"<!-- /ko -->"
	  			+"<!-- ko if: !$parent.isInline -->"
	  				+"<!-- ko if: $parent.type == 'checkbox' -->"
					+"<div class='checkbox' data-bind='css: disabled ? \"disabled\" : \"\" '>"
						+"<label>"
					    	+"<input type='checkbox' data-bind='attr: {id: $data.id, name: $data.id, disabled: disabled}, textInput: $data.value' /> <span data-bind='text: $data.desc'><span>"
						+"</label>"
					+"</div>"
					+"<!-- /ko -->" 
	  				+"<!-- ko if: $parent.type == 'radio' -->"
	  				+"<div class='radio' data-bind='css: disabled ? \"disabled\" : \"\" '>"
						+"<label>"
					    	+"<input type='radio' data-bind='attr: {id: $data.id, name: $parent.prefix, disabled: disabled}, textInput: $data.value' /> <span data-bind='text: $data.desc'><span>"
						+"</label>"
					+"</div>"
	  				+"<!-- /ko -->" 
	  			+"<!-- /ko -->"
            +"</div>"
	});

	// select
	ko.components.register('mt-select', {
		viewModel: function(params){
			params = params ? params : {};
			this.id = params.id ? params.id : "";
			this.data = params.data ? params.data : undefined;
			this.options = params.options ? params.options : [];
			this.label = params.label ? params.label : "";
			this.labelClass = params.labelClass ? params.labelClass : hcs.FORM_ELEMENT_LABEL_DEFAULT_CLASS;
			this.mainClass = params.mainClass ? params.mainClass : hcs.FORM_ELEMENT_MAIN_DEFAULT_CLASS;
			this.showLabel = (params.showLabel === true || params.showLabel === false) ? params.showLabel : true;
			this.disabled = (params.disabled === true || params.disabled === false) ? params.disabled : false;
		},
		template: 
			"<!-- ko if: showLabel -->"
            +"<label class='control-label' data-bind='text: label, css: labelClass, attr: {for: id}'></label>"
            +"<!-- /ko -->"
            +"<div data-bind='css: mainClass'>"
                +"<select class='form-control' data-bind='textInput: data, foreach: options, attr: {id: id, name: id}'>"
					+"<option data-bind='value: value, text: desc'></option>"
				+"</select>"
            +"</div>"
	});

	ko.components.register("mt-tab", {
		viewModel: function(params){
			var self = this;
			params = params ? params : {};
			this.tabs = params.tabs ? params.tabs : [];
			this.style = params.style ? params.style : "";
			this.type = params.type ? params.type : "nav-tabs";  // 1. ""  2. tab  3. pill  4. jet
			this.readyEvent = params.ready ? params.ready : undefined;
			var allFalse = true;
			for(var i=0; i<this.tabs.length; i++){
				if(this.tabs[i].active === true ){
					this.tabs[i].active = ko.observable(true);
					$(this.tabs[i].bodyId).addClass('mt-active');
				} else {
					this.tabs[i].active = ko.observable(false);
				}
				if(this.tabs[i].active === true){
					allFalse = false;
				}
			}
			if(allFalse && this.tabs.length > 0){
				this.tabs[0].active(true);
				$("#"+ this.tabs[0].bodyId).addClass('mt-active');
			}

			this.switchEvent = params.switchEvent ? params.switchEvent : function(data, event){
				for(var i=0; i<self.tabs.length; i++){
					self.tabs[i].active(false);
					$("#"+ self.tabs[i].bodyId).removeClass('mt-active');
				}
				data.active(true);
				$("#"+ data.bodyId).addClass('mt-active');
			};
		},
		template:
			"<!-- ko if: type === 'jet' -->"
			+"<div class='mt-tabs' data-bind='foreach: tabs'>"
				+"<a class='mt-tab' data-bind='text: name, click: $parent.switchEvent, attr: {id: id, style: $parent.style}, css: active() ? \"mt-active\" : \"\" '></a>"
			+"</div>"
			+"<!-- /ko -->"
			+"<!-- ko if: type !== 'jet' -->"
			+"<ul class='nav' data-bind='css: type, foreach: tabs'>"
				+"<li role='presentation' data-bind='css: active() ? \"active\" : \"\" ' '><a data-bind='text: name, click: $parent.switchEvent, attr: {id: id, style: $parent.style}'></a></li>"
			+"</ul>"
			+"<!-- /ko -->"
	});
	
	// it's not good to register a component for panel in such model.

	ko.components.register("mt-to-top", {
		viewModel: function(params){
			var self = this;
			params = params ? params : {};
			this.icon = params.icon ? params.icon : "icon-chevron-up";
			this.type = params.type ? params.type : "scroll";
			this.style = ko.observable(params.style ? params.style : "");
			this.label = params.label ? params.label : "";
			this.css = params.css ? params.css : "btn-default";

			var containerLeftCSS = $(".container").css('marginLeft');
			var containerWidthCSS = $(".container").css('width');
			var containerLeft = parseFloat(containerLeftCSS.substring(0, containerLeftCSS.length-2));
			var containerWidth = parseFloat(containerWidthCSS.substring(0, containerWidthCSS.length-2));
			var left = (containerLeft + containerWidth + 15) + "px";
			this.style("left: "+ left +";"+ this.style());
			window.onresize = function(){
				containerLeftCSS = $(".container").css('marginLeft');
				containerWidthCSS = $(".container").css('width');
				containerLeft = parseFloat(containerLeftCSS.substring(0, containerLeftCSS.length-2));
				containerWidth = parseFloat(containerWidthCSS.substring(0, containerWidthCSS.length-2));
				left = (containerLeft + containerWidth + 15) + "px";
				self.style(params.style ? params.style : "");
				self.style("left: "+ left +";"+ self.style());
			}
		},
		template: 
			"<a class='btn mt-to-top' href='#' data-bind='css: css, attr: {style: style}'>"
				+"<i data-bind='css: icon'></i> "
				+"<span data-bind='text: label'></span>"
			+"</a>"
	});
});