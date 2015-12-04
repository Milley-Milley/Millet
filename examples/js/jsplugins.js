requirejs.config({
	baseUrl: "../",
	paths: {
		"jquery": "jquery/jquery-1.11.3", 
		"jqueryform": "jquery-form/jquery.form",
		"jqueryui": "jquery-ui/jquery-ui.min",
		"bootstrap": "bootstrap/js/bootstrap", 
		"knockout": "knockout/knockout",
		"millet": "Millet/js/millet-base",
		"HCS": "examples/js/hcs"
	},
	shim: {
		"jqueryform": {
			deps: ["jquery"]
		},
		"jqueryui": {
			deps: ["jquery"]
		},
		"bootstrap": {
			deps: ["jquery"]
		},
	}
});


require(["jquery", "bootstrap", "knockout", "millet", "HCS"], function($, bs, ko, mt, hcs){
	var mainJS = function(){
		var self = this;
		this.HCS = hcs;
		
	};

	ko.applyBindings(new mainJS());
});