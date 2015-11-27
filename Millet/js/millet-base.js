requirejs.config({
	baseUrl: "../",
	paths: {
		"milletHCS": "Millet/js/millet-hcs",
	}
});

define(['jquery', 'knockout', 'milletHCS'], function($, ko, hcs){

	ko.components.register("mt-icon-btn", {
		viewModel: function(params){
			this.type = params.type ? params.type : 'btn-default';
			this.icon = params.icon ? params.icon : '';
			this.label = params.label ? params.label : '';
			this.disabled = ( params.disabled === true || params.disabled === false) ? params.disabled : false;
			this.href = params.href ? params.href : undefined;
			this.clickEvent = params.clickEvent ? params.clickEvent : undefined;
			if(this.clickEvent === undefined && this.href){
				this.clickEvent = function(){
					if(params.newpage || params.newpage === false){
						window.location.href = this.href;
					} else {
						window.open(this.href);
					}
				}
			}
		},
		template: 
			"<button class='btn' data-bind='css: type, click: clickEvent, attr: {disabled: disabled}'>"
				+"<i data-bind='css: icon'></i> "
				+"<span data-bind='text: label'></span>"
			+"</button>"
	});

	ko.components.register("mt-a", {
		viewModel: function(params){
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
			this.id = params.id ? params.id : "";
			this.data = params.data ? params.data : undefined;
			this.type = params.type ? params.type : "input";
			this.placeholder = params.placeholder ? params.placeholder : "";
			this.label = params.label ? params.label : "";
			this.labelClass = params.labelClass ? params.labelClass : "col-sm-2";
			this.mainClass = params.mainClass ? params.mainClass : "col-sm-10";
			this.showLabel = (params.showLabel === true || params.showLabel === false) ? params.showLabel : true;
			this.disabled = (params.disabled === true || params.disabled === false) ? params.disabled : false;
		},
		template: 
			"<!-- ko if: showLabel -->"
            +"<label class='control-label' data-bind='text: label, css: labelClass, attr: {for: id}'></label>"
            +"<!-- /ko -->"
            +"<div data-bind='css: mainClass'>"
                +"<input class='form-control' data-bind='textInput: data, attr: {type: type, id: id, placeholder: placeholder, disabled: disabled}'>"
            +"</div>"
	});

	// textarea

	// checkbox group

	// radio group

	// select

	//
});