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
		this.description = ko.observable('');
		this.datetime = ko.observable('');
		
		this.hobbies = ko.observable('');
		this.singing = ko.observable(false);
		this.dancing = ko.observable(false);
		this.sports = ko.observable(false);
		this.shopping = ko.observable(false);
		this.climbing = ko.observable(false);
		this.painting = ko.observable(false);
		this.eating = ko.observable(false);
		this.reading = ko.observable(false);
		this.hobbyList = [{
			desc: self.HCS.SINGING_LABEL, value: self.singing, disabled: true },{
			desc: self.HCS.DANCING_LABEL, value: self.dancing, disabled: false },{
			desc: self.HCS.SPORTS_LABEL, value: self.sports },{
			desc: self.HCS.SHOPPING_LABEL, value: self.shopping },{
			desc: self.HCS.CLIMBING_LABEL, value: self.climbing },{
			desc: self.HCS.PAINGTING_LABEL, value: self.painting },{
			desc: self.HCS.EATING_LABEL, value: self.eating },{
			desc: self.HCS.READING_LABEL, value: self.reading
		}];

		this.grade = ko.observable('');
		this.gradeOne = ko.observable(false);
		this.gradeTwo = ko.observable(false);
		this.gradeThree = ko.observable(false);
		this.gradeFout = ko.observable(false);
		this.gradeList = [{
			desc: self.HCS.GRADE_ONE_LABEL, value: self.gradeOne },{
			desc: self.HCS.GRADE_TWO_LABEL, value: self.gradeTwo },{
			desc: self.HCS.GRADE_THREE_LABEL, value: self.gradeThree, disabled: true },{
			desc: self.HCS.GRADE_FOUR_LABEL, value: self.gradeFour, disabled: false 
		}];

		this.hobbies1 = ko.observable('');
		this.singing1 = ko.observable(false);
		this.dancing1 = ko.observable(false);
		this.sports1 = ko.observable(false);
		this.shopping1 = ko.observable(false);
		this.climbing1 = ko.observable(false);
		this.hobbyList1 = [{
			desc: self.HCS.SINGING_LABEL, value: self.singing1 },{
			desc: self.HCS.DANCING_LABEL, value: self.dancing1 },{
			desc: self.HCS.SPORTS_LABEL, value: self.sports1 },{
			desc: self.HCS.SHOPPING_LABEL, value: self.shopping1, disabled: true },{
			desc: self.HCS.CLIMBING_LABEL, value: self.climbing1, disabled: false
		}];

		this.grade1 = ko.observable('');
		this.gradeOne1 = ko.observable(false);
		this.gradeTwo1 = ko.observable(false);
		this.gradeThree1 = ko.observable(false);
		this.gradeFout1 = ko.observable(false);
		this.gradeList1 = [{
			desc: self.HCS.GRADE_ONE_LABEL, value: self.gradeOne1 },{
			desc: self.HCS.GRADE_TWO_LABEL, value: self.gradeTwo1, disabled: true },{
			desc: self.HCS.GRADE_THREE_LABEL, value: self.gradeThree1, disabled: false },{
			desc: self.HCS.GRADE_FOUR_LABEL, value: self.gradeFour1 
		}];

		self.country = ko.observable('');
		self.countryOptions = [{
			desc: self.HCS.CHINA_LABEL, value: '1' },{
			desc: self.HCS.JAPAN_LABEL, value: '2' },{
			desc: self.HCS.AMERICA_LABEL, value: '3' },{
			desc: self.HCS.CANADA_LABEL, value: '4' },{
			desc: self.HCS.INDIA_LABEL, value: '5' 
		}];

		self.tabs = [{
			name: self.HCS.STUDENT_TAB_LABEL, id: 'student-tab', bodyId: 'student-tab-body' },{
			name: self.HCS.TEACHER_TAB_LABEL, id: 'teacher-tab', bodyId: 'teacher-tab-body' },{
			name: self.HCS.WORKER_TAB_LABEL, id: 'worker-tab', bodyId: 'worker-tab-body'
		}];

		self.tabs1 = [{
			name: self.HCS.STUDENT_TAB_LABEL, id: 'student-tab-1', bodyId: 'student-tab-body-1' },{
			name: self.HCS.TEACHER_TAB_LABEL, id: 'teacher-tab-1', bodyId: 'teacher-tab-body-1' },{
			name: self.HCS.WORKER_TAB_LABEL, id: 'worker-tab-1', bodyId: 'worker-tab-body-1'
		}];

		self.tabs2 = [{
			name: self.HCS.STUDENT_TAB_LABEL, id: 'student-tab-2', bodyId: 'student-tab-body-2' },{
			name: self.HCS.TEACHER_TAB_LABEL, id: 'teacher-tab-2', bodyId: 'teacher-tab-body-2' },{
			name: self.HCS.WORKER_TAB_LABEL, id: 'worker-tab-2', bodyId: 'worker-tab-body-2'
		}];

		self.tabs3 = [{
			name: self.HCS.STUDENT_TAB_LABEL, id: 'student-tab-3', bodyId: 'student-tab-body-3' },{
			name: self.HCS.TEACHER_TAB_LABEL, id: 'teacher-tab-3', bodyId: 'teacher-tab-body-3' },{
			name: self.HCS.WORKER_TAB_LABEL, id: 'worker-tab-3', bodyId: 'worker-tab-body-3'
		}];
	};

	ko.applyBindings(new mainJS());
});