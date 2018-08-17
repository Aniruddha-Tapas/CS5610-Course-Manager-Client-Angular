import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuizServiceClient} from '../services/quiz.service.client';
import {UserServiceClient} from '../services/user.service.client';

@Component({
  selector: 'app-quiz-answers',
  templateUrl: './quiz-answers.component.html',
  styleUrls: ['./quiz-answers.component.css']
})
export class QuizAnswersComponent implements OnInit {


  constructor(private router: ActivatedRoute,
              private userService: UserServiceClient,
              private quizService: QuizServiceClient) {
    this.router.params.subscribe(params => this.getParams(params));
  }

  sid = '';
  answers = [];
  quiz = {title: ''};
  totalPoints = 0;
  question = {questionType: ''};

  getParams(params) {
    this.quizService.findSubmissionById(params['quizId'], params['submissionId'])
      .then(sub => {
          console.log(sub);
          this.answers = sub.answers;
          this.quiz = sub.quiz;

          for (let i = 0; i < this.answers.length; i++) {
            const currentAnswer = this.answers[i];
            switch (currentAnswer.question.questionType) {

              case 'MULTIPLE_CHOICE':
                this.answers[i]['correct_answer'] = 0;
                break;

              case 'TRUE_FALSE':
                this.answers[i]['correct_answer'] = true;
                break;

              case 'ESSAY':
                this.answers[i]['correct_answer'] = 'Mes que un club';
                break;

              case 'FILL_BLANK':
                this.answers[i]['correct_answer'] = [{variable1: 'Barca', variable2: 'Catalunya'}];
                break;
            }
          }

          for (let i = 0; i < this.answers.length; i++) {
            const currentAnswer = this.answers[i];
            this.answers[i]['grade'] = 0;
            switch (currentAnswer.question.questionType) {

              case 'MULTIPLE_CHOICE':
                if (this.answers[i]['correct_answer'] === this.answers[i].multipleChoiceAnswer) {
                  this.answers[i]['grade'] = this.answers[i].question.points;
                }
                this.totalPoints += this.answers[i]['grade'];
                break;

              case 'FILL_BLANK':
                if (this.answers[i]['correct_answer'][0].variable1 === this.answers[i].fillBlanksAnswer[0].variable1 &&
                  this.answers[i]['correct_answer'][0].variable2 === this.answers[i].fillBlanksAnswer[0].variable2) {
                  this.answers[i]['grade'] = this.answers[i].question.points;
                }
                this.totalPoints += this.answers[i]['grade'];
                break;

              case 'ESSAY':
                if (this.answers[i]['correct_answer'] === this.answers[i].essayAnswer) {
                  this.answers[i]['grade'] = this.answers[i].question.points;
                }
                this.totalPoints += this.answers[i]['grade'];
                break;

              case 'TRUE_FALSE':
                if (this.answers[i]['correct_answer'] === this.answers[i].trueFalseAnswer) {
                  this.answers[i]['grade'] = this.answers[i].question.points;
                }
                this.totalPoints += this.answers[i]['grade'];
                break;
            }
          }
        }
      );
  }

  ngOnInit() {
  }

}
