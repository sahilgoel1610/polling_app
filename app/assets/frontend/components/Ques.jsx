export default class Ques extends React.Component{
	render () {
		return(
			<li>
				<div> {this.props.question_text} </div>
				<div> Question type => {this.props.question_type} </div>
				</li>
		);
	}
}