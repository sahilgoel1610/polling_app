class CreateQuestions < ActiveRecord::Migration[5.0]
  def change
    create_table :questions do |t|
    	t.integer :user_id
    	t.text :question_text
    	t.integer :question_type
    	t.timestamps
    end
  end
end
