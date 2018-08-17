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

  /*
  findSubmissionsForStudent = studentId => {
    this.service.findSubmissionsForStudent(studentId)
      .then(submissions => {
        this.submissions = submissions;
      });
  }

  showSubmission = (submissionId) => {

    this.service.findSubmissionById(submissionId, this.quizId)
      .then(submission => this.submission = submission)
      .then(() => this.populateQuestionAnswer(this.submission));
  }

  createAnswerMap = (answer, question) => {

    console.log('createAnswerMap', answer, question);
    switch (question.questionType) {

      case 'MULTIPLE_CHOICE':
        let correctAns = '';
        question.choices.map(choice => {
          if (choice.correct === true) {
            correctAns = choice.text;
            return;
          }
        });
        return {
          userAnswer: question.choices[answer.multipleChoiceAnswer].text,
          correctAnswer: correctAns,
          points: (question.choices[answer.multipleChoiceAnswer].text === correctAns) ? question.points : 0
        };

      case 'FILL_BLANK':
        const keys = Object.keys(answer.fillBlanksAnswer);
        const userAnsArr = [];
        const correctAnsArr = [];
        keys.map(key => {
          userAnsArr.push(answer.fillBlanksAnswer[key]);
        });
        question.blanks.map(blank => {
          if (blank.indexOf('*') === 0) {
            correctAnsArr.push(blank.split('=')[1]);
          }
        });
        return {
          userAnswer: userAnsArr,
          correctAnswer: correctAnsArr,
          points: (userAnsArr.length === correctAnsArr.length) ? question.points : 0
        };

      case 'ESSAY':
        return {
          userAnswer: answer.essayAnswer,
          correctAnswer: 'Mes que un club',
          points: (answer.essayAnswer === 'Mes que un club') ? question.points : 0
        };
      case 'TRUE_FALSE':
        const tf_ans = {
          userAnswer: answer.trueFalseAnswer,
          correctAnswer: question.isTrue,
          points: (answer.trueFalseAnswer === question.isTrue) ? question.points : 0
        };
        return tf_ans;
    }
  };

  populateQuestionAnswer = submission => {
    this.questionAnswer = [];
    this.finalStudentScore = 0;
    this.finalQuizScore = 0;
    submission.answers.map((answer, index) => {
      const answerMap = this.createAnswerMap(answer, submission.quiz.questions[index]);
      this.questionAnswer.push({
        question: submission.quiz.questions[index],
        userAnswer: answerMap.userAnswer,
        correctAnswer: answerMap.correctAnswer,
        totalPoints: submission.quiz.questions[index].points,
        scoredPoints: answerMap.points
      });
      this.finalStudentScore += answerMap.points;
      this.finalQuizScore += submission.quiz.questions[index].points;
    });
  };*/

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.quizId = params['quizId'];
      this.findSubmissionsForStudent(this.quizId);
    });
  }
}
