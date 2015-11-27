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
		var self = this;
		this.HCS = hcs;
		this.TD = td;

		this.clickEvent = function(){
			console.log("click: " + (new Date()).toString());
		};

		this.exampleTableData = ko.observableArray(self.TD.users1);
		this.changeExampleData1 = function(){
			self.exampleTableData(self.TD.users1);
		};
		this.changeExampleData2 = function(){
			self.exampleTableData(self.TD.users2);
		};
		this.changeExampleData3 = function(){
			self.exampleTableData(self.TD.users3);
		};

		this.userColumns = [{
			id: 'id', header: self.HCS.ID_STR }, {
			id: 'firstName', header: self.HCS.FIRST_NAME_STR }, {
			id: 'lastName', header: self.HCS.LAST_NAME_STR }, {
			id: 'userName', header: self.HCS.USER_NAME_STR, style: "text-align: right; color: #aaa;" }, {
			id: 'age', header: self.HCS.AGE_STR
		}];

		this.userName = ko.observable('Milley Shu');
		this.email = ko.observable('');
		this.password = ko.observable('');
	};

	ko.applyBindings(new mainJS());
});