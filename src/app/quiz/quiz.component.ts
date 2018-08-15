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

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.quizId = params['quizId']);
    this.service.findQuizById(this.quizId)
      .then(quiz => this.quiz = quiz);
  }

}
