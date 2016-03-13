/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**************************************!*\
  !*** ./app/assets/frontend/main.jsx ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _AddQues = __webpack_require__(/*! ./components/AddQues */ 1);
	
	var _AddQues2 = _interopRequireDefault(_AddQues);
	
	var _QuesList = __webpack_require__(/*! ./components/QuesList */ 2);
	
	var _QuesList2 = _interopRequireDefault(_QuesList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Main = function (_React$Component) {
		_inherits(Main, _React$Component);
	
		function Main(props) {
			_classCallCheck(this, Main);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Main).call(this, props));
	
			_this.state = { questionList: [] };
			return _this;
		}
	
		_createClass(Main, [{
			key: "addQues",
			value: function addQues() {
				var _this2 = this;
	
				$.post("/question", { q_text: "aaas" }).success(function (saved_question) {
					var newQuestionList = _this2.state.questionList;
					newQuestionList.unshift(saved_question);
					_this2.setState({ questionList: newQuestionList });
					console.log("a new question added");
				}).error(function (error) {
					return console.log(error);
				});
			}
		}, {
			key: "componentDidMount",
			value: function componentDidMount() {
				var _this3 = this;
	
				$.ajax("/questions").success(function (data) {
					return _this3.setState({ questionList: data });
				}).error(function (error) {
					return console.log(error);
				});
			}
		}, {
			key: "render",
			value: function render() {
				return React.createElement(
					"div",
					{ className: "container" },
					React.createElement(_QuesList2.default, { questions: this.state.questionList }),
					React.createElement(_AddQues2.default, { addQuestion: this.addQues.bind(this) })
				);
			}
		}]);
	
		return Main;
	}(React.Component);
	
	var documentReady = function documentReady() {
		var reactNode = document.getElementById('react');
		if (reactNode) {
			ReactDOM.render(React.createElement(Main, null), reactNode);
		}
	};
	
	$(documentReady);

/***/ },
/* 1 */
/*!****************************************************!*\
  !*** ./app/assets/frontend/components/AddQues.jsx ***!
  \****************************************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var AddQues = function (_React$Component) {
		_inherits(AddQues, _React$Component);
	
		function AddQues() {
			_classCallCheck(this, AddQues);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(AddQues).apply(this, arguments));
		}
	
		_createClass(AddQues, [{
			key: 'addQuestion',
			value: function addQuestion(event) {
				event.preventDefault();
				this.props.addQuestion('4');
			}
		}, {
			key: 'render',
			value: function render() {
				return React.createElement(
					'div',
					null,
					React.createElement(
						'form',
						{ onSubmit: this.addQuestion.bind(this) },
						React.createElement(
							'button',
							{ type: 'submit' },
							' + Question '
						)
					)
				);
			}
		}]);
	
		return AddQues;
	}(React.Component);
	
	exports.default = AddQues;

/***/ },
/* 2 */
/*!*****************************************************!*\
  !*** ./app/assets/frontend/components/QuesList.jsx ***!
  \*****************************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Ques = __webpack_require__(/*! ./Ques */ 3);
	
	var _Ques2 = _interopRequireDefault(_Ques);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var QuesList = function (_React$Component) {
		_inherits(QuesList, _React$Component);
	
		function QuesList() {
			_classCallCheck(this, QuesList);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(QuesList).apply(this, arguments));
		}
	
		_createClass(QuesList, [{
			key: 'render',
			value: function render() {
				var questions_c = this.props.questions.map(function (ques) {
					return React.createElement(_Ques2.default, _extends({ key: ques.id }, ques));
				});
				return React.createElement(
					'div',
					null,
					React.createElement(
						'ul',
						null,
						questions_c
					)
				);
			}
		}]);
	
		return QuesList;
	}(React.Component);
	
	exports.default = QuesList;

/***/ },
/* 3 */
/*!*************************************************!*\
  !*** ./app/assets/frontend/components/Ques.jsx ***!
  \*************************************************/
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Ques = function (_React$Component) {
		_inherits(Ques, _React$Component);
	
		function Ques() {
			_classCallCheck(this, Ques);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(Ques).apply(this, arguments));
		}
	
		_createClass(Ques, [{
			key: "render",
			value: function render() {
				return React.createElement(
					"li",
					null,
					React.createElement(
						"div",
						null,
						" ",
						this.props.question_text,
						" "
					),
					React.createElement(
						"div",
						null,
						" Question type => ",
						this.props.question_type,
						" "
					)
				);
			}
		}]);
	
		return Ques;
	}(React.Component);
	
	exports.default = Ques;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map