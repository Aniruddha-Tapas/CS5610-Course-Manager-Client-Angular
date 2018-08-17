import {Component, OnInit} from '@angular/core';
import {QuizServiceClient} from '../services/quiz.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-quiz-list',
  templateUrl: './quiz-list.component.html',
  styleUrls: ['./quiz-list.component.css']
})
export class QuizListComponent implements OnInit {
  quizzes = [];
  currentUser = {username: ''};

  constructor(private service: QuizServiceClient,
              private userService: UserServiceClient) {
  }

  loadQuizzes() {
    this.service.findAllQuizzes()
      .then(quizzes => this.quizzes = quizzes);
  }

  getCurrentUser() {
    this.userService.profile()
      .then(user => this.currentUser = user);
    this.userService.profile()
      .then(user => console.log('Current User', user));
  }

  ngOnInit() {
    this.loadQuizzes();
    this.getCurrentUser();
  }
}
