import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
              private service: QuizServiceClient) {
  }

  quizId = '';
  quiz = {title: '', questions: []};

  submitQuiz = quiz =>
    this.service
      .submitQuiz(quiz)
      .then(submission => console.log(submission))

  loadQuestions(quizId) {
    this.service.findQuizById(quizId)
      .then(quiz => this.quiz = quiz[0]);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.quizId = params['quizId']);
    console.log('This', this.quizId);
    this.loadQuestions(this.quizId);
  }

}
