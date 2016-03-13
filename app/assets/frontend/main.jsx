import AddQues from "./components/AddQues";
import QuesList from "./components/QuesList";




class Main extends React.Component{
	constructor(props){
		super(props);
		this.state = { questionList: []};
	}

	addQues(){
		$.post("/question", { q_text: "aaas"})
		.success(saved_question => {
			let newQuestionList = this.state.questionList;
			newQuestionList.unshift(saved_question);
			this.setState( {questionList: newQuestionList});
			console.log("a new question added");	
		})
		.error(error => console.log(error));
		
	}

	componentDidMount(){
		$.ajax("/questions")
		.success(data => this.setState({questionList: data}))
		.error(error => console.log(error));

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
	let reactNode = document.getElementById('react');
	if(reactNode)
	{ 
		ReactDOM.render(<Main />, reactNode);
	}
};

$(documentReady);
