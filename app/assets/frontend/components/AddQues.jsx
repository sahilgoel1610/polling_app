export default class AddQues extends React.Component{
	
	addQuestion(event){
		event.preventDefault();
		this.props.addQuestion('4');

	}

	render () {
		return (
			<div>
				<form onSubmit = {this.addQuestion.bind(this)}>
					<button type = 'submit'> + Question </button>
				</form>
			</div>
			);
	}
}