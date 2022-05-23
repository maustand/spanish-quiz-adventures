require 'csv'

class QuestionsController < ApplicationController
#  before_action :set_question, only: %i[ show update destroy ]

  # GET /questions
  def index
    questions_list = []
    csv_path = File.expand_path('../../../vendor/words.csv', __FILE__)
    
    CSV.foreach(csv_path, headers: true, col_sep: ',' ) do |row|
      item_hash = {
        'id': row['id'],
        'question': row['question'],
        'img': row['img'],
        'answer': row['answer'],
        'options': [
          row['option1'],
          row['option2']
        ]
      }

      questions_list.push(item_hash)
    end
    
    render json: questions_list
  end

end
