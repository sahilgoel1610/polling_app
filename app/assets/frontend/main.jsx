import AddQues from "./components/AddQues";
import QuesList from "./components/QuesList";




class Main extends React.Component{
	constructor(props){
		super(props);
		this.state = { questionList: []};
	}

	addQues(){
		let newQuestionList = this.state.questionList;
		newQuestionList.unshift({id: Date.now(), body: 'a new question'});
		this.setState( {questionList: newQuestionList});
		console.log("hey");
	}
	render() {
		return ( 
			<div className = "container">
				<QuesList questions={this.state.questionList} /> 
				<AddQues addQuestion = {this.addQues.bind(this)}/>
			</div>
		);
	}
}



let documentReady = () => {
	ReactDOM.render(
		<Main />,
		document.getElementById('react')
		);

};

$(documentReady);
