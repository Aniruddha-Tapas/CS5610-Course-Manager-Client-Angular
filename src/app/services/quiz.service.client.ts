import {Injectable} from '@angular/core';

// const NODE_SERVER_URL = 'https://cs5610-whiteboard-server-node.herokuapp.com/';
const NODE_SERVER_URL = 'http://localhost:3000/';

@Injectable()
export class QuizServiceClient {

  findAllQuizzes = () =>
    fetch(NODE_SERVER_URL + 'api/quiz')
      .then(response => response.json());

  createQuiz = quiz =>
    fetch(NODE_SERVER_URL + 'api/quiz', {
      method: 'post',
      body: JSON.stringify(quiz),
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(response => response.json());


  updateQuiz = (quizId, quiz) => {};
  deleteQuiz = quizId => {};

  findQuizById = quizId =>
    fetch(NODE_SERVER_URL + 'api/quiz/' + quizId)
      .then(response => response.json())

}
