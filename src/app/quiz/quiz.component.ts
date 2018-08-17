import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private route: Router,
              private activatedRoute: ActivatedRoute,
              private service: QuizServiceClient) {
  }

  quizId = '';
  quiz = {
    title: '',
    questions: [],
    timestamp: ''
  };

  submitQuiz(quiz) {
    this.quiz.timestamp = Date();
    alert('Quiz Submitted');
    this.service
      .submitQuiz(quiz)
      .then(submission => {
        console.log(submission);
        this.route.navigate(['/', 'home']);
      });
  }

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
