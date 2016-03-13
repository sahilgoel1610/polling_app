import Ques from './Ques'

export default class QuesList extends React.Component{
	
	render () {
		let questions_c = this.props.questions.map(ques => <Ques key = {ques.id} {...ques}/>);
		return(
					<div> 
						<ul> 
							{questions_c}
						</ul>
					</div>
		);
	}
}