requirejs.config({
	paths: {
		"milletHCS": "hcs",
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

	// 每个column都需要规定 header style dataType(number/string)
	ko.components.register("mt-table", {
		viewModel: function(params){
			this.data = params.data ? prams.data : [];
			this.columns = params.columns ? params.columns : [];
			this.colNum = this.columns.length;
			this.loadingMessage = params.loadingMessage ? params.loadingMessage : hcs.LOADING_STR;
			this.emptyMessage = params.emptyMessage ? params.emptyMessage : hcs.NO_DATA_STR;
		},
		template: 
            "<thead>"
                +"<tr data-bind='foreach: columns'>"
					+"<th data-bind="text: label"></th>"
                +"</tr>"
            +"</thead>"
            +"<tbody>"
                +"<tr>"
                    <td>No. 3</td><td>Snow</td><td>White</td><td>Miss Princess</td><td>21</td>
                +"</tr>"
            +"</tbody>"
	});
});