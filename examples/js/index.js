requirejs.config({
	baseUrl: "../",
	paths: {
		"jquery": "jquery/jquery-1.11.3", 
		"jqueryform": "jquery-form/jquery.form",
		"jqueryui": "jquery-ui/jquery-ui.min",
		"bootstrap": "bootstrap/js/bootstrap", 
		"knockout": "knockout/knockout",
		"millet": "Millet/js/millet-base",
		"HCS": "examples/js/hcs",
		"tableData": "examples/js/data/table-data"
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


require(["jquery", "bootstrap", "knockout", "millet", "HCS", "tableData"], function($, bs, ko, mt, hcs, td){
	var mainJS = function(){
		this.HCS = hcs;
		this.TD = td;
		
		this.clickEvent = function(){
			console.log("click: " + (new Date()).toString());
		};

		this.userColumns = [{
			header
		}, {

		}, {

		}];
	};

	ko.applyBindings(new mainJS());
});