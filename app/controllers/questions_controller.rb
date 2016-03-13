class QuestionsController < ApplicationController
	def index
		render json: Question.order(:created_at => :desc).all
	end

	def create
		question = Question.create(:user_id => current_user.id, :question_text => params[:q_text])
		render json: question
	end
end