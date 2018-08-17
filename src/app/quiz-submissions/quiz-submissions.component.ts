import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-quiz-submissions',
  templateUrl: './quiz-submissions.component.html',
  styleUrls: ['./quiz-submissions.component.css']
})
export class QuizSubmissionsComponent implements OnInit {

  constructor(private service: QuizServiceClient,
              private userService: UserServiceClient,
              private route: ActivatedRoute) {
  }

  currentUser = {
    id: ''
  };
  sub = [];
  quiz = {
    title: ''
  };
  search = '';

  quizId = '';
  submissions = [];
  submission = {};
  questionAnswer = [];
  finalStudentScore = 0;
  finalQuizScore = 0;

  findSubmissionsForStudent(quizId) {
    this.service.findQuizById(quizId)
      .then(quiz => this.quiz = quiz);
    this.userService.profile()
      .then(user => {
        this.currentUser.id = user._id;
        if (user.username.localeCompare('admin') !== 0) {
          this.service.findSubmissionsForStudent(quizId, this.currentUser.id)
            .then((submissions) => {
              this.submissions = submissions;
              this.sub = submissions;
            });
        } else {
          this.service.findAllSubmissionsForQuiz(quizId)
            .then((submissions) => {
              this.submissions = submissions;
              this.sub = submissions;
            });
        }
      });
  }

  filterResults(newValue) {
    this.search = newValue;
    this.sub = this.submissions.filter((s) => {
      if (s.student.username.toString().startsWith(this.search)) {
        return true;
      } else {
        return false;
      }
    });
    console.log(this.sub);
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.quizId = params['quizId'];
      this.findSubmissionsForStudent(this.quizId);
    });
  }
}
