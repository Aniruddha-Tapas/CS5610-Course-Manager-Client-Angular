import {Injectable} from '@angular/core';

const QUIZ_API_URL = 'https://cs5610-whiteboard-server-node.herokuapp.com';

@Injectable()
export class QuizServiceClient {

  findAllQuizzes = () =>
    fetch(QUIZ_API_URL + '/api/quiz')
      .then(response => response.json())

  createQuiz = quiz =>
    fetch(QUIZ_API_URL + '/api/quiz', {
      method: 'post',
      body: JSON.stringify(quiz),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json())


  updateQuiz = (quizId, quiz) => {};
  deleteQuiz = quizId => {};

  findQuizById = quizId =>
    fetch(QUIZ_API_URL + '/api/quiz/' + quizId)
      .then(response => response.json())

}
