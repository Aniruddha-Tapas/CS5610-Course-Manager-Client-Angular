import {Routes, RouterModule } from '@angular/router';
import {WhiteBoardComponent } from './white-board/white-board.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {SectionListComponent} from './section-list/section-list.component';
import {AdminComponent} from './admin/admin.component';
import {QuizListComponent} from './quiz-list/quiz-list.component';
import {QuizComponent} from './quiz/quiz.component';
import {QuizSubmissionsComponent} from './quiz-submissions/quiz-submissions.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: WhiteBoardComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'course/:courseId', component: CourseViewerComponent },
  { path: 'course/:courseId/section', component: SectionListComponent },
  { path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent },
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent },
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: CourseViewerComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'quizzes', component: QuizListComponent},
  { path: 'quiz/:quizId', component: QuizComponent},
  { path: 'quiz/:quizId/submissions', component: QuizSubmissionsComponent},
  { path: '**', component: WhiteBoardComponent}
];
export const routing = RouterModule.forRoot(appRoutes);
