requirejs.config({
	baseUrl: "../",
	paths: {
		"jquery": "jquery/jquery-1.11.3", 
		"jqueryform": "jquery-form/jquery.form",
		"jqueryui": "jquery-ui/jquery-ui.min",
		"bootstrap": "bootstrap/js/bootstrap", 
		"knockout": "knockout/knockout",
		"millet": "Millet/js/millet-base",
		"milletHCS": "Millet/js/millet-hcs",
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


require(["jquery", "bootstrap", "knockout", "millet", "milletHCS"], function($, bs, ko, mt, hcs){
	var mainJS = function(){
		this.HCS = hcs;
		
	};

	ko.applyBindings(new mainJS());
});